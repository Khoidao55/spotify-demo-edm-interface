import React, { Component } from 'react';
import Homepage from './Components/Homepage/Homepage.js';
import Explore from './Components/Explore/Explore.js';
import Artist from './Components/Artist/Artist.js';

class App extends Component{

  constructor(){
    super(); 
    this.state = {
      route:"home",
    }
  }

  onRouteChange(data) {
    this.setState({route: data});
  };

  render(){
    return (
      <div className="App">
      <Artist/>
      </div>
    );
  }
}

export default App;
