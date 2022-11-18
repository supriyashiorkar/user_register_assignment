import axios from "axios";
import { useEffect, useState } from "react";

function GetAPI(){
    const [list,setList]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log("call API")
            setList(response.data)
        })
   
    },[])

    return(
        <div>
<h1 style={{color:"red"}}>Get Data From Fake API</h1>
<table border="1" >
    <tbody>
        <tr>
<th>Id</th>
<th>Name</th>
<th>Email</th>
        </tr>
{
    list.map((val)=>{
        return (
          
                <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                </tr>
         
        )
    })
}
</tbody>
</table>
        </div>
    )
}
export default GetAPI;