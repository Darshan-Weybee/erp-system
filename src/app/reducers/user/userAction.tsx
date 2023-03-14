import { addUserData } from "../../helpers/commonInterface"
import { ADD_USER_FAILURE, ADD_USER_REQUEST, ADD_USER_SUCCESS, GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS } from "../actionTypes"
import { failure, request, success } from "../dispatchFunctions"
import { addUserService, getUserListService } from "./userService"

export const addUserAction = (data : addUserData) => {
    return (dispatch: any) => {
        dispatch(request(ADD_USER_REQUEST))

        addUserService(data).then(
            (result: any) => dispatch(success(ADD_USER_SUCCESS, result)),
            (error: any) => dispatch(failure(ADD_USER_FAILURE, error.message))
        )
    }
}

export const getUserList = (companyId : number) => {
    return (dispatch : any) => {
        dispatch(request(GET_USER_LIST_REQUEST))

        getUserListService(companyId).then(
            (result : any) => dispatch(success(GET_USER_LIST_SUCCESS, result.data)),
            (error : any) => dispatch(failure(GET_USER_LIST_FAILURE, error.message))
        )
    }
}