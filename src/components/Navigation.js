import logo from '../assets/logo.png';
import '../styles/Navigation.css';
import {Link} from "react-router-dom";
import React from "react";

/**
 * Retourne un Élément React contenant la div de navigation du site
 * @returns {JSX.Element} retourne <Navigation />
 */
function Navigation(){
    return(<div className="divNav">
        <nav className="navbar">
            <img src={logo} id="logo" alt="logo"/>
            <div className="rightNav">
                <Link className="link" to="/connexion">S'identifier</Link>
                <Link className="link" to="/inscription">S'inscrire</Link>
            </div>
        </nav>
    </div>);
}

export default Navigation;