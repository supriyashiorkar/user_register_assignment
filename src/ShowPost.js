import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List';

function ShowPost() {
   const [list,setList]=useState([])
    useEffect(()=>{

axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
   console.log("call api");
   setList(response.data)
})
    },[])
   return (
        <div className="App">
           <h1 style={{color:"red"}}>ShowPost Page</h1>
   <List name="john" age="32" list={list}/>
        </div>
    );
}

export default ShowPost;
