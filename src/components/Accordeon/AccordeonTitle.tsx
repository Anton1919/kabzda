import React from 'react';

export type AccordeonPropsType = {
	title: string
	onChange: ()=> void
	collapsed?: boolean
}

const AccordeonTitle = (props: AccordeonPropsType) => {
	return (
		<div>
			<h3 onClick={()=> props.onChange()}>{props.title}</h3>
		</div>
	)
};

export default AccordeonTitle;