import React from "react";
import styles from "./Landing.module.css";
import {Link} from "react-router-dom";

function LandingPage() {
    
    return (
        <div className ="landingPage">
        <h1 className = 'landingTitle'> Bienvenidos </h1>
        <h2 className = 'landingSubTitle'> a mi proyecto de Paises</h2>
        <Link to ='/home'>
            <button className='landingButton'> Comenzar </button>
        </Link>
    </div>    )

};

export default  LandingPage;