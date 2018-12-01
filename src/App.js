import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import {firebaseConnect} from './constant/firebaseConnect';
class App extends Component {
  render() {
    console.log(firebaseConnect);//check firebase run
    return (
      <div className="App">
        <Profile/>
      </div>
    );
  }
}

export default App;
