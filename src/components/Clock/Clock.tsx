import React, {useEffect, useState} from 'react';

const Clock = () => {

	const [data, setData] = useState(new Date())

	useEffect(() => {
		const timerID = setInterval(() => {
			setData(new Date())
		}, 1000)

		return () => clearInterval(timerID)
	}, [])

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

export default Clock;