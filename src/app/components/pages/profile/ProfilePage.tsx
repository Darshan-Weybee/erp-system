import { ErrorMessage, Field, Form, Formik } from "formik"
import React, { FC, useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { connect } from 'react-redux'
import { profileState } from '../../../reducers/profile/profileReducer'
import { editProfile } from '../../../reducers/profile/profileAction'
import { editProfileData } from "../../../helpers/commonInterface"

interface props {
    profileDetails: profileState
    editProfileDispatch: Function
}

const ProfilePage: FC<props> = ({ profileDetails, editProfileDispatch }) => {
    const [showForm, setShowForm] = useState(false);
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

                        {!showForm && <div className='flex-grow-1'>
                            <div className='d-flex justify-content-between align-items-center flex-wrap mb-2'>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex align-items-center mb-2'>
                                        <div className='text-gray-800 fs-2 fw-bolder me-1'>
                                            {profileDetails?.profileData?.firstName ?
                                                <>{profileDetails.profileData.firstName} &nbsp; {profileDetails.profileData.lastName}</>
                                                : <>User Name</>
                                            }

                                        </div>
                                    </div>

                                    <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                                        <div
                                            className='d-flex align-items-center text-gray-400 me-5'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/communication/com006.svg'
                                                className='svg-icon-4 me-1'
                                            />
                                            {profileDetails?.profileData?.role || "Admin"}
                                        </div>
                                        {/* <a
                                            href='#'
                                            className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/general/gen018.svg'
                                                className='svg-icon-4 me-1'
                                            />
                                            SF, Bay Area
                                        </a>
                                        <a
                                            href='#'
                                            className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                                        >
                                            <KTSVG
                                                path='/media/icons/duotune/communication/com011.svg'
                                                className='svg-icon-4 me-1'
                                            />
                                            max@kt.com
                                        </a> */}
                                    </div>
                                </div>

                                <div className='d-flex my-4'>
                                    <button
                                        className='btn btn-sm btn-primary me-3'
                                        onClick={() => setShowForm(!showForm)}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <span className="text-gray-800 fs-4 fw-bold me-1">Email : </span>
                                    <span className="text-gray-400 fw-bold fs-4 me-5">{profileDetails?.profileData?.email || "abc@gmail.com"}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-gray-800 fs-4 fw-bold me-1">Company Name: </span>
                                    <span className="text-gray-400 fw-bold fs-4 me-5">{profileDetails?.profileData?.companyName || "Company Name"}</span>
                                </div>
                            </div>

                            {/* <div className='d-flex flex-wrap flex-stack'>
                                <div className='d-flex flex-column flex-grow-1 pe-8'>
                                    <div className='d-flex flex-wrap'>
                                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                                            <div className='d-flex align-items-center'>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr066.svg'
                                                    className='svg-icon-3 svg-icon-success me-2'
                                                />
                                                <div className='fs-2 fw-bolder'>4500$</div>
                                            </div>

                                            <div className='fw-bold fs-6 text-gray-400'>Earnings</div>
                                        </div>

                                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                                            <div className='d-flex align-items-center'>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr065.svg'
                                                    className='svg-icon-3 svg-icon-danger me-2'
                                                />
                                                <div className='fs-2 fw-bolder'>75</div>
                                            </div>

                                            <div className='fw-bold fs-6 text-gray-400'>Projects</div>
                                        </div>

                                        <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                                            <div className='d-flex align-items-center'>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr066.svg'
                                                    className='svg-icon-3 svg-icon-success me-2'
                                                />
                                                <div className='fs-2 fw-bolder'>60%</div>
                                            </div>

                                            <div className='fw-bold fs-6 text-gray-400'>Success Rate</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                                    <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                                        <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                                        <span className='fw-bolder fs-6'>50%</span>
                                    </div>
                                    <div className='h-5px mx-3 w-100 bg-light mb-3'>
                                        <div
                                            className='bg-success rounded h-5px'
                                            role='progressbar'
                                            style={{ width: '50%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>}
                        {showForm &&
                            <Formik
                                enableReinitialize
                                initialValues={{}}
                                onSubmit={async (values) => {
                                    await editProfileDispatch(values)
                                    setShowForm(!showForm)
                                }}
                            >
                                {({ isSubmitting }) => {
                                    return (
                                        <Form noValidate className="form w-100">
                                            <div className="card-body p-9">
                                                <div className="row mb-6">
                                                    <div className='col-lg-6 mb-4 mb-lg-0'>
                                                        <div className='fv-row mb-0'>
                                                            <label className="form-label fs-6 fw-bolder mb-3 required">First Name</label>

                                                            <div className="">
                                                                <Field
                                                                    type="text"
                                                                    className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                                    placeholder="Enter First name"
                                                                    id="firstName"
                                                                    name="firstName"
                                                                    defaultValue={profileDetails?.profileData?.firstName}
                                                                />
                                                                <ErrorMessage name="firstName" component="div" className="errorMsg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 mb-4 mb-lg-0'>
                                                        <div className='fv-row mb-0'>
                                                            <label className="form-label fs-6 fw-bolder mb-3 required">Last Name</label>

                                                            <div className="">
                                                                <Field
                                                                    type="text"
                                                                    className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                                    placeholder="Enter Last name"
                                                                    id="lastName"
                                                                    name="lastName"
                                                                    defaultValue={profileDetails?.profileData?.lastName}
                                                                />
                                                                <ErrorMessage name="lastName" component="div" className="errorMsg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-6">
                                                    <div className='col-lg-6 mb-4 mb-lg-0'>
                                                        <div className='fv-row mb-0'>
                                                            <label className="form-label fs-6 fw-bolder mb-3 required">Email</label>

                                                            <div className="">
                                                                <Field
                                                                    type="text"
                                                                    className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                                    placeholder="Enter email"
                                                                    id="email"
                                                                    name="email"
                                                                    defaultValue={profileDetails?.profileData?.email}
                                                                />
                                                                <ErrorMessage name="email" component="div" className="errorMsg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 mb-4 mb-lg-0'>
                                                        <div className='fv-row mb-0'>
                                                            <label className="form-label fs-6 fw-bolder mb-3 required">Password</label>

                                                            <div className="">
                                                                <Field
                                                                    type="password"
                                                                    className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                                    placeholder="Enter password"
                                                                    id="password"
                                                                    name="password"
                                                                />
                                                                <ErrorMessage name="password" component="div" className="errorMsg" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-end py-6 px-6 gap-3">
                                                <button
                                                    className="btn btn-light btn-active-light-primary"
                                                    onClick={() => setShowForm(!showForm)}
                                                >
                                                    Cancel
                                                </button>
                                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                                    {!isSubmitting && <div>Submit</div>}
                                                    {isSubmitting && (
                                                        <span className="indicator-progress" style={{ display: "block" }}>
                                                            Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                        </span>
                                                    )}
                                                </button>
                                            </div>
                                        </Form>
                                    )
                                }}
                            </Formik>

                        }
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
        editProfileDispatch: (data : editProfileData) => dispatch(editProfile(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
