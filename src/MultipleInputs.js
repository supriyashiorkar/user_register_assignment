import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'

import { useEffect, useMemo, useRef, useState } from 'react';


function MultipleInputsApp() {
    const [registration,setRegistrtation]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    })
    const [records,setRecords]=useState([])
function handleInput(e){
const name=e.target.name;
const value=e.target.value
console.log(name,value)
setRegistrtation({...registration,[name]:value})
}
function handleSubmit(e){
e.preventDefault()
const newRecord={ ...registration,id:new Date().getTime().toString()}
console.log(records)
setRecords([...records,newRecord])
console.log(records)
setRegistrtation({username:"",password:"",phone:"",email:""})
}

    return (
        <div className="App">
            <div className='reg'>
            <form action='' onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
<div>
<label htmlFor='username'>Full name</label>
<input type="text" autoComplete='off' 
value={registration.username}
onChange={handleInput}
name='username' id="username"/>
</div><br/>
<div>
<label htmlFor='email'>Email</label>
<input type="text" autoComplete='off' 
value={registration.email}
onChange={handleInput}
name='email' id="email"/>
</div><br/>
<div>
<label htmlFor='phone'>Phone</label>
<input type="text" autoComplete='off' 
value={registration.phone}
onChange={handleInput}
name='phone' id="phone"/>
</div><br/>
<div>
<label htmlFor='password'>Password</label>
<input type="text" autoComplete='off' 
value={registration.password}
onChange={handleInput}
name='password' id="password"/>
</div><br/>
<button type="submit">Registration</button>
 </form>
 <div>
    {
        records.map((curElm)=>{
            return(
                <div >
                    <p>{curElm.username}</p>
              <p>  {curElm.email}</p>
              <p>  {curElm.phone}</p>
              <p> {curElm.password}</p>
                </div>
            )
        })
    }
 </div>
 </div>
 </div>
    );
}

export default MultipleInputsApp;
