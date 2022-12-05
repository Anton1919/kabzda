import React, {useState} from 'react';

type OnOffPropsType = {
	value: boolean
	onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
	const onStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '5px',
		marginTop: '10px',
		padding: '5px',
		backgroundColor: props.value ? 'green' : 'white'
	}
	const offStyle = {
		width: '30px',
		height: '20px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '5px',
		padding: '5px',
		backgroundColor: props.value ? 'white' : 'red'
	}
	const indicatorStyle = {
		width: '10px',
		height: '10px',
		borderRadius: '5px',
		border: '1px solid black',
		display: 'inline-block',
		marginLeft: '5px',
		backgroundColor: props.value ? 'green' : 'red'
	}

	const onClicked = () => {
		props.onChange(true)
	}
	const offClicked = () => {
		props.onChange(false)
	}

	return (
		<div>
			<div style={onStyle} onClick={onClicked}>On</div>
			<div style={offStyle} onClick={offClicked}>Off</div>
			<div style={indicatorStyle}></div>
		</div>
	);
};

