import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "a0be9ae65dc240ed8173c639866ca24f"
            
    }
});

export default axiosInstance;