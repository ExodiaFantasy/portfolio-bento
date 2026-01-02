import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import BentoGrid from './components/BentoGrid/BentoGrid';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

const App = () => {
    return (
        <div className="App">
            <ThemeToggle />
            <Hero />
            <BentoGrid />
            <Education />
            <Projects />
            <Skills />
        </div>
    );
};

export default App;