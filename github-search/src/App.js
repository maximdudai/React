import React, {useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';
import SearchProfile from './components/SearchProfile/SearchProfile';

import './App.css';


function App() {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    
    function setProfileName(name) {
        setUserName(name.target.value);
        console.log(name.target.value);
    }

    const onProfileSearch = async () => {
        const profileData = await axios.get(`https://api.github.com/users/${userName}`)
        setUserData(profileData);
    };

    return (
    <div className="App w-full flex flex-col justify-center items-center">
        <Navbar />
        <SearchProfile setFindProfile={setProfileName} btnGetUserData={onProfileSearch}/>  
        {
            !userData.length ?
                <div className='card flex flex-col justify-between w-52 mt-5 h-1/2 bg-slate-600 p-2 rounded'>
                    <div className='invalidProfileImage flex justify-center'>
                        <img 
                            className='img w-1/4'
                            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                            alt='GitHub Logo'
                        />
                    </div>

                    <div className='invalidProfileError text-center bg-slate-900 rounded mt-3'>
                        <span className='text-white text-sm text-center uppercase'>{errorMessage}</span>
                    </div>
                </div>
            :
            <DisplayProfile 
                img_url={userData?.avatar_url}
                name={userData?.login}
                id={userData?.id}
                Followers={userData?.followers}
                Following={userData?.following}
                since={userData?.created_at}
                twitter={userData?.twitter_username}
                location={userData?.location}
                company={userData?.company}
            />
        }

    </div>
    );
}

export default App;
