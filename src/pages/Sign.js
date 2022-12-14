import React from "react";
import "../styles/Sign.css";
import email from "../assets/email.svg";
import lock from "../assets/lock.svg";
import human from "../assets/human.svg";
import {Link} from "react-router-dom";

function Sign(){
    return(
        <div className="card">
        <h4 className="title">Sign In!</h4>
        <form>
            <div className="field">
            <img src={human} className="input-icon"></img>
            <input autoComplete="off" id="firstname" placeholder="Prénom" className="input-field" name="firstname"
                   type="text"/>
            </div>
            <div className="field">
                <img src={human} className="input-icon"></img>
                <input autoComplete="off" id="name" placeholder="Nom" className="input-field" name="name"
                       type="text"/>
            </div>
            <div className="field">
                <img src={email} className="input-icon"></img>
                <input autoComplete="off" id="logemail1" placeholder="Email" className="input-field" name="signmail"
                       type="email"/>
            </div>
            <div className="field">
                <img src={email} className="input-icon"></img>
                <input autoComplete="off" id="logemail2" placeholder="Confirmation d'email" className="input-field" name="signmail"
                       type="email"/>
            </div>
            <div className="field">
                <img src={lock} className="input-icon"></img>
                <input autoComplete="off" id="logpass" placeholder="Mot de passe" className="input-field" name="signpass"
                       type="password"/>
            </div>
            <div className="field">
                <img src={lock} className="input-icon"></img>
                <input autoComplete="off" id="logpass" placeholder="Confirmation de mot de passe" className="input-field" name="signpass" type="password"/>
            </div>
            <div className="useTerm">
                <label htmlFor="check"><Link className="linkUse">Condition Général</Link></label>
                <input autoComplete="off" id="logpass" placeholder="Confirmation de mot de passe" name="check" type="checkbox"/>
            </div>
            <button className="btn" type="submit">SignIn</button>
        </form>
        <Link className="link" to="/connexion">Déjà un compte ?</Link>
    </div>);
}

export  default Sign;