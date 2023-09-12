import HttpService from "../../../config/http.service";

class AuthService extends HttpService{
    login = async (credentials) => {
        try {
            let response = await this.postRequest('/v1/auth/login' , credentials)
            //todo: login handle
            return response

        } catch (exception){
            throw exception
        }
    }
    logoutUser = async()=>{
        try{
            let response = await this.postRequest('/v1/auth/logout', {}, {auth:true});
            return response;

        }catch(exception){
            throw exception;
        }
    }
    verifyActivationToken = async (token) =>{
        try{

            let response = await this.getRequest(
                '/v1/auth/verify-token/' + token
            )
            return response;
        } catch (exception){
            throw exception;
        }
    }
    register = async (data) => {
        try {
            let response = await this.postRequest(
                '/v1/auth/register',
                data,
                {file: true}
            )
            return response;

        } catch (exception){
            throw exception;
        }
    }

    setPassword = async (token,password ) => {
        try{

            let response = await this.postRequest(
                '/v1/auth/password-set/'+token,
                password
            )
            return response
        } catch(exception){
            throw exception
        }
    }
    getLoggedInUser = async ()=>{
        try{
            let response = await this.getRequest(
                'v1/auth/me', {auth: true}
            )
           return response;

        }catch (exception){
            throw exception
        }
    }

}
const authSvc = new AuthService();
export default authSvc;