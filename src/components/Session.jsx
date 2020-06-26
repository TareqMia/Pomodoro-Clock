import React from 'react';
import moment from 'moment';
import {
	BreakSessionContainer,
	BreakSessionLabel,
	BreakSessionTime,
	ButtonContainer,
	PlusMinusButtons
} from '../UI/BreakSessionUI';

const Session = ({ sessionLength, decrementSessionLength, incrementSessionLength }) => {
	const sessionLengthInMinutes = moment.duration(sessionLength, 's').asMinutes();
	return (
		<BreakSessionContainer>
			<BreakSessionLabel id="session-label">Session</BreakSessionLabel>
			<BreakSessionTime id="session-length">{sessionLengthInMinutes}</BreakSessionTime>
			<ButtonContainer>
				<PlusMinusButtons id="session-decrement" onClick={decrementSessionLength}>
					-
				</PlusMinusButtons>
				<PlusMinusButtons id="session-increment" onClick={incrementSessionLength}>
					+
				</PlusMinusButtons>
			</ButtonContainer>
		</BreakSessionContainer>
	);
};

export default Session;
