import React from 'react';
import educationData from '../../data/education';

const Education = () => {
    return (
        <div className="bento-card">
            <div className="bento-card-content">
                <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Education</h2>
                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-lg">{edu.degree}</h3>
                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{edu.institution} | {edu.years}</div>
                            <p className="text-sm">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;