import * as ActionTypes from './../constant/ActionTypes'

const initialState = {};
const loginReducer = (state = initialState, action) => {
    return {
        ...state,
        secretKey: action.secretKey,
        type: action.type,
    };
};

export default loginReducer;