import React from 'react';
import './AssignmentsCards.css';
import { useHistory } from "react-router-dom";

function AssignmentCards({ image, label, id }) {
    let history = useHistory();
    
    const handleClick = () => {
        history.push({
            pathname: `/dashboard/student/assessment/${id}`
        })
    }

    return (
        <div className='assignmentCards' onClick={handleClick}>
            <img src={image} />
            <h4>{label?.length > 25 ? label.slice(0,25) + "..." : label}</h4>
        </div>
    )
}

export default AssignmentCards
