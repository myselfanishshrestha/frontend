import AdminUserCreate from "./admin-user-create";
import AdminUserList from "./admin-user-list";
import UserService from "./user.service";
import AdminUserEdit from "./admin-user-edit";

const userSvc = new UserService();
export {
    AdminUserCreate,
    AdminUserList,
    userSvc,
    AdminUserEdit
}