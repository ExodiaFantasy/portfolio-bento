import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <button 
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <FontAwesomeIcon icon="sun" className="text-yellow-300" />
            ) : (
                <FontAwesomeIcon icon="moon" className="text-blue-600" />
            )}
        </button>
    );
};

export default ThemeToggle;
