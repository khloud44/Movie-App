import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3/movie",
    params : {
        api_key : "a0be9ae65dc240ed8173c639866ca24f"
            
    }
});

// axiosInstance.interceptors.request.use(
//         (req) => {
//             req.headers["Authorization"]= "Bearer hgfdsawertyuioilk,jmhngbfvdc54125656412";
//             console.log(req);
//         return req;
//         },
//         (err) => {
//         return Promise.reject(err);
//         }
//     );
    
//     // For POST requests
//     axiosInstance.interceptors.response.use(
//         (res) => {
//         // Add configurations here
//         if (res.status === 201) {
//             console.log('Posted Successfully');
//         }
//         return res;
//         },
//         (err) => {
//         return Promise.reject(err);
//         }
//     );

export default axiosInstance;