import React, { Component } from 'react';
import ListFollow from "./ListFollow";
import FollowingItem from "./followingItem";
import {connect} from 'react-redux';
import  {getUsers} from '../server-apis/users-api';
import {getAccountInfo} from "../server-apis/account-api";

class RightColumn extends Component {


    constructor(props) {
        super(props);
        this.state = {
          listFollowings: [],
        }
    }

    componentDidMount(){
      this.getAllUserForFollowing();
    };

    getAllUserForFollowing = async ()=>{

        let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        let account = await getAccountInfo(secretKey);
        alert('load.............');
        let result = await getUsers(secretKey);
        let items = result.data;
        var listComponent = [];

        for(var index = 0; index < items.length; index++){
            var item = items[index];
            var base64String = null;
            if(item.avatar) {
                base64String = btoa(String.fromCharCode(...new Uint8Array(item.avatar.data)));
            }
            listComponent.push(
                <FollowingItem
                    key={index}
                    followType="Follower"
                    followIcon="plus" name={item.displayName}
                    avatar={base64String? base64String : null}
                    publicKey={item.public_key}
                />);
        }

        this.setState({
            listFollowings: listComponent,
        });
    };

    render() {
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        Who to follow
                      </h3>
                    </div>
                    <div className="panel-body">
                        {this.state.listFollowings}
                    </div>
                    <div className="panel-footer">
                      <a href="www.google.it">
                        <span className="glyphicon glyphicon-user" />
                        Find people you know
                      </a>
                    </div>
                  </div>
                  
            </div>
        );
    }
}

var mapStateToProps = state =>{
    return{

        secretKey: state.loginReducer.secretKey,
        userAction: state.userReducer,
        // navbarAction: state.navbarReducer,
        // userInfoAction: state.userInfoReducer,

    }
};

export default connect(mapStateToProps, null) (RightColumn);