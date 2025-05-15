import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Hero from './components/Hero/Hero.jsx';
import BentoGrid from './components/BentoGrid/BentoGrid.jsx';
import BentoCard from './components/BentoCard/BentoCard.jsx';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.jsx';
import Education from './components/Education/Education.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import StatsBox from './components/StatsBox/StatsBox.jsx';
import WorkProcessBox from './components/WorkProcessBox/WorkProcessBox.jsx';
import OnlinePresenceBox from './components/OnlinePresenceBox/OnlinePresenceBox.jsx';
import CallToActionBox from './components/CallToActionBox/CallToActionBox.jsx';
import Certifications from './components/Certifications/Certifications.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                {/* Theme Toggle Button */}
                <div className="fixed top-4 right-4 z-10">
                    <ThemeToggle />
                </div>
                
                {/* Resume Download Button */}
                <div className="fixed top-4 left-4 z-10">
                    <a 
                        href="/resume.pdf" 
                        className="resume-btn flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="download-icon-container">
                            <FontAwesomeIcon icon="download" className="text-white" />
                        </div>
                        <span className="font-medium">Download CV</span>
                    </a>
                </div>
                
                <Hero />
                
                
                <BentoGrid>
                    {/* First row */}
                    <StatsBox />
                    <BentoCard 
                        colSpan="col-span-12 md:col-span-8" 
                        className="row-span-1"
                        gradient={true} 
                        gradientFrom="from-blue-500" 
                        gradientTo="to-purple-600"
                    >
                        <h2 className="text-xl font-bold mb-2">About Me</h2>
                        <p className="mb-2 text-sm">
                            I&apos;m a passionate Cloud/AI Engineer with over 5 years of experience building scalable cloud infrastructure and implementing machine learning solutions.
                        </p>
                        <p className="text-sm">
                            My approach combines technical expertise with business acumen to deliver impactful results.
                        </p>
                    </BentoCard>

                    {/* Second row */}
                    <Certifications />
                    <Skills />

                    {/* Third row */}
                    <WorkProcessBox />
                    <OnlinePresenceBox />
                    <CallToActionBox />

                    {/* Fourth Row */}
                    <Education />
                    <Projects />
                </BentoGrid>
                
                {/* Footer */}
                <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
                    <p>© 2023 John Doe. All rights reserved.</p>
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default App;