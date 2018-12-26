import React, { Component } from 'react';
import './../css/profile.css';
import './../css/bootstrap.css'
import PostItem from './PostItem'
import Navbar from './Navbar'
class Profile extends Component {
    render() {
        const avatarUrl = "https://media.tintucvietnam.vn/uploads/medias/2018/01/28/1024x1024/mot-dem-khong-ngu-vi-nhung-hinh-anh-tuyet-dep-nay-cua-tran-chung-ket-u23-chau-a-bb-baaadedKLx.jpg?v=1517078417042";
        const justify ={
            textAlign: "center"
        }
        
        return (
            <div style={justify}>
                 <Navbar/>
               <div className="container" >
                    <div className="row">
                        <div className="col-sm-3">
                        <div className="panel panel-default">
                                <div className="panel-body">
                                <img href="#" className="img-thumbnail" src={avatarUrl}/>
                                <div className="username">Một bạn nào đó</div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h5>
                                            <small>FOLLOWING</small>
                                            <div ><a href="#">251</a></div>
                                        </h5>
                                    </div>
                                    <div className=" col-xs-6">
                                        <h5>
                                            <small>FOLLOWERS</small>
                                            <div ><a href="#">251</a></div>
                                        </h5>
                                    </div>
                                    </div>
                                </div>
                                <a><div className="username">Balance: </div></a>
                        <a><div className="username">Energy : </div></a>
                            </div>
                        </div>    
                        {/* Tabs */}
                        <div className="col-sm-9">
                            <PostItem/>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default Profile;