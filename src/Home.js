import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function HomeCApp() {

    return (
        <div className="App">
<h1>Home Page</h1>
<ul className='home'>
   
    <li><NavLink className="home-bar-link" to="/user/supriya" state={{name:'supriya'}}>Supriya</NavLink> </li>
    <li><NavLink className="home-bar-link" to="/user/nitya">Nitya</NavLink> </li>
    <li><NavLink className="home-bar-link" to="/user/harsh">Harsh</NavLink> </li>
    <li><NavLink className="home-bar-link" style={{color:'magenta'}}to="/linkabo">About</NavLink> </li>
</ul>
     </div>
    );
}

export default HomeCApp;
