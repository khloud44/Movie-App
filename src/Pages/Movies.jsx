import { useEffect, useState } from "react"
import axiosInstance from '../API/axiocConfig';
import MovieCard from '../Components/MovieCard';
import { Pagination } from "../Components/Pagination";
import SearchMovie from "../Components/SearchMovie";


import DashboardLayout from "../Layout/DashboardLayout"


function Movies(){
    const [movies ,setMovies]= useState([]);

	useEffect(()=>{
		axiosInstance
			.get('/movie/popular')
			.then((res)=> {setMovies(res.data.results); })
			.catch((err)=> console.log(err))
	},[]);

    const handlePagination = (pageNum)=>{
        axiosInstance
			.get(`/movie/popular?page=${pageNum}`)
			.then((res)=> {setMovies(res.data.results); })
			.catch((err)=> console.log(err))
    }

    const getSearchedMovies=(searchText)=>{
        axiosInstance
        .get(`/search/movie?query=${searchText}`)
        .then(res=> {setMovies(res.data.results); })
        .catch(err => console.log(err))
    };

    return(
        <DashboardLayout>
            <div className="container" >
                <div className="row d-flex justify-content-around">
                    <div className="col-md-12 text-center p-3 mt-5">
                        <SearchMovie getSearchedMovies={getSearchedMovies}/>
                    </div>
                    {movies.length > 0 ? 
                            <>
                                {
                                movies.map((movie ,index) =>{
                                    return (
                                            <div className="col-md-3 col-sm-6  my-3 bd-info" key={index}>
                                            <MovieCard movie = {movie} />
                                            </div>
                                    )}
                                    )
                                }
                                <Pagination handlePagination={handlePagination}/>
                            </>
                            :
                            <div>
                                <div className="alert alert-primary text-center " role="alert">
                                    No Movie Mached 
                                </div>
                            </div>
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Movies