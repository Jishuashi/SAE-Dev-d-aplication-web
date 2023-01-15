import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../styles/Profile.css';


function Profile({rank, user, logged}) {
    const navigate = useNavigate();

    if (logged) {

        if (rank === "85cb945ba1643454c2389b800efe0497") {
            return (
                <div>
                    <h1>Profile</h1>
                    <tr>
                        <td>Username:</td>
                        <td>‎ ‎ ‎ ‎ ‎ ‎ ‎</td>
                        <td>{user}</td>
                    </tr>
                    <tr>
                        <td>Password :</td>
                        <td>‎ ‎ ‎</td>
                        <td><Link to={"/changePass"}>Change Password</Link></td>
                    </tr>
                </div>
            );
        } else {
            // Admin profile
            return (<div>Hello</div>);
        }
    } else {
        navigate("/notAllowed");
    }
}

export default Profile;