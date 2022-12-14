import React from 'react';

export type AccordeonPropsType = {
	title: string
	onClick: ()=> void
	collapsed?: boolean
}

const AccordeonTitle = (props: AccordeonPropsType) => {
	return (
		<div>
			<h3 onClick={()=> props.onClick()}>{props.title}</h3>
		</div>
	)
};

export default AccordeonTitle;