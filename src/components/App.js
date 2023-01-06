import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Sign from "../pages/Sign";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="connexion" element={<Login />} />
                        <Route path="inscription" element={<Sign />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
