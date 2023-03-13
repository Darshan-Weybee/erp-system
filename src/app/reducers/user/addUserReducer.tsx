import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "../actionTypes"

interface initialState {
    loading  : boolean,
    addedUserData : any,
    error : string
}

interface action {
    type : string
    payload : any
}

const initialState:initialState = {
    loading  : false,
    addedUserData : {},
    error : ""
}

export const addUserReducer = (state = initialState, action : action) => {
    switch(action.type){
        case ADD_USER_REQUEST : return {
            loading : true
        }
        case ADD_USER_SUCCESS : return {
            loading : false,
            addedUserData : action.payload,
            error : ""
        }
        case ADD_USER_FAILURE : return {
            loading : false,
            addedUserData : {},
            error : action.payload
        }
        default : return state
    }
}