import React, { Component } from 'react';
import {connect} from 'react-redux';
import PostItem from './PostItem';
import {getAccountInfo, getAccountInfoByPublicKey} from "../server-apis/account-api";
import ListFollow from "./ListFollow";
class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: null,
            posts: [],

        }
    }

    componentDidMount(){
        this.readAccountInfo();
    }

    readAccountInfo = async () =>{
        let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        let account = await getAccountInfo(secretKey);
        var addresses = [];
        addresses.push(account.public_key);
        for(var index = 0; index < account.followings.length; index++){
            addresses.push(account.followings[index].address);
        }

        console.log(addresses);

        var posts = [];
        for (var index = 0; index < addresses.length; index++) {
            let address = addresses[index];
            let account = await getAccountInfoByPublicKey(address);
            let base64String = null;
            if(account.avatar) {
                //console.log(account.avatar.data);
                base64String = btoa(String.fromCharCode(...new Uint8Array(account.avatar.data)));
            }
            for(var postIndex = 0; postIndex < account.posts.length; postIndex++) {
                var content = account.posts[postIndex].content.text;
                posts = posts.concat(<PostItem
                    key={posts.length}
                    public_key={account.public_key}
                    avatar={base64String? base64String : null}
                    name={account.displayName}
                    content={content}/>)
            }
        }

        this.setState({
            account: account,
            posts: posts,
        })
    };

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                      {/* <div class="media">
                            <a class="media-left" href="#fake">
                                <img class="media-object img-rounded" src="http://placehold.it/35x35">
                            </a>
                            <div class="media-body">
                                <div class="form-group has-feedback">
                                    <label class="control-label sr-only" for="inputSuccess5">Hidden label</label>
                                    <input type="text" class="form-control" id="search2" aria-describedby="search">
                                    <span class="glyphicon glyphicon-camera form-control-feedback" aria-hidden="true"></span> */}
                      {/* <span id="search2" class="sr-only">(success)</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="panel-body">
                        {this.state.posts}
                    </div>
                  </div>
            </div>
        );
    }
}

var mapStateToProps = state =>{
    return{
        secretKey: state.loginReducer.secretKey,
    }
};
export default connect( mapStateToProps, null) (PostList);