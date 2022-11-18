import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate, } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function NavigateApp() {
    const navigate=useNavigate()
    function navToPage(url){
       navigate(url)
    }
    return (
        <div className="App">
<h1>useNavigate</h1>
<Link to="/linkabo">About Page</Link><br/><br/>
<button onClick={()=> navToPage('/filter')}>Go to filter page</button><br/><br/>
<button onClick={()=>navToPage('/linkhm')}>Go to Home page</button>
{/*<button onClick={()=> navigate('/filter')}>Go to filter page</button> */}
{/*<button onClick={()=> navigate('/linkhm')}>Go to home page</button> */}
     </div>
    );
}

export default NavigateApp;
