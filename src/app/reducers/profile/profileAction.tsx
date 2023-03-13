import { editProfileData } from "../../helpers/commonInterface"
import { EDIT_PROFILE_FAILURE, EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_PICTURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "../actionTypes"
import { failure, request, success } from "../dispatchFunctions"
import { editProfileService, getProfileDataService, getProfilePictureService } from "./profileService"

export const getProfilePicture = (name: string) => {
    return async (dispatch: any) => {
        await getProfilePictureService(name).then(
            (result: any) => dispatch(success(GET_PROFILE_PICTURE, result.data))
        )
    }
}

export const getProfileData = () => {
    return async (dispatch: any) => {
        dispatch(request(GET_PROFILE_REQUEST))

        await getProfileDataService().then(
            (result: any) => {
                dispatch(success(GET_PROFILE_SUCCESS, result.data));
                dispatch(getProfilePicture(result.data.name));
            },
            (error: any) => dispatch(failure(GET_PROFILE_FAILURE, error.message))
        )
    }
}

export const editProfile = (data : editProfileData) => {
    return async (dispatch: any) => {
        dispatch(request(EDIT_PROFILE_REQUEST))

        await editProfileService(data).then(
            (result: any) => {
                dispatch(success(EDIT_PROFILE_SUCCESS, result));
                dispatch(getProfileData());
            },
            (error: any) => dispatch(failure(EDIT_PROFILE_FAILURE, error.message))
        )
    }
}