import { Outlet } from "react-router-dom";
import HomeHeader from "../home/components/header.component";
import HomeFooter from "../home/components/footer.component";
const HomePageLayout = () => {
  return (
    <>
        <HomeHeader />


        <Outlet />
          
        <HomeFooter />

       
    </>
  );
};

export default HomePageLayout;
