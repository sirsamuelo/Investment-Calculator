import { useState, useEffect,useReducer } from 'react';
import dotaznik from '../sample.js';
import Checkbox from './Checkbox.jsx';
import { Line} from 'rc-progress';

const Questionaire = ({pullData}) => {
	const [isChecked, setIsChecked] = useState([]);
	const [opened,setOpened] = useState(false);
	
	const initialState = {
		slideIndex : 0
	}

	const questionsReducer = (state,event) => {
		if(event.type === 'NEXT') {
			if(state.slideIndex === 9) {
				return {...state}
			};
			return {
				...state,
				slideIndex: state.slideIndex + 1
			}
		}
	}

	const [state,dispatch] = useReducer(questionsReducer, initialState)


	useEffect(() => {
		setIsChecked(dotaznik);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setOpened(true);
	};

	function myCheckboxFunction(e, id, indexInArray) {
		const checked = e.target.checked;
		if (checked) {
			const updateCheckedState = isChecked.map((item, index) => {
				if (indexInArray === index) {
					let poleMoznosti = item.moznosti;
					poleMoznosti.forEach((moznost) => {
						if (moznost.id === id) {
							console.log(moznost);
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
					poleMoznosti.forEach((moznost) => {
						if (moznost.id === id) {
							console.log(moznost);
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
	function functionToDisable() {}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="questions__container">
					{
						isChecked && isChecked.map((item,index) => {
							if(index === state.slideIndex) {
								const {id,question,moznosti} = item
								let [a,b,c,d,e] = moznosti
								console.log(state.slideIndex)
								return <div key={index}>
											<Line percent={id * 10} strokeWidth={1} strokeColor="#0065ad" />
											<div className='questionHeading'>{question}</div>
											<div className="moznosti">
												<Checkbox label={a.a} onChange={(e) => myCheckboxFunction(e, a.id, index)}/>
												<Checkbox label={b.b} onChange={(e) => myCheckboxFunction(e, b.id, index)}/>
												{c && <Checkbox label={c.c} onChange={(e) => myCheckboxFunction(e, c.id, index)}/>}
												{d && <Checkbox label={d.d} onChange={(e) => myCheckboxFunction(e, d.id, index)}/>}
												{e && <Checkbox label={e.e} onChange={(e) => myCheckboxFunction(e, e.id, index)}/>}
											</div>
										</div>
							}
						})
					}
					<button className='next' onClick={() => dispatch({ type: "NEXT" })}>Next</button>
				</div>
				{/* <div className='questions'>
					{isChecked &&
            isChecked.map((itemInDotaznik, index) => {
            	const { moznosti, question } = itemInDotaznik;
            	const [a, b, c, d, ee] = moznosti;
            	return (
            		<div key={index} className='question__container'>
            			<div className='question'>{question}</div>
            			<Checkbox
            				label={a.a}
            				onChange={(e) => myCheckboxFunction(e, a.id, index)}
            				disabled={functionToDisable()}
            			/>
            			<Checkbox
            				label={b.b}
            				onChange={(e) => myCheckboxFunction(e, b.id, index)}
            				disabled={functionToDisable()}
            			/>
            			{c && (
            				<Checkbox
            					label={c.c}
            					onChange={(e) => myCheckboxFunction(e, c.id, index)}
            					disabled={functionToDisable()}
            				/>
            			)}
            			{d && (
            				<Checkbox
            					label={d.d}
            					checked={d.selected}
            					onChange={(e) => myCheckboxFunction(e, d.id, index)}
            					disabled={functionToDisable()}
            				/>
            			)}

            			{ee && (
            				<Checkbox
            					label={ee.e}
            					checked={ee.selected}
            					onChange={(e) => myCheckboxFunction(e, ee.id, index)}
            					disabled={functionToDisable()}
            				/>
            			)}
            		</div>
            	);
            })}
					{opened && <Modal pullData={pullData} />}
				</div>
				<button className='btn-submit' type='submit'>
          Save
				</button> */}
			</form>
		</div>
	);
};

export default Questionaire;
