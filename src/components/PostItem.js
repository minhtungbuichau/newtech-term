import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        var postContent = "Thiệt ra mà nói, khi mình viết dòng này ra, mình cũng không hiểu tại sao nó lại xuất hiện ở đây";
        return ( 
            <div className="media">
                <a className="media-left" href="#fake">
                    <img alt="true" className="media-object img-rounded" src="http://placehold.it/64x64" />
                </a>
                <div className="media-body">
                   <p>{postContent}</p>
                     <ul className="nav nav-pills nav-pills-custom">
                        <li><a href="#"><span className="glyphicon glyphicon-heart" />100</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-comment" />140</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-share" />50</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-option-horizontal" /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PostItem;