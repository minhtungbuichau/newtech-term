import React, { Component } from 'react';
import './../css/login.css';
import './../css/bootstrap.css';
import './../../node_modules/normalize.css';
import  {connect} from 'react-redux';

class Login extends Component {
    render() {
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
                <button type="submit" className="btn btn-primary" onClick= {() => this.getSecretKey()}>Login</button>
              </form>
            </div>
          </div>
          </div>
      </div>

        );
    }

    getSecretKey = () =>  {
        var key = document.getElementById('inputSecretKey').value;
        console.log(key);
        alert (key);
    }

}

export default Login;