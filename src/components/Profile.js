import React, { Component } from 'react';
import './../css/profile.css';
import './../css/bootstrap.css'
import PostItem from './PostItem'
import Navbar from './Navbar'
import {getAccountInfo, getAccountInfoByPublicKey} from "../server-apis/account-api";
import ListFollow from "./ListFollow";
import Tabs from "./Tabs";
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state ={
            account: null,
            posts: [],
            followers:[],
            followings: []
        }
    }

    componentDidMount(){
        this.readAccountInfo();
    }
    readAccountInfo = async () => {
        let publicKey = JSON.parse(localStorage.getItem('currentProfile')).public_key;
        let account = await getAccountInfoByPublicKey(publicKey);
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
            var base64String = null;
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

        let addresses1 = account.followers;

        var followers = [];
        for (var index = 0; index < addresses1.length; index++) {
            let address = addresses1[index].address;
            let account1 = await getAccountInfoByPublicKey(address);
            var base64String = null;
            if(account1.avatar) {
                //console.log(account.avatar.data);
                base64String = btoa(String.fromCharCode(...new Uint8Array(account1.avatar.data)));
            }
            followers.push( <ListFollow key={index}
                                    followType=""
                                    followIcon=""
                                    name={account1.displayName}
                                    avatar={base64String? base64String : null}
                                    publicKey={account1.public_key}
            />);
        }

        let addresses2 = account.followings;

        var followings = [];
        for (var index = 0; index < addresses2.length; index++) {
            let address = addresses2[index].address;
            let account2 = await getAccountInfoByPublicKey(address);
            var base64String = null;
            if(account2.avatar) {
                //console.log(account.avatar.data);
                base64String = btoa(String.fromCharCode(...new Uint8Array(account2.avatar.data)));
            }
            followings.push( <ListFollow key={index}
                                        followType=""
                                        followIcon=""
                                        name={account2.displayName}
                                        avatar={base64String? base64String : null}
                                        publicKey={account2.public_key}
            />);
        }

        this.setState({
            account: account,
            posts: posts,
            followers: followers,
            followings: followings
        })

    };



    render() {
        const avatarUrl = "https://media.tintucvietnam.vn/uploads/medias/2018/01/28/1024x1024/mot-dem-khong-ngu-vi-nhung-hinh-anh-tuyet-dep-nay-cua-tran-chung-ket-u23-chau-a-bb-baaadedKLx.jpg?v=1517078417042";
        const justify ={
            textAlign: "center"
        };
        const borderFollow = {
            borderRight: "1px solid silver"
        }

        var base64String = null;
        if(this.state.account &&  this.state.account.avatar) {
            //console.log(account.avatar.data);
            base64String = btoa(String.fromCharCode(...new Uint8Array(this.state.account.avatar.data)));
        }

        return (
            <div style={justify}>
                 <Navbar/>
               <div className="container" >
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="panel panel-default">
                                <div className="panel-body">
                                <img  className="img-thumbnail"
                                      src={ base64String? ('data:image/jpeg;base64,' + base64String) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBKleWYmhVwfnTTFepSUNVmHAwFsaJXm-zGCZclKfpTbTsZ0F_Q'}
                                      />
                                <div className="username">{this.state.account? this.state.account.displayName: 'not found'}</div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h5>
                                            <small>FOLLOWING</small>
                                            <div ><a href="#">{this.state.account? this.state.account.followings.length: 0}</a></div>
                                        </h5>
                                    </div>
                                    <div className=" col-xs-6">
                                        <h5>
                                            <small>FOLLOWERS</small>
                                            <div ><a href="#">{this.state.account? this.state.account.followers.length: 0}</a></div>
                                        </h5>
                                    </div>
                                    </div>
                                </div>
                                <a><div className="username">Balance: {this.state.account?  this.state.account.balance: 0}</div></a>
                        <a><div className="username">Energy : {this.state.account? this.state.account.bandwidth: 0}</div></a>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <Tabs>
                                <div label="Post">
                                    {this.state.posts}
                                </div>
                                <div label="FOLLOWING">
                                    <h5>FOLLOWING</h5>
                                    {this.state.followings}
                                </div>

                                <div label="FOLLOWER">
                                    <h5>FOLLOWING</h5>
                                    {this.state.followers}
                                </div>
                                <div label="TRANSACTIONS">
                                    Nothing to see here, this tab is <em>extinct</em>!
                                </div>
                            </Tabs>
                        </div>

                        {/*/!* Tabs *!/*/}


                    </div>
               </div>
            </div>
        );
    }
}

export default Profile;