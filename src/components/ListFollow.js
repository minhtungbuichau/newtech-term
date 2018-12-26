import React, { Component } from 'react';


class ListFollow extends Component {
  constructor(props) {
    super(props);
  }
    
  
  render() {
      const followBtn = {
        marginLeft: "5vh"
      }
        return (
            <div>
                    <div className="panel-body">
                      <div className="media">
                        <div className="media-left">
                          <img src="http://placehold.it/40x40" className="media-object img-rounded img-thumbnail" />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">{this.props.name}
                          <a style={followBtn} className="btn btn-default btn-xs"><span className={"glyphicon glyphicon-"+ this.props.followIcon} /><span className="glyphicon glyphicon-user" />
                            {this.props.followType}
                          </a>
                          </h4>
                          
                        </div>
                      </div>
    
                    </div>
            </div>
        );
    }
}

export default ListFollow;