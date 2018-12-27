import React, { Component } from 'react';
import  {editUserInfo} from  '../action/userInfoAction'
import  {connect} from  'react-redux';
import Modal from 'react-awesome-modal';
import {onCreateAccount} from '../server-apis/account-api'

var school="";
var phoneNumber="";
var hometown="";
var birthday="";

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secretKey: null,
            newAccountPublicKey: '',
        }
        
    }

    handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name] : value,
        });


    };

    onCreateNewAccount = async (e) =>{
        e.preventDefault();
        let secretKey = JSON.parse(localStorage.getItem('secretKey')).secretKey;
        let result = await onCreateAccount(secretKey,this.state.newAccountPublicKey);
        switch (result.status) {
            case 1:
                alert('CREATE ACCOUNT SUCCESSFULY');
                this.setState({
                    newAccountPublicKey: '',
                });
                break;

            case 0:
                alert('CREATE ACCOUNT FAILED');
                break;
            case -1:
                alert('CREATE ACCOUNT FAILED');
                break;
            default:
                break;
        }
        this.setState({
            newAccountPublicKey: '',
        });
    };


    render() {
        if(this.state.secretKey === null){
            this.setState({
                secretKey: this.props.secretKey,
            })
        }
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                        <h3 className="panel-title">Create Account</h3>
                    </div>
                    <div className="panel-body form-group">
                          <label for="">Public key:</label>
                          <input type="text" className="form-control" placeHolder="Public key"/>
                          <input
                              name="newAccountPublicKey"
                              type="text"
                              className="form-control"
                              placeholder="Public key"
                              value={this.state.newAccountPublicKey}
                              onChange={this.handleChange}

                          />
                          <hr/>
                          <button className="btn btn-success" type="submit">Create</button>
                          <button
                              className="btn btn-success"
                              type="button"
                              onClick={this.onCreateNewAccount}
                          >Create</button>
                    </div>
                    </div>
                  <div className="well well-sm">
                    <p>Faculty of Infomation Technology</p>
                    <p>New Technology Course</p>
                    <p>Team Member:</p>
                    <ul className="team-member">
                      <li>PHAM Anh Tuan - 1512639</li>
                      <li>BUI CHAU Minh Tung - 1512651</li>
                    </ul>
                  </div>
                  
            </div>
        );
    }
}

var mapStateToProps = state =>{
    return{
        // userAction: state.userReducer,
        // navbarAction: state.navbarReducer,
        userInfoAction: state.userInfoReducer,
        secretKey: state.loginReducer.secretKey,
  
    }
  };

export default connect(mapStateToProps,null) (UserInfo);