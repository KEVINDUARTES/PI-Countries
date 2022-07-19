import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail} from "../../redux/Actions";
import {Link} from"react-router-dom";
import './Details.css'

 function Details() {
    const dispatch = useDispatch()
    const details= useSelector(state=> state.details)
   // const countriesDetail = useSelector((state) => state.details)
    let {name,flag,continents,capital,SubRegion,Area,Poblacion,activities}=details[0]
    let {id}=useParams()
    useEffect(()=>{
        console.log("id",id)
        dispatch(getDetail(id))
    },[])
  

   
    
    return(
        <div className="details">
            <div className="detailCard" key={id}>
            <div className="columns">
                    <div className="columnLeft">
                        
                    <div className="countryInfo">
                    <img className="detailImg" src={flag} alt={name} />                    
                    </div>
                    <div className="countryInfo">
                        <h1>Pais:</h1>
                        <h1 className="detailTitle">{name}</h1>                        
                    </div>
                    <div className="countryInfo">
                        <h3>Capital:</h3>
                        <h3 className="detailCapital">{capital}</h3>                      
                    </div>
                    <div className="countryInfo">
                        <h3>Continente:</h3>
                        <h3 className="detailContinent">{continents}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Subregion:</h3>
                        <h3 className="detailSubregion">{SubRegion}</h3>                       
                    </div>
                    <div className="countryInfo">
                        <h3>Area:</h3>
                        <h3 className="detailArea">{Area}</h3>   
                    </div>
                    <div className="countryInfo">
                        <h3>Poblacion:</h3>
                        <h3 className="detailPopulation">{Poblacion}</h3>        
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                        )

   
}