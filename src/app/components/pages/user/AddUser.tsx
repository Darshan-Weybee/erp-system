import { ErrorMessage, Field, Form, Formik } from "formik"
import { FC } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUserData } from "../../../helpers/commonInterface"
import { absolutePath } from "../../../helpers/relativePath"
import { USER_LIST } from "../../../helpers/routes"
import { addUserAction } from "../../../reducers/user/userAction"
import Title from "../../commonComponent/Title"

interface props {
    addUserDispatch : Function
}

const initialValue = {
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    cpassword : "",
    role : "role"
}

const AddUser : FC<props> = ({addUserDispatch}) =>  {
    const navigate = useNavigate();
    return (
        <div className="app-container container-xxl">
            <Title title="Add User"/>
            <div className="card card-body">
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    onSubmit={async (values) => {
                        //on Submit action call
                        addUserDispatch(values)
                    }}
                >
                    {({ isSubmitting }) => {
                        return (
                            <Form noValidate className="form">
                                <div className="card-body p-9">
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">First Name</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                placeholder="Enter First name"
                                                id="firstName"
                                                name="firstName"
                                            />
                                            <ErrorMessage name="firstName" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Last Name</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                placeholder="Enter Last name"
                                                id="lastName"
                                                name="lastName"
                                            />
                                            <ErrorMessage name="lastName" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                placeholder="Enter email"
                                                id="email"
                                                name="email"
                                            />
                                            <ErrorMessage name="email" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Password</label>

                                        <div className="col-lg-8 fv-row">
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
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Confirm Password</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="password"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line`}
                                                placeholder="Confirm password"
                                                id="cpassword"
                                                name="cpassword"
                                            />
                                            <ErrorMessage name="cpassword" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Role</label>
                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                as="select"
                                                name="role"
                                                id="role"
                                                className={`form-select form-select-solid form-control-lg input-focus-border-line`}
                                            >
                                                <option value="role" disabled>Choose Role</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </Field>
                                            <ErrorMessage name="role" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end py-6 px-6 gap-3">
                                    <button
                                        className="btn btn-light btn-active-light-primary"
                                        onClick={() => navigate(absolutePath(USER_LIST))}
                                    >
                                        Discard
                                    </button>
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                        {!isSubmitting && <div>Submit</div>}
                                        {isSubmitting && (
                                            <span className="indicator-progress" style={{ display: "block" }}>
                                                Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                {/* {PLEASE_WAIT} */}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch : any) => {
    return{
        addUserDispatch : (data : addUserData) => dispatch(addUserAction(data))
    }
}
export default connect(null, mapDispatchToProps)(AddUser)