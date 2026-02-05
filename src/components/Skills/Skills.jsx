import React from 'react';
import PropTypes from 'prop-types';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { skills as skillsData } from '../../data/skills';
import './Skills.css';

const Skills = ({ colSpan = "col-span-12" }) => {
    // Group skills by category
    const technicalSkills = skillsData.filter((_, index) => index < 8);
    const professionalSkills = skillsData.filter((_, index) => index >= 8);
    
    const renderSkillCard = (skill, index) => (
        <div 
            key={index} 
            className="skill-card border border-black/10 dark:border-white/10 p-4 flex flex-col justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:border-black/20 dark:hover:border-white/20 group"
        >
            <div className="mb-3">
                <h4 className="text-[11px] font-bold tracking-tight uppercase leading-tight text-black dark:text-white">
                    {skill.name}
                </h4>
            </div>
            <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 flex-1 transition-all ${
                            i < skill.level 
                                ? 'bg-black dark:bg-white' 
                                : 'bg-black/10 dark:bg-white/10'
                        }`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <BentoCard
            colSpan={colSpan}
            className="skills-card flex flex-col pb-0"
        >
            <div className="flex items-center justify-between mb-6 border-b border-black dark:border-white pb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Technical Skills</h3>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">
                    {skillsData.length} Skills // Proficiency
                </span>
            </div>
            
            {/* Technical Skills Grid */}
            <div className="mb-6">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white opacity-60 mb-3">
                    Technical
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {technicalSkills.map(renderSkillCard)}
                </div>
            </div>
            
            {/* Professional Skills Grid */}
            <div className="mb-4">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white opacity-60 mb-3">
                    Professional
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {professionalSkills.map(renderSkillCard)}
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

Skills.propTypes = {
    colSpan: PropTypes.string
};

export default Skills;
