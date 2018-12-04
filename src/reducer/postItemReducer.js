import * as ActionTypes from './../constant/ActionTypes'

const reactPostInitialState = {}
const reactPost = (state = reactPostInitialState, action) => {
    return {
        ...state,
        view: action.type
    };
}

export default reactPost;