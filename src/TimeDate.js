import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function TimeDateApp() {
const name="supriya"
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString()
    return (
        <div className="App">
<h1 style={{color:"red"}}>Time & Date</h1><br/>
<h3>hello, my name is : {name}</h3><br/>
<p>current Date is : {currDate}</p>
<p>current Time is : {currTime}</p>
     </div>
    );
}

export default TimeDateApp;
