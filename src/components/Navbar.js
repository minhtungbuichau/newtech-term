import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  {connect} from 'react-redux';
import  {onWriteTweet} from './../action/navBarAction';
import Modal from 'react-awesome-modal';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // contentPost: 'pham anh tuan',
            visible: false
        };
    }

    onWriteTweet = () =>{
        //   this.props.onWriteTweet(this.state.contentPost);
          this.props.onWriteTweet();
          this.setState({
            visible : true
            } );
    };
    closeTweetModal() {
        this.setState({
            visible : false
        });
    }


    

    createTweetComponent = (text) =>{
        return (
            <div>
              <Modal visible={this.state.visible} width="400" height="500" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                  <div>
                      <h1>Tweet</h1>
                      <p>Some Contents</p>
                      <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                  </div>
              </Modal>
            </div>
        )
      };

    render() {
       
        var tweetContent = this.createTweetComponent(this.props.navbarAction.content);
        
        return (
            <div>
                <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
                    <ul className="nav navbar-nav">
                        <li className="active">
                        <a href="#fake"><span className="glyphicon glyphicon-home" /> Home</a>
                        </li>
                        <li>
                        <a href="#fake"><span className="glyphicon glyphicon-bell" /> Notifications</a>
                        </li>
                        <li>
                        <a href="#fake"><span className="glyphicon glyphicon-envelope" /> Messages</a>
                        </li>
                    </ul>
                    <div className="navbar-form navbar-right">
                        {/* <div className="form-group has-feedback">
                        <input type="text" className="form-control-nav" id="search" aria-describedby="search1" />
                        <span className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true" />
                        </div> */}
                        <button className="btn btn-primary"
                                type="submit"
                                aria-label="Left Align"
                                onClick={this.onWriteTweet}
                        >
                        {/* {tweetContent} */}
                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"> </span> Tweet
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

var mapDispatchToProps = (dispatch) =>{
  return{
      onWriteTweet: (postContent) =>{
          dispatch(onWriteTweet(postContent));
      }
  };
};

var mapStateToProps = (state)=>{
    return{
        navbarAction: state.navbarReducer
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);