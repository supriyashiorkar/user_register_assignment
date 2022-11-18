

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function UseStateArrayApp() {
    const bioData = [
        {
            id: 0, myname: "nitya", myage: 3
        },
        {
            id: 1, myname: "harsh", myage: 3
        },
        {
            id: 2, myname: "supriya", myage: 3 
        }
    ]
    const [myarray,setmyArray]=useState(bioData)
    function ClearArray(){
setmyArray([])
    }
    console.log(bioData)
    return (
        <div className="App">
            <h1 style={{ color: "red" }}>Use state Array</h1><br />
            <>{
                myarray.map((curElm) => {
                    return (
                        <h4 key={curElm.id}>name is : {curElm.myname} & age is :{curElm.myage}</h4>
                    )

                })
            }<br/>
<button onClick={ClearArray}>Clear</button>

            </>
        </div>
    );
}

export default UseStateArrayApp;
