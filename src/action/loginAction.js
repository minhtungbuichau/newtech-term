import * as ActionTypes from './../constant/ActionTypes'

export const login = () => {
    return {
        type: ActionTypes.LOGIN
    }
};

export const onLogin = (secretKey) =>{
    return{
        secretKey: secretKey,
        type: ActionTypes.LOGIN
    }
};