import React from 'react';
import './ProjectCard.css';

function ProjectCard({ image, title }) {
    return (
        <div className='projectCard'>
            <img src={image} alt='project card' />
            <p>{title}</p>
        </div>
    )
}

export default ProjectCard
