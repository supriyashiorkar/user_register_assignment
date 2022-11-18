import Propdrill2 from "./Propdrill2";

function Propdrill1(props){
    return (
        <div>
            <h1 style={{color:"red"}}>Props Drilling Example</h1><br/>
            <h1>Product 1 : {props.amount}</h1>
<Propdrill2  amount={props.amount}/>
        </div>
    )
}
export default Propdrill1;