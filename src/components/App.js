import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Login from "../pages/Login";
import Sign from "../pages/Sign";
import {useCookies} from "react-cookie";
import Domains from "../pages/domains";
import Modules from "../pages/domains/modules/modules";
import ModuleCrypto from "../pages/domains/modules/Securite/module_crypto";
import ModuleProba from "../pages/domains/modules/Maths/module_proba";


function App() {
    const [logged, setLogged] = useState(false);
    const [cookies, setCookie] = useCookies(['log']);

    const setLogCookie = (value) => {
        setCookie('log', value, { path: '/' });
    }

    const getLogCookies = () => {
        console.log(cookies.log)
        if(cookies.log){
            setLogged(cookies.log);
        }
    }

    if (logged && cookies.log !== 'true'){
        setLogCookie(true);
    }

    useEffect(() => {
        getLogCookies();
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout logged={logged}/>}>
                        <Route index element={<Home logged={logged}/>} />
                        <Route path="home" element={<Home logged={logged}/>} />
                        <Route path="connexion" element={<Login logged={logged} setLogged={setLogged}/>} />
                        <Route path="inscription" element={<Sign />} />
                        <Route path="domains" element={<Domains />} />
                        <Route path="domains/modules/" element={<Modules />} />
                        <Route path="domains/modules/module_proba" element={<ModuleProba />} />
                        <Route path="domains/modules/module_crypto" element={<ModuleCrypto />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
