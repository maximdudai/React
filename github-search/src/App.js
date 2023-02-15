import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchProfile from './components/SearchProfile/SearchProfile';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';

function App() {

    const [findProfile] = useState('maximdudai');
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${findProfile}`)
        .then((res) => setUser(res.data));
    }, [findProfile]);

    
    const onSearchChange = (event) => {
        findProfile(event.target.value);
    }

    return (
    <div className="App w-full flex flex-col justify-center items-center">
        <Navbar />
        
        <SearchProfile searchChange={onSearchChange}/>   

        <div className='container flex justify-center'>
            <DisplayProfile 
                img_url={user.avatar_url}
                name={user.name}
                id={user.id}
                Followers={user.followers}
                Following={user.following}
                since={user.created_at}
                twitter={user.twitter_username}
                location={user.location}
                company={user.company}
            />     
        </div>
    </div>
    );
}

export default App;
