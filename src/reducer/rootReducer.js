import  {createStore,combineReducers} from 'redux';
import  userReducer from  './userReducer';
import  navbarReducer from  './navBarReducer';
import  userInfoReducer from  './userInfoReducer';



const rootReducer = combineReducers({
    userReducer,
    navbarReducer,
    userInfoReducer,

});

export default rootReducer;
