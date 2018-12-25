import * as ActionTypes from './../constant/ActionTypes'

export const onWriteTweet = (postContent) => {

    //alert('view follower button click');
    return {
        content: postContent,
        type: ActionTypes.WRITE_POST,
    };
};

export const onPayment = () => {
    return {
        type: ActionTypes.PAYMENT
    }
} 

export const onShowTransaction = () => {
    return {
        type: ActionTypes.SHOW_TRANSACTION
    }
};