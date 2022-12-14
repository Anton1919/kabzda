import React, {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordeon} from "./Accordeon";
import {AccordeonPropsType} from "./AccordeonTitle";
import {Story} from "@storybook/react";

export default {
	title: "Accordeon",
	component: Accordeon,
}

// const callback = action("accordeon mode change event fired")
const onClickCallback = action("some item was cliked")

const Template: Story<AccordeonPropsType> = (args) => <Accordeon {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
	title:"Menu",
	collapsed: true,
	onClick: onClickCallback
}
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
	title:"Users",
	collapsed: false,
	onClick: onClickCallback
}

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true)
	return <Accordeon title={"Users"} collapsed={value} onClick={()=>setValue(!value)}/>
}