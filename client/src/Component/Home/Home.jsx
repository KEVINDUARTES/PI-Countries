import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/Actions/index";
import Cards from "../Cards/Cards.jsx";
import NavBar from "../NavBar/NavBar";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Home.css"

export default function Home() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries) //es lo mismo que hacer el mapStateToProps. me trae todo lo que esta en el estadoo de countries del reducer
    const [, setOrder] = useState("");
    //PAGINADO
    //aca hicimos que guarde en un estado local la pagina actual, comienza en 1 por que siempre voy a arrancar de la primer pagina
   const [currentPage, setCurrentPage] = useState(1); //pagina actual que arranca en 1
    //en esta constante guardamos cuantos paises queremos nosotros por pagina en nuestro estado local.
    var countriesPage = 10 //paises por pagina que siempre van a ser 9
    //hacemos otra constante que se llama el indice del ultimo pais, y esto es la igual
    //a la pagina actual en la que estoy por la cantidad de personajes por pagina
    if(currentPage===1){
  
          countriesPage--
    } 
        
    
    const indexOfLastCountry = 
    currentPage * countriesPage;//3 x 9
    //hacemos otra constante que se llama el indice del primer pais, y esto es la igual
    //al indice del ultimo personaje(la constante que creamos arriba) 
    //menos la cantidad de personajes por pagina
                                    
    const indexOfFirstCountry = indexOfLastCountry - countriesPage;// 9 - 9
    //luego realizamos otra constante que nos va a traer los personajes que estan en la pagina actual
    //el slice divide un array, y toma una porcion dependediendo de lo que nosotros pasemos por parametro
    const currentCountries = countries && countries.slice(indexOfFirstCountry, indexOfLastCountry);
                                                    
    //cremos una constante que se llame paginado que le pasamos un numero de la pagina
    // y vamos a setear la pagina en ese numero de pagina
    const paginado = (pageNumber) => {
    
        setCurrentPage(pageNumber)
        //pagenumber espera un numero y setcurrentpage setea los nuevos valores
    }



    useEffect(() => {
        dispatch(getAllCountries()) 
       //despacho la accion que me trae todos los paises a la cara home
    }, [])//dependecia que este el dispatch

    //El value en option lo que hace es que me permite acceder a incrementar (en este caso) o descrementar despues!
    return (
        <div>
           
            <h1>Countries</h1>
            <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
            {countries.length>0 ? 
   

                 <div className="Cards">
                              <Paginado
                countriesPerPage={countriesPage}//9
                countries={countries.length}//249       //le paso la funcion paginado que esta esperando un numero
                paginado={paginado} />
        
               
                    <SearchBar setCurrentPage={setCurrentPage} />
                <Cards countries={currentCountries}/> 
                </div>  
            
                : <div className='loading'>
                <p> No hay Paises para mostrar </p>
            </div>
            }
           
            
        </div>

    )
}
