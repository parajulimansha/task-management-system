// src/reducers/taskReducer.js
export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'UPDATE_TASK':
            return state.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.payload);
        case 'DELETE_TASKS_FOR_PROJECT':
            return state.filter((task) => task.projectId !== action.payload);
        default:
            return state;
    }
};
