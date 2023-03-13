export interface loginData {
    email: string
    password: string
}

export interface signUpData {
    companyname: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    changepassword: string,
}

export interface addUserData {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    cpassword : string,
    role : string
}

export interface editProfileData {
    email?: string,
    password: string,
    firstName?: string,
    lastName?: string,
}