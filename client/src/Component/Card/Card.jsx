import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

function Card({id,name,flag,continent}){
    return (
    <Link className="LinkD" to={`/countries/${id}`} >
        <div className="card">    
            <div key={id}>
                <img src={flag} alt="img not found" className="flagImgen"/>
                {/* <img src={image} alt="img not found" className="MapImage"/> */ }
                <div className="infoCard">
                    <h1 className="titulo">{name}</h1>
                    {/* <p className="otroTitulo">{nombre}</p> */}
                    <h1 className="continents">{continent}</h1>
                    {/* <p className="population">{population}</p> */}
                    {/* <p className="capital">{capital}</p> */}
                    {/* <p className="subregion">{subregion}</p> */}
                    {/* <p className="area">{area}</p> */}
                    {/* <ul>
                    {activities?.map(activity => {
                            return(
                                <li key={activity.id}>Actividades: {activity.nombre}</li>
                                )
                            })}
                    </ul> */}
                </div>
            </div>
        </div>
    </Link>
    
    )
}
export default Card