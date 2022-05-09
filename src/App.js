import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));

function App() {
	return (
		<Router>
			<Suspense>
				<Routes>
					<Route path='*' element={<Home />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
