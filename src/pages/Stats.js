import React, {useState} from "react";
import "../styles/stats.css";
import $ from "jquery";
import {get} from "axios";


function Stats() {
    const [result, setResult] = useState("");
    const [stat, setStat] = useState("");
    const [nbUser, setNbUser] = useState("");


    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3]
            },
        ]
    }

    const getLog = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/php/getLog.php",
            success(data) {
                setResult(data);
            },
        });

        let lRetrun = [];
        const lArrayResult = result.split(" ");

        let n = 0;

        while (n != 3) {
            for (let e = 0; e < lArrayResult.length; e++) {
                if (lArrayResult[e] === "") {
                    lArrayResult.splice(e, 1);
                }
            }

            n++;
        }

        let lCurrCollHead = [];
        let lCurrLineHead = [];

        for (let i = 0; i < 4; i++) {
            lCurrLineHead.push(<td key={i ^ 2}>{lArrayResult[i]}</td>);

        }

        lCurrCollHead.push(
            <tr key={0}>{lCurrLineHead}</tr>
        );

        let lCurrCollBody = [];

        for (let i = 4; i < lArrayResult.length; i += 4) {
            let lCurrLine = [];
            let lCollIndex = i;

            if (i % 4 === 0) {
                lCollIndex = 4;
            }

            lCurrLine.push(<td key={i ^ 2}>{lArrayResult[i]}</td>,
                <td key={i + 1 ^ 2}>{lArrayResult[i + 1]}</td>,
                <td key={i + 2 ^ 2}>{lArrayResult[i + 2]}</td>,
                <td key={i + 3 ^ 2}>{lArrayResult[i + 3]}</td>);

            lCurrCollBody.push(
                <tr key={i ^ 2} className={`coll_${i}`}>{lCurrLine}</tr>
            );

        }

        lRetrun.push(<thead key={599^2}>{lCurrCollHead}</thead>, <tbody key={498^5}>{lCurrCollBody}</tbody>);

        return lRetrun;
    }

    const getStatModule = (module) => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/php/getLog.php",
            success(data) {
                setStat(data);
            },
        });

        const lArrayResult = stat.split(" ");

        let n = 0;

        while (n != 3) {
            for (let e = 0; e < lArrayResult.length; e++) {
                if (lArrayResult[e] === "") {
                    lArrayResult.splice(e, 1);
                }
            }
            n++;
        }

        let count = 0;

        for (let i = 0; i < lArrayResult.length; i++) {
            if (lArrayResult[i] === module) {
                count++;
            }
        }

        return(<td>{count}</td>)
    }

    const getNbUser = () => {
        $.ajax({
            type: "POST",
            url: "http://localhost:80/php/getNbUser.php",
            success(data) {
                setNbUser(data);
            },
        });

        return nbUser;
    }

    return (
        <div className={'statsDiv'}>
            <div className={'LogDiv'}>
                <h1 className={'titleStat'}>Stats</h1>
                <table>
                    {getLog()}
                </table>
            </div>

            <div className={'StatDivModule'}>
                <table>
                    <thead>
                    <tr>
                        <td>Module</td>
                        <td>Nombre d'utilisation</td>
                    </tr>
                    <tr>
                        <td>Probabilités</td>
                        {getStatModule("Probabilités")}
                    </tr>
                    <tr>
                        <td>Cryptographie</td>
                        {getStatModule("Cryptographie")}
                    </tr>
                    </thead>
                </table>
            </div>

            <div className={'StatDivUser'}>
                <p>Nombre d'utilisateur Inscrit : &nbsp;&nbsp;&nbsp;&nbsp; {getNbUser()}</p>
            </div>

        </div>
    );
}

export default Stats;