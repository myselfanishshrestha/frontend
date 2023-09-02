import axios from "axios";

const axiosInstance = axios.create({

    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server Timed out...",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.response.use(
    (success) => {
        return success;
    },
    (reject) => {
        if (reject.response.status === 401){
            localStorage.removeItem("token")
            localStorag.removeItem('user')
            localStorage.removeItem("refreshToken")
            toast.error("please login first")
            window.location.href = "/login "
        }
        //todo: handle error
        throw reject?.response;
    }
    
)
export default axiosInstance;