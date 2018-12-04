import React, { Component } from 'react';


class ListFollow extends Component {
    render() {
        return (
            <div>
                <div className="panel-heading list-following">
                      <h3 className="panel-title">
                        Who to follow
                        <small><a href="#">View all</a></small>
                      </h3>
                    </div>
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32" className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Phạm Anh Tuấn</h4>
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
                          <h4 className="media-heading">Đặng Hoài Trân</h4>
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
            </div>
        );
    }
}

export default ListFollow;