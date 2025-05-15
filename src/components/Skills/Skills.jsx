import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { skills as skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
    // Group skills by category
    const technicalSkills = skillsData.filter((_, index) => index < 8);
    const professionalSkills = skillsData.filter((_, index) => index >= 8);
      const renderStars = (level) => {
        const maxStars = 5;
        return (
            <div className="flex">
                {[...Array(maxStars)].map((_, i) => (
                    <span 
                        key={i} 
                        className={`star ${i < level ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };
      const renderSkill = (skill, index) => (
        <div key={index} className="skill-row">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            <div className="flex items-center">
                {renderStars(skill.level)}
            </div>
        </div>
    );
    
    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-4" 
            className="skills-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Skills</h3>
            
            <div className="skills-container pr-2">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Technical</h4>
                <div className="mb-6">
                    {technicalSkills.map(renderSkill)}
                </div>
                
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Professional</h4>
                <div>
                    {professionalSkills.map(renderSkill)}
                </div>
            </div>
        </BentoCard>
    );
};

export default Skills;
