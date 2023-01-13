import React, { useState, useEffect } from "react";
import  '../styles/domains_modules.css';
import axios from "axios";
import { Link } from "react-router-dom";
import module from "../assets/module.png"

function Domains() {
    const [data, setData] = useState([]);

    //useffect is used to the json parsed data from the middleware Node.js server
    useEffect(() => {
        axios
            .get("http://localhost:3001/domains")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if(data.domains !== undefined){
        let divDomains = [];
        for (let i = 0; i < data.domains.length; i++) {
            divDomains.push(
                <Link to={{ pathname: "/domains/modules"}} key={i}>
                    <div className={"domain"} >
                        <div className={"name"} style={{ backgroundImage: `url(${module})`}}>
                            <p className={"name"}>{data.domains[i].name}</p>
                        </div>
                        <div className={"description"}>
                            <p className={"description"}>{data.domains[i].description}</p>
                        </div>
                    </div>
                </Link>);
        }
        return (
            <div className="domainsDiv">
                <h1 className={"domainText"}>Voici la liste des domaines existants:</h1>
                <div className="domains">
                    {divDomains}
                </div>
            </div>
        );
    }
    else return <p className={"loading"}>Loading...</p>
}

export default Domains;