import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='container header'>
			<div className='header_content'>
				<h1>Pomodoro Timer</h1>
				<NavLink to='/timer'>Go to timer!</NavLink>
			</div>
		</header>
	);
};

export default Header;
