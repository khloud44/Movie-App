import { React, useState } from 'react'

const SearchMovie = ({getSearchedMovies}) => {
    const [searchText , setSearchText]=useState("");

    const handlerSearch = e =>{
        setSearchText(
            e.target.value
        );
    };

    return (
        <div className='position-relative mt-3'>
            <input type="text" name="search" className="form-control bg-dark border-0 text-white" placeholder='Search ...' value={searchText} onChange={(e)=>handlerSearch(e)} onKeyUp={()=>getSearchedMovies(searchText)}/>
            <i className="fa-solid fa-magnifying-glass search position-absolute text-muted"></i>
        </div>
    )
}

export default SearchMovie