import React from 'react';
import Navbar from './navbar';
import Shop from './shop';
import Details from './details';

function App() { 

    //render multiple react functions at once
    return (
        <>
            <Navbar />
            <Shop />
            <Details />
        </>
    );
}


export default App;