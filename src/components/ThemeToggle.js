
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggle;
