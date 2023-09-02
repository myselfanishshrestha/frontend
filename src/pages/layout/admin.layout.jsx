import { Outlet,  } from "react-router-dom";
import "./admin.layout.css";
import authSvc from "../home/auth/auth.service";
import AdminNavbar from "../cms/component/admin-navbar.component";
import AdminSidebar from "../cms/component/admin-siderbar.component";
import AdminFooter from "../cms/component/admin-footer.component";
const AdminLayout = () => {
   
    return (<>
    <AdminNavbar/>
     
        <div id="layoutSidenav">
            <AdminSidebar/>
            <div id="layoutSidenav_content">
                <main>
                   <Outlet/>
                
                
                </main>
                <AdminFooter/>
            </div>
        </div>
    </>)
}

export default AdminLayout