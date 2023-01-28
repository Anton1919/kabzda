import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordeon from "./components/UnControlledAccordeon";
import Clock from "./components/Clock/Clock";

function App() {

	const [value, setValue] = useState(0)
	const [on, setOn] = useState(false)

	return (
		<div className="App">
			<OnOff value={on} onChange={setOn}/>
			<OnOff value={on} onChange={setOn}/>
			<OnOff value={on} onChange={setOn}/>

			<UnControlledAccordeon value={value} collapsed={true} onClick={setValue} title={'Menu'}/>


			<Clock mode={"analog"}/>
			<Clock mode={"digital"}/>

		</div>
	);
}


export default App;
