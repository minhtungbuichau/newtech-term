import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                      <div className="row">
                        <div className="col-sm-6"><h3 className="panel-title">Information</h3></div>
                        <a href="#"><div className="col-sm-6 update-btn text-center justify-content-center">Edit</div></a>
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

export default UserInfo;