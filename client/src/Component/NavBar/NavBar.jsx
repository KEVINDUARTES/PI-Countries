import React from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/Actions";
import FilterOrder from "../Filter/FilterContinent";
import FilterAlpha from "../Filter/FilterAlpha";
import FilterActivity from "../Filter/FilterActivity";
import FilterPopulation from "../Filter/FilterPopulation.jsx";
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";
//import {Link} from 'react-router-dom';
const NavBar = ({ setCurrentPage, setOrder }) => {
  const dispatch = useDispatch();


  function handleFilters(e) {
    e.preventDefault();
    dispatch(getAllCountries());
    setCurrentPage(1);
  }
  return (
    <div className={styles.hero}>
                        
                    <div className={styles.nav}></div>
      <FilterOrder setCurrentPage={setCurrentPage} />
      <FilterAlpha setOrder={setOrder} />
      <FilterActivity setCurrentPage={setCurrentPage}/>
      <FilterPopulation setOrder ={setOrder}/>
      <Link to='/activity'> <button className={styles.btnCrt}>Crear Actividad</button> </Link>
      <button className={styles.btnCrt} onClick={(e) => handleFilters(e)}>
        Show all Countries
      </button>

    </div>
  )
}

export default NavBar;