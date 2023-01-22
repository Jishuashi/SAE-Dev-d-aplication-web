import React from "react";
import {Link} from "react-router-dom";
import '../styles/ChangePass.css';

function ChangePass() {
    return (
        <div className='ChangePass'>
            <h1>/!\ PAGE UNDERCONSTRUCT /!\</h1>
            <Link className="linkNotAllowed" id='home' to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default ChangePass;