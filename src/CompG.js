import './App.css';
import React, { createContext } from 'react';
import CompH from './CompH';

const Fname = createContext();
function CompG() {

    return (
        <div >
            <Fname.Provider value={"Parent Component"}>
                <CompH />
            </Fname.Provider>

        </div>
    );
}

export default CompG;
export { Fname }