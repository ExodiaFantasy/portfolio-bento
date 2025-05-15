// filepath: d:\Codes\Portfolio\src\components\Projects\Projects.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { projects as projectsData } from '../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-6" 
            className="projects-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🚀 Featured Projects</h3>
            
            <div className="space-y-4">
                {projectsData.map((project, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex justify-between items-start mb-2">                            <h4 className="font-medium text-gray-900 dark:text-white">{project.title}</h4>
                            <div className="flex space-x-2">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                        <FontAwesomeIcon icon="external-link-alt" />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex} 
                                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default Projects;
