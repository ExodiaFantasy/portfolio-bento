import { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
        document.body.classList.toggle('dark', savedTheme === 'dark');
    }, [setTheme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return { theme, toggleTheme };
};

export default useTheme;