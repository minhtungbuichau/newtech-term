import React, { Component } from 'react';
import Navbar from './Navbar';
import User from './User';
import UserInfo from './UserInfo';
import PostList from './PostList';
import RightColumn from './RightColumn';
import './../css/profile.css';
import './../css/bootstrap.css';
import './../../node_modules/normalize.css';
import {connect} from 'react-redux';
import {EDIT_USER_INFO, VIEW_FOLLOWER, VIEW_FOLLOWING} from "../constant/ActionTypes";
import userInfoReducer from "../reducer/userInfoReducer";

class Home extends Component {

    constructor(props) {
        super(props);

    }
    render() {  
        //navbar

       // var tweetContent = this.createCompoent(this.props.navbarAction.content);

        //var userInfoText = this.createCompoent(this.props.userInfoAction.view);


        return (
            <div>
            <Navbar/>
            <div className="container">
               
                {/* {//tweetContent}
                {userInfoText} */}
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

var mapStateToProps = state =>{
    return{
        userAction: state.userReducer,
        navbarAction: state.navbarReducer,
        userInfoAction: state.userInfoReducer,

    }
};

export default connect(mapStateToProps,null)(Home);