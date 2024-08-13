
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const sections = [
        { name: 'Dashboard', path: '/' },
        { name: 'Tasks', path: '/tasks' },
        { name: 'Projects', path: '/projects' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <nav className="navigation-bar">
            <ul>
                {sections.map((section) => (
                    <li key={section.name}>
                        <Link to={section.path}>{section.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationBar;
