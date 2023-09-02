import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import banerService from "../../../../services/baner.service";

 const BannerHomeComponent = () => {
    const [bannerList, setBannerList]  = useState();
    const loadBannerHome = async()=>{
        try{
            let response = await banerService.getAllHomeBanner();
            if (response.data.data){
                setBannerList(response.data.data);
            }

        }catch(exception){
            console.log(exception)
            toast.error("Error fetching baner")
        }
    }

    useEffect(()=>{


    }, [])

    return (<>
    <section className="banner-wrapper mb-3">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {

                bannerList && bannerList.map((singleBanner, index) =>(
                    <div className={' carousel-item '+ ((index=== 0) ? 'active': '')}  key={index}>
                         <img src={import.meta.env.VITE_IMAGE_URL + "/banner"+ singleBanner.image} className="d-block w-100" alt="..."/>
                     </div>

                ))

            } 


          
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>  
      </div>

         </section>

    </>)
 }
 export default BannerHomeComponent