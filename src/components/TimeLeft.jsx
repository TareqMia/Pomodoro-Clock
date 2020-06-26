import React from 'react';
import moment from 'moment';
import momentDurationFormat from 'moment-duration-format';

const TimeLeft = ({ handleResetButtonClick, timerLabel, onStartStopClick, startStopButtonLabel, timeLeft }) => {
	const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
	return (
		<div className="flex flex-col justify-evenly items-center w-64 h-64 bg-white rounded-full">
			<p className="text-2xl font-bold" id="timer-label">
				{timerLabel}
			</p>
			<p className="font-clock text-4xl font-bold" id="time-left">
				{formattedTimeLeft}
			</p>
			<button
				className="font-extrabold bg-purple-400 px-4 py-2 rounded-lg"
				id="start_stop"
				onClick={onStartStopClick}
			>
				{startStopButtonLabel}
			</button>
			<button
				className=" font-semibold border-2 rounded border-purple-400 border-solid px-2 py-2"
				id="reset"
				onClick={handleResetButtonClick}
			>
				Reset
			</button>
		</div>
	);
};

export default TimeLeft;
