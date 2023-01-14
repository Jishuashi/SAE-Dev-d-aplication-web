import '../styles/App.css';
import Layout from "./Layout";
import Home from "../pages/Home";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import React, {useState} from "react";
import Login from "../pages/Login";
import Sign from "../pages/Sign";
import $ from "jquery";

function App() {
    const [logged, setLogged] = useState("");

    const setCookie = (value) => {
        $.ajax({
            type: "POST",
            url: "http://localhost:8000/cookie.php",
            data: {cookie: value},
            success(data) {
                console.log("Cookie set");
                console.log(data);
            }
        });
    }

    const getCookies = () => {
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/cookie.php",
            success(data) {
                console.log("Cookie get");
                console.log(data);
                setLogged(data);
            }
        });
    }

    if (logged){
        setCookie(true);
    }

    getCookies();

    return (
        <div className="App">
            <BrowserRouter>
                <Routes history={Router.history}>
                    <Route path="/" element={<Layout logged={logged}/>}>
                        <Route index element={<Home logged={logged}/>} />
                        <Route path="home" element={<Home logged={logged}/>} />
                        <Route path="connexion" element={<Login logged={logged} setLogged={setLogged}/>} />
                        <Route path="inscription" element={<Sign />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
