import React, { useState, useEffect } from "react";
import  '../../../styles/modules.css';
import axios from "axios";
import {useSearchParams, Link} from "react-router-dom";
import module from "../../../assets/module.png";

function Modules() {
    const [dataMod, setDataMod] = useState([]);

    const [searchParms] = useSearchParams();

    useEffect(() => {
        axios
            .get("http://localhost:3001/domains/modules")
            .then(response => {
                setDataMod(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    if(dataMod.modules !== undefined) {
        const domainType = searchParms.get("domain")

        const domainList = []

        for (let i = 0; i < dataMod.modules.length; i++) {
            if (!domainList.includes(dataMod.modules[i].domain_name )){
                domainList.push(dataMod.modules[i].domain_name)
            }
        }

        if(domainList.includes(domainType)){
            let divModule = [];

            for (let i = 0; i < dataMod.modules.length; i++) {

                if (dataMod.modules[i].domain_name === domainType){
                divModule.push(
                    <Link to={`/domains/modules/${dataMod.modules[i].module_name}`} key={i}>
                    <div className={"module"}>
                        <div className={"nameM"} style={{ backgroundImage: `url(${module})`}}>
                            <p className={"nameM"}>{dataMod.modules[i].name}</p>
                        </div>
                        <div className={"descriptionM"}>
                            <p className={"descriptionM"}>{dataMod.modules[i].description}</p>
                        </div>
                    </div>
                    </Link>)
                }
            }
            return (
                <div className="modulesDiv">
                    <h1 className={"ModuleText"}>Voici la liste des module existants pour le domaine {domainType}:</h1>
                    <div className="modules">
                        {divModule}
                    </div>
                </div>
            );
        }else return <p className={"loading"}>ID de domaine "{domainType}" invalide, pour retourner en arrière cliquez <Link to="/domains">ici</Link></p>
    } else return <p className={"loading"}>Loading...</p>
}

export default Modules;