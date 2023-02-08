import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchRobo: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchRobo: event.target.value});
    }

    render() {
        const {robots, searchRobo} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchRobo.toLowerCase());
        });

        return !robots.length ?
            <h1>Loading..</h1> :
        (
            <div className="container text-center mt-5 text-3xl font-mono font-bold">
                <h1 className='uppercase'>robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Card robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
