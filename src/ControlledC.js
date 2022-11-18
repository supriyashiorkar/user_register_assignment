import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function ControlledCApp() {
const [val,setVal]=useState("")
    return (
        <div className="App">
<h1>Controlled component</h1>
<input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
     </div>
    );
}

export default ControlledCApp;
