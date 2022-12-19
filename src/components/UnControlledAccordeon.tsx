import React, {useState} from 'react';
import Star from "./Star";
import AccordeonBody from "./Accordeon/AccordeonBody";
import {Accordeon} from "./Accordeon/Accordeon";


type UnAccPropsType = {
	title: string
	onClick: (value: number) => void
	value: number
	collapsed: boolean
}

const UnControlledAccordeon = (props: UnAccPropsType) => {

	let [collapsed, setCollapsed] = useState(false)

	return (
		<div>
			<Accordeon title={props.title} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
			{/*{!collapsed && <AccordeonBody/>}*/}

			<Star selected={props.value > 0} onClick={props.onClick} value={1}/>
			<Star selected={props.value > 1} onClick={props.onClick} value={2}/>
			<Star selected={props.value > 2} onClick={props.onClick} value={3}/>
			<Star selected={props.value > 3} onClick={props.onClick} value={4}/>
			<Star selected={props.value > 4} onClick={props.onClick} value={5}/>
		</div>
	);
};

export default UnControlledAccordeon;