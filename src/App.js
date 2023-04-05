import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }


    render() {
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) // This grabs all robots
            // But when "searchfield" is modified -> filtered robot looks for the given name
        })
        return (
            // SearchBox -- You can create methods that modify the "this.states" that we supply.
            // CardList -- We first supplied it with "all robots" - now we supply it with filtered robots
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} /> 
            </div>
        
        )
    }
}
    


export default App;