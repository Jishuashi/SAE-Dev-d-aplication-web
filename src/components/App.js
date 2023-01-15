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
import NotAllowed from "../pages/NotAllowed";


function App() {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [rank, setRank] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['log']);

    const setLogCookie = (value, pUser, pRank) => {
        setCookie('log', value, { path: '/' });
        setCookie('logUser', pUser, { path: '/' });
        setCookie('logRank', pRank, { path: '/' });
    }

    const getLogCookies = () => {
        if(cookies.log){
            setLogged(cookies.log);
            setRank(cookies.logRank);
            setUser(cookies.logUser);
        }
    }

    const removeLogCookies = () => {
        removeCookie('log', );
        removeCookie('logUser' );
        removeCookie('logRank');
    }

    if (logged && cookies.log !== 'true'){
        setLogCookie(true, user, rank);
    }

    useEffect(() => {
        getLogCookies();
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout logged={logged}/>}>
                        <Route index element={<Home logged={logged} user={user}/>} />
                        <Route path="connexion" element={<Login logged={logged} setLogged={setLogged} user= {user} setUser={setUser} rank={rank} setRank={setRank}/>} />
                        <Route path="inscription" element={<Sign />} />
                        <Route path="domains" element={<Domains logged={logged}/>} />
                        <Route path="domains/modules/" element={<Modules logged={logged} />} />
                        <Route path="domains/modules/module_proba" element={<ModuleProba logged={logged} />} />
                        <Route path="domains/modules/module_crypto" element={<ModuleCrypto  logged={logged} />} />
                        <Route path="notAllowed" element={<NotAllowed />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
