import React, { Component } from 'react';
import './../css/user.css';
class User extends Component {
  state = {
    isOwner: true,
    selected: "posts"
  };  

  getClassNameSelect = (type) => {
    let className = "navbar-item ";

    if (type === this.state.selected)
        return className + "selected";

    return className + "normal";
  }

  onClickFollowing = () => {
    this.setState({
        selected: "following"
    });
    //this.props.onViewFollowing();
  }

  onClickFollowers = () => {
      this.setState({
          selected: "followers"
      });
      //this.props.onViewFollower();
  }
  
  render() {
      const avatarUrl = "https://media.tintucvietnam.vn/uploads/medias/2018/01/28/1024x1024/mot-dem-khong-ngu-vi-nhung-hinh-anh-tuyet-dep-nay-cua-tran-chung-ket-u23-chau-a-bb-baaadedKLx.jpg?v=1517078417042";
      // const { isOwner } = this.state;
      const username = "Bùi Châu Minh Tùng";

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
                            <div><a href="#">15</a></div>
                          </h5>
                        </div>
                        <div className="col-xs-4">
                          <h5>
                            <small>FOLLOWING</small>
                            <div className={this.getClassNameSelect("following")} onClick={() =>this.onClickFollowing()}><a href="#">251</a></div>
                          </h5>
                        </div>
                        <div className=" col-xs-5">
                          <h5>
                            <small>FOLLOWERS</small>
                            <div className={this.getClassNameSelect("followers")} onClick={() =>this.onClickFollowers()}><a href="#">345</a></div>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>      
            </div>
        );
    }
}

export default User;        