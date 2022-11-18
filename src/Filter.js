import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useSearchParams } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function FilterApp() {
    const [searchparams,setSearchparams]=useSearchParams()
    console.log(searchparams.get("age"))
    console.log(searchparams.get("city"))
    const age=searchparams.get("age")
    const city=searchparams.get("city")
    return (
        <div className="App">
<h1>Filter Page</h1>
<h3 style={{color:"red"}}>Age is:  {age}</h3>
<h3 style={{color:"green"}}>City is:  {city}</h3>
<input type="text" onChange={(e)=>setSearchparams({text:e.target.value})}/><br/><br/>
<button onClick={()=>setSearchparams({age:40})}>set age in Query params</button><br/><br/>
<button onClick={()=>setSearchparams({city:"pune"})}>set city in Query params</button><br/><br/>
     </div>
    );
}

export default FilterApp;
