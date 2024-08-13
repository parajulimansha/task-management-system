// src/components/TaskForm.js
import React from 'react';
import { useFormInput } from '../hooks/useFormInput';

const TaskForm = ({ onAddTask, projects }) => {
    const name = useFormInput('');
    const description = useFormInput('');
    const dueDate = useFormInput('');
    const priority = useFormInput('Low');
    const status = useFormInput('To Do');
    const projectId = useFormInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({
            id: Date.now(),
            name: name.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value,
            status: status.value,
            projectId: projectId.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Name" {...name} />
            <input type="text" placeholder="Description" {...description} />
            <input type="date" {...dueDate} />
            <select {...priority}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select {...status}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <select {...projectId}>
                <option value="">Select Project</option>
                {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                        {project.name}
                    </option>
                ))}
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
