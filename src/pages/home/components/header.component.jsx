import { NavLink, Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Logo } from "../../../components/logo.component"

const HomeHeader = ()=>{
    return <>
    <Navbar
        className="bg-body-tertiary navClass"
        expand={"lg"}
        bg="light"
        data-bs-theme="light"
      >
        <Container fluid>
          <Navbar.Brand href="">
            <Logo
              src="https://broadwayinfosys.com/uploads/logo/1667276403.new_broadway_logo.svg"
              className="img img img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            as="button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          ></Navbar.Toggle>

          <Navbar.Collapse id="menu">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <NavLink className={"nav-link"} to="/">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/products">Shop</Nav.Link>
              </Nav.Item>


                    <NavDropdown title="categories" id="nav-dropdown">
                    {/* <NavDropdown.Item eventKey="smart-phones"> */}
                        <NavLink className={'dropdown-item'} to ={`/category/samrt-phones`}>Smart Phones</NavLink>
                    {/* </NavDropdown.Item> */}

                    
                        <NavLink className={'dropdown-item'} to  ={`/category/samrt-phones`}>Smart Phones</NavLink>
                   


                   </NavDropdown>
            

              <Nav.Item>
                <NavLink className={'nav-link'}  to = "/about-us">About us </NavLink>
              </Nav.Item>

              <li className="nav-item">
                <a className="nav-link" href="">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Contact Us
                </a>
              </li>
            </Nav>
            <form className="d-flex me-5" role="search">
              <div className="input-group mb-3 mt-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <i className="fa fa-cart-shopping"></i>(0)
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                
                  Register
              </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
}
export default HomeHeader;