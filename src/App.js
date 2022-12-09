import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/HomePage'));
const Timer = lazy(() => import('./pages/TimerPage'));

function App() {
	return (
		<Router>
			<Suspense>
				<Routes>
					<Route path='*' element={<Home />} />
					<Route path='/timer' element={<Timer />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
