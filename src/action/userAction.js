import * as ActionTypes from './../constant/ActionTypes'

export const onViewPost = () => {
    return {
        type: ActionTypes.VIEW_POST
    }
};

export const onViewFollowing = () => {
    return {
        type: ActionTypes.VIEW_FOLLOWING
    };
};

export const onViewFollower = () => {

    return {
        type: ActionTypes.VIEW_FOLLOWER
    };
};

export const onEditProfile = () => {
    return {
        type: ActionTypes.EDIT_PROFILE
    };
}