import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../API/axiocConfig";

import DashboardLayout from "../Layout/DashboardLayout"
import './pagesStyle.css'

function MovieDetails(){
    const params=useParams();
    let [isFavourite ,setFavorite] = useState(false);
    const [movieData , setMovieData]= useState({});
    useEffect(()=> {
        console.log("Hello");
        axiosInstance
        .get(`/movie/${params.id}`)
        .then(res => setMovieData(res.data))
        .catch(err => console.log(err))
        console.log(movieData);
    },[]);
    const handlerFavorite=()=>{
        isFavourite =! isFavourite;
        console.log(isFavourite + "");
    }
    
    console.log(movieData);
    return(
        <DashboardLayout>
            <div className="container-fluid w-100" style={{backgroundImage:`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="p-3 text-end shadow text-center mb-1 ">
                                <span><img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top w-75 rounded  my-1" alt="..."/></span>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h3 className="mb-4 ">{movieData.original_title} <i className="fa-solid fa-heart text-light" onClick={()=>handlerFavorite}></i></h3>
                            <div className="d-flex text-aligne-center justify-content-center flex-wrap">
                                {movieData.genres?.map(genre =>(
                                    <span className="p-2 border m-2 rounded-pill" key={genre.id}>{genre.name}</span>
                                ))}    
                            </div> 
                            <p className="mt-4">{movieData.overview}</p>
                            <p className="my-4"> Revenue : {movieData.revenue}</p>
                            Companies :
                            <ul> 
                                {movieData.production_companies?.map(company =>(
                                    <li className="p-1" key={company.id}>{company.name} </li>
                                ))}    
                            </ul> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

// https://www.youtube.com/embed/iA_wCcG-dQQ

export default MovieDetails