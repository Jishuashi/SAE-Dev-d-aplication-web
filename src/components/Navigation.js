import logo from '../assets/logo.png';
import '../styles/Navigation.css';
import {Link} from "react-router-dom";
import React from "react";

/**
 * Retourne un Élément React contenant la div de navigation du site
 * @returns {JSX.Element} retourne <Navigation />
 */
function Navigation({logged}) {

    if(logged){
        return(<div className="divNav">
            <nav className="navbar">
                <Link to="/home"><img src={logo} id="logo" alt="logo"/></Link>
                <div className="rightNav">
                    <Link className="link" to="/domaine">Domaine</Link>
                    <Link className="link" to="/module">Module</Link>
                </div>
            </nav>
        </div>);
    }else{
        return(<div className="divNav">
            <nav className="navbar">
                <Link to="/home"><img src={logo} id="logo" alt="logo"/></Link>
                <div className="rightNav">
                    <Link className="link" to="/connexion">S'identifier</Link>
                    <Link className="link" to="/inscription">S'inscrire</Link>
                </div>
            </nav>
        </div>);
    }
}

export default Navigation;