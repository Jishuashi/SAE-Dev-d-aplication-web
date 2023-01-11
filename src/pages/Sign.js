import React, {useState} from "react";
import "../styles/Sign.css";
import emailLogo from "../assets/email.svg";
import lock from "../assets/lock.svg";
import human from "../assets/human.svg";
import {Link} from "react-router-dom";
import {Navigate, useLocation}  from "react-router";
import $ from "jquery";

function Sign(){
    const [firstname, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [result, setResult] = useState("");


    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handelChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeConfEmail = (e) => {
        setConfEmail(e.target.value);
    }

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeConfPass = (e) => {
        setConfPassword(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                console.log("Connexion réussite");
                console.log(data);
                setResult(data);
            },
        });
    };

    const results = () =>{
        // eslint-disable-next-line
        if(result == 1){
            const location = useLocation();

            $.ajax({
                type: "POST",
                url: "http://localhost:8000//isLog.php",
                data: "script",
                success(data) {
                    console.log("Connexion réussite")
                    console.log(result);
                    //updateLog(true);
                },
            });

            return(<Navigate to="/" state={{from: location}} />);
        }
        else {
            return (<p>{result}</p>);
        }
    }

    return(
        <div className="card">
        <h4 className="title">Sign In!</h4>
            <form
                action="http://localhost:8000/index.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
            <div className="field">
            <img src={human} alt="human" className="input-icon"></img>
            <input autoComplete="off" id="firstname" placeholder="Prénom" className="input-field" name="firstname"
                   type="text"
                   value={firstname}
                   onInput={(event) => handleChangeFirstName(event)}
            />
            </div>
            <div className="field">
                <img src={human} alt="human" className="input-icon"></img>
                <input autoComplete="off" id="name" placeholder="Nom" className="input-field" name="name"
                       type="text"
                       value={name}
                       onInput={(event) => handelChangeName(event)}
                />
            </div>
            <div className="field">
                <img src={emailLogo} alt="email" className="input-icon"></img>
                <input autoComplete="off" id="logemail1" placeholder="Email" className="input-field" name="signmail"
                       type="email"
                       value={email}
                       onInput={(event) => handleChangeEmail(event)}
                />
            </div>
            <div className="field">
                <img src={emailLogo} alt="email" className="input-icon"></img>
                <input autoComplete="off" id="logemail2" placeholder="Confirmation d'email" className="input-field" name="signmail"
                       type="email"
                       value={confEmail}
                       onInput={(event) => handleChangeConfEmail(event)}
                />
            </div>
            <div className="field">
                <img src={lock} alt="lock" className="input-icon"></img>
                <input autoComplete="off" id="logpass" placeholder="Mot de passe" className="input-field" name="signpass"
                       type="password"
                       value={password}
                       onInput={(event) => handleChangePass(event)}
                />
            </div>
            <div className="field">
                <img src={lock} alt="lock" className="input-icon"></img>
                <input autoComplete="off" id="logpassconf" placeholder="Confirmation de mot de passe" className="input-field" name="signpass"
                       type="password"
                       value={confPassword}
                       onInput={(event) => handleChangeConfPass(event)}
                />
            </div>
            <div className="useTerm">
                <label htmlFor="check"><Link className="linkUse">Condition Général</Link></label>
                <input autoComplete="off" id="check" name="check" type="checkbox"/>
            </div>
            <button className="btn" type="submit">SignIn</button>
        </form>
        <Link className="link" to="/connexion">Déjà un compte ?</Link>
    </div>);
}

export  default Sign;