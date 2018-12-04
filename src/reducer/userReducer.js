import * as ActionTypes from './../constant/ActionTypes'

const userInitialState = {
    view: ActionTypes.VIEW_POST
};

const user = (state = userInitialState, action) => {
    return {
        ...state,
        view: action.type
    };
};

export default user;