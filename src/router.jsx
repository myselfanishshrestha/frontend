import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/landing/home.page";
import LoginPage from "./pages/home/auth/login.page";
import NotFound from "./pages/home/error/not-found.page";
import HomePageLayout from "./pages/layout/home.layout";
import CategoryList from "./pages/home/category/list.page";
import CategoryProductList from "./pages/home/category/product-list.page";
import AdminLayout from "./pages/layout/admin.layout";
import AdminDashboard from "./pages/cms/admin/dashboard.page";
import CheckPermission from "./pages/routimg/check-permission.page";
import RegisterPage from "./pages/home/auth/register.page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivateUser  from "./pages/home/auth/activate-user.page";
import {AdminBannerCreate, AdminBannerList, AdminBannerEdit} from "./pages/cms/admin/banner"
import {AdminBrandCreate, AdminBrandList, AdminBrandEdit} from "./pages/cms/admin/brand"
import {AdminCategoryCreate, AdminCategoryList, AdminCategoryEdit} from "./pages/cms/admin/category"
import {AdminUserCreate, AdminUserList, AdminUserEdit} from "./pages/cms/admin/user"
import { AdminProductList , AdminProductCreate} from "./pages/cms/admin/product";
import { Provider } from "react-redux";
import store from "./store";


// import AdminBannerList from "./pages/cms/admin/banner/admin-banner-list";
// import AdminBannerCreate from "./pages/cms/admin/banner/admin-banner-create";

const Routing = () => {
    return (<>
    <Provider store={store}>
        <BrowserRouter>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<HomePageLayout />}>

                    <Route index  element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path = "activate/:token" element= {<ActivateUser/>}/>

                    <Route path="category" element={<CategoryList />}/>
                    <Route path="category/:categorySlug" element={<CategoryProductList />}/>

                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/admin" element={<CheckPermission Component={<AdminLayout/>} role="admin"/> }> 
            {/* <Route path="/customer" element= {<AdminLayout/>} > */}
                    <Route index element = {<AdminDashboard />} />
                    <Route path = "banner" element={<AdminBannerList/>}/>
                    <Route path = "banner/create" element={<AdminBannerCreate/>}/>
                    <Route path = "banner/:id" element={<AdminBannerEdit/>}/>

                    <Route path = "brand" element={<AdminBrandList/>}/>
                    <Route path = "brand/create" element={<AdminBrandCreate/>}/>
                    <Route path = "brand/:id" element={<AdminBrandEdit/>}/>

                    <Route path = "category" element={<AdminCategoryList/>}/>
                    <Route path = "category/create" element={<AdminCategoryCreate/>}/>
                    <Route path = "category/:id" element={<AdminCategoryEdit/>}/>

                    <Route path = "users" element={<AdminUserList/>}/>
                    <Route path = "user/create" element={<AdminUserCreate/>}/>
                    <Route path = "users/:id" element={<AdminUserEdit/>}/>

                    
                    <Route path = "products" element={<AdminProductList/>}/>
                    <Route path = "product/create" element={<AdminProductCreate/>}/>
                   
                   
                  
                    <Route path = "orders" element={<>banner List</>}/>
                    <Route path = "transactions" element={<>banner List</>}/>
                </Route>
            </Routes> 
        </BrowserRouter>
    </Provider>
     
    </>)
}

export default Routing;