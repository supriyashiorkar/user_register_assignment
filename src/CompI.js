import './App.css';
import React from 'react';
import { Fname } from './CompG'

function CompI() {

    return (
        <div >
            <Fname.Consumer>{(para)=>{
return  <h1>Context API Child Component</h1>
            }}
            </Fname.Consumer>
          
        </div>
    );
}

export default CompI;
