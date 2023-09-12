import AdminCategoryCreate from "./admin-category-create";
import AdminCategoryList from "./admin-category-list";
import CategoryService from "./category.service";
import AdminCategoryEdit from "./admin-category-edit";

const categorySvc = new CategoryService();
export {
    AdminCategoryCreate,
    AdminCategoryList,
    categorySvc,
    AdminCategoryEdit
}