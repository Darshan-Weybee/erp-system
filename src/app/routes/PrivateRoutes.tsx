import {Route, Routes, Navigate} from "react-router-dom"
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {DashboardWrapper} from '../components/pages/dashboard/DashboardWrapper'
import AddUser from '../components/pages/user/AddUser'
import { Error404 } from '../components/pages/errors/components/Error404'
import { ADD_USER, DASHBOARD, PROFILE_PAGE, RESET_PASSWORD_PAGE, USER_LIST } from '../helpers/routes'
import { absolutePath } from '../helpers/relativePath'
import UserList from '../components/pages/user/UserList'
import  ProfilePage  from "../components/pages/profile/ProfilePage"
import ResetPassword from "../components/pages/profile/ResetPassword"

const PrivateRoutes = () => {

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path='auth/*' element={<Navigate to={absolutePath(DASHBOARD)} />} />
        <Route path={DASHBOARD} element={<DashboardWrapper />} />
        <Route path={ADD_USER} element={<AddUser/>}/>
        <Route path={USER_LIST} element={<UserList/>}/>
        <Route path={PROFILE_PAGE} element={<ProfilePage/>}/>
        <Route path={RESET_PASSWORD_PAGE} element={<ResetPassword/>}/>
        <Route path='*' element={<Error404/>} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
