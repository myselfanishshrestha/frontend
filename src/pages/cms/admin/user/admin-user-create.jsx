import { Breadcrumb, Button, Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSvc } from ".";
import { toast } from "react-toastify";
import { useState } from "react";
import authSvc from "../../../home/auth/auth.service";
const AdminUserCreate = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false );

    const userSchema  = Yup.object({
        
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        role: Yup.string().matches(/customer|seller/),
        address: Yup.object({
            billingAddress: Yup.string(), 
            shippingAddress: Yup.string()
        }) 
    });
    const {register,handleSubmit,formState: {errors},setError, setValue, watch} = useForm({
        resolver: yupResolver(userSchema)
    })
    const submitEvent = async (data)=>{
        try{
            setLoading(true);
            if (!data.image){
                setError('image', {message: "image is required"})
            } else {
                data.image = data.image[0]
                let response = await authSvc.register(data)
                toast.success(response.data.msg) 
                navigate("/admin/users")
            }

        }catch (exception){
            toast.error(exception.data?.msg)

        } finally{
            setLoading(false);
        }
        
    }

    const handleImage = (e) => {
        let image =e.target.files[0];
        

        //valideate
        let ext =( image.name.split('.')).pop();
        let size = image.size;
        let allow=['jpg', 'jpeg','png', 'svg']
        if(allow.includes(ext.toLowerCase())){
            if(size<=3000000){
                setValue('image', image)

            }else{
                setError("image", "file size should be less than 3 mb")
            }

        }else {
            setError("image", "image format not supported")

        }
    }
    console.log(errors)
  return (
    <>
      <Container className="px-4" fluid>
        <h1 className="mt-4">User create </h1>
        <Breadcrumb className="mb-4">
          <li className="breadcum-item">
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/admin/user">User List</NavLink>
          </li>
          <li className="breadcrumb-item active">user form</li>
        </Breadcrumb>
        <Card className="mb-4">
          <Card.Header>
            <Container>
              <Row>
                <Col sm={12} md={6}>
                  <h4>User List</h4>
                </Col>
                <Col sm={12} md={6}>
                  <NavLink
                    className={"btn btn-sm btn-success float-end"}
                    to="/admin/users/create" >
                    <FaPlus /> Add User
                  </NavLink>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body>

            <Container>
                <Row>
                    <Col sm={12}>
                    <form className="form" onSubmit={handleSubmit(submitEvent)}>
                    <div className="form-group row mb-3"> 
                        <label htmlFor="" className="col-sm-3">Name: {" "}</label>
                        <div className="col-sm-9">
                            <input  
                            {...register("name", {required: true} )}
                             type="name" className="form-control form-sontrol-sm" 
                             placeholder="Enter Your Username ..." 
                             
                             />
                             <span className="text-danger">
                                {errors.name && errors.name?.message}
                             </span>
                        </div>

                    </div>
                    <div className="form-group row mb-3"> 
                        <label htmlFor="" className="col-sm-3">Email: {" "} </label>
                        <div className="col-sm-9">
                            <input 
                            {...register("email", {required: true} )}  
                            type="email" 
                            className="form-control form-sontrol-sm" 
                            placeholder="Enter Your Username ..." 
                            />
                            <span className="text-danger">
                                {errors.email && errors.email?.message}
                             </span>
                        </div>

                    </div>

                    <div className="form-group row mb-3"> 
                        <label htmlFor="" className="col-sm-3">Phone: {" "} </label>
                        <div className="col-sm-9">
                            <input 
                            {...register("phone", {required: true} )}  
                            type="tel" 
                            className="form-control form-sontrol-sm" 
                            placeholder="Enter Your Phone ..." 
                            />
                            <span className="text-danger">
                                {errors.phone && errors.phone?.message}
                             </span>
                        </div>

                    </div>
 
                    <div className="form-group row mb-3">
                        <label htmlFor="" className="col-sm-3">Role: {" "} </label>
                        <div className="col-sm-9">
                            <select 
                                className="form-control form-control-sm" 
                                {...register("role", {required: true} )}   
                                required>
                                <option value="customer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                            <span className="text-danger">
                                {errors.role && errors.role?.message}
                             </span>
                            
                        </div>
                    </div> 

                    <div className="form-group row mb-3">
                        <label htmlFor="" className="col-sm-3">Address(Shippig): </label>
                        <div className="col-sm-9">
                           <textarea  {...register("address[shippingAddress]", {required: true} )}     rows="3" className="form-control form-control-sm" style={{resize: "none"}}>

                           </textarea>
                           <span className="text-danger">
                                {errors.address && errors.address['shippingAddress']?.message}
                           </span>
                        </div>
                            
                    </div> 

                    <div className="form-group row mb-3"> 
                        <label htmlFor="" className="col-sm-3">Address(billingAddress): </label>
                        <div className="col-sm-9">
                           <textarea 
                           
                            {...register("address[billingAddress]", {required: true} )}  
                            rows="3" 
                            className="form-control form-control-sm" 
                            style={{resize: "none"}}>

                            </textarea>
                            <span className="text-danger">
                                {errors.address && errors.address['billingAddress']?.message}
                             </span>
                        </div>
                            
                    </div> 
                        

                   
                

                    <div className="form-group row mb-3">
                        <label htmlFor="" className="col-sm-3">Image: </label>
                        <div className="col-sm-9">
                          <input type="file"
                          className="form-control form-control-sm" 
                          {...register("image")}  
                        // onChange={(e)=>{
                        //     console.log(e.target.files[0])
                        //     setValue("image", e.target.files[0])
                        // }}
                          accept="image/*" />
                          <span className="text-danger">
                                {errors.image && errors.image?.message}
                             </span>
                        </div>
                            
                    </div> 

                    <div className="form-group row mb-3">
                       
                        <div className="offset-md-3 col-sm-9">
                            <button className="btn btn-sm btn-success" disabled= {loading} type="submit" >
                                <i className="fa fa-paper-plane">Register</i>
                            </button>
                            <button className="btn btn-sm btn-danger" type="reset">
                                <i className="fa fa-trash">Cancel</i>
                            </button>
                        </div> 

                    </div>

                 </form>
                    </Col>
                </Row>
            </Container>

          </Card.Body>
        </Card>
      </Container>
      
    </>
  );
};
export default AdminUserCreate;
