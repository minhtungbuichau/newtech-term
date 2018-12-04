import React, { Component } from 'react';
import  {editUserInfo} from  '../action/userInfoAction'
import  {connect} from  'react-redux';

class UserInfo extends Component {

    constructor(props) {
        super(props);

    }

    onEditInfo = () =>{
        this.props.onEditInfo();
    };

    render() {
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-sm-6"><h3 className="panel-title">Information</h3></div>
                        <a href="#">
                            <div
                                className="col-sm-6 update-btn text-center justify-content-center"
                                onClick={this.onEditInfo}
                            >
                                Edit
                            </div></a>
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
export default connect(null,mapDispatchToProps) (UserInfo);