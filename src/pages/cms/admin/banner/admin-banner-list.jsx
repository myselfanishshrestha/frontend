import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import {  FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { bannerSvc } from ".";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AdminBannerList =()=> {
    const [bannerData, setBannerData] = useState();
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
                let response = await bannerSvc.deleteByid(id)
                if (response){
                    toast.success(response.data.msg)
                    
                    loadData()
                }

              } catch(exception){
                toast.error("Sorry, banner cannot be deleted")
              }
            }
          })

    }
    let loadData = async()=>{
        try{
            let response = await bannerSvc. listAllBannerList(10,1);
            setBannerData(response.data.data)
        }catch (exception){
          toast.error("Error while fetching banner...")

        }finally  {
            setLoading(false)
        }
    }
    useEffect(()=>{
        loadData()

    },[])

    return(<>
        <div className="container-fluid px-4">
                        <h1 className="mt-4">Banner Lists</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">
                                <NavLink to="/admin">Dashboard</NavLink>
                            </li>
                            <li className="breadcrumb-item active">banners</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <Container>
                                    <Row>
                                 
                                   
                                        <Col sm = {12} md={6}>
                                             <h4>Banner List</h4>
                                        </Col>
                                        <Col sm = {12} md={6}>
                                            <NavLink  className= {"btn btn-sm btn-success float-end"} to ="/admin/banner/create">
                                                 <FaPlus/> Add Banner
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
                                            <th>Link</th>
                                            <th>Thumbnail</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loading ? <><tr><td colSpan={5} className="text-center py-3">Loading....</td></tr></>: (
                                                bannerData && bannerData.map((row, index)=>(
                                                    <tr key = {index}>
                                                        <td>{row.title}</td>
                                                        <td>{row.link}</td>
                                                        <td>{row.image}</td>
                                                        <td>{row.status}</td>
                                                        <td>
                                                            <NavLink to ={"/admin/banner/"+row._id} className={"btn btn-sm btn-info text-white me-3"} style = {{borderRadius:"50%"}}  >
                                                                <FaPen/>
                                                            </NavLink>
                                                            <NavLink onClick={(e)=>{
                                                                e.preventDefault();
                                                                handleDelete(row._id)
                                                            }} to ={"/admin/banner"+ row._id} className={"btn btn-sm btn-danger text-white"} style = {{borderRadius:"50%"}}  >
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
export default AdminBannerList;