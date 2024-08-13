// src/components/ProjectList.js
import React from 'react';

const ProjectList = ({ projects, onDeleteProject }) => {
    return (
        <div className="project-list">
            {projects.map((project) => (
                <div key={project.id} className="project">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <button onClick={() => onDeleteProject(project.id)}>
                        Delete Project
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
