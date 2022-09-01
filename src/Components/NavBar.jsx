import React from "react"
// import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './style.css'
import logo from "../assets/images/9.png"
import SearchMovie from "./SearchMovie";

function NavBar(){
    // const Location = useLocation();
    // console.log(Location.pathname);
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
                <div className="container-fluid">
                    <NavLink  className="navbar-brand text-light" to="/">
                        <img src={logo} alt="" width="40" height="34"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink  className="nav-link" aria-current="page" to='/'>Movies</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink  className="nav-link" to='/Favorite'>Favorites</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a  className="navbar-brand text-light" href="/">
                        <img src="9.png" alt="" width="40" height="34"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a  className="nav-link" aria-current="page" href='/'>Movies</a>
                        </li>
                        <li className="nav-item">
                        <a  className="nav-link" href='/Favorite'>Favorites</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav> */}
        </>
    );
}

export default NavBar;