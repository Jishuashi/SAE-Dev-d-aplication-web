import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Sign from "../pages/Sign";
import Domains from "../pages/domains";
import Modules from "../pages/domains/modules/modules";
import ModuleProba from "../pages/domains/modules/Maths/module_proba";
import ModuleCrypto from "../pages/domains/modules/Securite/module_crypto";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="connexion" element={<Login />} />
                        <Route path="inscription" element={<Sign />} />

                        <Route path="domains" element={<Domains />} />
                        <Route path="domains/modules/" element={<Modules />} />
                        <Route path="domains/modules/proba" element={<ModuleProba />} />
                        <Route path="domains/modules/crypto" element={<ModuleCrypto />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
