import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useState } from 'react';

function HocApp() {
   
    return (
        <div className="App">
<h1>HOC</h1>
<HocRed cmp={Counter}/>
<HocGreen cmp={Counter}/>
<HocBlue cmp={Counter}/>
        </div>
    );
}
function HocRed(props){
    return <h1 style={{backgroundColor:'red',width:100}}><props.cmp/></h1>
}
function HocGreen(props){
    return <h1 style={{backgroundColor:'green',width:100}}><props.cmp/></h1>
}
function HocBlue(props){
    return <h1 style={{backgroundColor:'blue',width:100}}><props.cmp/></h1>
}
function Counter(){
    const [count,setCount]=useState(0)
    return <div>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Update</button>
    </div>
}
export default HocApp;
