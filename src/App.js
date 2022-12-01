/* eslint-disable */
import './App.css';
import Main from './components/Main';

function App() {
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

	const pullData = (data) => {
		console.log(data);
	};

	return (
		<div className='App'>
			<Main
				buildValues={buildValues}
				convertToObj={convertToObj}
				populateData={populateData}
				pullData={pullData}
			/>
		</div>
	);
}

export default App;
