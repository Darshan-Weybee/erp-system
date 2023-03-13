// @ts-nocheck
import clsx from 'clsx'
import {FC} from 'react'
import {Row} from 'react-table'
import {User} from '../../core/_models'
import { UserActionsCell } from './UserActionsCell'
import { UserInfoCell } from './UserInfoCell'

type Props = {
  row: Row<User>
}

const CustomRow: FC<Props> = ({row}) => (
  <tr>
    <td><UserInfoCell firstName={row.firstName} lastName={row.lastName} email={row.email}/></td>
    <td>Employee</td>
    <td>12/10/2022</td>
    <td><UserActionsCell/></td>
  </tr>
)

export {CustomRow}
