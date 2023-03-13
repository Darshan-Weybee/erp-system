import { useNavigate } from 'react-router-dom';
import {KTSVG} from '../../../../../_metronic/helpers'
import { absolutePath } from '../../../../helpers/relativePath';
import { ADD_USER } from '../../../../helpers/routes';

const UsersListToolbar = () => {
  const navigate = useNavigate();
  const openAddUserModal = () => {
    navigate(absolutePath(ADD_USER))
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>  
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add User
      </button>
    </div>
  )
}

export default UsersListToolbar
