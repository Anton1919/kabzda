import React from 'react';
import AccordeonTitle from "./AccordeonTitle";
import AccordeonBody from "./AccordeonBody";

export type ItemType = {
	title: string
	value: number
}

export type PropsType = {
	title: string
	onChange: () => void
	collapsed?: boolean
	items: ItemType[]
	onClick: (value: any) => void
}

export const Accordeon = (props: PropsType ) => {

	return (
		<div>
			<AccordeonTitle title={props.title} onChange={props.onChange}/>
			{!props.collapsed && <AccordeonBody onClick={props.onClick} items={props.items}/>}
		</div>
	);
};

// export default Accordeon;