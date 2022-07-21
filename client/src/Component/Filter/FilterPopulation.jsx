import React from "react";
import { useDispatch } from "react-redux";
import { orderPopulation} from "../../redux/Actions/index.js";
import styles from "./Filter.module.css";
export default function FilterPopulation({setOrder}) {
  const dispatch = useDispatch();

  function handlePopulation(e) {
    e.preventDefault();
    dispatch(orderPopulation(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    ;
  }

  return (

      
      <div className={styles.ordenamiento}>
   <fieldset>
       <legend>Ordenamiento poblacional</legend>
      <select  onChange={(e) => handlePopulation(e)}>
        <option disabled  selected>By Population</option>
        <option value='High'>Lower</option>
        <option value='Low'>Higher</option>
      </select>
      </fieldset>
    </div>
  );
}