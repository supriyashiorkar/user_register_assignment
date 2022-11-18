
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useMemo, useRef, useState } from 'react';


function RemoveCApp() {
const bioData=[
    {
        id:0,name:"nitya",age:3
    },
    {
        id:1,name:"harsh",age:3
    },
    {
        id:2,name:"supriya",age:3
    },
]
const[array,setarray]=useState(bioData)
function clearArray(){
setarray([])
}
function removeElm(id){
const myNewArray=array.filter((curElem)=>{
    return curElem.id!==id;
})
setarray(myNewArray)
}

    return (
        <div className="App">
<h1 style={{color:"red"}} >Remove or Delete Operation</h1><br/>
<>{
array.map((curElm)=>{
    return(
        <h3 key={curElm.id}>name is :{curElm.name} & age is: {curElm.age}
        <button onClick={()=>removeElm(curElm.id)}> Remove</button>
        </h3>
    )
})

}
<button onClick={clearArray}>Clear</button>
</>
     </div>
    );
}

export default RemoveCApp;
