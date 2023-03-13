import { loginData } from "../../helpers/commonInterface"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"
import { failure, request, success } from "../dispatchFunctions"
import { getProfileData } from "../profile/profileAction"
import { loginService } from "./loginService"

export const loginAction = (data: loginData, successCallback : Function, failureCallback : Function) => {
    return async (dispatch: any) => {
        dispatch(request(LOGIN_REQUEST))

        await loginService(data).then(
            (result: any) => {
                dispatch(success(LOGIN_SUCCESS, result))
                successCallback(result);
                dispatch(getProfileData())
            },
            (error: any) => {
                dispatch(failure(LOGIN_FAILURE, error.message))
                failureCallback();
            }
        )
    }
}