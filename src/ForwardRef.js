import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useMemo, useRef, useState } from 'react';
import FRefChildApp from './FRefChild';

function ForwardRefApp() {
    let inputRef1=useRef(null)
  function updateInput(){
    inputRef1.current.value="100"
  }
    return (
        <div className="App">
<h1>ForwardRef Hook</h1>
<FRefChildApp ref={inputRef1}/>
<button onClick={updateInput}>Update InputBox</button>
        </div>
    );
}

export default ForwardRefApp;
