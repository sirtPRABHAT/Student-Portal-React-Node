import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import Drugviu from '../../images/projects/Drugviu.jpg'
import Chainalysis from '../../images/projects/Chainalysis.jpg'
import MyScoot from '../../images/projects/MyScoot.jpg'
import Zenius from '../../images/projects/Zenius.jpg'
import Discuss from '../../images/projects/Discuss-io.png'
import Lawyaw from '../../images/projects/Lawyaw.png'
import Nettrons from '../../images/projects/Nettrons.png'
import Pryml from '../../images/projects/Pryml.png'
import Paintzen from '../../images/projects/Paintzen.png'
import Beleaf from '../../images/projects/Beleaf.png'
import Curri from '../../images/projects/Curri.png'
import Boomtv from '../../images/projects/Boomtv.png'
import Papara from '../../images/projects/Papara.png'
import Fhinck from '../../images/projects/Fhinck.jpg'
import NotCo from '../../images/projects/NotCo.jpg'
import LaHaus from '../../images/projects/La-Haus.jpg'
import AllureSystems from '../../images/projects/Allure-Systems.png'
import Sansan from '../../images/projects/Sansan.png'

function Projects() {
    return (
        <div className='projects'>
            <div className='projects__cards'>
                <ProjectCard image={Drugviu} title='Drugviu' />
                <ProjectCard image={Chainalysis} title='Chainalysis' />
                <ProjectCard image={MyScoot} title='MyScoot' />
                <ProjectCard image={Zenius} title='Zenius' />
                <ProjectCard image={Discuss} title='Discuss.io' />
                <ProjectCard image={Lawyaw} title='Lawyaw' />
                <ProjectCard image={Nettrons} title='Nettrons' />
                <ProjectCard image={Pryml} title='Pryml' />
                <ProjectCard image={Paintzen} title='Paintzen' />
                <ProjectCard image={Beleaf} title='Beleaf' />
                <ProjectCard image={Curri} title='Curri' />
                <ProjectCard image={Boomtv} title='Boomtv' />
                <ProjectCard image={Papara} title='Papara' />
                <ProjectCard image={Fhinck} title='Fhinck' />
                <ProjectCard image={NotCo} title='NotCo' />
                <ProjectCard image={LaHaus} title='La Haus' />
                <ProjectCard image={AllureSystems} title='Allure Systems' />
                <ProjectCard image={Sansan} title='Sansan' />
            </div>
        </div>
    )
}

export default Projects
