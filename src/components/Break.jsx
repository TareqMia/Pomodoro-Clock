import React from 'react';
import moment from 'moment';
import {
	BreakSessionContainer,
	BreakSessionLabel,
	BreakSessionTime,
	ButtonContainer,
	PlusMinusButtons
} from '../UI/BreakSessionUI';

const Break = ({ breakLength, decrementBreakLength, incrementBreakLength }) => {
	const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();
	return (
		<BreakSessionContainer>
			<BreakSessionLabel id="break-label">Break</BreakSessionLabel>
			<BreakSessionTime id="break-length">{breakLengthInMinutes}</BreakSessionTime>
			<ButtonContainer>
				<PlusMinusButtons id="break-decrement" onClick={decrementBreakLength}>
					-
				</PlusMinusButtons>
				<PlusMinusButtons id="break-increment" onClick={incrementBreakLength}>
					+
				</PlusMinusButtons>
			</ButtonContainer>
		</BreakSessionContainer>
	);
};

export default Break;
