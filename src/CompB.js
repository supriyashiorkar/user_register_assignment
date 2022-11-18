import './App.css';
import React from 'react';
import CompC from './CompC';
function CompB({name}) {
   
   return (
        <div >
       
        <h1><CompC name={name}/></h1>
        </div>
    );
}

export default CompB;
