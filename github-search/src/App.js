import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar/Navbar';
import DisplayProfile from './components/DisplayProfile/DisplayProfile';
import SearchProfile from './components/SearchProfile/SearchProfile';

import './App.css';
import SearchButton from './components/SearchProfile/SearchButton';


class App extends Component {

    constructor() {
        super()
        this.state = {
            userName: 'maximdudai',
            userData: [],
        }
        this.onProfileSearch = this.onProfileSearch.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/maximdudai`)
        .then((res) => {
            this.setState({
                userData: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    setProfileName = (event) => {
        this.setState({userName: event});
    }

    onKeyboardPressed = (e) => {
        if(e === 'Enter') {
            this.onProfileSearch();
        }
    };

    onProfileSearch = () => {
        if(!this.state.userName.length)
            return;

        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then((res) => {
                const responseData = res.data;
                this.setState({userData: responseData});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App w-full flex flex-col justify-center items-center">
                <Navbar />

                <div className='searchElements mt-10 flex flex-row justify-center items-center w-1/3'>
                    <SearchProfile setFindProfile={(event) => this.setProfileName(event.target.value)}  onEnterPressed={(e) => this.onKeyboardPressed(e.key)}/>  
                    <SearchButton onButtonClicked={this.onProfileSearch}/>
                </div>

                <DisplayProfile 
                    bio={this.state.userData?.bio}
                    img_url={this.state.userData?.avatar_url}
                    name={this.state.userData?.login}
                    id={this.state.userData?.id}
                    Followers={this.state.userData?.followers}
                    Following={this.state.userData?.following}
                    since={this.state.userData?.created_at}
                    twitter={this.state.userData?.twitter_username}
                    location={this.state.userData?.location}
                    company={this.state.userData?.company}
                />

            </div>
        )
    }
}

export default App;
