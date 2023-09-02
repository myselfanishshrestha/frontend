// hook
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row  } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {FaPaperPlane, FaTrash} from "react-icons/fa"
import axios from "axios";
import axiosInstance from "../../../config/axios.config";
import authSvc from "./auth.service";
import { toast } from "react-toastify";
const LoginPage =  () => {
    const [credentials, setCredentials] = useState({
        email: null,
        password: null
    });
    const [errors, setErrors] = useState();
    const navigate = useNavigate()

    const handleChange = (e)=> {
        let {name, value}= e.target
            setCredentials({
                ...credentials,
                [name]: value
            })
           
           let msg = handleValidation(value, name)
           setErrors({
            ...errors,
            [name]: msg
        })

    }
    const handleValidation = (value, field) => {
        let msg =null;
        switch(field){
            case "email":
                 msg =(!value) ? "Email field is required": '';
                break;
            case "password":
                msg = (!value) ? "password field is required": '';
                break;
        }
       
        return msg;


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let errMsg = {};
        Object.keys(credentials).map((field) => {
           const msg = handleValidation(credentials[field], field)
           if(msg){
            errMsg[field] = msg;

           }
           
        })
        if(Object.keys(errMsg).length){
            setErrors(errMsg);
        } else {
             try{
                // let response = await axios.post(
                //     'http://localhost:3005/api/v1/auth/login',
                //     credentials,
                //     {
                //         headers: {
                //             "Content-Type": "application/json"
                //         }
                        
                //     } )
                // let response = await axiosInstance.post('v1/auth/login', credentials);
                    let response = await authSvc.login(credentials)
                    //web storage
                        localStorage.setItem('token', response.data.data.accessToken)
                        localStorage.setItem('refreshToken', response.data.data.refreshToken)
                        localStorage.setItem("user", JSON.stringify( response.data.data.userDetail))

                        toast.success("You are sucessfully logged in")
                        navigate("/"+ response.data.data.userDetail.role) 


             } catch (exception ) { 
                console.log(exception)

             }
            
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
    
   

    
    return (
        <>
            
            <Container className="my-5">
                <Row>
                    <Col sm ={12} md={{offset:3, span:6}} className="bg-light p-3">
                   
                        <h4 className="text-center">Login Page</h4>
                         <hr/>

                         <Form onSubmit={handleSubmit}>
                            <Form.Group className = "row mb-3">
                                <Form.Label className= "col-sm-3">UserName: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                         
                                        size = "sm"
                                        onChange={handleChange}
                                        name= "email"
                                        type = "text"
                                        
                                        placeholder ="Enter your username"
                                   
                                    />
                                    <span className="text-danger">{
                                        errors?.email
                                    }

                                    </span>
                                 </Col>
                                
                            </Form.Group>

                            <Form.Group className = "row mb-3">
                                <Form.Label className= "col-sm-3">password: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                         
                                        size = "sm"
                                        name= "password"
                                        type = "password"
                                        onChange={handleChange}
                                        
                                        placeholder ="Enter your password"
                                   
                                    />
                                    <span className="text-danger">{
                                        errors?.password
                                    }

                                    </span>
                                </Col>
                                
                            </Form.Group>

                            <Form.Group className = "row mb-3">
                                <Col sm={{offset:3, span:9}}>
                                    <Button type="submit" size="sm" variant="success" className="me-3">
                                        <FaPaperPlane/> Login
                                    </Button>
                                    <Button type="reset" size="sm" variant="danger" className="me-3">
                                        <FaTrash/> Cancel
                                    </Button>
                                </Col>
                            </Form.Group>

                            


                        </Form>

                        <p>Or</p>
                        <NavLink to="/forget-password">Forgot Password</NavLink>
                        <span>Or</span>
                        <NavLink to="/register">Redister your account?</NavLink>

                
                
               
                </Col>
            </Row>
      </Container>
                 
        </>
    
    )
}

export default LoginPage