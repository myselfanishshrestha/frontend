import AdminBannerCreate from "./admin-banner-create";
import AdminBannerList from "./admin-banner-list";
import BannerService from "./banner.service";
import AdminBannerEdit from "./admin-banner-edit";

const bannerSvc = new BannerService();
export {
    AdminBannerCreate,
    AdminBannerList,
    bannerSvc,
    AdminBannerEdit
}