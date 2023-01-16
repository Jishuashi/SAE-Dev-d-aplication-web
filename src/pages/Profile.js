import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import md5 from "md5";
import '../styles/Profile.css';
import $ from "jquery";




function Profile({rank, user, logged}) {
    const navigate = useNavigate();
    let dataG = "";

    const getUsers = () =>{
        $.ajax({
            type: "POST",
            url: "http://localhost:7000/admin.php",
            success(data) {
                dataG = data
            },
        });
        console.log(dataG);

        return <tr>{dataG}</tr>;
    };

    if (logged) {
        if (rank === "de0b33cd23e223ecf0cdbc7da70dff94") {
            return (
                <div className={"userProfileNormal"}>
                    <h1 className={"titleProfile"}>Profile</h1>
                    <table>
                        <tr>
                            <td className={"UserTitle"}>Username:</td>
                            <td>‎ ‎ ‎ ‎ ‎ ‎ ‎</td>
                            <td className={"UserNameProfileName"}>{user}</td>
                        </tr>
                        <tr>
                            <td className={"UserTitle"}>Password :</td>
                            <td>‎ ‎ ‎</td>
                            <td className={"UserPasswProfileName"}><Link to={"/changePass"}>Change Password</Link></td>
                        </tr>
                    </table>
                </div>
            );
        }  else {
            // Admin profile
            return (<div>
                <table>
                    {getUsers()}
                </table>
            </div>);
        }
    } else {
        navigate("/notAllowed");
    }
}

export default Profile;