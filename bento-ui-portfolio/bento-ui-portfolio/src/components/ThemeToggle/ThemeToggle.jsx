import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
        >
            {theme === 'dark' ? (
                <i className="fas fa-sun"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
        </button>
    );
};

export default ThemeToggle;