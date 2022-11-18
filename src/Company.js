import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function CompanyApp() {

    return (
        <div className="App">
<h1>Company home page</h1>
<p>This is my Company info</p>
     </div>
    );
}

export default CompanyApp;
