import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function OtherApp() {

    return (
        <div className="App">
<h1>Other</h1>
<p>Other Information</p>
     </div>
    );
}

export default OtherApp;
