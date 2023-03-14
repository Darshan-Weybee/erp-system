import { addUserData } from "../../helpers/commonInterface"
import { ADD_USER_API_ENDPOINT, USER_LIST } from "../../helpers/config"
import { axiosInstance } from "../axiosInstance"

export const addUserService = (data : addUserData) => {
    return axiosInstance.post(ADD_USER_API_ENDPOINT, data)
}

export const getUserListService = (companyId : number) => {
    return axiosInstance.get(`${USER_LIST}?id=${companyId}`)
}