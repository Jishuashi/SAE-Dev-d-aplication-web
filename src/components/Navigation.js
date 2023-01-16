import logo from '../assets/logo.png';
import '../styles/Navigation.css';
import {Link} from "react-router-dom";
import React from "react";

/**
 * Retourne un Élément React contenant la div de navigation du site
 * @returns {JSX.Element} retourne <Navigation />
 */
function Navigation({logged, setLogged, unconnected, setUnconnected}) {

    const handleChangeLogged = () => {
        setLogged(!logged);
        setUnconnected(true);
    }

    if (logged) {
        return (<div className="divNav">
            <nav className="navbar">
                <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                <div className="rightNav">
                    <Link className="link" to="/domains">Domaine</Link>
                </div>
                <div className="menu">
                    <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox"/>

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <Link to="/profile">Mon Profil
                                    <li></li>
                                </Link>
                                <Link to="/" onClick={handleChangeLogged}>Deconexion
                                    <li></li>
                                </Link>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>);
    } else {
        return (<div className="divNav">
            <nav className="navbar">
                <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
                <div className="rightNav">
                    <Link className="link" to="/connexion">S'identifier</Link>
                    <Link className="link" to="/inscription">S'inscrire</Link>
                </div>
            </nav>
        </div>);
    }
}

export default Navigation;