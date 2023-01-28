import React, {useEffect, useState} from 'react';
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";

type PropsType = {
	mode: "digital" | "analog"
}

const Clock = (props: PropsType) => {

	const [data, setData] = useState(new Date())

	useEffect(() => {
		const timerID = setInterval(() => {
			setData(new Date())
		}, 1000)

		return () => clearInterval(timerID)
	}, [])

	let view;

	switch (props.mode) {
		case "analog" :
			view = <DigitalClock data={data}/>
			break
		case "digital":
			view = <AnalogClock data={data}/>
			break
		default:
			view = <DigitalClock data={data}/>
	}

	return (
		<div>
			{view}
		</div>
	);
};

export default Clock;
