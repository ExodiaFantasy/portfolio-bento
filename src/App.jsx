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
            <div className="App min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
                {/* Theme Toggle Button */}
                <div className="fixed top-8 right-8 z-50">
                    <ThemeToggle />
                </div>

                <Hero />

                <BentoGrid>
                    {/* First row */}
                    <div className="col-span-12 mb-4 opacity-60">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Core Profile // 01</span>
                    </div>
                    <BentoCard
                        colSpan="col-span-12 md:col-span-8"
                        className="row-span-1 !border-2"
                    >
                        <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest">Strategic Overview</h3>
                            <span className="text-[10px] uppercase tracking-tighter opacity-50">AI & Cloud Architecture</span>
                        </div>
                        <div className="space-y-4 text-xs leading-loose text-black dark:text-neutral-300">
                            <p>
                                I tackle <span className="font-bold">business complexity</span> head-on by designing <span className="font-bold">adaptive solutions</span>. Whether building context-aware systems or embedding the latest technology, I ensure <span className="font-bold">security, compliance, and performance</span> aren&apos;t just boxes to tick but standards to exceed.
                            </p>
                            <p>
                                By combining expertise in <span className="font-bold">advanced AI with AWS</span>, I deliver <span className="font-bold">measurable results</span> for enterprise clients: <span className="font-bold">eliminating repetitive tasks</span>, <span className="font-bold">reducing handle time</span>, and ensuring <span className="font-bold">24/7 support</span>. A commitment to <span className="font-bold">problem-solving and critical thinking</span> unlocks smarter, more efficient ways of working with analytics, AI, and automation.
                            </p>
                        </div>
                    </BentoCard>
                    <Education />

                    {/* Second row */}
                    <div className="col-span-12 mt-12 mb-4 opacity-60">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Technical Matrix // 02</span>
                    </div>
                    <Certifications />
                    <Skills colSpan="col-span-12" />

                    {/* Featured Projects Section */}
                    <div className="col-span-12 mt-12 mb-4 opacity-60">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Project Repository // 03</span>
                    </div>
                    <Projects />
                    <WorkProcessBox />

                    {/* Online Presence & Contact Section */}
                    <div className="col-span-12 mt-12 mb-4 opacity-60">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Contact Protocol // 04</span>
                    </div>
                    <OnlinePresenceBox />
                    <CallToActionBox />
                </BentoGrid>

                {/* Footer */}
                <footer className="py-20 text-center border-t border-black/10 dark:border-white/10 mt-20">
                    <p className="text-[10px] uppercase tracking-widest opacity-40">© 2026 ELISHA SAN MIGUEL // SYSTEM_ALL_RIGHTS_RESERVED</p>
                </footer>
            </div>
        </ThemeProvider>
    );
};

export default App;