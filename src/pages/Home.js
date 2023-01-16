import React from 'react';
import '../styles/home.css';
import {Link} from "react-router-dom";

function Home({logged, user}) {

    if (logged) {
        return (<div className="Home">
            <h1 className='hello'>{"Bonjour " + user}</h1>
            <iframe title="ytplayer" className="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/cPL-mO_xyAA"
                    frameBorder="0"/>
        </div>);

    } else {
        return (<div className="Home">
            <div className="Player">
                <iframe title="ytplayer" className="ytplayer" type="text/html" width="640" height="360"
                        src="https://www.youtube.com/embed/cPL-mO_xyAA"
                        frameBorder="0"/>
            </div>
            <p className="text">Si la vidéo de présentation du site vous a intrigué, pourquoi ne pas essayer par
                vous-même ? Inscrivez-vous dès maintenant pour pouvoir profiter de toutes les fonctionnalités du site
                ! </p>
            <Link className="linkHome" to="/inscription">S'inscrire</Link>
        </div>);
    }

}

export default Home;