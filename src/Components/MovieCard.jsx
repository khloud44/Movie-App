import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard(props) {
    const navigate = useNavigate();
    return (
            <div className="card bg-dark position-relative" onClick={()=>navigate(`MovieDetails/${props.movie.id}`)}>
                <span><img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} className="card-img-top w-100" alt="..."/></span>
                <div className='rate mx-3'>{props.movie.vote_average}</div>
                <div className="card-body">
                    <h6 className="card-title">{props.movie.title}</h6>
                    <p className="card-text layer d-flex justify-content-center align-items-center ">
                        <button className="btn btn-translate border rounded-pill text-light"><i className="fa-solid fa-circle-play icon" ></i></button>
                    </p>    
                </div>
            </div>
    );
}

export default MovieCard;