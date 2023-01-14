import React from 'react';
import '../styles/Login_signin.css';
import email from '../assets/email.svg';
import lock from '../assets/lock.svg';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="card">
            <h4 className="title">S'identifier</h4>
            <form>
                <div className="field">
                    <img src={email} alt="email" className="input-icon"/>
                    <input autoComplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail"
                           type="email"/>
                </div>
                <div className="field">
                    <img src={lock} alt="lock" className="input-icon"/>
                    <input autoComplete="off" id="logpass" placeholder="Mot de passe" className="input-field" name="logpass"
                           type="password"/>
                </div>
                <button className="btn" type="submit">Se connecter</button>
                <Link path="/inscription" className="btn-link">Mot de passe oublié ?</Link>
            </form>
            <Link className="btn-link" to="/inscription">Pas encore de compte ?</Link>
        </div>
    );
}

export default Login;
