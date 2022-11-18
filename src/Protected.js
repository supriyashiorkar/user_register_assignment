import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

import { useEffect, useMemo, useRef, useState } from 'react';


function ProtectedApp(props) {
const {component}=props
const navigate=useNavigate();
useEffect(()=>{
    let login1=localStorage.getItem('/login')
    if(!login1){
navigate('/login')
    }
});
    return (
        <div className="App">
<component/>
     </div>
    );
}

export default ProtectedApp;
