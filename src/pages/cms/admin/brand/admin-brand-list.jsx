import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import {  FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { brandSvc } from ".";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LightBoxImage from "../../../../components/image-viewer.component";

const AdminBrandList =()=> {
    const [brandData, setBrandData] = useState();
    const [loading, setLoading] = useState(true);

    const handleDelete = async(id)=>{
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true)
              try{
                let response = await brandSvc.deleteByid(id)
                if (response){
                    toast.success(response.data.msg)
                    
                    loadData()
                }

              } catch(exception){
                toast.error("Sorry, brand cannot be deleted")
              }
            }
          })

    }
    let loadData = async()=>{
        try{
            let response = await brandSvc. listAllBrandList(10,1);
            setBrandData(response.data.data)
        }catch (exception){
          toast.error("Error while fetching brand...")

        }finally  {
            setLoading(false)
        }
    }
    useEffect(()=>{
        loadData()

    },[])

    return(<>
        <div className="container-fluid px-4">
                        <h1 className="mt-4">Brand Lists</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">
                                <NavLink to="/admin">Dashboard</NavLink>
                            </li>
                            <li className="breadcrumb-item active">brands</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <Container>
                                    <Row>
                                 
                                   
                                        <Col sm = {12} md={6}>
                                             <h4>Brand List</h4>
                                        </Col>
                                        <Col sm = {12} md={6}>
                                            <NavLink  className= {"btn btn-sm btn-success float-end"} to ="/admin/brand/create">
                                                 <FaPlus/> Add Brand
                                             </NavLink>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="card-body">
                                <Table className="table table-sm table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Title</th>
                                            
                                            <th>Thumbnail</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading ? <><tr><td colSpan={5} className="text-center py-3">Loading....</td></tr></>: (
                                                brandData && brandData.map((row, index)=>(
                                                    <tr key = {index}>
                                                        <td>{row.title}</td>
                                                      
                                                        <td><LightBoxImage image={import.meta.env.VITE_IMAGE_URL+ "/uploads/brand/"+row.image}/></td>
                                                        <td>{row.status}</td>
                                                        <td>
                                                            <NavLink to ={"/admin/brand/"+row._id} className={"btn btn-sm btn-info text-white me-3"} style = {{borderRadius:"50%"}}  >
                                                                <FaPen/>
                                                            </NavLink>
                                                            <NavLink onClick={(e)=>{
                                                                e.preventDefault();
                                                                handleDelete(row._id)
                                                            }} to ={"/admin/brand"+ row._id} className={"btn btn-sm btn-danger text-white"} style = {{borderRadius:"50%"}}  >
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
export default AdminBrandList;