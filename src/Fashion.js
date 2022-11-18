import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom'
import{useState} from 'react'

function FashionApp() {
    const [name,setname]=useState()
    const [prize,setprize]=useState()
    function formsubmit(){
console.log(name)
console.log(prize)
    }
  return (
    <div className="App">
      <h1 style={{"color":"red"}}> welcome to Fashion</h1>
     Name : <input type="text" placeholder='Enter name' onChange={(varn)=>setname(varn.target.value)}/><br/><br/>
     Prize : <input type="text" placeholder='Enter Prize' onChange={(varp)=>setprize(varp.target.value)}/><br/><br/>
     <input type="button" value="buy now" onClick={()=>formsubmit()}/>
    </div>
  );
}

export default FashionApp;
