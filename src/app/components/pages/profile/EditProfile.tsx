import { ErrorMessage, Field, Form, Formik } from "formik"
import { FC } from "react"
import { showForm } from "./ProfilePage"
import * as Yup from "yup";

interface props {
    editProfileDispatch : Function
    setShowForm : Function
    profileDetails : any
}

interface initialValue {
    firstName : string
    lastName : string
    email : string
    password : string
}

const getInitialValue = (profileData : any) :initialValue => {
    return {
        firstName : profileData.FirstName,
    lastName : profileData.LastName,
    email : profileData.Email,
    password : ""
}
}

const validateFun = Yup.object().shape({
    firstName : Yup.string().required("First name is required"),
    lastName : Yup.string().required("Last name is required"),
    email : Yup.string().email("Wrong email format").required("Email is required"),
    password : Yup.string().required("Password is required"),
})

const EditProfile:FC<props>  = ({ setShowForm, editProfileDispatch, profileDetails}) => {

    return(
        <Formik
        enableReinitialize
        initialValues={getInitialValue(profileDetails?.profileData)}
        validationSchema={validateFun}
        onSubmit={async (values) => {
            await editProfileDispatch(values)
            setShowForm({profileForm : false})
        }}
    >
        {({ touched, errors, isSubmitting }) => {
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
                                            className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                touched.firstName && errors.firstName && "is-invalid inValidBorder"
                                              }`}
                                            placeholder="Enter First name"
                                            id="firstName"
                                            name="firstName"
                                            defaultValue={profileDetails?.profileData?.FirstName}
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
                                            className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                touched.lastName && errors.lastName && "is-invalid inValidBorder"
                                              }`}
                                            placeholder="Enter Last name"
                                            id="lastName"
                                            name="lastName"
                                            defaultValue={profileDetails?.profileData?.LastName}
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
                                            className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                touched.email && errors.email && "is-invalid inValidBorder"
                                              }`}
                                            placeholder="Enter email"
                                            id="email"
                                            name="email"
                                            defaultValue={profileDetails?.profileData?.Email}
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
                                            className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                touched.password && errors.password && "is-invalid inValidBorder"
                                              }`}
                                            placeholder="Enter password"
                                            id="password"
                                            name="password"
                                        />
                                        <ErrorMessage name="password" component="div" className="errorMsg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* {showForm.passwordForm && <div>
                            <div className="row mb-6">
                                <div className='col-lg-6 mb-4 mb-lg-0'>
                                    <div className='fv-row mb-0'>
                                        <label className="form-label fs-6 fw-bolder mb-3 required">Current Password</label>

                                        <div className="">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.password && errors.password && "is-invalid inValidBorder"
                                                  }`}
                                                placeholder="Enter current password"
                                                id="password"
                                                name="password"
                                            />
                                            <ErrorMessage name="password" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-6">
                                <div className='col-lg-6 mb-4 mb-lg-0'>
                                    <div className='fv-row mb-0'>
                                        <label className="form-label fs-6 fw-bolder mb-3 required">New Password</label>

                                        <div className="">
                                            <Field
                                                type="password"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.newPassword && errors.newPassword && "is-invalid inValidBorder"
                                                  }`}
                                                placeholder="Enter new password"
                                                id="newPassword"
                                                name="newPassword"
                                            />
                                            <ErrorMessage name="newPassword" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mb-4 mb-lg-0'>
                                    <div className='fv-row mb-0'>
                                        <label className="form-label fs-6 fw-bolder mb-3 required">Confirm New Password</label>

                                        <div className="">
                                            <Field
                                                type="password"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.confirmPassword && errors.confirmPassword && "is-invalid inValidBorder"
                                                  }`}
                                                placeholder="Enter new password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                            />
                                            <ErrorMessage name="confirmPassword" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>} */}
                        {/* {!showForm.passwordForm && 
                        <div className="d-flex justify-content-end">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowForm({...showForm, passwordForm : !showForm.passwordForm})
                                }}
                                className='btn btn-light btn-active-light-primary'
                            >
                                Reset Password
                            </button>
                        </div>} */}
                    </div>
                    <div className="d-flex justify-content-end py-6 px-6 gap-3">
                        <button
                            type="button"
                            className="btn btn-light btn-active-light-primary"
                            onClick={() => setShowForm({profileForm : false})}
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
    )
}


export default EditProfile 