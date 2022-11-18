import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useMemo, useState } from 'react';

function MemoApp() {
   const [count,setCount]=useState(0)
   const [item,setItem] =useState(0)
   const multiCount=useMemo(function mutliCount(){
    console.log("function called")
    return count*5;
   
   },[count])
   
    return (
        <div className="App">
<h1>UseMemo Hook in React</h1>
<h1>{count}</h1>
<h4>MultiCount: {multiCount}</h4>
<button onClick={()=>setCount(count+1)}>Update Count</button>
<h1>{item}</h1>
<button onClick={()=>setItem(item+1)}>Update Item</button>
        </div>
    );
}

export default MemoApp;
