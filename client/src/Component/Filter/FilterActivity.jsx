import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByActivity, getActivities } from "../../redux/Actions";

const activitiesOrder = ({ setCurrentPage }) => {
    
    const dispatch = useDispatch();
    
    const allActivities = useSelector(state => state.activities);

    function handleActivity(e) {
        e.preventDefault();
        dispatch(filterCountriesByActivity(e.target.value));
        setCurrentPage(1);
    }
    
    useEffect(() => {
        dispatch(getActivities())
    },[dispatch])

    return (
        <div>
            <select onChange={(e) => handleActivity(e)}>
                <option value='All'>All Activities</option>
                {allActivities.map((el) => {
                    return (
                        <option value={el.name} key={el.id}>
                            {el.name}
                        </option>
                    );
                })}
            </select>
        </div>

    )
}

export default activitiesOrder;