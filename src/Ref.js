import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useMemo, useRef, useState } from 'react';

function RefApp() {
  let inputRef=useRef(null)
  function handleInput(){
    console.log("function call")
    inputRef.current.value="100"
    inputRef.current.style.color="red"
   { /*inputRef.current.style.display="none" */}
  }
    return (
        <div className="App">
<h1>UseRef Hook in React</h1>
<input type="text" ref={inputRef}/>
<button onClick={handleInput}>Handle input</button>
        </div>
    );
}

export default RefApp;
