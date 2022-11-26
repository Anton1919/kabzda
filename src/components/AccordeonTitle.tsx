import React from 'react';

type AccordeonPropsType = {
	title: string
	onClick: ()=> void
}

const AccordeonTitle = (props: AccordeonPropsType) => {
	return (
		<div>
			<h3 onClick={()=> props.onClick()}>{props.title}</h3>
		</div>
	)
};

export default AccordeonTitle;