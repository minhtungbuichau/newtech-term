import React, { Component } from 'react';

class RightColumn extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-default panel-custom">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                        Who to follow
                        <small><a href="#">Refresh</a> ● <a href="#">View all</a></small>
                      </h3>
                    </div>
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32" className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a className="btn btn-default btn-xs">
                            +
                            <span className="glyphicon glyphicon-user" />
                            Follow
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32" className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a className="btn btn-default btn-xs">
                            +
                            <span className="glyphicon glyphicon-user" />
                            Follow
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32"className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a className="btn btn-default btn-xs">
                            +
                            <span className="glyphicon glyphicon-user" />
                            Follow
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel-footer">
                      <a href="www.google.it">
                        <span className="glyphicon glyphicon-user" />
                        Find people you know
                      </a>
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

export default RightColumn;