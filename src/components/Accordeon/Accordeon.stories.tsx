import React, {useState} from "react";

import {action} from "@storybook/addon-actions";
import {Accordeon} from "./Accordeon";

export default {
	title: "Accordeon",
	component: Accordeon,
}

export const collapsedMode = () => <Accordeon title={"Menu"} collapsed={true} onClick={action('cliked')} />
export const unCollapsedMode = () => <Accordeon title={"Users"} collapsed={false} onClick={action('cliked')} />

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true)
	return <Accordeon title={"Users"} collapsed={value} onClick={()=>setValue(!value)}/>
}