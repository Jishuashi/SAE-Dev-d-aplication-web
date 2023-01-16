import React  from "react";
import {Link} from "react-router-dom";
import '../styles/NotAllowed.css';

function NotAllowed() {
    return (
        <div>
            <h1 className='titleAllowed'>Vous n'avez pas accès à cette page</h1>
            <p className='textAllowed'>Vous devez être connecter pour avoir accès à cette page</p>
            <Link className="linkNotAllowed" id='home' to="/">Retour à l'accueil</Link>
            <Link className="linkNotAllowed" id='signin' to="/inscription">S'inscrire</Link>
            <Link className="linkNotAllowed" id='login' to="/connexion">S'identifier</Link>
        </div>
    );
}

export default NotAllowed;