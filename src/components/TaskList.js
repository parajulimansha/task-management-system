
import React, { useMemo } from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, onUpdateTask, onDeleteTask }) => {
    const filteredTasks = useMemo(() => {
        return tasks.filter((task) =>
            task.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [tasks, filter]);

    return (
        <div className="task-list">
            {filteredTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onUpdateTask={onUpdateTask}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;
