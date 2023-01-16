import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";

function Layout ({logged, setLogged, unconnected, setUnconnected}) {
    return (
        <div>
            <Navigation logged={logged} setLogged={setLogged} unconnected={unconnected} setUnconnected={setUnconnected}/>
            <Outlet />
        </div>
    );
};

export default Layout;