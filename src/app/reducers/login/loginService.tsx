import { loginData } from "../../helpers/commonInterface"
import { LOGIN_API_ENDPOINT } from "../../helpers/config"
import { axiosInstance } from "../axiosInstance"

export const loginService = async (data : loginData) => {
    return await axiosInstance.post(LOGIN_API_ENDPOINT, data)
}