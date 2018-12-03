import React, { Component } from 'react';
import Navbar from './Navbar';
import User from './User';
import UserInfo from './UserInfo';
import PostList from './PostList';
import RightColumn from './RightColumn';
import './../css/profile.css';
import './../css/bootstrap.css';
import './../../node_modules/normalize.css';
class Home extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <User/>
                  <UserInfo/>
                </div>
                <div className="col-sm-6">
                  <PostList/>
                </div>
                <div className="col-sm-3">
                <RightColumn/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Home;