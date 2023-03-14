import { ErrorMessage, Field, Form, Formik } from "formik"
import { FC } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUserData } from "../../../helpers/commonInterface"
import { absolutePath } from "../../../helpers/relativePath"
import { USER_LIST } from "../../../helpers/routes"
import { addUserAction } from "../../../reducers/user/userAction"
import Title from "../../commonComponent/Title"
import * as Yup from "yup";

interface props {
    addUserDispatch: Function
}

interface initialValue {
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    companyName: string,
    password : string
}

const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    role: "User",
    password : "",
    companyName: ""
}

const validateFun = Yup.object().shape({
    firstName:Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email('Wrong email format').required("Email is required"),
    password: Yup.string().required("Password is required"),
    companyName: Yup.string().required("Company name is required")
})

const AddUser: FC<props> = ({ addUserDispatch }) => {
    const navigate = useNavigate();
    return (
        <div className="app-container container-xxl">
            <Title title="Add User" />
            <div className="card card-body">
                <Formik
                    enableReinitialize
                    initialValues={initialValue}
                    validationSchema={validateFun}
                    onSubmit={async (values) => {
                        //on Submit action call
                        addUserDispatch(values)
                    }}
                >
                    {({ touched, errors, isSubmitting }) => {
                        return (
                            <Form noValidate className="form">
                                <div className="card-body p-9">
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Company Name</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.companyName && errors.companyName && "is-invalid inValidBorder"
                                                  }`}
                                                placeholder="Enter First name"
                                                id="companyName"
                                                name="companyName"
                                            />
                                            <ErrorMessage name="companyName" component="div" className="errorMsg" />
                                        </div>
                                    </div>
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">First Name</label>

                                        <div className="col-lg-8 fv-row">
                                            <Field
                                                type="text"
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.firstName && errors.firstName && "is-invalid inValidBorder"
                                                  }`}
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
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.lastName && errors.lastName && "is-invalid inValidBorder"
                                                  }`}
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
                                                className={`form-control form-control-lg form-control-solid input-focus-border-line ${
                                                    touched.email && errors.email && "is-invalid inValidBorder"
                                                  }`}
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
                                    <div className="row mb-6">
                                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Role</label>
                                        <div className="col-lg-8 d-flex flex-row gap-4 align-items-center">
                                            <span className='d-flex flex-row gap-3'>
                                                <span className='form-check form-check-custom form-check-solid'>
                                                    <Field className='form-check-input' type='radio' name='role' value="Admin" />
                                                </span>
                                                <span className='fw-bolder text-gray-800 fs-6'>
                                                    Admin
                                                </span>
                                            </span>
                                            <span className='d-flex flex-row gap-3'>
                                                <span className='form-check form-check-custom form-check-solid'>
                                                <Field className='form-check-input' type='radio' name='role' value="User" />
                                                </span>
                                                <span className='fw-bolder text-gray-800 fs-6'>
                                                    User
                                                </span>
                                            </span>
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
const mapDispatchToProps = (dispatch: any) => {
    return {
        addUserDispatch: (data: addUserData) => dispatch(addUserAction(data))
    }
}
export default connect(null, mapDispatchToProps)(AddUser)