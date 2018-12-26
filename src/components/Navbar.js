import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  {connect} from 'react-redux';
import  {onWriteTweet,onPayment, onShowTransaction} from './../action/navBarAction';
import TransactionHistory from './TransactionHistory';
import Modal from 'react-awesome-modal';
import { SHOW_TRANSACTION, PAYMENT, WRITE_POST } from '../constant/ActionTypes';
import {getAccountInfo, onAccountPayment, onPostContent} from "../server-apis/account-api";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // contentPost: 'pham anh tuan',
            visible: false,
            visibleShowTransaction: false,
            visibleShowPayment: false,
            visibleTweet: false,
            account: null,
            amountSender: 0,
            receiver: '',
            messageReceive: '',
            postContent: '',

        };
    }

    handleChange = (event) =>{
      var name = event.target.name;
      var value = event.target.value;

      this.setState({
          [name]: value,
      })



    };



    componentWillMount(){
        this.readAccountInfo();
    }

    readAccountInfo = async () =>{
        let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        let account = await getAccountInfo(secretKey);
        this.setState({
            account: account,
        })
    };

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

    };

    onShowTransaction = async () =>{




        this.props.onShowTransaction();

        this.setState({
            visibleShowTransaction : true,

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

    onPostTweet = async (e)=>{
        e.preventDefault();
        let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        var postContent = this.state.postContent;
        let result = await  onPostContent(secretKey, postContent);
        this.closeTweetModal();

    };
    createTweetComponent = (text) =>{
        const form = {
            marginLeft: "3vh",
            marginRight: "3vh"
        };

        return (
            <div>
                <Modal visible={this.state.visibleTweet} width="600" height="300" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                    <div>
                        <form style={form}>
                            <div className="form-group">
                                <h1>Post</h1>
                                <textarea className="form-control" rows="5" id="comment" onChange={this.handleChange} name="postContent" value={this.state.postContent}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.onPostTweet}>Post</button>
                        </form>
                        <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )
    };

    createShowTransactionComponent =  (text) =>{

        //let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        //let account = await getAccountInfo(secretKey);


        var listPayments = [];
        for(var index = 0; index < this.state.account.payments.length; index++){
            let payment = this.state.account.payments[index];
            listPayments.push(<TransactionHistory
                time={payment.time}
                sender={payment.type === 'RECEIVE'? payment.data.address: this.state.account.public_key}
                amount={payment.data.amount}
                receiver={payment.type === 'SEND'? payment.data.address: this.state.account.public_key}

            />);
        }
        const transactionList = {
            overflow: "scroll"
        };



        return (
            <div>
                <Modal visible={this.state.visibleShowTransaction} width="700" height="500" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                    <div style ={transactionList}>
                        <h1>List of Transactions</h1>
                        {
                            listPayments
                        }
                        <a href="javascript:void(0);" onClick={() => this.closeTweetModal()}>Close</a>
                    </div>
                </Modal>
            </div>
        )
    };

    onSendMoneys = async (e) =>{
        e.preventDefault();
        let secretKey = this.props.secretKey;
        let receiverAddress = this.state.receiver;
        let amout = parseInt(this.state.amountSender);
        let messageReceive = this.state.messageReceive;

        let result = await onAccountPayment(secretKey,amout,receiverAddress,messageReceive);

        console.log(result);
        if(result.status === 1){
            this.closeTweetModal();
        }



    };
    createPayment = (text) => {
        const inputForm = {
            float: "left"
        }

        const form = {
            marginLeft: "5vh",
            marginRight: "5vh"
        }
        return(
            <div>
                <Modal visible={this.state.visibleShowPayment} width="600" height="500" effect="fadeInUp" onClickAway={() => this.closeTweetModal()}>
                    <div>
                        <h1>Payment</h1>
                        <form style={form}>
                            <div className="form-group">
                                <label style={inputForm} htmlFor="amout">Amount:</label>
                                <input type="text" className="form-control"  name="amountSender" value={this.state.amountSender} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label style={inputForm} htmlFor="receiver">Receiver:</label>
                                <select
                                    name="receiver"
                                    className="form-control"
                                    onChange={this.handleChange}
                                    value={this.state.receiver}
                                >

                                    <option></option>
                                    <option>GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI</option>
                                    <option>GOADOPQIOPQWRZXAASDADAVX</option>
                                    <option>GASDJKFHKFGSDBFWEFMNBMNB</option>
                                    <option>GPUYITYUWERNVSHJDGIUHVJH</option>
                                </select>
                                {/* <input type="text" className="form-control"   /> */}
                            </div>
                            <div className="form-group">
                                <label style={inputForm} htmlFor="message">Message:</label>
                                <input type="text" className="form-control" name="messageReceive" onChange={this.handleChange} value={this.state.messageReceive}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={this.onSendMoneys}>Send</button>

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
                                    <a onClick={() => this.onWriteTweet()}><span className="glyphicon glyphicon-home" /> Home</a>
                                </li>
                                <li>
                                    <a onClick={() => this.onShowTransaction()}><span className="glyphicon glyphicon-usd" /> Transactions</a>
                                    {viewNavbarComponent}
                                </li>
                                <li>
                                    <a onClick={()=>this.onPayment()}><span className="glyphicon glyphicon-transfer" /> Payment</a>
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
        showTransactionAction: state.showTransactionReducer,
        secretKey: state.loginReducer.secretKey,
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);