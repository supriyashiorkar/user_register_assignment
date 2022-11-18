import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

function ObjectArrayApp() {
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [data, setData] = useState([])
  function AddArray(){
    data.push({namekey:name,pricekey:price})
    setData([...data])
  }
function deleteArray(id){
 const newArray= data.filter((valData)=>{
    if (valData.namekey !==id){
      return valData;
    }
  })
  setData([...newArray])
}

  return (
    <div className="App">
      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br></br>
      <input type="text" placeholder='Enter price' onChange={(e) => setPrice(e.target.value)} /><br></br>
      <button onClick={() => AddArray()}>Add Array</button><br></br>
      Array Data is : {JSON.stringify(data)}
      {
        data.map((val,index)=>{
return(
  <div>
    {val.namekey}{val.pricekey}
    <button onClick={()=>deleteArray(val.namekey)}>Delete</button>
  </div>
)
        })
      }
    </div>
  );
}

export default ObjectArrayApp;
