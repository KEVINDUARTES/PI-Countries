import React from "react";
import  './LandingPage.module.css'
import {Link} from "react-router-dom";


function LandingPage() {
   

    return (
        <div className ="landingPage">
        <h1 className = 'landingTitle'> Bienvenidos </h1>
        <h2 className = 'landingSubTitle'> a mi proyecto Henry</h2>
        <Link to ='/home'>
            <button className='landingButton'> Iniciar experiencia </button>
        </Link>
    </div>    )

};

export default  LandingPage;