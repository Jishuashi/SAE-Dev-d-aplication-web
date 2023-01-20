import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import md5 from "md5";
import '../styles/Profile.css';
import $ from "jquery";


function Profile({rank, user, logged}) {
    const navigate = useNavigate();
    const [resultAdmin, setResultAdmin] = useState("");
    const [resultUser, setResultUser] = useState("");

    const getProfile = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/php/user.php",
            data: {login: user},
            success(data) {
                setResultUser(data);
            },
        });

        const lArrayResult = resultUser.split(";");
        const lArrayFirtCol = ['Identifiant :', 'Nom :', 'Prénom :', 'Email :'];
        let lArrayProfil = [];
        let lRetrun = [];
        lArrayProfil = lArrayResult[0].split(" ");

        let lCurrLine = [];
        for (let i = 0; i < lArrayProfil.length; i++) {
            lCurrLine.push(<tr key={i}>
                <td className={"UserTitle"}>{lArrayFirtCol[i]}</td>
                <td>‎ ‎ ‎</td>
                <td>{lArrayProfil[i]}</td>
            </tr>);
        }

        return lCurrLine;
    }

    const getUsers = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/php/admin.php",
            success(data) {
                setResultAdmin(data);
            },
        });

        const lArrayResult = resultAdmin.split(";");
        let lArrayUsers = [];
        let lRetrun = [];


        for (let i = 0; i < lArrayResult.length; i++) {
            lArrayUsers.push(lArrayResult[i].split(" "));
        }

        lArrayUsers.splice(-1, 1);

        $('#col > button').click(function () {
            var x = $(this).attr('id');
            const lArrayResult = resultAdmin.split(";");
            let lArrayUsers = [];

            for (let i = 0; i < lArrayResult.length; i++) {
                lArrayUsers.push(lArrayResult[i].split(" "));
            }

            lArrayUsers.splice(-1, 1);

            $.ajax({
                type: "POST",
                url: "http://localhost:80/php/delUser.php",
                data: {login: lArrayUsers[x][0]},
                success(data) {
                    console.log(data);
                }
            });

            $(this).parent().parent().remove();
        });

        for (let i = 0; i < lArrayUsers.length; i++) {
            let lCurrLine = [];
            if (lArrayUsers[i][0] !== "gestion") {
                for (let j = 0; j < lArrayUsers[i].length; j++) {
                    if (j % 4 === 3) {
                        lCurrLine.push(<td id='col' className={`coll_${j}`} key={j}>{lArrayUsers[i][j]}</td>, <td
                            className={`coll_${j + 1}`}>
                            <button id={i}>supprimer</button>
                        </td>);
                    } else {
                        lCurrLine.push(<td id='col' className={`coll_${j}`} key={j}>{lArrayUsers[i][j]}</td>);
                    }
                }
                lRetrun.push(
                    <tr key={i} className={`row_${i}`}>{lCurrLine}</tr>
                );
            }
        }
        return lRetrun;
    };

    if (logged) {
        if (rank == "85cb945ba1643454c2389b800efe0497") {
            return (
                <div className={"userProfileNormal"}>
                    <h1 className={"titleProfile"}>Profile</h1>
                    <table>
                        {getProfile()}
                        <tr>
                            <td className={"UserTitle"}>Mot de passe :</td>
                            <td>‎ ‎ ‎</td>
                            <td className={"UserPasswProfileName"}><Link to={"/changePass"}>Change Password</Link>
                            </td>
                        </tr>
                    </table>
                </div>
            );
        } else {
            // Admin profile
            return (<div className={"userProfileAdmin"}>
                <h1 className={"titleProfile"}>Liste des utilisateurs :</h1>
                <table>
                    <tr>
                        <td className={"coll_0"}>Identifiant</td>
                        <td className={"coll_1"}>Nom</td>
                        <td className={"coll_2"}>Prénom</td>
                        <td className={"coll_3"}>Email</td>
                        <td className={"coll_4"}>Action</td>
                    </tr>
                    {getUsers()}
                </table>
            </div>);
        }
    } else {
        navigate("/notAllowed");
    }
}

export default Profile;