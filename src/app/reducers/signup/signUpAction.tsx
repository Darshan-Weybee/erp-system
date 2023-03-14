import { signUpData } from "../../helpers/commonInterface"
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionTypes"
import { failure, request, success } from "../dispatchFunctions"
import { getProfileData } from "../profile/profileAction"
import { signUpService } from "./signUpService"

export const signUpAction = (data: signUpData, successCallback : Function, failureCallback : Function) => {
    return (dispatch: any) => {
        dispatch(request(SIGNUP_REQUEST))

        signUpService(data).then(
            (result: any) => {
                dispatch(success(SIGNUP_SUCCESS, result))
                successCallback(result.data.records)
            },
            (error: any) => {
                dispatch(failure(SIGNUP_FAILURE, error.message))
                failureCallback();
            }
        )
    }
}