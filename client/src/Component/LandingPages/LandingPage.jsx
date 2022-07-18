import React from "react";
import {Link} from "react-router-dom"
import "./Landing.css"
const logo="https://w7.pngwing.com/pngs/387/24/png-transparent-drawing-computer-icons-world-map-miscellaneous-globe-logo.png"
function LandingPG(){
    return(
        <div className="landing">
            <h1 className ="landingName">"Comienze una experiencia increíble"</h1>
            <Link to ="/Home" className="landingLink">
                <button>Comenzar</button>
                <img src={logo}alt="Logo" height='50px'/>
            </Link>
        </div>
    )
}
export default LandingPG;