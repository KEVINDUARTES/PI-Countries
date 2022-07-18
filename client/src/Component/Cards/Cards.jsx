import React from "react";
import Card from "../Card/Card.jsx";
import "./Cards.css";
function Cards({countries}){
   // console.log(countryPG[0])
    return (
        <div className="cards">
            
            {countries && countries.map((countries)=>{
                return(
                    <Card
                    key={countries.id} 
                    id={countries.id} 
                    name={countries.name}
                    nombre={countries.Nombre}
                    flag={countries.Flag}
                    continent={countries.Continent}
                    activities={countries.activities}
                    />
                )
            })}
        </div>
    )
}
export default Cards