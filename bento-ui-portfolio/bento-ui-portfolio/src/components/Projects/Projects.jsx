import React from 'react';
import projectsData from '../../data/projects';
import BentoCard from '../BentoCard/BentoCard';
import BentoGrid from '../BentoGrid/BentoGrid';

const Projects = () => {
    return (
        <section className="py-10 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
            <BentoGrid>
                {projectsData.map((project) => (
                    <BentoCard key={project.id} project={project} />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Projects;