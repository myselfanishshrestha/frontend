import { NavLink } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import LightBoxImage from "../../../../components/image-viewer.component";
import { useState } from "react";

const AdminProductList= ()=>{
    const [loading, setLoading] = useState()
    const[productList, srtProductList] =useState()
    return (<>
    
    <div className="container-fluid px-4">
                        <h1 className="mt-4">Category Lists</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">
                                <NavLink to="/admin">Dashboard</NavLink>
                            </li>
                            <li className="breadcrumb-item active">categorys</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <Container fluid>
                                    <Row>
                                 
                                   
                                        <Col sm = {12} md={6}>
                                             <h4>Category List</h4>
                                        </Col>
                                        <Col sm = {12} md={6}>
                                            <NavLink  className= {"btn btn-sm btn-success float-end"} to ="/admin/product/create">
                                                 <FaPlus/> Add Product
                                             </NavLink>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="card-body">
                                <Table className="table table-sm table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                            <th>Seller</th>
                                           
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading ? <><tr><td colSpan={5} className="text-center py-3">Loading....</td></tr></>: (
                                                productList && productList.map((row, index)=>(
                                                    <tr key = {index}>
                                                        <td>{row.name}</td>
                                                        <td>
                                                            {row.category}
                                                        </td>
                                                        <td>
                                                            {row.price}
                                                        </td>
                                                        
                                                        <td>{row.status}</td>
                                                        <td>{row.seller}</td>
                                                        


                                                        <td>
                                                            <NavLink to ={"/admin/product/"+row._id} className={"btn btn-sm btn-info text-white me-3"} style = {{borderRadius:"50%"}}  >
                                                                <FaPen/>
                                                            </NavLink>
                                                            <NavLink onClick={(e)=>{
                                                                e.preventDefault();
                                                                handleDelete(row._id)
                                                            }} to ={"/admin/product/"+ row._id} className={"btn btn-sm btn-danger text-white"} style = {{borderRadius:"50%"}}  >
                                                                <FaTrash/>
                                                            </NavLink>
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        
        </div>

    </>)
}
export default AdminProductList