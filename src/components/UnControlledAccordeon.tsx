import React, {useReducer, useState} from 'react';
import Star from "./Star";
import {Accordeon} from "./Accordeon/Accordeon";
import {reducer} from "./Select/reducer";
import AccordeonBody from "./Accordeon/AccordeonBody";


type UnAccPropsType = {
	title: string
	onClick: (value: number) => void
	value: number
	collapsed: boolean
}

const UnControlledAccordeon = (props: UnAccPropsType) => {

	// const [collapsed, setCollapsed] = useState(false)
	const [state, dispatch] = useReducer(reducer, {collapsed: false})
	const [value, setValue] = useState<boolean>(true)

	const dataItems = [
		{title: "Vasya", value: 1},
		{title: "Petya", value: 2},
		{title: "Kolya", value: 3}
	]

	return (
		<div>
			<Accordeon items={dataItems} onChange={() => setValue(!value)} title={props.title} collapsed={!state.collapsed}
								 onClick={() => {
									 dispatch({type: "TOGGLE-COLLAPSED"})
								 }}/>
			{!props.collapsed && <AccordeonBody onClick={props.onClick} items={dataItems}/>}

			<Star selected={props.value > 0} onClick={props.onClick} value={1}/>
			<Star selected={props.value > 1} onClick={props.onClick} value={2}/>
			<Star selected={props.value > 2} onClick={props.onClick} value={3}/>
			<Star selected={props.value > 3} onClick={props.onClick} value={4}/>
			<Star selected={props.value > 4} onClick={props.onClick} value={5}/>
		</div>
	);
};

export default UnControlledAccordeon;