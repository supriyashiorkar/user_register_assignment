import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Greetings() {
    let currDate=new Date();//(2022,11,8,19---year,month,date,hour)
    currDate=currDate.getHours()
    let greeting=''
    const cssStyle={}
    if(currDate>=1 && currDate<12){
        greeting='Good Morning'
   cssStyle.color='green'
    }
    else if(currDate>=12 && currDate<19){
   greeting='Good Afternoon'
      cssStyle.color='orange'
    }
    else{
        greeting='Good Night'
        cssStyle.color='blue'
    }
   return (
        <div className="App">
           <h1 style={{color:"red"}}>Greetings</h1>
        <h2>Current Time is : {currDate}</h2>
        <h2>Hello <span style={cssStyle}>{greeting}!</span></h2>
        </div>
    );
}

export default Greetings;
