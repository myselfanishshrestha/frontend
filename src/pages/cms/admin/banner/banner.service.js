import HttpService from "../../../../config/http.service";

class BannerService extends HttpService{
    createBanner = async (data)=> {
        try{
            let response = await this.postRequest(
                '/v1/banner ',
                data,
                {auth: true, file:true}
            )
            return response

        }catch (exception){
            throw exception;
        }
    }
     updateBanner = async(data, id)=> {
        try{
            let response = await this.putRequest(
                '/v1/banner/'+ id,
                data,
                {auth:true, file:true}
            )
            return response

        } catch (exception){
            throw exception
        }
     }

    listAllBannerList = async(perPage=10, page=1)=>{
        try{
            let response = await this.getRequest( 
                '/v1/banner?perPage='+perPage+"&page="+page, 
                {auth: true}
            ) 
            return response;

        }catch (exception){
            throw exception
        }
    }
    deleteByid = async(id )=> {
        try{
           let response = await this.deleteRequest("/v1/banner/"+ id, {auth:true})
           return response;
       }  catch (exception){
           throw exception;
       }
    }
    getBannerById  = async(id )=> {
        try{
           let response = await this.getRequest("/v1/banner/"+ id, {auth:true})
           return response;
       }  catch (exception){
           throw exception;
       }
    }
}
export default BannerService 