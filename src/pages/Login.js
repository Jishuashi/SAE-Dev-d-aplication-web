import React, {useState} from 'react';
import '../styles/Login_signin.css';
import human from '../assets/human.svg';
import lock from '../assets/lock.svg';
import {Link} from "react-router-dom";
import $ from "jquery";
import {Navigate} from "react-router";

function Login({isLogged, setLogged}) {

    const [login, setLogin] = useState("");
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
                console.log("Connexion réussite");
                console.log(data);
                setResult(data);
            },
        });
    };

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }

    const results = () =>{
        // eslint-disable-next-line
        if(result == 1){
            updateLogged(true);
            return <Navigate to="/home"/>;
        }
        else {
            return (<p>{result}</p>);
        }
    }

    return (
        <div className="card">
            <h4 className="title">Log In!</h4>
            <form
                action="http://localhost:8000/login.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <div className="field">
                <img src={human} alt="human" className="input-icon"></img>
                <input autoComplete="off" id="login" placeholder="Identifant" className="input-field" name="login"
                       type="text"
                       value={login}
                       onInput={(event) => handleChangeLogin(event)}
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
                <button className="btn" type="submit">Login</button>
                <Link path="/inscription" className="btn-link">Forgot your password?</Link>
            </form>
            {results()}
            <Link className="btn-link" to="/inscription">Pas de compte ?</Link>
        </div>
    );
}

export default Login;
