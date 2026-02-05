import React from 'react';
import PropTypes from 'prop-types';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { skills as skillsData } from '../../data/skills';
import './Skills.css';

const Skills = ({ colSpan = "col-span-12" }) => {
    const renderSkillPill = (skill, index) => (
        <div 
            key={index} 
            className="skill-pill inline-flex items-center gap-2 border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:border-black/20 dark:hover:border-white/20 whitespace-nowrap shrink-0"
        >
            <span className="text-[10px] font-bold tracking-tight uppercase text-black dark:text-white">
                {skill.name}
            </span>
            <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 w-1.5 ${
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
            
            {/* Horizontal Scrollable Skills */}
            <div className="skills-scroll-container overflow-x-auto pb-4 -mx-6 px-6">
                <div className="flex flex-wrap gap-2">
                    {skillsData.map(renderSkillPill)}
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
