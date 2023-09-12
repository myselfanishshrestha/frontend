import HttpService from "../../../../config/http.service";

class ProductService extends HttpService{
    createProduct = async (data)=> {
        try{
            let response = await this.postRequest(
                '/v1/product ',
                data,
                {auth: true, file:true}
            )
            return response

        }catch (exception){
            throw exception;
        }
    }
     updateProduct = async(data, id)=> {
        try{
            let response = await this.putRequest(
                '/v1/product/'+ id,
                data,
                {auth:true, file:true}
            )
            return response

        } catch (exception){
            throw exception
        }
     }

    listAllProductList = async(perPage=10, page=1)=>{
        try{
            let response = await this.getRequest( 
                '/v1/product?perPage='+perPage+"&page="+page, 
                {auth: true}
            ) 
            return response;

        }catch (exception){
            throw exception
        }
    }
    deleteByid = async(id )=> {
        try{
           let response = await this.deleteRequest("/v1/product/"+ id, {auth:true})
           return response;
       }  catch (exception){
           throw exception;
       }
    }
    getProductById  = async(id )=> {
        try{
           let response = await this.getRequest("/v1/product/"+ id, {auth:true})
           return response;
       }  catch (exception){
           throw exception;
       }
    }
}
export default ProductService 