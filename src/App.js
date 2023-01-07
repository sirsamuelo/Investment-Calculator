/* eslint-disable */
import './App.css';
import Main from './components/Main';
import Intro from './components/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Intro />} />
				<Route path='/main' element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
