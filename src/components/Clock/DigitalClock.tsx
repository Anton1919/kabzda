import React from 'react';

type PropsType = {
	data: Date
}

const DigitalClock = ({data}: PropsType) => {

	const time = (num: number) => {
		return num < 10 ? '0' + num : num
	}
	return (
		<div>
			<span>{time(data.getHours())}</span>
			:
			<span>{time(data.getMinutes())}</span>
			:
			<span>{time(data.getSeconds())}</span>
		</div>
	);
};

export default DigitalClock;