
import './App.css';


import {  useState } from 'react';


function AddArrayApp() {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [data, setdata] = useState([])
    function AddArray() {
        data.push({ namekey: name, pricekey: price })
        setdata([...data])
    }
    function deleteArray(id){
const newArray=data.filter((valData)=>{
    if(valData.namekey!==id){
        return valData;
    }
})
setdata([...newArray])
    }
    function EditArray(id){
const editArray=data.map((valData)=>{
    if(valData.namekey===id){
        valData.namekey=name;
        valData.pricekey=price;

    }
    return valData;
})
setdata([...editArray])
    }
    return (
        <div className="App">
            <h1>Add ,Remove & Update Array</h1>
            <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" placeholder='enter price' onChange={(e) => setPrice(e.target.value)} /><br /><br />
            <button onClick={() => AddArray()}>Add Array</button><br /><br />
            Add Array is : {JSON.stringify(data)}
            {
                data.map((val, index) => {
                    return (
                        <div>
                            {val.namekey}
                            {val.pricekey}
                          <button onClick={()=>deleteArray(val.namekey)}>Delete</button>
                          <button onClick={()=>EditArray(val.namekey)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AddArrayApp;
