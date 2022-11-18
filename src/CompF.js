import './App.css';
import React, { useContext } from 'react';
import { BioData } from './CompD';
function CompF() {
const name=useContext(BioData)
   return (
        <div >
            <h1>UseContext Child Component vs : {name}</h1>
     </div>
    );
}

export default CompF;