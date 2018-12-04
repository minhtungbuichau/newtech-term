import * as ActionTypes from './../constant/ActionTypes'

const initialState = {};

const userInfoReducer = (state = initialState, action) => {
    return {
        ...state,
        view: action.type
    };
};

export default userInfoReducer;