// src/App.js
import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { UserPreferencesProvider } from './contexts/UserPreferencesContext';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import TaskManager from './components/TaskManager';
import ProjectManager from './components/ProjectManager';
import Settings from './components/settings';
import ThemeToggle from './components/ThemeToggle';
import { taskReducer } from './reducers/taskReducer';
import { projectReducer } from './reducers/projectReducer';
import './styles.css';

function App() {
    const [tasks, dispatchTasks] = useReducer(taskReducer, []);
    const [projects, dispatchProjects] = useReducer(projectReducer, []);
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <ThemeProvider>
            <UserPreferencesProvider>
                <Router>
                    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
                        <NavigationBar />
                        <ThemeToggle />
                        <div className="container">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Dashboard tasks={tasks} />}
                                />
                                <Route
                                    path="/tasks"
                                    element={
                                        <TaskManager
                                            tasks={tasks}
                                            dispatchTasks={dispatchTasks}
                                            projects={projects}
                                        />
                                    }
                                />
                                <Route
                                    path="/projects"
                                    element={
                                        <ProjectManager
                                            projects={projects}
                                            dispatchProjects={dispatchProjects}
                                            tasks={tasks}
                                            dispatchTasks={dispatchTasks}
                                        />
                                    }
                                />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </UserPreferencesProvider>
        </ThemeProvider>
    );
}

export default App;
