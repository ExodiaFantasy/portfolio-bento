import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { skills as skillsData } from '../../data/skills';

const Skills = () => {
    // Group skills by category (assuming first 6 are frontend, next 6 are backend)
    const frontendSkills = skillsData.slice(0, 6);
    const backendSkills = skillsData.slice(6);
    
    const renderSkill = (skill, index) => (
        <div key={index} className="skill-item">
            <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.name}</span>
                <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{skill.proficiency}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                    style={{ width: skill.proficiency }}
                ></div>
            </div>
        </div>
    );
    
    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-4" 
            className="skills-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">💻 Skills</h3>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technical</h4>
                    <div className="space-y-2">
                        {frontendSkills.map(renderSkill)}
                    </div>
                </div>
                
                <div className="mb-4">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Professional</h4>
                    <div className="space-y-2">
                        {backendSkills.map(renderSkill)}
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};

export default Skills;
