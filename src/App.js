import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,HashRouter, Route, Switch} from 'react-router-dom';
import {Router} from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import TransactionHistory from './components/TransactionHistory';
import {Redirect} from 'react-router';

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
        <BrowserRouter>
              <div className="App">
                      <Route path="/" component={Login}/>
                      <Route path="/home" component={Home}/>
                      <Route path="/home#" component={Home}/>
                      <Route path="/Profile" component={Profile}/>
              </div>
        </BrowserRouter>

        // <BrowserRouter>
        //       <div className="App">
        //               <Route path="/" component={Login}/>
        //               <Route path="/home" component={Home}/>
        //               <Route path="/home#" component={Home}/>
        //       </div>
        // </BrowserRouter>
        <Profile/>
       // <Profile/>
    );
  }
}

export default App;
