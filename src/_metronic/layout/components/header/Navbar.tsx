import clsx from 'clsx'
import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import ImageDisplay from '../../../../app/components/commonComponent/ImageDisplay'
import { PROFILE_PICTURE_API_ENDPOINT } from '../../../../app/helpers/config'
import { getProfileData } from '../../../../app/reducers/profile/profileAction'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'
import { HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher } from '../../../partials'
import { useLayout } from '../../core'

interface props {
  profileDetails: any
  getProfile: Function
}

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'

const NavbarCom: FC<props> = ({ profileDetails, getProfile }) => {

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <div className='app-navbar flex-shrink-0'>
      {/* <div className={clsx('app-navbar-item align-items-stretch', itemClass)}>
        <Search />
      </div> */}

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div id='kt_activities_toggle' className={btnClass}>
          <KTSVG path='/media/icons/duotune/general/gen032.svg' className={btnIconClass} />
        </div>
      </div> */}

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          className={btnClass}
        >
          <KTSVG path='/media/icons/duotune/general/gen022.svg' className={btnIconClass} />
        </div>
        <HeaderNotificationsMenu />
      </div> */}

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div className={clsx('position-relative', btnClass)} id='kt_drawer_chat_toggle'>
          <KTSVG path='/media/icons/duotune/communication/com012.svg' className={btnIconClass} />
          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink' />
        </div>
      </div> */}

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div> */}

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <ImageDisplay
            path={`${PROFILE_PICTURE_API_ENDPOINT}?name=${profileDetails.profileData.FirstName} ${profileDetails.profileData.LastName}&color=ffffff&background=029ff7`}altText='profilePicture' className='' errorPath='/media/svg/avatars/blank.svg' />
        </div>
        <HeaderUserMenu />
      </div>

      {/* {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )} */}
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
    getProfile: () => dispatch(getProfileData())
  }
}

const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarCom)
export { Navbar }
