import './App.css';
import React, { createContext } from 'react';

import CompE from './CompE';

const BioData=createContext()
function CompD() {

    return (
        <div >
            <BioData.Provider value={"Parent Class"}>
                <CompE />
            </BioData.Provider>
        </div>
    );
}

export default CompD;
export { BioData }