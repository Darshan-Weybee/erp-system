import { GET_PROFILE_PICTURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "../actionTypes"

export interface profileState {
    loading : boolean,
    profileData : any,
    error : string,
    profilePicture : any
}

interface action {
    type  : string,
    payload : any
}

const initialState : profileState = {
    loading : false,
    profileData : {},
    error : "",
    profilePicture : {}
}

const profileReducer = (state = initialState, action:action) => {
    switch(action.type){
        case GET_PROFILE_REQUEST : return{
            ...state,
            loading : true
        }
        case GET_PROFILE_SUCCESS : return{
            ...state,
            loading : false,
            profileData : action.payload,
            error : "",
        }
        case GET_PROFILE_REQUEST : return{
            ...state,
            loading : false,
            profileData : {},
            error : action.payload
        }
        case GET_PROFILE_PICTURE : return{
            ...state,
            pprofilePicture : action.payload
        }
        default : return state;
    }
}

export {profileReducer}