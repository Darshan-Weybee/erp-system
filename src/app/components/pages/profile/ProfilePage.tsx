
import { FC, useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { connect } from 'react-redux'
import { profileState } from '../../../reducers/profile/profileReducer'
import { editProfile } from '../../../reducers/profile/profileAction'
import { editProfileData } from "../../../helpers/commonInterface"
import EditProfile from "./EditProfile"

interface props {
    profileDetails: profileState
    editProfileDispatch: Function
}
export interface showForm {
    profileForm: boolean
}

const ProfilePage: FC<props> = ({ profileDetails, editProfileDispatch }) => {
    const [showForm, setShowForm] = useState<showForm>({ profileForm: false });

    return (
        <div className='app-container container-xxl'>
            <div className='card mb-5 mb-xl-10'>
                <div className='card-body pt-9 pb-0'>
                    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                        <div className='me-7 mb-4'>
                            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
                                <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
                                <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
                            </div>
                        </div>

                        {!showForm.profileForm && <div className='flex-grow-1'>
                            <div className='d-flex justify-content-between align-items-center flex-wrap mb-2'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex align-items-center mb-2'>
                                        <div className='text-gray-800 fs-2 fw-bolder me-1'>
                                            {profileDetails?.profileData?.FirstName ?
                                                <>{profileDetails.profileData.FirstName} {profileDetails.profileData.LastName}</>
                                                : <>User Name</>
                                            }

                                        </div>
                                    </div>

                                    <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                                        {profileDetails?.profileData?.Roles && <div
                                            className='d-flex align-items-center text-gray-400 me-5'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/communication/com006.svg'
                                                className='svg-icon-4 me-1'
                                            />
                                            {(profileDetails?.profileData?.Roles.includes("Admin") ||
                                                profileDetails?.profileData?.Roles.includes("Master_Admin")) ?
                                                "Admin" : "User"}
                                        </div>}
                                    </div>
                                </div>
                                <div className='d-flex my-4'>
                                    <button
                                        className='btn btn-sm btn-primary me-3'
                                        onClick={() => setShowForm({ profileForm: !showForm.profileForm })}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <span className="text-gray-800 fs-4 fw-bold me-1">Email : </span>
                                    <span className="text-gray-400 fw-bold fs-4 me-5">{profileDetails?.profileData?.Email || "abc@gmail.com"}</span>
                                </div>
                                {!profileDetails?.profileData?.Roles?.includes("Master_Admin") && <div className="mb-4">
                                    <span className="text-gray-800 fs-4 fw-bold me-1">Company Name: </span>
                                    <span className="text-gray-400 fw-bold fs-4 me-5">{profileDetails?.profileData?.CompanyName || "Company Name"}</span>
                                </div>}
                            </div>
                        </div>}
                        {showForm.profileForm &&
                            <EditProfile
                                setShowForm={setShowForm}
                                editProfileDispatch={editProfileDispatch}
                                profileDetails={profileDetails}
                            />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        profileDetails: state.profile
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        editProfileDispatch: (data: editProfileData) => dispatch(editProfile(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
