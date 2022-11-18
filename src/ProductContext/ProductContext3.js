import { useContext } from "react";
import { contextProd } from "../App.js";


function ProductContext3(){
const product1=useContext(contextProd);
console.log("product1",product1)
    return (
<>
<h1>Product Context 3 # {product1.name} # {product1.age}</h1>
</>

    )
}
export default ProductContext3;