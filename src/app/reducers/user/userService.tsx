import { addUserData } from "../../helpers/commonInterface"
import { axiosInstance } from "../axiosInstance"

export const addUserService = (data : addUserData) => {
    return axiosInstance.post("", data)
}

export const getUserListService = () => {
    return axiosInstance.get("")
}