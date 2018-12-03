import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {firebaseConnect} from './constant/firebaseConnect';
class App extends Component {
  render() {
    console.log(firebaseConnect);//check firebase run
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
