import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail} from "../../redux/Actions";
import {Link, useParams} from"react-router-dom";
import './Details.css'

 export default function Details() {
    const dispatch = useDispatch()
    const details= useSelector(state=> state.details)
    
   // const countriesDetail = useSelector((state) => state.details)

    let {id}=useParams()
    useEffect(()=>{
        // console.log("id",id)
        dispatch(getDetail( id))
        console.log(details)
    },[])
  

   
    return (
        <div >{
            details ?
                <div >
                    <img src={details.flag} alt='Imagen no encontrada' width='250px' height='175px' />
                    <h1 >{details.name}</h1>
                    <div>
                        <h2>Id: {details.id}</h2>
                        <h2>Capital: {details.capital}</h2>
                        <h2>Continente: {details.continent}</h2>
                        <h2>Subregion: {details.subregion}</h2>
                        <h2>Area: {details.area} km2</h2>
                        <h2>Poblacion: {details.population}</h2>
                       
                   
                       
                  
                    </div>
                    {
                        
                        details.activities?.map(el=>{
                            return(
                                <div>
                                     <h2>{el.name}</h2>
                                <h2>{el.difficulty}</h2>
                                <h2>{el.duration}</h2>
                                <h2>{el.season}</h2>
                             
                                </div>
                               
                               )
                        }
                      
                           
    
                       
                     
                        )}
                    </div>
                  
                    
           
             
               
                :
                <div className='loading'>
                    <p> No hay paises para mostrar </p>
                </div>

        }
        <Link to='/home'>VOLVER
        </Link></div>

);
};