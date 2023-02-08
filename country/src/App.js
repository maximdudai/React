import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            countries: [],
            country: null
        }
    }

    componentDidMount() {

        // https://restcountries.com/#sources

        fetch('https://restcountries.com/v3.1/all')
            .then(resp => resp.json())
            .then(items => this.setState({countries: items}))

    }

    render() {

        return (
            <div></div>
        )
    }
}
export default App;
