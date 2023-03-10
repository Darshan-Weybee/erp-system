/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Link, useLocation } from "react-router-dom"
import { toAbsoluteUrl } from '../../../../_metronic/helpers'

const AuthLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className={`d-flex flex-column flex-column-fluid h-100 login-container ${location.pathname.includes("registration") ? "flex-lg-row-reverse" : "flex-lg-row"}`}>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1 overflow-auto'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
        {/* <div className='d-flex flex-center flex-wrap px-5'> */}
        {/* begin::Links */}
        {/* <div className='d-flex fw-semibold text-primary fs-base'>
            <a href='#' className='px-5' target='_blank'>
              Terms
            </a>

            <a href='#' className='px-5' target='_blank'>
              Plans
            </a>

            <a href='#' className='px-5' target='_blank'>
              Contact Us
            </a>
          </div> */}
        {/* end::Links */}
        {/* </div> */}
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className='d-flex flex-lg-row-fluid w-lg-50 order-1 order-lg-2 side-image-container'
      // style={{background: `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), ${location.pathname.includes("registration") ? "url('/media/auth/loginImage1.jpg')" : "url('/media/auth/loginImage3.jpg')"}`}}
      // style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})`}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          {/* <Link to='/' className='mb-12'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-1.png')} className='h-75px' />
          </Link> */}
          {/* end::Logo */}

          {/* begin::Image */}
          {/* <img
            className='mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20'
            src={toAbsoluteUrl('/media/misc/auth-screens.png')}
            alt=''
          /> */}
          {/* end::Image */}

          {/* begin::Title */}
          <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
            {!location.pathname.includes("registration") && "Fast, Efficient and Productive"}
            {location.pathname.includes("registration") && "Easiest way to manage your finance"}
          </h1>
          {/* end::Title */}

          {/* begin::Text */}
          <div className='text-white fs-3 text-center'>
            {!location.pathname.includes("registration") &&
              <>
                <div>We are committed to creating and</div>
                <div>sustaining long-term relatioships which drawn on our experience and </div>
                  <div>experties to helpour clients achieve real success</div>
              </>}
            {location.pathname.includes("registration") && `Talk about business stragety ${' '}
             finance anywhere with our easy access apps`}
            {/* <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
              the blogger
            </a> */}
            {/* introduces a person they???ve interviewed <br /> and provides some background information
            about */}
            {/* <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
              the interviewee
            </a> */}
            {/* and their <br /> work following this is a transcript of the interview. */}
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export { AuthLayout }
