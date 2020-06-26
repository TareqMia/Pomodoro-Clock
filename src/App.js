import React, { Component, useState, useEffect, useRef } from 'react';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import './assets/main.css';

function App() {
	const audioElement = useRef(null);
	const [ breakLength, setBreakLength ] = useState(300);
	const [ currentSessionType, setCurrentSessionType ] = useState('Session');
	const [ intervalId, setIntervalId ] = useState(null);
	const [ sessionLength, setSessionLength ] = useState(1500);
	const [ timeLeft, setTimeLeft ] = useState(sessionLength);

	useEffect(
		() => {
			setTimeLeft(sessionLength);
		},
		[ sessionLength ]
	);

	const decrementBreakLength = () => {
		const newBreakLength = breakLength - 60;
		if (newBreakLength > 0) {
			setBreakLength(newBreakLength);
		}
	};

	const incrementBreakLength = () => {
		const newBreakLength = breakLength + 60;
		if (newBreakLength <= 3600) {
			setBreakLength(breakLength + 60);
		}
	};

	const decrementSessionLength = () => {
		const newSessionLength = sessionLength - 60;
		if (newSessionLength > 0) {
			setSessionLength(newSessionLength);
		}
	};

	const incrementSessionLength = () => {
		const newSessionLength = sessionLength + 60;
		if (newSessionLength <= 3600) {
			setSessionLength(sessionLength + 60);
		}
	};

	const isStarted = intervalId != null;
	const onStartStopClick = () => {
		if (isStarted) {
			clearInterval(intervalId);
			setIntervalId(null);
		} else {
			const newIntervalId = setInterval(() => {
				setTimeLeft((prevTimeLeft) => {
					const newTimeLeft = prevTimeLeft - 1;
					if (newTimeLeft >= 0) {
						return newTimeLeft;
					}
					audioElement.current.play();

					if (currentSessionType === 'Session') {
						setCurrentSessionType('Break');
						return breakLength;
					} else if (currentSessionType === 'Break') {
						setCurrentSessionType('Session');
						return sessionLength;
					}
				});
			}, 100);
			setIntervalId(newIntervalId);
		}
	};

	const handleResetButtonClick = () => {
		audioElement.current.load();
		clearInterval(intervalId);
		setIntervalId(null);
		setCurrentSessionType('Session');
		setSessionLength(60 * 25);
		setBreakLength(300);
		setTimeLeft(60 * 25);
	};

	return (
		<div className="flex flex-col h-screen items-center justify-center bg-purple-500">
			<div className="flex w-full justify-around">
				<Break
					breakLength={breakLength}
					decrementBreakLength={decrementBreakLength}
					incrementBreakLength={incrementBreakLength}
				/>
				<TimeLeft
					handleResetButtonClick={handleResetButtonClick}
					timerLabel={currentSessionType}
					onStartStopClick={onStartStopClick}
					startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
					timeLeft={timeLeft}
				/>
				<Session
					sessionLength={sessionLength}
					decrementSessionLength={decrementSessionLength}
					incrementSessionLength={incrementSessionLength}
				/>
			</div>

			<audio ref={audioElement} id="beep">
				<source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
			</audio>
		</div>
	);
}

export default App;
