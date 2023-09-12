import AdminBrandCreate from "./admin-brand-create";
import AdminBrandList from "./admin-brand-list";
import BrandService from "./brand.service";
import AdminBrandEdit from "./admin-brand-edit";

const brandSvc = new BrandService();
export {
    AdminBrandCreate,
    AdminBrandList,
    brandSvc,
    AdminBrandEdit
}