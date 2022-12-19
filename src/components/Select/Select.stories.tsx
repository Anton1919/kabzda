import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
	title: "Select",
	components: Select
}

export const WithValue = () => {

	const [value, setValue] = useState("2")

	return (
		<Select value={value}
						onChange={setValue}
						item={[
							{value: "1", title: "Minsk"},
							{value: "2", title: "Krd"},
							{value: "3", title: "Moscow"},
						]}/>
	)
}