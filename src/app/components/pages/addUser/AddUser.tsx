import { ErrorMessage, Field, Form, Formik } from "formik"

function AddUser() {
    return (
        <>
        <div className="fw-bold fs-2 py-3">Add User</div>
        <div className="card card-body">
            <Formik
                enableReinitialize
                initialValues={{}}
                onSubmit={async (values) => {
                    //on Submit action call
                }}
            >
                {({ errors, touched, isSubmitting, setFieldValue, values }) => {
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
                                            name="roleSelect"
                                            id="roleSelect"
                                            className={`form-select form-select-solid form-control-lg input-focus-border-line`}
                                        >
                                            <option value="role" disabled selected>Choose Role</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </Field>
                                        <ErrorMessage name="roleSelect" component="div" className="errorMsg" /> 
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
        </>
    )
}
export default AddUser