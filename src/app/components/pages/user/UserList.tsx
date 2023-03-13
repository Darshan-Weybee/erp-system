import { KTCard } from "../../../../_metronic/helpers"
import UsersListHeader from "./component/UsersListHeader"
import UsersTable from "./component/UsersTable"

const UserList = () => {
    return (
        <KTCard>
            <UsersListHeader />
            <UsersTable />
        </KTCard>
    )
}

export default UserList