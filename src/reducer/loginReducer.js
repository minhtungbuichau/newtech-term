import * as ActionTypes from './../constant/ActionTypes'

const initialState = {}
const loginReducer = (state = initialState, action) => {
    return {
        ...state,
        key: action.type
    };
};

export default loginReducer;