import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
    let loggedinUser = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <NavLink className="nav-link" to="/admin">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </NavLink>
              <div className="sb-sidenav-menu-heading">Features</div>
              <NavLink className="nav-link" to="/admin/banner">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-images"></i>
                </div>
                Banner Manager
              </NavLink>

              <NavLink className="nav-link" to="/admin/brand">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-B"></i>
                </div>
                Brand Manager
              </NavLink>


              <NavLink className="nav-link" to="/admin/category">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                Category Manager
              </NavLink>

              <NavLink className="nav-link" to="/admin/users">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-users"></i>
                </div>
                Users Manager
              </NavLink>

              <NavLink className="nav-link" to="/admin/products">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-shopping-basket"></i>
                </div>
                Product Manager
              </NavLink>

              <NavLink className="nav-link" to="/admin/orders">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                Order Manager
              </NavLink>
              <NavLink className="nav-link" to="/admin/transactions">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-money-bill"></i>
                </div>
                Transactions Manager
              </NavLink>


            </div>

             
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            {loggedinUser.name}
          </div>
        </nav>
      </div>
    </>
  );
};
export default AdminSidebar;
