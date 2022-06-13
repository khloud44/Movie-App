import { React,  useEffect,  useState } from 'react'
import axiosInstance from '../API/axiocConfig';

const SearchMovie = () => {
    const [searchText , setSearchText]=useState("");
    const handlerSearch = e =>{
        setSearchText(
            e.target.value);
        };
    const query=searchText;    
    useEffect(()=>{
        axiosInstance
        .get(`/search/movie&query=${searchText}`)
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    },[])
    // console.log(searchText)
    return (
        <div className='position-relative'>
            <input type="text" name="search" className="form-control" placeholder='Search ...' value={searchText} onChange={(e)=>handlerSearch(e)}/>
            <button className='btn btn-primary search position-absolute px-5 text-light'>
                <i className="fa-solid fa-magnifying-glass  "></i>
            </button>
        </div>
    )
}

export default SearchMovie