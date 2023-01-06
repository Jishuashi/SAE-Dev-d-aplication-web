import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";

function Layout (){
    return (
        <>
            <Navigation/>
            <Outlet />
        </>
    );
};

export default Layout;