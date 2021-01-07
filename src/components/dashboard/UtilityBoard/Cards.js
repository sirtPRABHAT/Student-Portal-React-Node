import React from 'react';
import './Cards.css';
import { useHistory } from "react-router-dom";

function Cards({ image, label, id }) {
    let history = useHistory();
    

    const handleClick = () => {
        // console.log(history)
        // history.push({
        //     pathname: `/dashboard/assessments`
        // })
    } 

    return (
        <ul className='assignments__cards dash__cards'>
            <div className className='assignmentCards dashCards' onClick={handleClick}>
                <img src="https://images.jumpstart.me/frontend/communities/Cover+Photo/Web/jobs-card.png" className="dash_img" />
                <h4 className="dash_heading">Find Jobs</h4>
            </div>
            <div className='assignmentCards dashCards' onClick={handleClick}>
                <img src={image} />
                <h4>{label?.length > 25 ? label.slice(0,25) + "..." : label}</h4>
            </div>
            <div className='assignmentCards dashCards' onClick={handleClick}>
                <img src={image} />
                <h4>{label?.length > 25 ? label.slice(0,25) + "..." : label}</h4>
            </div>
            <div className='assignmentCards dashCards' onClick={handleClick}>
                <img src={image} />
                <h4>{label?.length > 25 ? label.slice(0,25) + "..." : label}</h4>
            </div>
        </ul>
    )
}

export default Cards;
