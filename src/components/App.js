import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
