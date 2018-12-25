import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  {connect} from 'react-redux';
import  {onWriteTweet, onPayment, onShowTransaction} from './../action/navBarAction';
import TransactionHistory from './TransactionHistory';
import Modal from 'react-awesome-modal';
import { SHOW_TRANSACTION, PAYMENT, WRITE_POST } from '../constant/ActionTypes';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // contentPost: 'pham anh tuan',
            visible: false,
            visibleShowTransaction: false,
            visibleShowPayment: false,
            visibleTweet: false
        };
    }

    onWriteTweet = () =>{
        //   this.props.onWriteTweet(this.state.contentPost);
          this.props.onWriteTweet();
          this.setState({
            visibleTweet: true
            } );
    };

    onPayment = () => {
    
        this.props.onPayment();
        this.setState({
            visibleShowPayment: true   
        })
    
    }

    onShowTransaction = () =>{
        //   this.props.onWriteTweet(this.state.contentPost);
          this.props.onShowTransaction();
          this.setState({
            visibleShowTransaction : true
            } );
    };
    closeTweetModal() {
        this.setState({
            visible : false,
            visibleShowTransaction: false,
            visibleShowPayment: false,
            visibleTweet: false
        });
    }

    createTweetComponent = (text) =>{
        const form = {
            marginLeft: "3vh",
            marginRight: "3vh"
        }
        return (
            <div>
              <Modal visible={this.state.visibleTweet} width="600" height="300" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                  <div>
                    <form style={form}>
                        <div className="form-group">
                            <h1>Post</h1>
                            <textarea className="form-control" rows="5" id="comment"></textarea>
                        </div>
                            <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                    <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                  </div>
              </Modal>
            </div>
        )
      };

      createShowTransactionComponent = (text) =>{
        const transactionList = {
            overflow: "scroll"
        }
        return (
            <div>
              <Modal visible={this.state.visibleShowTransaction} width="700" height="500" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                  <div style ={transactionList}>
                      <h1>List of Transactions</h1>
                      <TransactionHistory/>
                      <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                  </div>
              </Modal>
            </div>
        )
      };

      createPayment = (text) => {
        const inputForm = {
            float: "left"
        }
        
        const form = {
            marginLeft: "5vh",
            marginRight: "5vh"
        }
        var publicKey = "GBH6HEN6KMDTI3TDD4EINUYJCG3AS6N5YROE2XNBETY2SSOWB3CYRH7S";
          return(
              <div>
                  <Modal visible={this.state.visibleShowPayment} width="600" height="500" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                    <div>
                        <h1>Payment</h1>
                            <form style={form}>
                                <div className="form-group">
                                    <label style={inputForm} htmlFor="sender" >Sender:</label>
                                    <input type="text" className="form-control" defaultValue={publicKey}/>
                                </div>
                                <div className="form-group">
                                    <label style={inputForm} htmlFor="amout">Amount:</label>
                                    <input type="text" className="form-control"   />
                                </div>
                                <div className="form-group">
                                    <label style={inputForm} htmlFor="receiver">Receiver:</label>
                                    <select className="form-control">
                                        <option>GLKAJFLKWJKJWENLKWFSKDLV</option>
                                        <option>GOADOPQIOPQWRZXAASDADAVX</option>
                                        <option>GASDJKFHKFGSDBFWEFMNBMNB</option>
                                        <option>GPUYITYUWERNVSHJDGIUHVJH</option>
                                    </select>
                                    {/* <input type="text" className="form-control"   /> */}
                                </div>
                                <div className="form-group">
                                    <label style={inputForm} htmlFor="message">Message:</label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                               
                            </form>
                        <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                    </div>
                </Modal>
              </div>
          )
      }

    render() {
       
        //var tweetContent = this.createTweetComponent(this.props.navbarAction.content);
        var viewNavbarComponent = null;
        //alert(this.props.navbarAction.action);
    
        switch (this.props.navbarAction.action) {
            case PAYMENT:
                viewNavbarComponent = this.createPayment(PAYMENT);
                break;
            case SHOW_TRANSACTION:
                viewNavbarComponent = this.createShowTransactionComponent(SHOW_TRANSACTION);
                break;
            case WRITE_POST:
                viewNavbarComponent = this.createTweetComponent(WRITE_POST);
                break;
            
        }
        return (
            <div>
                <div className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
                    <ul className="nav navbar-nav">
                        <li className="active">
                        <a href="#fake"onClick={() => this.onWriteTweet()}><span className="glyphicon glyphicon-home" /> Home</a>
                        </li>
                        <li>
                        <a href="#fake" onClick={() => this.onShowTransaction()}><span className="glyphicon glyphicon-usd" /> Transactions</a>
                        {viewNavbarComponent}
                        </li>
                        <li>
                        <a href="#" onClick={()=>this.onPayment()}><span className="glyphicon glyphicon-transfer" /> Payment</a>
                        </li>
                    </ul>
                    <div className="navbar-form navbar-right">
                        <button className="btn btn-primary"
                                type="submit"
                                aria-label="Left Align"
                                onClick={() =>this.onWriteTweet()}
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
      onWriteTweet: () =>{
          dispatch(onWriteTweet());
      },
      onShowTransaction: () => {
        dispatch(onShowTransaction());  
      },
      onPayment: () => {
        dispatch(onPayment());  
      }
  };
};

var mapStateToProps = (state)=>{
    return{
        navbarAction: state.navbarReducer,
        showTransactionAction: state.showTransactionReducer
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);