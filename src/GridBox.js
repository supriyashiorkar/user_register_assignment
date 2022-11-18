import './App.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

function GridBox() {
    const [nagpurcity,setnagpurCity]=useState()
    const [mumbaicity,setnmumbaiCity]=useState()
    const [punecity,setpuneCity]=useState()
    const [hydcity,sethydCity]=useState()
    const [delhicity,setdelhiCity]=useState()
    const [nasikcity,setnasikCity]=useState()
    const [nagpurtemp,setnagpurTemp]=useState()
    const [mumbaitemp,setmumbaiTemp]=useState()
    const [punetemp,setpuneTemp]=useState()
    const [hydtemp,sethydTemp]=useState()
    const [delhitemp,setdelhiTemp]=useState()
    const [nasiktemp,setnasikTemp]=useState()
    const [data,setData]=useState([])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=nagpur&aqi=no").then((response)=>{
            console.log(response.data)
            setnagpurCity(response.data.location.name)
            setnagpurTemp(response.data.current.temp_c)
           // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=pune&aqi=no").then((response)=>{
            console.log(response.data)
            setpuneCity(response.data.location.name)
            setpuneTemp(response.data.current.temp_c)
           // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=mumbai&aqi=no").then((response)=>{
            console.log(response.data)
           setnmumbaiCity(response.data.location.name)
            setmumbaiTemp(response.data.current.temp_c)
           // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=Hyderabad&aqi=no").then((response)=>{
            console.log(response.data)
            sethydCity(response.data.location.name)
          sethydTemp(response.data.current.temp_c)
           // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=Delhi&aqi=no").then((response)=>{
            console.log(response.data)
            setdelhiCity(response.data.location.name)
            setdelhiTemp(response.data.current.temp_c)
           // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])
    useEffect(()=>{
        console.log("call API")
        axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q=Nasik&aqi=no").then((response)=>{
            console.log(response.data)
            setnasikCity(response.data.location.name)
           setnasikTemp(response.data.current.temp_c)
            // setData({"city":response.data.location.name,"temp":response.data.current.temp_c})
        })
    },[])

    return (
        <div className="App">
           <h1 style={{color:"red"}}>Grid Box</h1>
           <div className="grid"> 
     
<div className='box1'>
{nagpurtemp}<sup>0</sup>c<br/>
  {nagpurcity}

</div>
<div className='box2'>
{punetemp}<sup>0</sup>c<br/>
  {punecity}
    </div>

<div className='box3'>
{mumbaitemp}<sup>0</sup>c<br/>
  {mumbaicity}
</div>


<div className='box4'>
{hydtemp}<sup>0</sup>c<br/>
  {hydcity}
</div>
<div className='box5'>
{delhitemp}<sup>0</sup>c<br/>
  {delhicity}
</div>
<div className='box6'>
{nasiktemp}<sup>0</sup>c<br/>
  {nasikcity}
</div>
 
</div>
        </div>
    );
}

export default GridBox;
