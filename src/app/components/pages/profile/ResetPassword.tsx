import React, { FC } from 'react'
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { editProfileData } from '../../../helpers/commonInterface';
import { editProfile } from '../../../reducers/profile/profileAction';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface props {
    editProfileDispatch: Function
}

interface initialValue {
    password: string,
    confirmPassword?: string,
    newPassword: string
}

const initialValue: initialValue = {
    password: "",
    confirmPassword: "",
    newPassword: ""
}

const validateFun = Yup.object().shape({
    password: Yup.string().required("Current Password is required"),
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string().required('Password confirmation is required')
        .when('newPassword', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('newPassword')], "New Password and Confirm Password didn't match"),
        }),
})

const ResetPassword: FC<props> = ({ editProfileDispatch }) => {
    const navigate = useNavigate();
    return (
        <div className='app-container container-xxl card'>
            <Formik
                enableReinitialize
                initialValues={initialValue}
                validationSchema={validateFun}
                onSubmit={async (values) => {
                    delete values.confirmPassword
                    await editProfileDispatch(values)
                }}
            >
                {({ touched, errors, isSubmitting }) => {
                    return (
                        <Form noValidate className="form">
                            <div className="card-body p-9">
                                    <div className="row mb-6">
                                        <div className='col-lg-6 mb-4 mb-lg-0'>
                                            <div className='fv-row mb-0'>
                                                <label className="form-label fs-6 fw-bolder mb-3 required">Current Password</label>

                                                <div className="">
                                                    <Field
                                                        type="text"
                                                        className={`form-control form-control-lg form-control-solid input-focus-border-line ${touched.password && errors.password && "is-invalid inValidBorder"
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
                                                        className={`form-control form-control-lg form-control-solid input-focus-border-line ${touched.newPassword && errors.newPassword && "is-invalid inValidBorder"
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
                                                        className={`form-control form-control-lg form-control-solid input-focus-border-line ${touched.confirmPassword && errors.confirmPassword && "is-invalid inValidBorder"
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
  
                            </div>
                            <div className="d-flex justify-content-end py-6 px-6 gap-3">
                                <button
                                    className="btn btn-light btn-active-light-primary"
                                    onClick={() => navigate(-1)}
                                >
                                    Discard
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
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        editProfileDispatch: (data: editProfileData) => dispatch(editProfile(data))
    }
}

export default connect(null, mapDispatchToProps)(ResetPassword)


// newPassword : Yup.string().when('showForm.passwordForm', {
//     is: true,
//     then: Yup.string()
//       .required('New password is required')})
// .test("required",'Password confirmation is required', (value) => {
//     if (showForm.passwordForm && (!value || value.trim() === "")) {
//       return false;
//     }
//     return true;
// })
// ,
// confirmPassword : Yup.string().when(['showForm.passwordForm', 'newPassword'], {
//     is: (showFormPasswordForm : boolean, newPassword : string | null | undefined) =>
//       showFormPasswordForm && newPassword,
//     then: Yup.string()
//       .required('Confirm password is required')
//       .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
//   })
// .test("required",'Password confirmation is required', (value) => {
//     if (showForm.passwordForm && (!value || value.trim() === "")) {
//       return false;
//     }
//     return true;
// })
// .test("match-password", "Password and Confirm Password didn't match", (value, { parent }) => {
//     if (showForm.passwordForm && value !== parent.password) {
//       return false;
//     }
//     return true;
//   }),