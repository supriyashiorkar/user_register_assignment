
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'

function List(props) {
    console.log("props",props)
   return (
        <div >
         {/*}  <h1 style={{color:"red"}}>List Page</h1>*/}
   {
      props.list.map((val)=>{
         return (
            <div>
               {val.id}
            </div>
         )
      })
   }
        </div>
    );
}

export default List;







