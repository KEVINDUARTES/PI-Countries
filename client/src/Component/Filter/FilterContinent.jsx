/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch} from "react-redux";
import { filterCountriesByContinent } from "../../redux/Actions/index.js";
import styles from "./Filter.module.css";
const continentsOrder = ({ setCurrentPage }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks

    function handleContinent(e) {
        e.preventDefault();
        dispatch(filterCountriesByContinent(e.target.value));
        setCurrentPage(1);
    };
    return (
      
        <div className={styles.continents}>
            <div className={styles.firstPart}>

                

                <button type="button" value='All' onClick={(e) => handleContinent(e)}>All</button>
                <button type="button" value='Asia' onClick={(e) => handleContinent(e)}>Asia</button>
                <button type="button" value='Europe' onClick={(e) => handleContinent(e)}>Europe</button>
            </div>

            <div className={styles.secondPart}>

                <button type="button" value='Oceania' onClick={(e) => handleContinent(e)}>Oceania</button>
                <button type="button" value='Americas' onClick={(e) => handleContinent(e)}>Americas</button>
                <button type="button" value='Africa' onClick={(e) => handleContinent(e)}>Africa</button>
            </div>
        </div>
    );
        
};
export default continentsOrder;