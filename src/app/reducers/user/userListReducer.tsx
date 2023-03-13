import { GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS } from "../actionTypes"

export interface userListState {
    loading  : boolean,
    userList : any,
    error : string
}

interface action {
    type : string
    payload : any
}

const initialState:userListState = {
    loading  : false,
    userList : {},
    error : ""
}

export const userListReducer = (state = initialState, action : action) => {
    switch(action.type){
        case GET_USER_LIST_REQUEST : return {
            loading : true
        }
        case GET_USER_LIST_SUCCESS : return {
            loading : false,
            userList : action.payload,
            error : ""
        }
        case GET_USER_LIST_FAILURE : return {
            loading : false,
            userList : {},
            error : action.payload
        }
        default : return state
    }
}