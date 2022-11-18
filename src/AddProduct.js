import { useState } from "react";
import Table from 'react-bootstrap/Table';

function AddProduct() {
    const [name, setName] = useState()
    const [amount, setAmount] = useState()
    const [data, setData] = useState([])
    function formSub() {
        data.push({ name: name, amount: amount });
        setData([...data])
    }
    function deleteArray(id){
const newArray=data.filter((valdata)=>{
    if(valdata.name!==id){
        return valdata;
    }
})
setData([...newArray])
    }
    function editArray(id){
const editArray1=data.map((valData)=>{
    if(valData.name===id){
        valData.name=name;
        valData.amount=amount;
    }
    return valData;
})
setData([...editArray1]);
    }
    return (
        <div>
            <h1 style={{ color: "red" }}>Add Product</h1><br />
            Product Title : <input type="text" placeholder="Enter Product Name" autoComplete="off" onChange={(e) => setName(e.target.value)} /><br /><br />
            Amount: <input type="text" placeholder="Enter Amount" autoComplete="off" onChange={(e) => setAmount(e.target.value)} /><br /><br />
            <button onClick={() => formSub()}>Buy</button><br /><br />
            Data is : {JSON.stringify(data)}<br /><br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Amount</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => {
                            return (
                                <tr id="i">
                                    <td>{val.name}</td>
                                    <td>{val.amount}</td>
                                 <button onClick={()=>deleteArray(val.name)}> Delete </button>
                                   <button onClick={()=>editArray(val.name)}> Edit </button>
                                </tr>
                              
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default AddProduct;