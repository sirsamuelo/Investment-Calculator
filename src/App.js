/* eslint-disable */
import './App.css';
import Main from './components/Main';
import Intro from './components/Intro';
import House from './models/house';
import Money from './models/money';
import Watch from './models/watch';
import Car from './models/car';
import Boat from './models/boat';
import Field from './models/field';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro />} />
				<Route path='/main' element={<Main />} />
				<Route path='/house' element={<House />} />
				<Route path='/money' element={<Money />} />
				<Route path='/watch' element={<Watch />} />
				<Route path='/boat' element={<Boat />} />
				<Route path='/car' element={<Car />} />
				<Route path='/field' element={<Field />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
