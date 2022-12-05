import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
	title: "OnOff",
	component: OnOff,
}

export const OnMode = () => <OnOff value={true} onChange={action('cliked')} />
export const OffMode = () => <OnOff value={false} onChange={action('cliked')} />

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true)
	return <OnOff value={value} onChange={setValue}/>
}