import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup"
import {yupResolver} from  "@hookform/resolvers/yup"
import axios from "axios";
import axiosInstance from "../../../config/axios.config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import authSvc from "./auth.service";


const RegisterPage = () => {
    const navigate = useNavigate();

const registerSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    role: Yup.string().matches(/customer|seller/),
    address: Yup.object({
        billingAddress: Yup.string(), 
        shippingAddress: Yup.string()
    }) 
    
})
const {register,required, handleSubmit, watch, formState:{errors}, setValue} = useForm({
    resolver: yupResolver(registerSchema)
});

const [loading, setLoading]= useState(false);
const onSubmit = async (data) =>{
    // console.log(data);
    //api submit
    try{
        setLoading(true);

//         let response = await axios.post(
//             'http://localhost:3005/api/v1/auth/register',
//             data,
//             {
//                 headers:{
//                     "Content-type" : "multipart/form-data",
//                     "Accept": "application/json"
// ,
//                 }
//             }
//             )

data.image = data.image[0];

//file uploading in react
// let formData = new FormData();

// formData.append("image", data.image, data.image.name)
// formData.append("name", data.name);
// formData.append("email", data.email);
// formData.append("role", data.role);
// formData.append("phone", data.phone);
// formData.append("address", data.address);

// let response = await axiosInstance.post("/v1/auth/register", data, {
//     headers: {
//         "Content-Type": "multipart/form-data"
//     }
// })
let response = await authSvc.registser(data)
    toast.success("Your account has bbemn registered. check your email for activation link")
    navigate("/login");


    } catch(exception) {
        console.log(exception)
    } finally {
        setLoading(false);
    }
} 
    useEffect(()=>{
        let token = localStorage.getItem('token');
        let user = JSON.parse(localStorage.getItem('user'))
        if (token && user){
            toast.info("you are already logged in")
            navigate("/"+user.role)
        }



    },[])


// console.log(errors);

     
    return(
    <>
         <div className="container my-5 ">
        <div className="row">
            <div className="col-sm-12 offset-md-2 col-md-8 login-wrapper py-3">
                <h4 className="text-center">Register Page</h4>
                

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
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

                

                <p>Or</p>
                <NavLink to="/forget-password">Forgot Password?</NavLink>
                <span>Or</span>
                <NavLink to="/login">Login?</NavLink>

                
                
                </form>
            </div>
        </div>
      </div>
    </>)
}
export default RegisterPage;