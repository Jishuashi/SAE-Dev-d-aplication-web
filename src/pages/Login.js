import React, {useState} from 'react';
import '../styles/Login_signin.css';
import human from '../assets/human.svg';
import lock from '../assets/lock.svg';
import {Link, useNavigate} from "react-router-dom";
import $ from "jquery";
import md5 from "md5";
import {redirect} from "react-router";

function Login({logged, setLogged, user, setUser, setRank, rank, getLogCookies}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result , setResult] = useState("");

    const updateLogged = (pValue) => {
        setLogged(pValue);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);

        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }

    const results = () =>{
        // eslint-disable-next-line
        const navigate = useNavigate();
        let lStrRank = "";
        let lResult = 0;

        for (let i = 0; i < result.length; i++) {
            if (result[i] == 1){
                lResult = 1;
            }else{
                lStrRank += result[i];
            }
        }

        if(lResult == 1){
            updateLogged(true);
            setUser(email);
            setRank(md5(lStrRank));

            navigate("/");
        }
        else {
            return (<p className={'errorLogInSignIn'}>{result}</p>);
        }
    }

    return (
        <div className="card">
            <h4 className="title">S'identifier</h4>
            <form
                action="http://localhost:8000/php/login.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <div className="field">
                <img src={human} alt="human" className="input-icon"></img>
                <input autoComplete="off" id="login" placeholder="Adresse mail" className="input-field" name="login"
                       type="text"
                       value={email}
                       onInput={(event) => handleChangeEmail(event)}
                />
                </div>
                <div className="field">
                    <img src={lock} alt="lock" className="input-icon"></img>
                    <input autoComplete="off" id="logpass" placeholder="Mot de passe" className="input-field" name="password"
                           type="password"
                           value={password}
                           onInput={(event) => handleChangePass(event)}
                    />
                </div>
                <button className="btn" type="submit">Se connecter</button>
                <Link path="/inscription" className="btn-link">Mot de passe oublié ?</Link>
            </form>
            {results()}
            <Link className="btn-link" to="/inscription">Pas encore de compte ?</Link>
        </div>
    );
}

export default Login;
