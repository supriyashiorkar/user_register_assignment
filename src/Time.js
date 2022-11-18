import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function TimeApp() {
    const time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time)
    function UpdateTime() {
    let time=new Date().toLocaleTimeString();
        setCtime(time)
  
    }
    setInterval(UpdateTime,1000)
    return (
        <div className="App">
            <h1 style={{ color: "red" }}>Digital Clock Time</h1><br />
            <h2>Current Time is : {time}</h2><br />
            <h2>click on Button Time is : {ctime}</h2>
            <button onClick={UpdateTime}>Click on Time</button> <br /><br />
            <h3>{ctime}</h3>
        </div>
    );
}

export default TimeApp;
