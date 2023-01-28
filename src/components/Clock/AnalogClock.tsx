import React, {useState} from 'react';
import s from "./AnalogClock.module.css"

type PropsType = {
	data: Date
}

const AnalogClock = ({data}: PropsType) => {

	return (
		<div className={s.clock}>
			<div
				className={s.hourHand}
				style={{
					transform: `rotateZ(${data.getHours() * 30}deg)`
				}}
			/>
			<div
				className={s.minHand}
				style={{
					transform: `rotateZ(${data.getMinutes() * 6}deg)`
				}}
			/>
			<div
				className={s.secHand}
				style={{
					transform: `rotateZ(${data.getSeconds() * 6}deg)`
				}}
			/>
			<span className={s.twelve}>12</span>
			<span className={s.one}>1</span>
			<span className={s.two}>2</span>
			<span className={s.three}>3</span>
			<span className={s.four}>4</span>
			<span className={s.five}>5</span>
			<span className={s.six}>6</span>
			<span className={s.seven}>7</span>
			<span className={s.eight}>8</span>
			<span className={s.nine}>9</span>
			<span className={s.ten}>10</span>
			<span className={s.eleven}>11</span>
		</div>
	);
}


export default AnalogClock;