import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import authSvc from "../home/auth/auth.service"
const CheckPermission = ({Component, role}) =>{
    // let loggedinUser = {
    //     role: "admin"
    // }

    let [loggedInUser, setLoggedInUser]= useState();
    const navigate = useNavigate();
    const [loading, setLoading]= useState(true)    
    const loadLoggedInUser =async ()=>{
        try {
            let detail= await authSvc.getLoggedInUser()
            if(!detail) {
                toast.error("Please login First")
                return  navigate ("/login")

            } else {
                setLoggedInUser(detail.data.data)
            }
            

        } catch (exception){
            throw exception
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
       let token = localStorage.getItem('token');
       if(!token){
        toast.error("login First");
        navigate('/login')
       } else {
        loadLoggedInUser()
       }
        // 
 
    }, [])

    if(loading){
        return  <> Loading....</>
    } else {
        if(loggedInUser && loggedInUser.role === role){
            return Component
        } else {
            toast.warn(" you do not have privileage to access "+role+" panel!")
            return <Navigate to={'/' + loggedInUser.role }></Navigate>
        }
    }

}
export default CheckPermission;