import React, { Component } from 'react';
import './../css/user.css';
import  {connect} from 'react-redux';
import {onViewFollower,onViewFollowing, onEditProfile} from '../action/userAction';
import ListFollow from './ListFollow';
import { VIEW_FOLLOWER, VIEW_FOLLOWING, EDIT_PROFILE} from "../constant/ActionTypes";
import Modal from 'react-awesome-modal';
import {getAccountInfo, getAccountInfoByPublicKey, onUpdateAccountName} from '../server-apis/account-api'

const username = "Bùi Châu Minh Tùng";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleFollowing : false,
      visibleFollower : false,
      visibleEditProfile: false,
        accoutName: '',
        secretKey: null,
        account: null,
        name: '',
        followings: {
            isShow: false,
            data: [],
        },
        followers: {
            isShow: false,
            data: [],
        },
    }
  }
  
  // state = {
  //   isOwner: true,
  //   selected: "posts"
  // };

    componentDidMount(){
      this.readAccountInfo();
    }

    readAccountInfo = async () =>{


      let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
      let account = await getAccountInfo(secretKey);
      this.setState({
          account: account,
      })
    };

    onClickFollowing = () => {
    // this.setState({
    //     selected: "following"
    // });
    this.props.onViewFollowing();
    this.setState({
      visibleFollowing : true
    });
    
  };

  onClickFollower = () => {
      // this.setState({
      //     selected: "followers"
      // });

      this.props.onViewFollower();
      this.setState({
        visibleFollower : true
      });
  };

  onEditProfile = () => {
    // this.setState({
    //     selected: "following"
    // });
    this.props.onEditProfile();
    this.setState({
      visibleEditProfile : true
    });
  };

  // openModal = ()=> {
  //   this.setState({
  //     visibleFollower : true, 
  //     visibleFollowing : true
  //   });
  // }

  closeFollowModal = () => {
      this.setState({
        visibleFollower : false,
        visibleFollowing : false,
        visibleEditProfile: false,
          followings: {
              isShow: true,
          },
      });
  };


  loadListFollowings = async () =>{

      if(this.state.followings.isShow === false) {
          let addresses = this.state.account.followings;

          var datas = [];
          for (var index = 0; index < addresses.length; index++) {
              let address = addresses[index].address;
              let account = await getAccountInfoByPublicKey(address);
              alert(account.displayName);
              datas.push( <ListFollow key={index} followType="Following" followIcon="ok" name={account.displayName}/>);
              datas.push( <ListFollow key={index}
                                      followType="Following"
                                      followIcon="ok"
                                      name={account.displayName}/>);
          }

          console.log(datas);
          this.setState({
              followings: {
                  isShow: true,
                  data: datas,
              },
          });
      }
  };

  loadListFollowers = async () =>{
      if(this.state.followers.isShow === false) {
          let addresses = this.state.account.followers;

          var datas = [];
          for (var index = 0; index < addresses.length; index++) {
              let address = addresses[index].address;
              let account = await getAccountInfoByPublicKey(address);
              datas.push( <ListFollow key={index} followType="Follower" followIcon="plus" name={account.displayName}/>);
          }

          console.log(datas);
          this.setState({
              followers: {
                  isShow: true,
                  data: datas,
              },
          });
      }
  };

  createViewFollowingComponent = (text) =>{

        this.loadListFollowings();
        return (
            <div>
              <Modal
              visible={this.state.visibleFollowing}
              width="350"
              height="500"
              effect="fadeInUp"
              onClickAway={() => this.closeFollowModal()}>
                  {this.state.followings.data}

            </Modal>
            </div>
        )
  };

  handleChange = (event) => {
      let name = event.target.name;
      let value = event.target.value;

      this.setState({
          [name]: value,
      });
  };
  createViewFollowerComponent = (text) =>{
      this.loadListFollowers();
    return (
        <div>
          <Modal 
          visible={this.state.visibleFollower} 
          width="350" 
          height="500" 
          effect="fadeInUp" 
          onClickAway={() => this.closeFollowModal()}>
              <div>
                  <h1>List of Follower</h1>
                  {this.state.followers.data}
                  <a href="javascript:void(0);" onClick={() => this.closeFollowModal()}>Close</a>
              </div>
          </Modal>
        </div>
    )
  };

  onUpdateProfile = async (e) => {
      e.preventDefault();
      var newName = this.state.accoutName;
      await onUpdateAccountName(this.props.secretKey, newName);
          this.state.account.displayName = newName;
          this.setState({
              account: this.state.account,
          })


  };

  createViewEditProfile = (text) => {
      const inputForm = {
        float: "left"
      };
  
      const form = {
          marginLeft: "5vh",
          marginRight: "5vh"
      }
  
  const closeBtn = {
      color: "white",
      marginLeft: "3vh"
  };


    return (
      <div>
         <Modal 
          visible={this.state.visibleEditProfile} 
          width="350" 
          height="500" 
          effect="fadeInUp" 
          onClickAway={() => this.closeFollowModal()}>
              <div>
              <h1>Edit Profile</h1>
                   <form style={form}>
                        <div className="form-group">
                            <label style={inputForm} htmlFor="username" ><span className="glyphicon glyphicon-user"  /> Username:</label>
                            <input
                                name="accoutName"
                                type="text"
                                className="form-control"
                                id="username"
                                value={this.state.accoutName}
                                onChange={this.handleChange}/>
                        </div>

                        <button href="javascript:void(0);" id="btn-update-name" type="button" className="btn btn-primary"  onClick={this.onUpdateProfile}>Update</button>
                        
                    </form>
                  <a href="javascript:void(0);" onClick={() => this.closeFollowModal()}>Close</a>
              </div>
          </Modal>
      </div>
    )
  };

   render() {
      const avatarUrl = "https://media.tintucvietnam.vn/uploads/medias/2018/01/28/1024x1024/mot-dem-khong-ngu-vi-nhung-hinh-anh-tuyet-dep-nay-cua-tran-chung-ket-u23-chau-a-bb-baaadedKLx.jpg?v=1517078417042";

      var account = this.state.account;
      var viewComponent = null;
        switch (this.props.userAction.view) {
            case VIEW_FOLLOWER:
                viewComponent = this.createViewFollowerComponent(VIEW_FOLLOWER);
                console.log(viewComponent);
                break;
            case VIEW_FOLLOWING:
                viewComponent = this.createViewFollowingComponent(VIEW_FOLLOWING);
                console.log(viewComponent);
                break;
            case EDIT_PROFILE:
                viewComponent = this.createViewEditProfile(EDIT_PROFILE);
                console.log(viewComponent);
                break;
        }
        //navbar

       // var tweetContent = this.createCompoent(this.props.navbarAction.content);

        //var userInfoText = this.createCompoent(this.props.userInfoAction.view);

        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                    <div className="avatar-img">
                        <img href="#" className="img-thumbnail" src={avatarUrl}/>
                    </div>
                      <a><div className="username" onClick={() => this.onEditProfile()}>{account && account.displayName != ''? account.displayName: 'NAME NULL'}</div></a>
                        <a><div className="username">balance: {account && account.balance != ''? account.balance: 0}</div></a>
                        <a><div className="username">energy : {account && account.bandwidth != ''? account.bandwidth: 0}</div></a>

                        <div className="row">
                       
                        <div className="col-xs-6">
                          <h5>
                            <small>FOLLOWING</small>
                            {/* <div onClick={() =>this.onClickFollowing()}><a href="#">251</a></div> */}
                            <div onClick={() => this.onClickFollowing()}><a>{account? account.followings.length : -1}</a></div>
                          </h5>
                        </div>
                        <div className=" col-xs-6">
                          <h5>
                            <small>FOLLOWERS</small>
                            <div onClick={() => this.onClickFollower()}><a href="#">{account? account.followers.length: -1}</a></div>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>   
                  {viewComponent}   
            </div>
        );
    }
}

var mapDispatchToProps = (dispatch) =>{
    return{
        onViewFollower: () =>{
            dispatch(onViewFollower());
        },
        onViewFollowing: () =>{
            dispatch(onViewFollowing())
        },
        onEditProfile: () => {
          dispatch (onEditProfile());
        }
        
    }
};

var mapStateToProps = state =>{
  return{

      secretKey: state.loginReducer.secretKey,
      userAction: state.userReducer,
      // navbarAction: state.navbarReducer,
      // userInfoAction: state.userInfoReducer,

  }
};


export default connect(mapStateToProps,mapDispatchToProps)(User);