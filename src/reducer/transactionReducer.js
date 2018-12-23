import * as ActionTypes from './../constant/ActionTypes'

const initialState = {};

const showTransactionReducer = (state = initialState, action) => {
    return {
        ...state,
        view: action.type
    };
};

export default showTransactionReducer;