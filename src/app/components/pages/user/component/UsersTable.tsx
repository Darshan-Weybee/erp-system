import { FC, useEffect } from "react"
import { connect } from "react-redux"
import { KTCardBody } from "../../../../../_metronic/helpers"
import { getUserList } from "../../../../reducers/user/userAction"
import { userListState } from "../../../../reducers/user/userListReducer"
import { CustomHeaderColumn } from "./CustomHeaderColumn"
import { CustomRow } from "./CustomRow"
import { UserCustomHeader } from "./UserCustomHeader"

const HEADERS = [
    {
        columnName : "Name",
        id : "Name"
    },
    {
        columnName : "Role",
        id : "Role"
    },
    {
        columnName : "Joined Date",
        id : "Joined Date"
    },
    {
        columnName : "Actions",
        id : "Actions"
    }
]

 interface props {
    userListDetails : userListState
    getUserList : Function
 }

const UsersTable:FC<props> = ({getUserList, userListDetails}) => {

    useEffect(() => {
        getUserList();
    },[])

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_users'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {HEADERS.map((column: any) => (
                // <CustomHeaderColumn key={column.id} column={column} />
                <UserCustomHeader title={column.columnName} className="min-w-125px"/>
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold'>
            {userListDetails?.userList?.data?.length > 0 ? (
              userListDetails?.userList?.data?.map((row: any, i: number) => {
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={HEADERS.length}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </KTCardBody>
  )
}

const mapStateToProps = (state: any) => {
    return {
        userListDetails: state.userList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserList: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
