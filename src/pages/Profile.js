import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../styles/Profile.css';
import $ from "jquery";


function Profile({rank, user, logged}) {
    const navigate = useNavigate();
    const [resultAdmin, setResultAdmin] = useState("");
    const [resultUser, setResultUser] = useState("");

    const getProfile = () => {
        $.ajax({
            type: "POST",
            url: "https://192.168.1.161:443/php/user.php",
            data: {login: user},
            success(data) {
                setResultUser(data);
            },
        });

        const lArrayResult = resultUser.split(";");
        const lArrayFirtCol = ['Nom :', 'Prénom :', 'Email :'];
        let lArrayProfil = [];
        let lRetrun = [];
        lArrayProfil = lArrayResult[0].split(" ");

        let lCurrLine = [];
        for (let i = 0; i < lArrayProfil.length; i++) {
            lCurrLine.push(<tr key={i}>
                <td key={i^2} className={"UserTitle"}>{lArrayFirtCol[i]}</td>
                <td key={i^3}>‎ ‎ ‎</td>
                <td key={i^4}>{lArrayProfil[i]}</td>
            </tr>);
        }

        return lCurrLine;
    }

    const getUsers = () => {
        $.ajax({
            type: "POST",
            url: "https://192.168.1.161:443/php/admin.php",
            success(data) {
                setResultAdmin(data);
            },
        });

        const lArrayResult = resultAdmin.split(";;");
        let lArrayUsers = [];
        let lRetrun = [];


        for (let i = 0; i < lArrayResult.length; i++) {
            lArrayUsers.push(lArrayResult[i].split(";"));
        }

        lArrayUsers.splice(-1, 1);

        $('button').click(function () {
            var x = $(this).attr('id');
            const lArrayResult = resultAdmin.split(";;");
            let lArrayUsers = [];

            for (let i = 0; i < lArrayResult.length; i++) {
                lArrayUsers.push(lArrayResult[i].split(";"));
            }

            lArrayUsers.splice(-1, 1);
            console.log(lArrayUsers[x][0]);
            $.ajax({
                type: "POST",
                url: "https://192.168.1.161:443/php/delUser.php",
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
                    if (j % 4 === 3) { //voir peut-être pour mettre 4 à la place de 3
                        lCurrLine.push(<td id='col' className={`coll_${j}`} key={j^2}>{lArrayUsers[i][j]}</td>, <td
                            className={`coll_${j + 1}`} key={(j+i)}>
                            <button id={i}>supprimer</button>
                        </td>);
                    } else {
                        lCurrLine.push(<td id='col' className={`coll_${j}`} key={j^2}>{lArrayUsers[i][j]}</td>);
                    }
                }
                lRetrun.push(
                    <tr key={i^2} className={`row_${i}`}>{lCurrLine}</tr>
                );
            }
        }
        return lRetrun;
    };

    if (logged) {
        if (rank == "c69f204a43c20dae05b94f585b6a78cc") {
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
        } else if (rank == "7a54f94c5e960104822fcbd38c95cd43") {
            // Admin profile
            return (<div className={"userProfileAdmin"}>
                <h1 className={"titleProfile"}>Liste des utilisateurs :</h1>
                <table>
                    <thead>
                    <tr>
                        <td className={"coll_1"}>Nom</td>
                        <td className={"coll_2"}>Prénom</td>
                        <td className={"coll_3"}>Email</td>
                        <td className={"coll_4"}>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                        {getUsers()}
                    </tbody>
                </table>
            </div>);
        }
    } else {
        navigate("/notAllowed");
    }
}

export default Profile;
