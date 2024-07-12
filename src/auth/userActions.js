import axios from "axios";
import { USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST } from "./userConstants";

export const signin = (name, password) => async(dispatch) =>{
    dispatch({type: USER_SIGNIN_REQUEST, payload: {name, password}});
    try{
        console.log('hello')
        const {data} = await axios.post('/api/users/login', {name, password});
        console.log(data)
        dispatch ({type: USER_SIGNIN_SUCCESS, payload: data});
    } catch(error){
        console.log(error)
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}