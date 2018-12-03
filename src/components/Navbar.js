import React, { Component } from 'react';
import ReactDOM from "react-dom";
class Navbar extends Component {
    

    
    render() {
       
        return (
            <div>
                <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
                    <ul className="nav navbar-nav">
                        <li className="active">
                        <a href="#fake"><span className="glyphicon glyphicon-home" /> Home</a>
                        </li>
                        <li>
                        <a href="#fake"><span className="glyphicon glyphicon-bell" /> Notifications</a>
                        </li>
                        <li>
                        <a href="#fake"><span className="glyphicon glyphicon-envelope" /> Messages</a>
                        </li>
                    </ul>
                    <div className="navbar-form navbar-right">
                        {/* <div className="form-group has-feedback">
                        <input type="text" className="form-control-nav" id="search" aria-describedby="search1" />
                        <span className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true" />
                        </div> */}
                        <button className="btn btn-primary" type="submit" aria-label="Left Align" >
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"> </span> Tweet
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Navbar;