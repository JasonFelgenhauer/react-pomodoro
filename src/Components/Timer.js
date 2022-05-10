import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Timer = () => {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [breake, setBreak] = useState(true);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		document.getElementById('start').addEventListener('click', (e) => {
			if (play) {
				setPlay(false);
				e.target.innerHTML = 'Start';
			} else {
				setPlay(true);
				e.target.innerHTML = 'Stop';
			}
		});
		document.getElementById('more').addEventListener('click', () => {
			setMinutes(minutes + 1);
		});
		document.getElementById('less').addEventListener('click', () => {
			setMinutes(minutes - 1);
		});
		document.getElementById('restart').addEventListener('click', () => {
			window.location.reload();
		});

		if (play) {
			let interval = setInterval(() => {
				clearInterval(interval);

				if (seconds === 0) {
					if (minutes !== 0) {
						setSeconds(59);
						setMinutes(minutes - 1);
					} else {
						if (breake) {
							setMinutes(4);
							setSeconds(59);

							setBreak(false);
						} else {
							setMinutes(24);
							setSeconds(59);

							setBreak(true);
						}
					}
				} else {
					setSeconds(seconds - 1);
				}
			}, 1000);
		}
	});

	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

	return (
		<div className='container timer'>
			<div className='timer_top'>
				<NavLink to='/'>Back to home</NavLink>
			</div>
			<div className='timer_center'>
				<p>
					{timerMinutes} : {timerSeconds}
				</p>
			</div>
			<div className='timer_bottom'>
				<button id='more'>&#43;</button>
				<button id='start'>Start</button>
				<button id='restart'>Restart</button>
				<button id='less'>&#45;</button>
			</div>
		</div>
	);
};

export default Timer;
