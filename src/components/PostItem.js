import React, { Component } from 'react';
import  {connect} from 'react-redux';
import {onHeartReact,onCommentReact,onShareReact} from '../action/postItemAction';
import {HEART_REACT, COMMENT_REACT, SHARE_REACT} from './../constant/ActionTypes';
import Modal from 'react-awesome-modal';
import ListFollow from './ListFollow';


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleHeart: false,
            visibleComment: false,
            visibleShare: false,
        }
    }

    onClickHeart = () => {
        this.props.onHeartReact();
        this.setState({
            visibleHeart: true
        })
    }

    onClickComment = () => {
        this.props.onCommentReact();
        this.setState({
            visibleComment: true
        })
    }

    onClickShare = () => {
        this.props.onShareReact();
        this.setState({
            visibleShare: true
        })
    }

    closeReactModal = () => {
        this.setState({
            visibleShare: false,
            visibleComment: false,
            visibleHeart: false
        })
    }

    createViewHeartReactComponent = (text) => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleHeart} 
                width="350" 
                height="500" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>
                    <div>
                        <h1>List of Heart React</h1>
                        <ListFollow followType="Follower" followIcon="plus"/>
                        <ListFollow followType="Following" followIcon="ok"/>
                        <ListFollow followType="Follower" followIcon="plus"/>
                        <ListFollow followType="Following" followIcon="ok"/>
                        <a href="javascript:void(0);" onClick={() => this.closeReactModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )
    }

    createViewCommentReactComponent = (text) => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleComment} 
                width="650" 
                height="400" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>
                
                </Modal>
            </div>
        )
    }

    createViewShareReactComponent = (text) => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleShare} 
                width="350" 
                height="500" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>
                    <div>
                        <h1>Share List</h1>
                        <ListFollow followType="Follower" followIcon="plus"/>
                        <ListFollow followType="Following" followIcon="ok"/>
                        <ListFollow followType="Follower" followIcon="plus"/>
                        <ListFollow followType="Following" followIcon="ok"/>
                        <a href="javascript:void(0);" onClick={() => this.closeReactModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )
    }
    
    
    render() {
        var postContent = "Thiệt ra mà nói, khi mình viết dòng này ra, mình cũng không hiểu tại sao nó lại xuất hiện ở đây";
        var numberOfHeartReact = 100;
        var numberOfCommentReact = 140;
        var numberOfShareReact = 50;
        
        var viewComponent = null;
        switch (this.props.postItemAction.view) {
            case HEART_REACT: 
                viewComponent = this.createViewHeartReactComponent(HEART_REACT);
                break;
            case COMMENT_REACT:
                viewComponent = this.createViewCommentReactComponent(COMMENT_REACT);
                break;
            case SHARE_REACT: 
                viewComponent = this.createViewShareReactComponent(SHARE_REACT);
                break;
            default:
                break;
        }

        const accountName = {
            textAlign: "left"
        };
        function hexToBase64(str) {
            return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
        }
        return ( 
            <div className="media">
                <a className="media-left" href="#fake">
                    <img alt="true"
                    className="media-object img-rounded img-thumbnail"
                    src={ this.props.avatar? ('data:image/jpeg;base64,' + this.props.avatar) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBKleWYmhVwfnTTFepSUNVmHAwFsaJXm-zGCZclKfpTbTsZ0F_Q'}
                    width={50} height={50}
                    />
                </a>
                <div className="media-body">
                    <h5 style={accountName}>Đây là dòng tên của Tùng</h5>
                   <p>Đây là dòng demo</p>
                    <h5 style={accountName}>{this.props.name}</h5>
                   <p>{this.props.content}</p>
                     <ul className="nav nav-pills nav-pills-custom">
                        <li onClick={()=>this.onClickHeart()}><a href="#"><span className="glyphicon glyphicon-heart" />{numberOfHeartReact}</a></li>                 
                        <li onClick={()=>this.onClickComment()}><a href="#"><span className="glyphicon glyphicon-comment" />{numberOfCommentReact}</a></li>
                        <li onClick={()=>this.onClickShare()}><a href="#"><span className="glyphicon glyphicon-share" />{numberOfShareReact}</a></li>
                    </ul>
                </div>
                {viewComponent}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onHeartReact: () => {
            dispatch(onHeartReact());
        },
        onCommentReact: () => {
            dispatch(onCommentReact());
        },
        onShareReact: () => {
            dispatch(onShareReact());
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        postItemAction: state.postItemReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostItem);