import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './app.css';

class App extends React.Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json() )
            .then(users=>  this.setState({robots:users}));

        
    }
    onSearchChange=(event) =>  {
        this.setState({searchfield:event.target.value})
    }
       

    render() {
        const filteredrobots = this.state.robots.filter(robots=> {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList robots={filteredrobots}/>
            </div>
        );
     }
}
    
    

export default App;