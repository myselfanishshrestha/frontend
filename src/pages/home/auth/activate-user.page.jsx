import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import authSvc from "./auth.service";
import { toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const ActivateUser = () => {
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const navigate = useNavigate();
    const [details, setDetail] = useState()
    const PasswordSchema = Yup.object({
        password: Yup.string().min(8).required(),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password and confirm Password should be same")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(PasswordSchema)
    })
    const submitForm = async(data)=>{
        try{
            let res = await authSvc.setPassword(params.token, data)
            toast.success("Your Password has been sucessfully set. Please login")
            navigate("/login")



        } catch (exception){
            console.log(exception)
        }
    }


    const verifyToken = async() => {
        try {
            let response = await authSvc.verifyActivationToken(params.token)
            setDetail(response.deta);


        } catch (exception){
            
            toast.error(exception?.data?.msg)
            navigate('/login')

        } finally {
            setLoading(false)
        }
    }


    useEffect(()=> {
        //api call
        verifyToken();
    },[])
    return (<>
        {
            loading? <> Loading....</> : <>
             <Container className="my-5">
                <Row>
                    <Col sm ={12} md={{offset:3, span:6}} className="bg-light p-3">
                   
                        <h4 className="text-center">Password set page</h4>
                         <hr/>

                         <Form onSubmit={handleSubmit(submitForm)}>
                            

                            <Form.Group className = "row mb-3">
                                <Form.Label className= "col-sm-3">password: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                         
                                        size = "sm"
                                        
                                        type = "password"
                                        
                                        {...register('password', {required:true} )}
                                        placeholder ="Enter your password"
                                   
                                    />
                                    <span className="text-danger">{
                                        errors && errors.password?.message
                                    }

                                    </span>
                                </Col>
                                
                            </Form.Group>
                            <Form.Group className = "row mb-3">
                                <Form.Label className= "col-sm-3">RE- Type password: </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                         
                                        size = "sm"
                                        {...register('confirmPassword', {required: true})}
                                        type = "password"
                                     
                                        
                                        placeholder ="Enter your password"
                                   
                                    />
                                    <span className="text-danger">{
                                        errors && errors.confirmPassword?.message
                                    }

                                    </span>
                                </Col>
                                
                            </Form.Group>

                            <Form.Group className = "row mb-3">
                                <Col sm={{offset:3, span:9}}>
                                    <Button type="submit" size="sm" variant="success" className="me-3">
                                        <FaPaperPlane/> Submit
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
        }
    </>)
}
export default ActivateUser;