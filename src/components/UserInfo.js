import React, { Component } from 'react';
import  {editUserInfo} from  '../action/userInfoAction'
import  {connect} from  'react-redux';
import Modal from 'react-awesome-modal';
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
        return (
            <div>
              <Modal visible={this.state.visibleEditInfo} width="400" height="500" effect="fadeInUp" onClickAway={() => this.closeUserInfoModal()}>
              <div>
                    <h1>Edit Infomation</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeUserInfoModal()}>Close</a>
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
                        <li><span className="glyphicon glyphicon-briefcase" /> University of Science</li>
                        <li><span className="glyphicon glyphicon-home" /> Ho Chi Minh City</li>
                        <li><span className="glyphicon glyphicon-calendar" /> 27 July 1997</li>
                        <li><span className="glyphicon glyphicon-earphone" /> 0989871786</li>
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