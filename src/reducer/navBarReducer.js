import * as ActionTypes from './../constant/ActionTypes'

const userInitialState = {};

const NavbarReducer = (state = userInitialState, action) => {

    return {
        ...state,
        action: action.type
    };
};

export default NavbarReducer;