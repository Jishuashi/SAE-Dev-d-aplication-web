import React from 'react';
import '../styles/Login.css';
import email from '../assets/email.svg';
import lock from '../assets/lock.svg';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="card">
            <h4 className="title">Log In!</h4>
            <form>
                <div className="field">
                    <img src={email} alt="email" className="input-icon"/>
                    <input autoComplete="off" id="logemail" placeholder="Email" className="input-field" name="logemail"
                           type="email"/>
                </div>
                <div className="field">
                    <img src={lock} alt="lock" className="input-icon"/>
                    <input autoComplete="off" id="logpass" placeholder="Password" className="input-field" name="logpass"
                           type="password"/>
                </div>
                <button className="btn" type="submit">Login</button>
                <Link path="/inscription" className="btn-link">Forgot your password?</Link>
            </form>
            <Link className="btn-link" to="/inscription">Pas de compte ?</Link>
        </div>
    );
}

export default Login;
