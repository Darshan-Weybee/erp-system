/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import { PROFILE_PICTURE_API_ENDPOINT } from '../../../../helpers/config'
import ImageDisplay from '../../../commonComponent/ImageDisplay'

interface props {
    email : string
    lastName : string
    firstName : string
}

const UserInfoCell: FC<props> = ({email, lastName, firstName}) => (
  <div className='d-flex align-items-center'>
    <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
      <a href='#'>
          <div
            className={clsx(
              'symbol-label fs-3',
              `bg-light-primary`,
              `text-primary`
            )}
          >
            <ImageDisplay path={`${PROFILE_PICTURE_API_ENDPOINT}?name=${firstName} ${lastName}`} altText='avatar' errorPath='/media/svg/avatars/blank.svg' className=''/>
          </div>
      </a>
    </div>
    <div className='d-flex flex-column'>
      <a href='#' className='text-gray-800 text-hover-primary mb-1'>
        {firstName} {lastName}
      </a>
      <span>{email}</span>
    </div>
  </div>
)

export {UserInfoCell}
