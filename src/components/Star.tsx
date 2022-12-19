import React from 'react';

type StarPropsType = {
	selected: boolean
	value: number
	onClick: (value: number) => void
}

const Star = (props: StarPropsType) => {
	return <span onClick={()=>props.onClick(props.value)}>
		{props.selected ? <b> star</b> : " star"}
	</span>
};

export default Star;