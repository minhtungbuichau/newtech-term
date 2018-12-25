import React, { Component } from 'react';
import './../css/login.css';
import './../css/bootstrap.css';
import './../../node_modules/normalize.css';
import  {accoutLogin} from '../server-apis/account-api';
import  {connect} from 'react-redux';

import {onWriteTweet} from "../action/navBarAction";
import {onLogin} from  '../action/loginAction';
import {Redirect} from  'react-router-dom'
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

    render() {

        if(this.state.isLogin === true){
            return(
                <Redirect to="/home"/>
            );
        }
        return (
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                {/*---- Include the above in your HEAD tag --------*/}
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                {/*---- Include the above in your HEAD tag --------*/}
                <div className="container">
                    <h1 className="form-heading">login Form</h1>
                    <div className="login-form">
                    <div className="main-div">
                      <div className="panel">
                        <h2>Login</h2>
                        <p>Please enter your secret key</p>
                      </div>

                      <form id="Login">
                        <div className="form-group">
                          <input type="text" className="form-control" id="inputSecretKey" placeholder="Secret key "/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick= {this.getSecretKey}>Login</button>
                      </form>
                    </div>
                </div>

            </div>
            </div>
        );
    }

    redirectHome = () => {
        return (
            <Router>
                <Route exact path="/home" component={Home}/>
            </Router>
        );
    }

    getSecretKey = async (e) =>  {
        e.preventDefault();

        var secretKey = document.getElementById('inputSecretKey').value;

        let response = await accoutLogin(secretKey);
        console.log(response);
        if(response && response.data){
            let status = response.data.status;


            //login successfully
            if(status === 1){
                this.props.onLogin(secretKey);
                this.setState({
                    isLogin: true,
                });
            }

            //login failed
            else{
                //none

            }
        }
    }

}

var mapDispatchToProps = (dispatch) =>{
    return{
        onLogin: (secretKey) =>{
            dispatch(onLogin(secretKey));
        }
    };
};


export default connect(null,mapDispatchToProps)(Login);
