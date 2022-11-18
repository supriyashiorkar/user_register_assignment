import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState,forwardRef } from 'react';

function UncontrolledC() {
    let inputRef2=useRef(null)
    let inputRef3=useRef(null)
    function submitForm(e){
        e.preventDefault()
console.log("value 1 is :",inputRef2.current.value)
console.log("value 2 is :",inputRef3.current.value)
let input3=document.getElementById('input3').value
console.log("value 3 is: ",input3)
    }
    return (
        <div className="App">
<h1>UnControlled component</h1>
<form onSubmit={submitForm}>
    <input type="text" ref={inputRef2}/><br/><br/>
    <input type="text" ref={inputRef3}/><br/><br/>
    <input id='input3' type="text"/><br/><br/>
    <button>Submit</button>
</form>
        </div>
    );
}

export default UncontrolledC;
