// src/reducers/projectReducer.js
export const projectReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [...state, action.payload];
        case 'UPDATE_PROJECT':
            return state.map(project =>
                project.id === action.payload.id ? action.payload : project
            );
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.payload);
        default:
            return state;
    }
};
