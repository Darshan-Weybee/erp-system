/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../components/pages/errors/ErrorsPage'
import {Logout, AuthPage, useAuth} from '../components/pages/auth'
import App from '../../App'
import { Error404 } from '../components/pages/errors/components/Error404'
import { absolutePath } from '../helpers/relativePath'
import { DASHBOARD } from '../helpers/routes'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env

const AppRoutes: FC = () => {
  const {currentUser} = useAuth()
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to={absolutePath(DASHBOARD)} />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
          {/* <Route path='/*' element={<PrivateRoutes />} />
          <Route index element={<Navigate to={absolutePath(DASHBOARD)} />} />
          <Route path='auth/*' element={<AuthPage />} /> */}
          <Route path='*' element={<Error404/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
