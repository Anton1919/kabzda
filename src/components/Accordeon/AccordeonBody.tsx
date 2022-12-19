import React from 'react';
import {ItemType} from "./Accordeon";

type PropsType = {
	items: ItemType[]
	onClick: (value: any) => void
}

const AccordeonBody = (props:PropsType) => {

	return (
		<ul>
			{props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li> )}
		</ul>
	)
};

export default AccordeonBody;