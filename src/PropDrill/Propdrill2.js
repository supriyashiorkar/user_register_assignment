import Propdrill3 from "./Propdrill3";

function Propdrill2(props){
    return (
        <div>
                 <h1>Product 2 : {props.amount}</h1>
                 <Propdrill3 amount={props.amount}/>
        </div>
    )
}
export default Propdrill2;