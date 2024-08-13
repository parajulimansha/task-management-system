
import React from 'react';
import { useFormInput } from '../hooks/useFormInput';

const ProjectForm = ({ onAddProject }) => {
    const name = useFormInput('');
    const description = useFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProject({
            id: Date.now(),
            name: name.value,
            description: description.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Project Name" {...name} />
            <input type="text" placeholder="Description" {...description} />
            <button type="submit">Add Project</button>
        </form>
    );
};

export default ProjectForm;
