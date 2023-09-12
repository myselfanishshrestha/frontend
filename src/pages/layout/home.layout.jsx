import { Outlet } from "react-router-dom";
import HomeHeader from "../home/components/header.component";
import HomeFooter from "../home/components/footer.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getloggedInUser } from "../../reducers/user.reducers";
const HomePageLayout = () => {
  const dispatch = useDispatch()
  
   useEffect(()=>{
    let token = localStorage.getItem('token') ?? null;
    if (token ){
      dispatch(getloggedInUser())
    }
   }, [])
  return (
    <>
        <HomeHeader />


        <Outlet />
          
        <HomeFooter />

       
    </>
  );
};

export default HomePageLayout;
