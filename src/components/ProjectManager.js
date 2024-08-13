
import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

const ProjectManager = ({ projects, dispatchProjects, tasks, dispatchTasks }) => {
    const handleAddProject = (newProject) => {
        dispatchProjects({ type: 'ADD_PROJECT', payload: newProject });
    };

    const handleDeleteProject = (projectId) => {
        dispatchProjects({ type: 'DELETE_PROJECT', payload: projectId });
        dispatchTasks({ type: 'DELETE_TASKS_FOR_PROJECT', payload: projectId });
    };

    return (
        <div className="project-manager">
            <ProjectForm onAddProject={handleAddProject} />
            <ProjectList projects={projects} onDeleteProject={handleDeleteProject} />
        </div>
    );
};

export default ProjectManager;
