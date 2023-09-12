import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const LightBoxImage =({image})=>{
    const onInit = () => {
        console.log('lightGallery has been initialized');
    }; 
    return(<>
         <LightGallery
                onInit={onInit}
               
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={image}>
                    Preview
                </a>
                
        </LightGallery>
    
    </>)
}
export default LightBoxImage