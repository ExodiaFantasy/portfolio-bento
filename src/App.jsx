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

                
                <Hero />
                
                
                <BentoGrid>
                    {/* First row */}
                    <StatsBox />
                    <BentoCard 
                        colSpan="col-span-12 md:col-span-4" 
                        className="row-span-1"
                        gradient={true} 
                        gradientFrom="from-blue-500" 
                        gradientTo="to-purple-600"
                    >
                        <h2 className="text-xl font-bold mb-2 text-white">About Me</h2>
                        <p className="mb-2 text-sm text-blue-100">
                            I&apos;m a passionate Cloud/AI Engineer with over 5 years of experience building scalable cloud infrastructure and implementing machine learning solutions.
                        </p>
                        <p className="text-sm text-blue-100">
                            My approach combines technical expertise with business acumen to deliver impactful results.
                        </p>
                    </BentoCard>
                    <Education />

                    {/* Second row */}
                    <Certifications />
                    <Skills />
                    
                    {/* Featured Projects Section */}
                    <div className="col-span-12 mt-10 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3 flex items-center">
                            <span className="mr-2">💼</span>
                            Featured Projects & Work Process
                        </h2>
                    </div>
                    <Projects />
                    <WorkProcessBox />
                    
                    {/* Online Presence & Contact Section */}
                    <div className="col-span-12 mt-6 mb-2">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Connect & Collaborate
                        </h2>
                    </div>
                    <OnlinePresenceBox />
                    <CallToActionBox />
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