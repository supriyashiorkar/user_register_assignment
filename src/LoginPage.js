import { useState } from "react";

function LoginPage(){
    const [email1,setEmail1]=useState()
    const [passwrd,setPasswrd]=useState()
    function formSub2(){
console.log(email1,passwrd)
    }
    return (
         <div>
            <h1 style={{color:"red"}}>Login</h1><br/>
        
           Email : <input type="text" placeholder="Enter Email" autoComplete="off" onChange={(e)=>setEmail1(e.target.value)}/><br/><br/>
           Password : <input type="text" placeholder="EnterPassword" autoComplete="off" onChange={(e)=>setPasswrd(e.target.value)}/><br/><br/>
           <button onClick={()=>formSub2()}>Login</button>
     
         </div>
    )
}
export default LoginPage;