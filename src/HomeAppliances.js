import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom'
import{useState} from 'react'

function HomeAppliancesApp() {
    const [sel1,setsel1]=useState()
    const [sel2,setsel2]=useState()
    function formsub(){
console.log(sel1)
console.log(sel2)
    }
  return (
    <div className="App">
      <h1 style={{"color":"red"}}> welcome to Home Applainces</h1>
     <select onChange={(vars)=>setsel1(vars.target.value)}>
<option>Television</option>
<option>Fan</option>
<option>Furniture</option>
<option>dining sets</option>
<option>Mattresses</option>
<option>Electronics wires</option>
     </select><br/><br/>
     <select onChange={(vars1)=>setsel2(vars1.target.value)}>
<option>500-1,000</option>
<option>1,000-5,000</option>
<option>5,000-10,000</option>
<option>10,000-50,000</option>
<option>50,000-1,00,000</option>
<option>1,00,000-2,00,000</option>
     </select><br/><br/>

     <input type="button" value="buy now"onClick={()=>formsub()}/>

    </div>
  );
}

export default HomeAppliancesApp;
