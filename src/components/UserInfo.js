import React, { Component } from 'react';
import  {editUserInfo} from  '../action/userInfoAction'
import  {connect} from  'react-redux';
import Modal from 'react-awesome-modal';

var school="";
var phoneNumber="";
var hometown="";
var birthday="";

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleEditInfo : false
        }
        
    }

   

    onEditInfo = () =>{
        this.props.onEditInfo();
        this.setState({
            visibleEditInfo : true
        });
    };

    closeUserInfoModal = () => {
        this.setState({
          visibleEditInfo : false
        });
    }

    createUserInfoComponent = (text) => {
        const inputForm = {
            float: "left"
        }
        
        const form = {
            marginLeft: "5vh",
            marginRight: "5vh"
        }
        
        const closeBtn = {
            color: "white",
            marginLeft: "3vh"
        }
        school= "University of Science";
        phoneNumber= "0989871786";
        hometown= "Ho Chi Minh City";
        birthday = "27/07/1997";
        
        return (
            <div>
              <Modal visible={this.state.visibleEditInfo} width="400" height="500" effect="fadeInUp" onClickAway={() => this.closeUserInfoModal()}>
              <div>
                   <h1>Edit Information</h1>
                   <form style={form}>
                        <div className="form-group">
                            <label style={inputForm} htmlFor="school" ><span className="glyphicon glyphicon-briefcase" /> School:</label>
                            <input type="text" className="form-control" id="school" defaultValue={school} />
                        </div>
                        <div className="form-group">
                            <label style={inputForm} htmlFor="hometown"><span className="glyphicon glyphicon-home" /> Hometown:</label>
                            <input type="text" className="form-control" id="hometown" defaultValue={hometown} />
                        </div>
                        <div className="form-group">
                            <label style={inputForm} htmlFor="hometown"><span className="glyphicon glyphicon-calendar" /> Birthday:</label>
                            <input type="date" className="form-control" id="birthday" defaultValue={birthday} />
                        </div>
                        <div className="form-group">
                            <label style={inputForm} htmlFor="hometown"><span className="glyphicon glyphicon-earphone" /> Phone number:</label>
                            <input type="text" className="form-control" id="phone-number" defaultValue={phoneNumber}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button style={closeBtn} className="btn btn-danger" href="javascript:void(0);" onClick={() => this.closeUserInfoModal()}>Close</button>
                    </form>
                </div>
                    
                
            </Modal>
            </div>
        )
    }

    render() {
        var userInfoText = this.createUserInfoComponent(this.props.userInfoAction.view);
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-sm-6"><h3 className="panel-title">Information</h3></div>
                        <a href="#">
                            <div
                                className="btn btn-default btn-xs update-btn"
                                onClick={this.onEditInfo}
                            ><span className="glyphicon glyphicon-cog" /> Edit
                            </div></a>
                            {userInfoText}
                      </div>
                    </div>
                    <div className="panel-body">
                      <ul className="list-unstyled">
                        <li><span className="glyphicon glyphicon-briefcase" />{school}</li>
                        <li><span className="glyphicon glyphicon-home" /> {hometown}</li>
                        <li><span className="glyphicon glyphicon-calendar" /> {birthday}</li>
                        <li><span className="glyphicon glyphicon-earphone" /> {phoneNumber}</li>
                      </ul>
                    </div>
                  </div>
            </div>
        );
    }
}

var mapDispatchToProps = (dispatch) =>{
    return {
        onEditInfo:  () => {
            dispatch(editUserInfo());
        }
    };
};

var mapStateToProps = state =>{
    return{
        // userAction: state.userReducer,
        // navbarAction: state.navbarReducer,
        userInfoAction: state.userInfoReducer,
  
    }
  };

export default connect(mapStateToProps,mapDispatchToProps) (UserInfo);