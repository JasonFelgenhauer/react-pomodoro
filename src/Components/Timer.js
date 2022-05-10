import React, { useState, useEffect } from 'react';

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
			<div className='timer_content'>
				<p>
					<span className='timer_content_minuts'>{timerMinutes}</span> : <span className='timer_content_seconds'>{timerSeconds}</span>
				</p>
			</div>
			<div className='timer_buttons'>
				<button id='more'>&#43;</button>
				<button id='start'>Start</button>
				<button id='less'>&#45;</button>
			</div>
		</div>
	);
};

export default Timer;
