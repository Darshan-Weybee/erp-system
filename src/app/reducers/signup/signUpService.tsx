import { signUpData } from "../../helpers/commonInterface"
import { SIGNUP_API_ENDPOINT } from "../../helpers/config"
import { axiosInstance } from "../axiosInstance"

export const signUpService = (data : signUpData) => {
    return axiosInstance.post(SIGNUP_API_ENDPOINT, data)
}