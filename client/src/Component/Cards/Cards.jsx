import React from "react";
import Card from "../Card/Card.jsx";
import "./Cards.css";
function Cards({countries}){
   // console.log(countryPG[0])
    return (
        <div className="cards">
            {/* me llegaron 9 paises. empieza a mapear y muestra 9 paises */}
            {countries && countries.map((countries)=>{//este map se encarga de iterar el current country
                return(
                    <Card
                    key={countries.id} 
                    id={countries.id} 
                    name={countries.name}
                    // nombre={countries.Nombre}
                    flag={countries.flag}
                    continent={countries.continent}
                    // activities={countries.activities}
                    />
                )
            })}
        </div>
    )
}
export default Cards