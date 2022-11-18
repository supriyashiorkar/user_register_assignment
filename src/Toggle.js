
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function ToggleApp() {
const [name,setName]=useState("supriya kamalakar kamdi")
function changeName(){
let val=name;
(val==='supriya kamalakar kamdi')?
setName('Nitya Harsh kamalakar kamdi') : setName('supriya kamalakar kamdi')
}
    return (
        <div className="App">
<h1 style={{color:"red"}}>Toggle</h1><br/>
<h3>{name}</h3><br/>
<button onClick={()=>changeName()}>update data</button>
     </div>
    );
}

export default ToggleApp;
