import { getAuth } from "./AuthHelpers";

export const actionsRole = {
    "MASTER_ADMIN": "Master_Admin",
    "ADMIN": "Admin",
    "USER": "User"
};

const mappings = new Map();

mappings.set(actionsRole.MASTER_ADMIN, ["Master_Admin", "User", "Admin"]);
mappings.set(actionsRole.ADMIN, ["Admin", "User"]);
mappings.set(actionsRole.USER, ["User"]);

function hasPermission(action: string) {
    const auth = getAuth()

    if (auth) {
        if (!auth.Roles) {
            return false;
        }
        if (mappings.has(action) && auth.Roles) {
            return mappings.get(action).every((value: string) => auth.Roles.indexOf(value) !== -1);
        }
    }
    return false;
}

export default hasPermission;
