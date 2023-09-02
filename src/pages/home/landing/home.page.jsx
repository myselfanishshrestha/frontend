
import ads1 from "../../../assets/images/ads.jpg"
import cat1 from "../../../assets/images/cat1.jpg"
import cat2 from "../../../assets/images/cat2.jpg"
import cat3 from "../../../assets/images/cat3.jpg"
import { useState } from "react"
import BannerHomeComponent from "./component/banner-home.component"

const HomePage = () => {
   


    return (<>
         <BannerHomeComponent/>
        <div className="container-fluid mb-3">
            <div className="row">
                <div className="col-12">
                    <a href="/">
                        <img src={ads1} className="img img-fluid"/>
                    </a>
                </div>

            </div>
        </div>

            <div className="container-fluid bg-light mb-3">
        <div className="row">
            <div className="col-12">
                <h4>
                    Categories
                </h4>

            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat1} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat2} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat3} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <a href="/category-list.html"><img src={cat1} className="card-img-top" alt="First Category"/></a>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat2} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat3} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

        </div>
        <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat1} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat2} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat3} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat1} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat2} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                <div className="card" >
                    <img src={cat3} className="card-img-top" alt="First Category"/>
                
                    <h5 className="card-title text-center p-1">Category title</h5>
                    
                    
                </div> 
            </div>

        </div>

    </div>


    </>)
}

export default HomePage;