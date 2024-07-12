import { userSigninReducer } from "./auth/userReducers.js"
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from "redux-thunk";

const initialState = {
    userSignin: {
        userInfo: null
      },
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
  });

const store = createStore(reducer, initialState, applyMiddleware(thunk));



export default store;