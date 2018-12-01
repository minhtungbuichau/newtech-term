import React, { Component } from 'react';
import './../css/profile.css';
import './../css/bootstrap.css';
import './../../node_modules/normalize.css';
class Profile extends Component {
    render() {
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
                    <div className="form-group has-feedback">
                      <input type="text" className="form-control-nav" id="search" aria-describedby="search1" />
                      <span className="glyphicon glyphicon-search form-control-feedback" aria-hidden="true" />
                    </div>
                    <button className="btn btn-primary" type="submit" aria-label="Left Align">
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"> </span> Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <a href="#"><img className="img-responsive" alt="true" src="http://placehold.it/800x500" /></a>
                      <div className="username">Bùi Châu Minh Tùng</div>
                      <div className="row">
                        <div className="col-xs-3">
                          <h5>
                            <small>TWEETS</small>
                            <div><a href="#">15</a></div>
                          </h5>
                        </div>
                        <div className="col-xs-4">
                          <h5>
                            <small>FOLLOWING</small>
                            <div><a href="#">251</a></div>
                          </h5>
                        </div>
                        <div className="col-xs-5">
                          <h5>
                            <small>FOLLOWERS</small>
                            <div><a href="#">345</a></div>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="col-sm-6">
                  <div className="panel panel-info">
                    <div className="panel-heading">
                      {/* <div class="media">
                            <a class="media-left" href="#fake">
                                <img alt="" class="media-object img-rounded" src="http://placehold.it/35x35">
                            </a>
                            <div class="media-body">
                                <div class="form-group has-feedback">
                                    <label class="control-label sr-only" for="inputSuccess5">Hidden label</label>
                                    <input type="text" class="form-control" id="search2" aria-describedby="search">
                                    <span class="glyphicon glyphicon-camera form-control-feedback" aria-hidden="true"></span> */}
                      {/* <span id="search2" class="sr-only">(success)</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="panel-body">
                      <div className="media">
                        <a className="media-left" href="#fake">
                          <img alt="true" className="media-object img-rounded" src="http://placehold.it/64x64" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Media heading</h4>
                          <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                          <ul className="nav nav-pills nav-pills-custom">
                            <li><a href="#"><span className="glyphicon glyphicon-share-alt" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-retweet" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-star" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left" href="#fake">
                          <img alt="true" className="media-object img-rounded" src="http://placehold.it/64x64" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Media heading</h4>
                          <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                          <ul className="nav nav-pills nav-pills-custom">
                            <li><a href="#"><span className="glyphicon glyphicon-share-alt" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-retweet" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-star" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left" href="#fake">
                          <img alt="true" className="media-object img-rounded" src="http://placehold.it/64x64" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Media heading</h4>
                          <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                          <ul className="nav nav-pills nav-pills-custom">
                            <li><a href="#"><span className="glyphicon glyphicon-share-alt" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-retweet" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-star" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left" href="#fake">
                          <img alt="true" className="media-object img-rounded" src="http://placehold.it/64x64" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Media heading</h4>
                          <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                          <ul className="nav nav-pills nav-pills-custom">
                            <li><a href="#"><span className="glyphicon glyphicon-share-alt" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-retweet" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-star" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="media">
                        <a className="media-left" href="#fake">
                          <img alt className="media-object img-rounded" src="http://placehold.it/64x64" />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">Media heading</h4>
                          <p>Dolorem aspernatur rerum, iure? Culpa iste aperiam sequi, fuga, quasi rerum, eum, quo natus tenetur officia placeat.</p>
                          <ul className="nav nav-pills nav-pills-custom">
                            <li><a href="#"><span className="glyphicon glyphicon-share-alt" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-retweet" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-star" /></a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="panel panel-default">
                    <div className="panel-heading">Prova</div>
                    <div className="panel-body">
                      <ul className="nav nav-pills">
                        <li role="presentation" className="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
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
                          <img src="http://placehold.it/32x32" alt className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a href="#" className="btn btn-default btn-xs">
                            +
                            <span className="glyphicon glyphicon-user" />
                            Follow
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32" alt className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a href="#" className="btn btn-default btn-xs">
                            +
                            <span className="glyphicon glyphicon-user" />
                            Follow
                          </a>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/32x32" alt className="media-object img-rounded" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Nome e cognome</h4>
                          <a href="#" className="btn btn-default btn-xs">
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
                    <ul className="list-inline">
                      <li>© 2015 Twitter</li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Cookies</a></li>
                      <li><a href="#">Ads info</a></li>
                      <li><a href="#">Brand</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Status</a></li>
                      <li><a href="#">Apps</a></li>
                      <li><a href="#">Jobs</a></li>
                      <li><a href="#">Advertise</a></li>
                      <li><a href="#">Businesses</a></li>
                      <li><a href="#">Media</a></li>
                      <li><a href="#">Developers</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Profile;