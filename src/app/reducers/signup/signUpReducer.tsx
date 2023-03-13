import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes"

interface initialState {
    loading  : boolean,
    signUpData : any,
    error : string
}

interface action {
    type : string
    payload : any
}

const initialState:initialState = {
    loading  : false,
    signUpData : {},
    error : ""
}

export const signUpReducer = (state = initialState, action : action) => {
    switch(action.type){
        case SIGNUP_REQUEST : return {
            loading : true
        }
        case SIGNUP_SUCCESS : return {
            loading : false,
            signUpData : action.payload,
            error : ""
        }
        case SIGNUP_FAILURE : return {
            loading : false,
            signUpData : {},
            error : action.payload
        }
        default : return state
    }
}