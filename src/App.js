import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom';
import {Router} from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import TransactionHistory from './components/TransactionHistory';
import Profile from './components/Profile'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loginAccount: null,
        };
    }

    render() {

    return (
        // <BrowserRouter>
        //       <div className="App">
        //               <Route path="/" component={Login}/>
        //               <Route path="/home" component={Home}/>
        //               <Route path="/home#" component={Home}/>
        //       </div>
        // </BrowserRouter>
        <Profile/>
    );
  }
}

export default App;
