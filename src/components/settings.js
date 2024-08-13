// src/components/Settings.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Settings = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div>
                <span>Theme: {theme}</span>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
};

export default Settings;
