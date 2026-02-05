import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="h-12 w-12 border border-black dark:border-white flex items-center justify-center transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black group"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="text-[10px] font-bold uppercase tracking-tighter">
                {isDark ? "LGT" : "DRK"}
            </span>
        </button>
    );
};

export default ThemeToggle;
