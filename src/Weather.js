import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

function Weather() {
const cityArray=["nagpur","pune","Mumbai","hyderabad","nasik","delhi"]
 const [citydata, setcityData] = useState([])
  useEffect(() => {
   let citydata=[];
    cityArray.map((cityname)=>{
     console.log("call API")
      axios.get("https://api.weatherapi.com/v1/current.json?key=4d481c5c275c489598c165306221111&q="+cityname+"&aqi=no").then((response) => {
        citydata.push(response.data)
        setcityData([...citydata])
       })
  
    
      }) 
    
  }, [])
  return (
    <div>
  <h1 style={{ color: "red" }}>Weather App</h1>
      {
        citydata.map((val,i)=>{
          return <div>
          
      <Card
        bg={'warning'}
        key={i}
        text={'dark'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>{val.current.temp_c}<sup>0</sup>c</Card.Header>
        <Card.Body>
          <Card.Title> {val.location.name} </Card.Title>
          <Card.Text>
            { val.location.country}
          </Card.Text>
        </Card.Body>
      </Card>
          </div>
        })
      }
      
    </div>
  )
}
export default Weather;