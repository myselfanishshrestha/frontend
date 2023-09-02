import HttpService from "../config/http.service";

class bannerService extends HttpService{
    getAllHomeBanner= async()=>{
        try{
            let response = await this.getRequest( '/v1/banner/home')
            return response;

        } catch (exception){
            throw exception
        }
    }


}

export default new bannerService()