import React, { Component } from 'react';


class FollowingItem extends Component {
    constructor(props) {
        super(props);
    }


    onFollow = ()=>{
        alert(this.props.publicKey);
    };
    render() {
        const followBtn = {
            marginLeft: "5vh"
        };

        return (
            <div className="panel-body">
                <div className="media">
                    <div className="media-left">
                        <img  src={ this.props.avatar? ('data:image/jpeg;base64,' + this.props.avatar) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBKleWYmhVwfnTTFepSUNVmHAwFsaJXm-zGCZclKfpTbTsZ0F_Q'}
                              width={50} height={50}/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.name}
                            <a style={followBtn} className="btn btn-default btn-xs" onClick={this.onFollow}><span className={"glyphicon glyphicon-" + this.props.followIcon} /><span className="glyphicon glyphicon-user" />
                                {this.props.followType}
                            </a>
                        </h4>

                    </div>
                </div>

            </div>
        );
    }
}

export default FollowingItem;