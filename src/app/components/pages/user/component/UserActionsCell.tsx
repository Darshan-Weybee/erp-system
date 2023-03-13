import { KTSVG } from '../../../../../_metronic/helpers'

const UserActionsCell = () => {
    return (
        <>
            <a
                href='#'
                className='btn btn-light btn-active-light-primary btn-sm'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
            >
                Actions
                <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
            </a>
            <div
                className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                data-kt-menu='true'
            >
                <div className='menu-item px-3'>
                    <a className='menu-link px-3' onClick={() => ""}>
                        Edit
                    </a>
                </div>
                <div className='menu-item px-3'>
                    <a
                        className='menu-link px-3'
                        data-kt-users-table-filter='delete_row'
                        onClick={() => ""}
                    >
                        Delete
                    </a>
                </div>
            </div>
        </>
    )
}

export { UserActionsCell }
