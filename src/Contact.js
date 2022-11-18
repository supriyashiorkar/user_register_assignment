import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function ContactApp() {

    return (
        <div className="App">
<h1>Contact us page</h1>
<Link to ="/company">Company</Link><br/>
<Link to ="/channel">Channel</Link><br/>
<Link to ="/other">Other</Link>
<Outlet/>
     </div>
    );
}

export default ContactApp;
