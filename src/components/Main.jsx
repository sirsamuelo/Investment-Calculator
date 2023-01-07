import { useState } from 'react';
import PropTypes from 'prop-types';
import MyResponsiveLine from './MyResponsiveLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEuroSign,
	faPercent,
	faCalendarDays,
	faClock,
	faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import Questionaire from './Questionaire';
import { Link } from 'react-router-dom';

const Main = () => {
	const [startingBalance, setStartingBalance] = useState(0);
	const [expectedReturn, setExpectedReturn] = useState(0);
	const [monthlyDeposit, setMonthlyDeposit] = useState(0);
	const [duration, setDuration] = useState(0);
	const [finalAmount, setFinalAmount] = useState(0);
	const [myData, setMyData] = useState([]);
	const [data,setData] = useState(0)

	const handleData = (newData) => {
		setData(newData);
	  }

	function buildValues(
		labels,
		balances,
		duration,
		startingBalance,
		monthlyReturn = 0,
		monthlyDeposit
	) {
		for (let i = 0; i <= duration * 12; i++) {
			if (i === 0) {
				balances.push(Number(startingBalance).toFixed(2));
				labels.push('Year 0');
			}
			startingBalance = startingBalance * (1 + monthlyReturn) + monthlyDeposit;
			if (i % 12 === 0) {
				const year = i / 12;
				balances.push(Number(startingBalance).toFixed(2));
				labels.push(`Year ${year}`);
			}
		}
	}

	function convertToObj(a, b) {
		if (a.length !== b.length || a.length === 0 || b.length === 0) {
			return null;
		}
		let obj = {};
		a.forEach((k, i) => {
			obj[k] = b[i];
		});
		return obj;
	}

	function populateData(obj) {
		const values = Object.values(obj);
		const keys = Object.keys(obj);
		var data = [];
		for (let i = 0; i < values.length; i++) {
			data.push({
				x: keys[i],
				y: values[i],
			});
		}
		return data;
	}

	function onSubmit(e) {
		e.preventDefault();
		let balances = [];
		let labels = [];
		if(data !== 0) {
			const monthlyReturn = data / 100 / 12;
		buildValues(
			labels,
			balances,
			+duration,
			+startingBalance,
			+monthlyReturn,
			+monthlyDeposit
		);

		} else {
			const monthlyReturn = expectedReturn / 100 / 12;
		buildValues(
			labels,
			balances,
			+duration,
			+startingBalance,
			+monthlyReturn,
			+monthlyDeposit
		);

		}
		//Create object from two arrays of labels and balances
		const objectFromArrays = convertToObj(labels, balances);

		//create desired array from object
		let desiredData = populateData(objectFromArrays);
		var testing = [{ id: 'With investing ', color: 'hsl(50, 30%, 50%)' }];
		testing[0].data = desiredData;

		//Without expected return
		testing.push({ id: 'Without investing', color: 'hsl(50, 30%, 50%)' });
		balances = [];
		labels = [];
		buildValues(
			labels,
			balances,
			+duration,
			+startingBalance,
			undefined,
			+monthlyDeposit
		);
		const newObjectFrom = convertToObj(labels, balances);
		desiredData = populateData(newObjectFrom);
		testing[1].data = desiredData;
		setMyData(testing);

		//retrieve final revenue amount from array
		const finalRevenue = testing[0].data.slice(-1);
		setFinalAmount(finalRevenue[0].y);

		//Display graph
		var container = document.querySelector('.graph__container');
		container.style.display = 'block';
	}

	return (
		<div className='container'>
			<Link to='/'>
				<button className='button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick'>
					<span>G</span>
					<span>O </span>
					<span>B</span>
					<span>A</span>
					<span>C</span>
					<span>K</span>
				</button>
			</Link>
			<Questionaire onData={handleData}/>
			<section className='sliders'>
				<h1>Investment Calculator</h1>
				<form onSubmit={onSubmit}>
					<div className='form-group Area-1'>
						<label htmlFor='startingBalance'>
							<FontAwesomeIcon icon={faEuroSign} /> Starting Balance
						</label>
						<input
							type='text'
							value={startingBalance}
							onChange={(e) => setStartingBalance(e.target.value)}
						/>
					</div>

					<div className='form-group Area-2'>
						<label htmlFor='expected return'>
							<FontAwesomeIcon icon={faPercent} /> Expected Return
						</label>
						<input
							type='text'
							value={expectedReturn === 0 ? data : expectedReturn}
							onChange={(e) => setExpectedReturn(e.target.value)}
						/>
					</div>

					<div className='form-group Area-3'>
						<label htmlFor='monthlyDeposit'>
							<FontAwesomeIcon icon={faCalendarDays} /> Monthly Deposit
						</label>
						<input
							type='text'
							value={monthlyDeposit}
							onChange={(e) => setMonthlyDeposit(e.target.value)}
						/>
					</div>

					<div className='form-group Area-4'>
						<label htmlFor='Duration'>
							<FontAwesomeIcon icon={faClock} /> Duration (years)
						</label>
						<input
							type='text'
							value={duration}
							onChange={(e) => setDuration(e.target.value)}
							name='duration'
						/>
					</div>
					<div className='form-group Area-5'>
						<input type='submit' value='Submit' id='submit' />
					</div>
				</form>
			</section>
			<div className='graph__container'>
				<h2>
					<FontAwesomeIcon icon={faChartSimple} /> Growth Chart
				</h2>
				<h4>
					Total value <span className='span'>{finalAmount}€</span> in{' '}
					<span className='span'>{duration} years</span>
				</h4>
				<MyResponsiveLine data={myData} />
			</div>
		</div>
	);
};

Main.propTypes = {
	convertToObj: PropTypes.func,
	populateData: PropTypes.func,
	buildValues: PropTypes.func,
};

export default Main;
