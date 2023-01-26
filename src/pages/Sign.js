import React, {useEffect, useState} from "react";
import "../styles/Login_signin.css";
import emailLogo from "../assets/email.svg";
import lock from "../assets/lock.svg";
import human from "../assets/human.svg";
import {Link, useNavigate} from "react-router-dom";
import $ from "jquery";


function Sign() {
    const [firstname, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [confEmail, setConfEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [result, setResult] = useState("");
    const [check, setCheck] = useState(false);
    const [value1Captcha, setValue1Captcha] = useState("");
    const [value2Captcha, setValue2Captcha] = useState("");
    const [resultCaptcha, setResultCaptcha] = useState("");
    const [captcha, setCaptcha] = useState("");


    var error = "";

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
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

    const changeCheck = () => {
        if (check) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }

    const handleChangeCaptcha = (e) => {
        setCaptcha(e.target.value);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);

        // eslint-disable-next-line
        if (confEmail != email || email === "" && confEmail === "") {
            error = "Les adresses mail ne correspondent pas !";
            setResult(error);
            return;
        }else {
            // eslint-disable-next-line
            const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (emailValidate.test(email)) {
                if (confPassword != password || password == "" && confPassword == "") {
                    error = "Les mots de passe ne correspondent pas !";
                    setResult(error);
                    return;
                } else {
                    if (!check) {
                        error = "Vous n'avez pas accepté les conditions générales d'utilisation";
                        setResult(error);
                        return;
                    } else {
                        if (captcha != resultCaptcha) {
                            error = "Le captcha est incorrect";
                            setResult(error);
                            return;
                        } else {
                            $.ajax({
                                type: "POST",
                                url: form.attr("action"),
                                data: form.serialize(),
                                success(data) {
                                    setResult(data);
                                },
                            });
                        }

                    }
                }
            }else {
                error = "L'adresse mail n'est pas valide";
                setResult(error);
                return;

            }

        }
    };

    // eslint-disable-next-line
    const Results = () =>{
        const navigate = useNavigate();

        // eslint-disable-next-line
        if (result == 1) {
            alert("Votre compte a bien été créé ! Connecter vous pour accéder à votre profil");
            navigate("/connexion");
        } else {
            return (<p className={'errorLogInSignIn'}>{result}</p>);
        }
    }

    useEffect(
        () => {
            const firstValue = Math.floor(Math.random() * 30);
            const secondValue = Math.floor(Math.random() * 30);
            setValue1Captcha(firstValue);
            setValue2Captcha(secondValue);
            setResultCaptcha(firstValue + secondValue);
        }, []);


    return (
        <div className="signIn">
            <div className="card">
                <h4 className="title">Inscription</h4>
                <form
                    action="http://localhost:80/php/signin.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}
                >
                    <div className="field">
                        <img src={human} alt="human" className="input-icon"></img>
                        <input autoComplete="off" id="firstname" placeholder="Prénom" className="input-field"
                               name="firstname"
                               type="text"
                               value={firstname}
                               onInput={(event) => handleChangeFirstName(event)}
                        />
                    </div>
                    <div className="field">
                <img src={human} alt="human" className="input-icon"></img>
                <input autoComplete="off" id="name" placeholder="Nom" className="input-field" name="lastname"
                       type="text"
                       value={name}
                       onInput={(event) => handleChangeName(event)}
                />
            </div>
            <div className="field">
                <img src={human} alt="human" className="input-icon"></img>
                <input autoComplete="off" pattern="[A-Za-z][0-9]{3,16}" id="login" title='3 à 16 caractères Alphanumérique uniquement'
                       placeholder="Identifant" className="input-field" name="login"
                       type="text"
                       value={login}
                       onInput={(event) => handleChangeLogin(event)}
                />
                </div>
            <div className="field">
                <img src={emailLogo} alt="email" className="input-icon"></img>
                <input autoComplete="off" id="logemail1" placeholder="Email" className="input-field" name="email"
                       type="email"
                       value={email}
                       onInput={(event) => handleChangeEmail(event)}
                />
            </div>
            <div className="field">
                <img src={emailLogo} alt="email" className="input-icon"></img>
                <input autoComplete="off" id="logemail2" placeholder="Confirmation d'email" className="input-field" name="email"
                       type="email"
                       value={confEmail}
                       onInput={(event) => handleChangeConfEmail(event)}
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
                    <div className="field">
                        <img src={lock} alt="lock" className="input-icon"></img>
                        <input autoComplete="off" id="logpassconf" placeholder="Confirmation de mot de passe"
                               className="input-field" name="password"
                               type="password"
                               value={confPassword}
                               onInput={(event) => handleChangeConfPass(event)}
                        />
                    </div>
                    <div className="useTerm">
                        <label htmlFor="check"><Link className="linkUse">j'ai lu et accepte les conditions générales
                            d'utilisation</Link></label>
                        <input autoComplete="off" id="check" name="check" type="checkbox"
                               onClick={(event) => changeCheck(event)}/>
                    </div>
                    <div className="captcha">
                        <label htmlFor="captcha">{`Que font ${value1Captcha} + ${value2Captcha} ?`}</label>
                        <input
                            type="number"
                            id="captcha"
                            onInput={(event) => handleChangeCaptcha(event)}
                        />
                    </div>
                    <button className="btn" type="submit">S'inscrire</button>
                </form>
            {Results()}
        <Link className="link_signIn" to="/connexion">Vous avez déjà un compte ?</Link>
    </div>
    </div>);
}

export  default Sign;
