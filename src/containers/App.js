import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots:users }))
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }


    render() {
        const { robots, searchfield } = this.state;
        
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) 
            // This grabs all robots
            // But when "searchfield" is modified -> filtered robot looks for the given name
        })
        return !robots.length ?
        <h1>Loading...</h1> :
        (
            // SearchBox -- You can create methods that modify the "this.states" that we supply.
            // CardList -- We first supplied it with "all robots" - now we supply it with filtered robots
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} /> 
                </Scroll>
            </div>
            
        )
        
    }
}
    


export default App;