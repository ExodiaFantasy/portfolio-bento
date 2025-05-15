// filepath: d:\Codes\Portfolio\src\components\Hero\Hero.jsx
import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (    <div className="hero-container py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Currently Employed Status */}
          <div className="mb-4 bg-white/80 dark:bg-gray-800/80 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm">
            <span className="relative flex h-3 w-3 mx-auto mb-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="employment-status font-medium text-blue-600 dark:text-blue-400">Currently Employed</span>
          </div>

          {/* Looking for Employment Status - Uncomment to switch
          <div className="mb-4 bg-white/80 dark:bg-gray-800/80 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm">
            <span className="relative flex h-3 w-3 mx-auto mb-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="employment-status font-medium text-emerald-600 dark:text-emerald-400">Looking for Employment</span>
          </div>
          */}

          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              Elisha San Miguel
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Cloud &amp; AI Engineer
          </h2>
            <div className="w-full flex justify-center">

          <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-10 text-center">
            Building the future with scalable cloud infrastructure and intelligent systems.
            Specializing in AWS, Azure, ML/AI, and data engineering.
          </p>          
          </div>
          <div className="flex flex-wrap justify-center gap-4">           
            <a 
              href="/resume.pdf" 
              download="John_Doe_Resume.pdf"
              className="py-3 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 font-semibold border-2 border-blue-500 flex items-center justify-center"
            >
              <FontAwesomeIcon icon="download" className="text-white mr-2 animate-pulse" />
              Download CV
            </a>
            <a 
              href="#contact" 
              className="py-3 px-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg shadow-md transition-all transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
