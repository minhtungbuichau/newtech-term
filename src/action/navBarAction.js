import * as ActionTypes from './../constant/ActionTypes'

export const onWriteTweet = (postContent) => {

    //alert('view follower button click');
    return {
        content: postContent,
        type: ActionTypes.WRITE_POST,
    };
};
