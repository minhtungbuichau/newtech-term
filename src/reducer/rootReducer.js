import  {createStore,combineReducers} from 'redux';
import  userReducer from  './userReducer';
import  navbarReducer from  './navBarReducer';
import  userInfoReducer from  './userInfoReducer';
import  postItemReducer from './postItemReducer'; 


const rootReducer = combineReducers({
    userReducer,
    navbarReducer,
    userInfoReducer,
    postItemReducer,
});

export default rootReducer;
