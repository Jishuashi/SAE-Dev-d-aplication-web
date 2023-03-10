import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {Routes, Route, Router, HashRouter} from "react-router-dom";
import React, {useState, useEffect} from "react";
import Login from "../pages/Login";
import Sign from "../pages/Sign";
import {useCookies} from "react-cookie";
import Domains from "../pages/domains";
import Modules from "../pages/domains/modules/modules";
import ModuleCrypto from "../pages/domains/modules/Securite/module_crypto";
import ModuleProba from "../pages/domains/modules/Maths/module_proba";
import NotAllowed from "../pages/NotAllowed";
import Profile from "../pages/Profile";
import ChangePass from "../pages/ChangePass";
import Stats from "../pages/Stats";
import {redirect} from "react-router";


function App() {
    const [logged, setLogged] = useState(false);
    const [unconnected, setUnconnected] = useState(false);
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

            if(cookies.logUser !== undefined){
                setUser(cookies.logUser);
            }

            if(cookies.logRank !== undefined){
                setRank(cookies.logRank);
            }
        }
    }

    const removeLogCookies = () => {
        removeCookie('log', );
        removeCookie('logUser' );
        removeCookie('logRank');
        setLogged(false);
    }

    if (logged && cookies.log !== 'true'){
        setLogCookie(true, user, rank);
    }

    if(unconnected){
        removeLogCookies();
        setUnconnected(false);
    }

    useEffect(() => {
        if (cookies.log === 'true'){
            setLogged(true);
        }

        if (logged && cookies.log === 'true'){
            getLogCookies();
        }
    })


    return (
        <div className="App">
            <HashRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout logged={logged} setLogged={setLogged} unconnected={unconnected} setUnconnected={setUnconnected} rank={rank}/>}>
                        <Route index element={<Home logged={logged} user={user}/>} />
                        <Route path="connexion" element={<Login logged={logged} setLogged={setLogged} user= {user} setUser={setUser} rank={rank} setRank={setRank} getLogCookies={getLogCookies}/>} />
                        <Route path="inscription" element={<Sign />} />
                        <Route path="domains" element={<Domains logged={logged}/>} />
                        <Route path="domains/modules/" element={<Modules logged={logged} user={user} />} />
                        <Route path="domains/modules/module_proba" element={<ModuleProba logged={logged} />} />
                        <Route path="domains/modules/module_crypto" element={<ModuleCrypto  logged={logged} />} />
                        <Route path="notAllowed" element={<NotAllowed />} />
                        <Route path="profile" element={<Profile rank={rank} user={user} logged={logged}/> }/>
                        <Route path="changepass" element={<ChangePass /> }/>
                        <Route path="stats" element={<Stats />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
