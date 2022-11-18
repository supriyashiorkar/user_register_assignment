 import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function SpreadOprtrCApp() {
const [myObject,setMyObject]=useState({
    myname:"supriya",myAge:31,myDegree:"BE"
})
function changeObject(){
setMyObject({...myObject,myname:"Nitya Harsh",myAge:3,myDegree:"cute baby"})
}
    return (
        <div className="App">
<h1>Spread Operator using ... dots</h1><br></br>
<h2 style={{color:"red"}}>name: {myObject.myname} & age: {myObject.myAge} & degree: {myObject.myDegree}</h2>
<button onClick={changeObject}>Update</button>
     </div>
    );
}

export default SpreadOprtrCApp;
