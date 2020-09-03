import React from 'react';
import './Projects.css'

const Projects = () => {
    return (
        <div>
            <img className="progress-project" src={require('../../img/settings.png')} alt="" width="120" height="120"/>
            <h1>In Progress</h1>
        </div>
    );
};

export default Projects;
