

import { useState } from 'react';
import './App.css';


function IdArray() {
   const [id,setId]=useState()
   const [data,setData]=useState([])
   function AddArray(){
    data.push({id})
    setData([...data])
   }
    return (
        <div className="App">
<h1>ID's in Array Form</h1><br/>
<input type="text" placeholder='enter id no' onChange={(e)=>setId(e.target.value)}/><br/><br/>
<button onClick={()=>AddArray()}>Add Array</button><br/><br/>
Array : {JSON.stringify(data)}
{
    data.map((val,index)=>{
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

export default IdArray;
