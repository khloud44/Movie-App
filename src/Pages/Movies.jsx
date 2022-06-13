import { useEffect, useState } from "react"
import axiosInstance from '../API/axiocConfig';
import MovieCard from '../Components/MovieCard';
import SearchMovie from "../Components/SearchMovie";


import DashboardLayout from "../Layout/DashboardLayout"


function Movies(){
    const [movies ,setMovies]= useState([]);

	useEffect(()=>{
		axiosInstance
			.get('/popular')
			.then((res)=> {setMovies(res.data.results); })
			.catch((err)=> console.log(err))
	},[]);

    // console.log(movies);

    return(
        <DashboardLayout>
            <div className="container" >
                <div className="row d-flex justify-content-around">
                    <div className="col-md-12 text-center p-3">
                        <SearchMovie/>
                    </div>
                    {movies.map((movie ,index) =>{
                        return (
                                <div className="col-md-3 col-sm-6  my-3 bd-info" key={index}>
                                <MovieCard movie = {movie} />
                                </div>
                        )}
                        )}  
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Movies