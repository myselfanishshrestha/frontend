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

const Routing = () => {
    return (<>
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
                {/* <Route path="/customer" element={<CheckPermission Component={<AdminLayout/>} role="admin"/> }>  */}
            <Route path="/customer" element= {<AdminLayout/>} >
                    <Route index element = {<AdminDashboard />} />
                    <Route path = "banner" element={<>banner List</>}/>
                    <Route path = "brand" element={<>banner List</>}/>
                    <Route path = "category" element={<>banner List</>}/>
                    <Route path = "products" element={<>banner List</>}/>
                    <Route path = "users" element={<>banner List</>}/>
                    <Route path = "orders" element={<>banner List</>}/>
                    <Route path = "transactions" element={<>banner List</>}/>
                </Route>
            </Routes> 
        </BrowserRouter>
    </>)
}

export default Routing;