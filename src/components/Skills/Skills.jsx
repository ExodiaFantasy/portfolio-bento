import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { skills as skillsData } from '../../data/skills';
import './Skills.css';

const Skills = () => {
    // Group skills by category
    const technicalSkills = skillsData.filter((_, index) => index < 8);
    const professionalSkills = skillsData.filter((_, index) => index >= 8);
    const renderSkill = (skill, index) => (
        <div key={index} className="skill-row border-b border-black/10 dark:border-white/10 last:border-0 py-4 flex items-start justify-between gap-4">
            <span className="text-[11px] font-bold tracking-tight uppercase leading-tight flex-1 pr-2">{skill.name}</span>
            <div className="flex space-x-1 pt-1 w-[90px] justify-end shrink-0">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 w-3.5 ${i < skill.level ? 'bg-black dark:bg-white' : 'bg-black/10 dark:bg-white/10'}`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <BentoCard
            colSpan="col-span-12 md:col-span-4"
            className="skills-card flex flex-col pb-0" // Removed fixed height
        >
            <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Technical Skills</h3>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">Stack // Proficiency</span>
            </div>
            <div className="skills-container pr-2 flex-1 overflow-y-auto"> {/* Removed height calculation */}
                <div className="mb-0 space-y-4"> {/* Add spacing */}
                    {technicalSkills.map(renderSkill)}
                </div>
                <div className="mt-0 space-y-4"> {/* Add spacing */}
                    {professionalSkills.map(renderSkill)}
                </div>
            </div>
            <div className="mt-auto border-t border-black/10 dark:border-white/10 pt-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white">
                    Skills Total
                </span>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">
                    {skillsData.length}
                </span>
            </div>
        </BentoCard>
    );
};

export default Skills;
