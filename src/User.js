import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useLocation } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function UserApp() {
const params=useParams()
const {name}=params
const location=useLocation()
console.log(location)
    return (
        <div className="App">

<h1>This is {name}'s Page</h1>
     </div>
    );
}

export default UserApp;
