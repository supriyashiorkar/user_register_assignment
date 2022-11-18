import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom'
import{useState} from 'react'

function ElectronicsApp() {
    const [sel,setsel]=useState()
    function form(){
console.log(sel)
    }
  return (
    <div className="App">
      <h1 style={{"color":"red"}}> welcome to Electronics</h1>
     <select onChange={(vars)=>setsel(vars.target.value)}>
<option>Mobile</option>
<option>Laptop</option>
<option>Desktop</option>
<option>Camera</option>
<option>Television</option>
     </select><br/><br/>
     <input type="button" value="buy now"onClick={()=>form()}/>

    </div>
  );
}

export default ElectronicsApp;
