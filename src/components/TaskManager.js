
import React, { useState, useCallback } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = ({ tasks, dispatchTasks, projects }) => {
    const [filter, setFilter] = useState('');

    const handleAddTask = useCallback(
        (newTask) => {
            dispatchTasks({ type: 'ADD_TASK', payload: newTask });
        },
        [dispatchTasks]
    );

    const handleUpdateTask = useCallback(
        (updatedTask) => {
            dispatchTasks({ type: 'UPDATE_TASK', payload: updatedTask });
        },
        [dispatchTasks]
    );

    const handleDeleteTask = useCallback(
        (taskId) => {
            dispatchTasks({ type: 'DELETE_TASK', payload: taskId });
        },
        [dispatchTasks]
    );

    return (
        <div className="task-manager">
            <TaskForm onAddTask={handleAddTask} projects={projects} />
            <input
                type="text"
                placeholder="Filter tasks"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <TaskList
                tasks={tasks}
                filter={filter}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
};

export default TaskManager;
