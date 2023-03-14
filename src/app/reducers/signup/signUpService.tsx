import { signUpData } from "../../helpers/commonInterface"
import { ADD_USER_API_ENDPOINT } from "../../helpers/config"
import { axiosInstance } from "../axiosInstance"

export const signUpService = (data : signUpData) => {
    return axiosInstance.post(ADD_USER_API_ENDPOINT, data)
}