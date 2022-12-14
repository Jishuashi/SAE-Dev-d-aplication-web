import React from 'react';
import  '../styles/home.css';
import {Link} from "react-router-dom";

function Home (){
    return(<div className="Home">
        <div className="Player">
            <iframe title="ytplayer" className="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/watch?v=gah8KMbsj40"
                    frameBorder="0"/>
        </div>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link className="linkHome" to="/inscription">S'inscrire</Link>
    </div>);
}

export default Home;