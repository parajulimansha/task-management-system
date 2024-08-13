
import React from 'react';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
    const handleUpdate = () => {
        const updatedTask = {
            ...task,
            status:
                task.status === 'Completed'
                    ? 'To Do'
                    : task.status === 'To Do'
                    ? 'In Progress'
                    : 'Completed',
        };
        onUpdateTask(updatedTask);
    };

    return (
        <div className="task">
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <button onClick={handleUpdate}>Update Status</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
