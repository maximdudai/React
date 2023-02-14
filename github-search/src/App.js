import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchProfile from './components/SearchProfile/SearchProfile';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';

function App() {

    const [profileName] = useState('');

    const onSearchChange = (name) => {
        profileName(name);
    }

    return (
    <div className="App w-full flex flex-col justify-center items-center">
        <Navbar />
        
        <SearchProfile searchChange={onSearchChange}/>   
        <div className='container flex justify-center'>
            <DisplayProfile />     
        </div>
    </div>
    );
}

export default App;
