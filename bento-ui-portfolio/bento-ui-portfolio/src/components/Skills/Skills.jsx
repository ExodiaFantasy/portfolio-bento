import React from 'react';
import skillsData from '../../data/skills';

const Skills = () => {
    return (
        <div className="bento-card">
            <div className="bento-card-content">
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h2>
                <div className="space-y-6">
                    {skillsData.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between">
                                <span>{skill.name}</span>
                                <span>{skill.level}</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress bg-blue-500" style={{ width: skill.percentage }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;