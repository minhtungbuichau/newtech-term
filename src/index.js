import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {createStore} from  'redux';
import rootReducer from '././reducer/rootReducer'
import  {Provider} from  'react-redux';
import {firebaseConnect} from './constant/firebaseConnect';
import Login from "./components/Login";
import Home from "./components/Home"
var {Router,Route, hashHistory, IndexRoute} =  require('react-router');
var {HashRouter}  = require('react-router-dom');

const store = createStore(
    rootReducer,
);

console.log(firebaseConnect);//check firebase run

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
