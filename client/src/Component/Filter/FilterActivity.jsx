import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByActivity, getActivities } from "../../redux/Actions";
import styles from "./Filter.module.css";
const activitiesOrder = ({ setCurrentPage }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const allActivities = useSelector(state => state.activities);

    function handlerActivity(e) {
        e.preventDefault();
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        dispatch(getActivities())
    },[dispatch])

    return (
        
        <div className={styles.actividades}>
        <fieldset>
            <legend>Activities</legend>
            <input placeholder='Buscar actividades...' list='Activities' type='text' onChange={(e) => handlerActivity(e)} />
            <datalist id='Activities'>
                {allActivities?.map((el) => {
                    return <option value={el.name} />
                })}
            </datalist>
         
        </fieldset>
    </div>
    );

;
}

export default activitiesOrder;



