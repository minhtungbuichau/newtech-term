import  {createStore,combineReducers} from 'redux';
import  userReducer from  './userReducer';
import  navbarReducer from  './navBarReducer';
import  userInfoReducer from  './userInfoReducer';
import  postItemReducer from './postItemReducer'; 
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    userReducer,
    navbarReducer,
    userInfoReducer,
    postItemReducer,
    loginReducer,
});

export default rootReducer;
