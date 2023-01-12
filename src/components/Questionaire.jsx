import { useState, useEffect, useReducer } from 'react';
import dotaznik from '../sample.js';
import Checkbox from './Checkbox.jsx';
import TransitionsModal from './TransitionsModal.jsx';
import { Line } from 'rc-progress';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const Questionaire = ({onData}) => {
	const [isChecked, setIsChecked] = useState([]);
	const [count, setCount] = useState(0);

	onData(count);
	const initialState = {
		slideIndex: 0,
		submited: false,
		isChecked: dotaznik,
	};

	const questionsReducer = (state, event) => {
		if (event.type === 'CHECK') {
			return {
				...state,
				slideIndex: 0,
			};
		}
		if (event.type === 'NEXT') {
			if (state.slideIndex === 9) {
				return { ...state, submited: true };
			}
			return {
				...state,
				slideIndex: state.slideIndex + 1,
			};
		}
		if (event.type === 'OPEN') {
			return {
				...state,
				opened: true,
			};
		}
	};

	const [state, dispatch] = useReducer(questionsReducer, initialState);

	useEffect(() => {
		setIsChecked(dotaznik);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setCount(getExpectedReturn());
	};

	function getExpectedReturn() {
		var count = 0;
		for (let i = 0; i < isChecked.length; i++) {
			for (let j = 0; j < isChecked[i].moznosti.length; j++) {
				if (isChecked[i].moznosti[j].selected === true) {
					count = count + isChecked[i].moznosti[j].value;
				}
			}
		}
		return count;
	}

	function myCheckboxFunction(e, id, indexInArray) {
		const checked = e.target.checked;
		if (checked) {
			const updateCheckedState = isChecked.map((item, index) => {
				if (indexInArray === index) {
					item.selected = true;
					let poleMoznosti = item.moznosti;
					poleMoznosti.forEach((moznost) => {
						if (moznost.id === id) {
							moznost.selected = true;
							return moznost.selected;
						}
					});
				}
				return item;
			});
			setIsChecked(updateCheckedState);
		} else {
			const updateCheckedState = isChecked.map((item, index) => {
				if (indexInArray === index) {
					let poleMoznosti = item.moznosti;
					item.selected = false;
					poleMoznosti.forEach((moznost) => {
						if (moznost.id === id) {
							moznost.selected = false;
							return moznost.selected;
						}
					});
				}
				return item;
			});
			setIsChecked(updateCheckedState);
		}
	}
	function functionToDisable(moznostId, otazkaId) {
		for (let i = 0; i < isChecked.length; i++) {
			if (i === otazkaId && isChecked[i].selected === true) {
				let [a, b, c, d, e] = isChecked[i].moznosti;
				console.log(moznostId);
				switch (moznostId) {
					case 1:
						return !a.selected;
					case 2:
						return !b.selected;
					case 3:
						return !c.selected;
					case 4:
						return !d.selected;
					case 5:
						return !e.selected;
				}
			}
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='questions__container'>
					{isChecked &&
						isChecked.map((item, index) => {
							if (index === state.slideIndex) {
								const { question, moznosti } = item;
								let [a, b, c, d, e] = moznosti;
								return (
									<div key={index}>
										<Line
											percent={(state.slideIndex + 1) * 10}
											strokeWidth={1}
											strokeColor='#0065ad'
										/>
										<div className='questionHeading'>{question}</div>
										<div className='moznosti'>
											<Checkbox
												label={a.a}
												onChange={(e) => myCheckboxFunction(e, a.id, index)}
												disabled={functionToDisable(a.id, index)}
											/>
											<Checkbox
												label={b.b}
												onChange={(e) => myCheckboxFunction(e, b.id, index)}
												disabled={functionToDisable(b.id, index)}
											/>
											{c && (
												<Checkbox
													label={c.c}
													onChange={(e) => myCheckboxFunction(e, c.id, index)}
													disabled={functionToDisable(c.id, index)}
												/>
											)}
											{d && (
												<Checkbox
													label={d.d}
													onChange={(e) => myCheckboxFunction(e, d.id, index)}
													disabled={functionToDisable(d.id, index)}
												/>
											)}
											{e && (
												<Checkbox
													label={e.e}
													onChange={(e) => myCheckboxFunction(e, e.id, index)}
													disabled={functionToDisable(e.id, index)}
												/>
											)}
										</div>
									</div>
								);
							}
						})}

					<Button
						variant='contained'
						endIcon={state.slideIndex !== 9 ? <ArrowRightAltIcon /> : <DoneOutlinedIcon /> }
						onClick={() => dispatch({ type: 'NEXT' })}
						type={state.submited === true ? 'submit' : 'button'}
					>
						{state.slideIndex === 9 ? 'Submit' : 'Next'}
						{/* {getCount() && state.slideIndex === 9 && <button onClick={() => dispatch({ type: 'CHECK' })}>Start Again</button>} */}
					</Button>
				</div>
			</form>
			{state.submited && (
				<TransitionsModal opened={state.submited} count={count} />
			)}
		</div>
	);
};

export default Questionaire;
