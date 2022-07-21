/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch } from "react-redux";
import { orderAlpha } from "../../redux/Actions/index.js";
import styles from "./Filter.module.css";
export default function alphaOrder({setOrder}) {
    const dispatch = useDispatch();

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  }
        //para lo unico que lo vamos a usar es que cuando yo setea la pagina de arriba
        //modifique el estado local y se renderiza.
        //asi desde el front me hace el ordenamiento
    

    return (

              <div className={styles.ordenamiento}>
                    <fieldset>
                    
                        <legend>Ordenamiento</legend>
            <select onChange={(e) => handleSort(e)}>
                <option disable >Ordenar</option>
                <option value="A-Z"> A-Z </option>
                <option value="Z-A"> Z-A </option>
            </select>
            </fieldset>
        </div>
    )
};
