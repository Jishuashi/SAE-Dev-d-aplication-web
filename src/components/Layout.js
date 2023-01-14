import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";

function Layout ({logged}) {
    return (
        <div>
            <Navigation logged={logged}/>
            <Outlet />
        </div>
    );
};

export default Layout;