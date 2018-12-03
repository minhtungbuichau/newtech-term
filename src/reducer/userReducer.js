import * as ActionTypes from './../constant/ActionTypes'

const userInitialState = {
    view: ActionTypes.VIEW_POST
}

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case ActionTypes.VIEW_POST:
        case ActionTypes.VIEW_FOLLOWING:
        case ActionTypes.VIEW_FOLLOWER:
            return {
                ...state,
                view: action.type
            }
        default:
            return state
    }
}

export default user;