// filepath: d:\Codes\Portfolio\src\components\Education\Education.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { educationData } from '../../data/education';

const Education = () => {
    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-6"
            className="education-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🎓 Education</h3>
            <div className="space-y-4">
                {educationData.map((item, index) => (
                    <div key={index} className="education-item p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex justify-between items-start">
                            <div>                                <h4 className="font-medium text-gray-900 dark:text-white">{item.degree}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.year}</p>
                            </div>                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <FontAwesomeIcon 
                                    icon="graduation-cap" 
                                    className="text-blue-600 dark:text-blue-300"
                                />
                            </div>
                        </div>
                        {item.description && (
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default Education;
