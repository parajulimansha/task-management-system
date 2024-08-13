
import React from 'react';

const Dashboard = ({ tasks }) => {
    const getTaskCountByStatus = (status) => {
        return tasks.filter((task) => task.status === status).length;
    };

    const upcomingDeadlines = tasks
        .filter((task) => new Date(task.dueDate) > new Date())
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="task-summary">
                <div>To Do: {getTaskCountByStatus('To Do')}</div>
                <div>In Progress: {getTaskCountByStatus('In Progress')}</div>
                <div>Completed: {getTaskCountByStatus('Completed')}</div>
            </div>
            <h3>Upcoming Deadlines</h3>
            <ul>
                {upcomingDeadlines.slice(0, 5).map((task) => (
                    <li key={task.id}>
                        {task.name} - {task.dueDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
