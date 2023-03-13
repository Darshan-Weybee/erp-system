import UsersListSearchComponent from "./UsersListSearchComponent"
import UsersListToolbar from "./UsersListToolbar"

const UsersListHeader = () => {
    return (
      <div className='card-header border-0 pt-6'>
        <UsersListSearchComponent />
        <div className='card-toolbar'>
          <UsersListToolbar />
        </div>
      </div>
    )
  }
  
  export default UsersListHeader