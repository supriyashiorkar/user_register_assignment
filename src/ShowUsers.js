import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

import { useEffect, useState } from 'react';
import axios from 'axios'
function ShowUsers() {
  const [user,setUser]=useState([])
 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    console.log("call api")
    setUser(response.data)
  })
 },[])
{/*function addPost(){
  console.log("add post")
  axios.post("https://jsonplaceholder.typicode.com/posts",{
    title: 'foo',
    body: 'bar',
    userId: 1,
  },{headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }}).then((response)=>{
    console.log("response",response.data)
  })
}*/}
  return (
    <div className="App">
     <h1 style={{color:"red"}}>Get API Method</h1>
   
     <table border="1">
      
      <tbody>
        {
           user.map((val)=>{
           return (
            <div>
               <tr>
          
          <td>{val.id} -{val.title}</td>
        
        </tr>
            </div>
           )
          })
        
        }
        </tbody>
    </table>
  
 {/* <button onClick={()=>addPost()}>Add</button>*/}
    </div>
  );
}

export default ShowUsers;
