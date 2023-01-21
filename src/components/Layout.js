import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";

function Layout ({logged, setLogged, unconnected, setUnconnected, rank}) {
    return (
        <div>
            <Outlet />
            <Navigation logged={logged} setLogged={setLogged} unconnected={unconnected} setUnconnected={setUnconnected} rank={rank}/>
        </div>
    );
};

export default Layout;