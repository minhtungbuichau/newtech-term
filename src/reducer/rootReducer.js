import  {createStore,combineReducers} from 'redux';
import  userReducer from  './userReducer';
import  navbarReducer from  './navBarReducer';
import  userInfoReducer from  './userInfoReducer';
import  postItemReducer from './postItemReducer'; 
import loginReducer from './loginReducer';
import showTransactionReducer from './transactionReducer';
const rootReducer = combineReducers({
    userReducer,
    navbarReducer,
    userInfoReducer,
    postItemReducer,
    loginReducer,
    showTransactionReducer
});

export default rootReducer;
