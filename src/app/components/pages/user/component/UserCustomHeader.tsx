import clsx from 'clsx'
import {FC, useMemo} from 'react'

type Props = {
  className?: string
  title?: string
}
const UserCustomHeader: FC<Props> = ({className, title}) => {

  const sortColumn = () => {
    // avoid sorting for these columns
  }

  return (
    <th
      className={clsx(
        className,
        // order !== undefined && `table-sort-${order}`
      )}
      style={{cursor: 'pointer'}}
      onClick={sortColumn}
    >
      {title}
    </th>
  )
}

export {UserCustomHeader}
