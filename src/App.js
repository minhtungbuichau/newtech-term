import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import TransactionHistory from './components/TransactionHistory' 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <Login/> */}
        {/* <TransactionHistory/> */}
      </div>
    );
  }
}

export default App;
