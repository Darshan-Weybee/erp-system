import axios from "axios"
import { editProfileData } from "../../helpers/commonInterface"
import { PROFILE_API_ENDPOINT, PROFILE_PICTURE_API_ENDPOINT, UPDATE_PROFILE_API_ENDPOINT } from "../../helpers/config"
import { axiosInstance } from "../axiosInstance"

export const getProfileDataService = async () => {
    return await axiosInstance.get(PROFILE_API_ENDPOINT)
}
export const getProfilePictureService = async (firstName: string, lastName : string) => {
    return await axiosInstance.get(`${PROFILE_PICTURE_API_ENDPOINT}?name=${firstName}${lastName}`)
}

export const editProfileService = async (data : editProfileData) => {
    return await axiosInstance.put(UPDATE_PROFILE_API_ENDPOINT, data)
}