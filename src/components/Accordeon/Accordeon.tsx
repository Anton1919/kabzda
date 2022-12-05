import React from 'react';
import AccordeonTitle from "./AccordeonTitle";
import AccordeonBody from "./AccordeonBody";

type PropsType = {
	title: string
	onClick: () => void
	collapsed: boolean
}

export const Accordeon = (props: PropsType ) => {

	return (
		<div>
			<AccordeonTitle title={props.title} onClick={props.onClick}/>
			{!props.collapsed && <AccordeonBody/>}
		</div>
	);
};

// export default Accordeon;