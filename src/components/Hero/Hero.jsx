// filepath: d:\Codes\Portfolio\src\components\Hero\Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
              John Doe
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Cloud &amp; AI Engineer
          </h2>
          <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400 mb-10">
            Building the future with scalable cloud infrastructure and intelligent systems.
            Specializing in AWS, Azure, ML/AI, and data engineering.
          </p>          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
