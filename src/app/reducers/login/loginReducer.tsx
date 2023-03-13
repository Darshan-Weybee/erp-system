import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"

interface initialState {
    loading  : boolean,
    loginData : any,
    error : string
}

interface action {
    type : string
    payload : any
}

const initialState:initialState = {
    loading  : false,
    loginData : {},
    error : ""
}

export const loginReducer = (state = initialState, action : action) => {
    switch(action.type){
        case LOGIN_REQUEST : return {
            loading : true
        }
        case LOGIN_SUCCESS : return {
            loading : false,
            loginData : action.payload,
            error : ""
        }
        case LOGIN_FAILURE : return {
            loading : false,
            loginData : {},
            error : action.payload
        }
        default : return state
    }
}