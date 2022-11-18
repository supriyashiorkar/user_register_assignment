import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useState } from 'react';
import axios from 'axios'
import List from './List';
function ShowUser() {
   const [list,setList]=useState([])
   useEffect(()=>{

axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
  console.log("call api");
  setList(response.data)
})
   },[])
   return (
        <div className="App">
           <h1 style={{color:"red"}}>ShowUser Page</h1>
   <List age="20" name="rahul" list={list}/>
        </div>
    );
}

export default ShowUser;
