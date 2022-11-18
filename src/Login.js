import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet,useNavigate } from 'react-router-dom'

import { useMemo, useRef, useState,useEffect } from 'react';


function LoginApp() {
function login(){
    localStorage.setItem('/login',true)
    navigate('/')
}
const navigate=useNavigate();
useEffect(()=>{
    let login=localStorage.getItem('/login')
    if(!login){
navigate('/')
    }
});
    return (
        <div className="App">
<h1>Login Page</h1><br/>
<input type="text"/><br/><br/>
<input type="text"/><br/><br/>
<button onClick={login}>Login</button>
     </div>
    );
}

export default LoginApp;
