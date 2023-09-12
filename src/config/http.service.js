import axiosInstance from "./axios.config";

class HttpService {
    _headers = {};
    setHeaders = (config) => {
        if(config.file) {
            this._headers = {
                "Content-Type" : "multipart/form-data"
            }
        }
        //todo after login configure
        if (config.auth) {
            let token = localStorage.getItem('token');
            if (!token){
                throw new Error("User not logged in!!!")
            }
            this._headers = {
                ...this._headers,
                "Authorization": "Bearer "+token
            }
        }
        if (config.query) {
            this._headers = {
                ...this._headers,
                "Params":  config.query
            }
        }
    }
    getRequest = async (url, config={}) =>{
        try{
            this.setHeaders(config);
            let response = await axiosInstance.get(
                url,
                {
                    headers:this._headers
                }
            )
            return response;
                

        } catch (exception){
            throw exception;
        }
    }
    postRequest = async (url, data = {}, config = { }) => {
        try{
            this.setHeaders(config)
            let response = await axiosInstance.post(
                url, 
                data,
                {
                    headers: this._headers
                }
            )
            return response;
        }catch(exception) {
            throw exception;
        }
    }

    putRequest = async (url, data = {}, config = { }) => {
        try{
            this.setHeaders(config)
            let response = await axiosInstance.put(
                url, 
                data,
                {
                    headers: this._headers
                }
            )
            return response;
        }catch(exception) {
            throw exception;
        }
    }
    deleteRequest = async (url, config = {})=> {
        try{
            this.setHeaders(config)
            let response = await axiosInstance.delete(
            url,
            {
                headers: this._headers
            }
            )
            return response;

        }catch (exception){
             throw exception
        }

    }
}
export default HttpService;