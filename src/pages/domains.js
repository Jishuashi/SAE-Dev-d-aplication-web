import React, { useState, useEffect } from "react";
import  '../styles/domains.css';
import axios from "axios";
import { createSearchParams, useNavigate } from "react-router-dom";
import domain from "../assets/domain.png"

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

    const navigate = useNavigate();

    if(data.domains !== undefined){
        let divDomains = [];
        for (let i = 0; i < data.domains.length; i++) {

            const goToModulesDomain = (domain) => {
                navigate({
                    pathname: "/domains/modules",
                    search: createSearchParams({
                        domain: data.domains[i].name
                    }).toString()
                })
            }

            divDomains.push(
                    <div className={"domain"} onClick={goToModulesDomain} key={i}>
                        <div className={"nameD"} style={{ backgroundImage: `url(${domain})`}}>
                            <p className={"nameD"}>{data.domains[i].name}</p>
                        </div>
                        <div className={"descriptionD"}>
                            <p className={"descriptionD"}>{data.domains[i].description}</p>
                        </div>
                    </div>)
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