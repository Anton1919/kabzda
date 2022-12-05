import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordeon from "./components/UnControlledAccordeon";

function App() {

  let [value, setValue] = useState(0)
  let [on, setOn] = useState(false)

  return (
    <div className="App">
      <OnOff value={on} onChange={setOn}/>
      <OnOff value={on} onChange={setOn}/>
      <OnOff value={on} onChange={setOn}/>

      <UnControlledAccordeon value={value} collapsed={true} onClick={setValue} title={'Menu'} />
    </div>
  );
}


export default App;
