import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const education = [
    {
        institution: "Stanford University",
        years: "2015-2017",
        degree: "Master of Computer Science",
        description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Distributed Deep Learning Systems'.",
        logo: "path/to/stanford-logo.png"
    },
    {
        institution: "MIT",
        years: "2011-2015",
        degree: "Bachelor of Engineering",
        description: "Major in Computer Science with minor in Mathematics. Graduated with honors.",
        logo: "path/to/mit-logo.png"
    }
];

const Education = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🎓 Education</h3>
            <div className="grid gap-4">
                {education.map((edu, index) => (
                    <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-2">
                            <img src={edu.logo} alt={edu.institution} className="w-8 h-8 mr-2" />
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-gray-100">{edu.institution}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{edu.years}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{edu.degree}</p>
                        {edu.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;