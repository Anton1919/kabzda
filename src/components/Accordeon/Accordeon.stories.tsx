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
const callback = action("accordeon change event")
const onClickCallback = action("some item was cliked")

export const MenuCollapsedMode = () => <Accordeon title={"Menu"} collapsed={true} onChange={callback} onClick={onClickCallback} items={[]}/>
export const UsersUncollapsedMode = () => <Accordeon title={"Users"} collapsed={false} onChange={callback}
																										 onClick={onClickCallback}
																										 items={[
																											 {title: "Vasya", value: 1},
																											 {title: "Petya", value: 2},
																											 {title: "Kolya", value: 3}
																										 ]}

/>

export const ModeChanging = () => {
	const [value, setValue] = useState<boolean>(true)
	return <Accordeon title={"Users"}
										collapsed={value}
										onClick={onClickCallback}
										onChange={() => setValue(!value)}
										items={[{title: "Vasya", value: 1}, {title: "Petya", value: 2}, {title: "Kolya", value: 3}]}/>
}