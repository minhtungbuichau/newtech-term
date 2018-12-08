import React, { Component } from 'react';
import  {connect} from 'react-redux';
import {onHeartReact,onCommentReact,onShareReact} from '../action/postItemAction';
import Modal from 'react-awesome-modal';


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleHeart: false,
            visibleComment: false,
            visibleShare: false
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

    createViewHeartReactComponent = () => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleHeart} 
                width="350" 
                height="500" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>
                </Modal>
            </div>
        )
    }

    createViewCommentReactComponent = () => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleComment} 
                width="350" 
                height="500" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>

                </Modal>
            </div>
        )
    }

    createViewShareReactComponent = () => {
        return (
            <div>
                <Modal 
                visible={this.state.visibleShare} 
                width="350" 
                height="500" 
                effect="fadeInUp" 
                onClickAway={() => this.closeReactModal()}>

                </Modal>
            </div>
        )
    }
    
    
    render() {
        var postContent = "Thiệt ra mà nói, khi mình viết dòng này ra, mình cũng không hiểu tại sao nó lại xuất hiện ở đây";
        return ( 
            <div className="media">
                <a className="media-left" href="#fake">
                    <img alt="true" 
                    className="media-object img-rounded img-thumbnail" 
                    src="http://placehold.it/50x50" />
                </a>
                <div className="media-body">
                   <p>{postContent}</p>
                     <ul className="nav nav-pills nav-pills-custom">
                        <li><a href="#"><span className="glyphicon glyphicon-heart" />100</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-comment" />140</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-share" />50</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                    </ul>
                </div>
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

export default connect(null,mapDispatchToProps)(PostItem);