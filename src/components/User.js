import React, { Component } from 'react';
import './../css/user.css';
import  {connect} from 'react-redux';
import {onViewFollower,onViewFollowing} from '../action/userAction';
import ListFollow from './ListFollow';
import { VIEW_FOLLOWER, VIEW_FOLLOWING} from "../constant/ActionTypes";
import Modal from 'react-awesome-modal';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleFollowing : false,
      visibleFollower : false
    }
  }
  // state = {
  //   isOwner: true,
  //   selected: "posts"
  // };  


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

  // openModal = ()=> {
  //   this.setState({
  //     visibleFollower : true, 
  //     visibleFollowing : true
  //   });
  // }

  closeFollowModal = () => {
      this.setState({
        visibleFollower : false,
        visibleFollowing : false  
      });
  }
  
  
  createViewFollowingComponent = (text) =>{
    
    return (
        <div>
          <Modal 
          visible={this.state.visibleFollowing} 
          width="350" 
          height="500" 
          effect="fadeInUp" 
          onClickAway={() => this.closeFollowModal()}>
          <div>
                <h1>List of Following</h1>
                <ListFollow followType="Following" followIcon="ok"/>
                <ListFollow followType="Following" followIcon="ok"/>
                <ListFollow followType="Following" followIcon="ok"/>
                <ListFollow followType="Following" followIcon="ok"/>
                <a href="javascript:void(0);" onClick={() => this.closeFollowModal()}>Close</a>
            </div>
        </Modal>
        </div>
    )
  };
  createViewFollowerComponent = (text) =>{
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
                  <ListFollow followType="Follower" followIcon="plus"/>
                  <ListFollow followType="Follower" followIcon="plus"/>
                  <ListFollow followType="Follower" followIcon="plus"/>
                  <ListFollow followType="Follower" followIcon="plus"/>
                  <a href="javascript:void(0);" onClick={() => this.closeFollowModal()}>Close</a>
              </div>
          </Modal>
        </div>
    )
  };
  render() {
      const avatarUrl = "https://media.tintucvietnam.vn/uploads/medias/2018/01/28/1024x1024/mot-dem-khong-ngu-vi-nhung-hinh-anh-tuyet-dep-nay-cua-tran-chung-ket-u23-chau-a-bb-baaadedKLx.jpg?v=1517078417042";
      // const { isOwner } = this.state;
      const username = "Bùi Châu Minh Tùng";
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
                      <div className="username">{username}</div>
                      <div className="row">
                        <div className="col-xs-3">
                          <h5>
                            <small>TWEETS</small>
                            <div>15</div>
                          </h5>
                        </div>
                        <div className="col-xs-4">
                          <h5>
                            <small>FOLLOWING</small>
                            {/* <div onClick={() =>this.onClickFollowing()}><a href="#">251</a></div> */}
                            <div onClick={() => this.onClickFollowing()}><a href="#">251</a></div>
                          </h5>
                        </div>
                        <div className=" col-xs-5">
                          <h5>
                            <small>FOLLOWERS</small>
                            <div onClick={() => this.onClickFollower()}><a href="#">251</a></div>
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
        }
    }
};

var mapStateToProps = state =>{
  return{
      userAction: state.userReducer,
      // navbarAction: state.navbarReducer,
      // userInfoAction: state.userInfoReducer,

  }
};


export default connect(mapStateToProps,mapDispatchToProps)(User);