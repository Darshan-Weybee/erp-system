import { combineReducers } from "redux"
import { addUserReducer } from "./user/addUserReducer"
import { loginReducer } from "./login/loginReducer"
import { profileReducer } from "./profile/profileReducer"
import { signUpReducer } from "./signup/signUpReducer"
import { userListReducer } from "./user/userListReducer"
const rootReducer = combineReducers({
    login : loginReducer,
    signUp : signUpReducer,
    addUser : addUserReducer,
    profile : profileReducer,
    userList : userListReducer
})

export default rootReducer