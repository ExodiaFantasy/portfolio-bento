// filepath: d:\Codes\Portfolio\src\components\Projects\Projects.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { projects as projectsData } from '../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';

const Projects = () => {
    return (
        <BentoCard
            colSpan="col-span-12 md:col-span-6"
            className="projects-card bg-gray-50 dark:bg-gray-900 p-6 rounded-xl"
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Featured Projects</h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">Recent Work</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.length === 0 ? (
                    <div className="col-span-2 flex flex-col items-center justify-center min-h-[220px] w-full">
                        <svg className="animate-bounce mb-6" width="64" height="64" fill="none" viewBox="0 0 64 64">
                          <circle cx="32" cy="32" r="28" stroke="#3b82f6" strokeWidth="6" fill="#eff6ff" />
                          <path d="M32 22v16" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
                          <circle cx="32" cy="44" r="3" fill="#3b82f6"/>
                        </svg>
                        <span className="text-blue-600 dark:text-blue-400 text-xl font-bold mb-2 text-center">To be added..</span>
                        <span className="text-white-400 dark:text-white-300 text-base text-center">Featured projects will appear here soon.</span>
                    </div>
                ) : (
                    projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="project-item p-5 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                            style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-medium text-gray-900 dark:text-white text-lg">{project.title}</h4>
                                <div className="flex space-x-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="external-link text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/30 p-1.5 rounded-full w-7 h-7 flex items-center justify-center">
                                            <FontAwesomeIcon icon="external-link-alt" size="sm" />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            <div className="w-12 h-1 bg-blue-500 rounded mb-4"></div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="tech-tag text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </BentoCard>
    );
};

export default Projects;
