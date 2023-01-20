import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Questionaire from './Questionaire';
import MyResponsiveLine from './MyResponsiveLine';
import ImageSlider from './ImageSlider';
import Typography from '@mui/material/Typography';


const Main = () => {
	const [startingBalance, setStartingBalance] = useState(0);
	const [expectedReturn, setExpectedReturn] = useState(0);
	const [monthlyDeposit, setMonthlyDeposit] = useState(0);
	const [duration, setDuration] = useState(0);
	const [finalAmount, setFinalAmount] = useState(0);
	const [myData, setMyData] = useState([]);
	const [data, setData] = useState(0);
	const [email, setEmail] = useState('');
	const myRef = useRef(null);
	const forming = document.getElementById('email_form');

	const sendEmail = (e) => {
		e.preventDefault();
		document.getElementById('finalAmount').value = finalAmount;
		document.getElementById('duration').value = duration;
		document.getElementById('monthlyDeposit').value = monthlyDeposit;
		document.getElementById('startingBalance').value = startingBalance;
		document.getElementById('expectedReturn').value = expectedReturn;
		emailjs
			.sendForm(
				'service_dfxpa4s',
				'template_phdxw95',
				myRef.current,
				'esHJQeixPrRMcTtj_'
			)
			.then(
				(result) => {
					console.log('Email sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
		setEmail('');
	};

	const handleData = (newData) => {
		setData(newData);
	};

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
		if (data !== 0) {
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

	const setMyRef = (element) => {
		myRef.current = element;
	};
	setMyRef(forming);
	return (
		<div className='container'>
			<div className='questionaire_container'>
				<Link
					to='/'
					style={{
						textDecoration: 'none',
						margin: '1rem',
					}}
					id='back'
				>
					<Button variant='contained'>Go Back</Button>
				</Link>
				<Questionaire onData={handleData} />
			</div>
			<section className='sliders'>
				<Typography variant="subtitle1"  component="h2" sx={{ fontSize: 12,textAlign: 'center',color: 'primary.main',fontWeight: 'medium' }}>* Never invest all your savings, firstly you should have saved 3 times of your monethly income. This money is your reserve if you lost your job or you have unexpected expenses.</Typography>
				<h1>Investment Calculator</h1>
				<form onSubmit={onSubmit}>
					<div className='Area-1'>
						<TextField
							label='Starting Balance'
							variant='outlined'
							type='text'
							value={startingBalance}
							onChange={(e) => setStartingBalance(e.target.value)}
							sx={{ m: '1rem' }}
							required
						/>
					</div>

					<div className='Area-2'>
						<TextField
							label='Expected Return'
							variant='outlined'
							type='text'
							value={expectedReturn === 0 ? data : expectedReturn}
							onChange={(e) => setExpectedReturn(e.target.value)}
							sx={{ m: '1rem' }}
							required
						/>
					</div>

					<div className='Area-3'>
						<TextField
							label='Monthly Deposit'
							variant='outlined'
							type='text'
							value={monthlyDeposit}
							onChange={(e) => setMonthlyDeposit(e.target.value)}
							sx={{ m: '1rem' }}
							required
						/>
					</div>

					<div className='Area-4'>
						<TextField
							label='Duration'
							variant='outlined'
							type='text'
							value={duration}
							onChange={(e) => setDuration(e.target.value)}
							sx={{ m: '1rem' }}
							required
						/>
					</div>
					<div className='Area-5'>
						<Button variant='contained' type='submit' style={{ width: '100%' }}>
							submit
						</Button>
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
			<section className='qr'>
				{finalAmount !== 0 ? <ImageSlider finalAmount={finalAmount}  data={data} expectedReturn={expectedReturn} monthlyDeposit={monthlyDeposit} startingBalance={startingBalance} duration={duration}/> : null}
			</section>
			{/* =====================================FOOTER=========================================== */}
			<section className='footer'>
				<div className='footer_container'>
					<form ref={myRef} onSubmit={sendEmail} id='email_form'>
						<div>
							<Input
								color='neutral'
								disabled={false}
								placeholder='Enter your email...'
								size='md'
								variant='plain'
								type='email'
								name='user_email'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								style={{ color: 'white', border: '1px solid white' }}
								className='sendMailInput'
							/>
						</div>

						<div className='form-group'>
							<input name='finalAmount' type='hidden' id='finalAmount' />
						</div>

						<div className='form-group'>
							<input name='duration' type='hidden' id='duration' />
						</div>

						<div className='form-group'>
							<input name='monthlyDeposit' type='hidden' id='monthlyDeposit' />
						</div>

						<div className='form-group'>
							<input
								name='startingBalance'
								type='hidden'
								id='startingBalance'
							/>
						</div>

						<div className='form-group'>
							<input name='expectedReturn' type='hidden' id='expectedReturn' />
						</div>

						<Button variant='contained' endIcon={<SendIcon />} type='submit'>
							Send Mail
						</Button>
					</form>
				</div>
			</section>
		</div>
	);
};

Main.propTypes = {
	convertToObj: PropTypes.func,
	populateData: PropTypes.func,
	buildValues: PropTypes.func,
};

export default Main;
