// filepath: d:\Codes\Portfolio\src\components\Certifications\Certifications.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications as certificationsData } from '../../data/certifications';
import './Certifications.css';

const Certifications = () => {    return (        <BentoCard 
            colSpan="col-span-12 md:col-span-8" 
            className="certifications-card"
        >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100">Certifications</h3><div className="certifications-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certificationsData.map((cert, index) => (
                    <div 
                        key={index} 
                        className="cert-card p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:-translate-y-1"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start pr-2">
                                <h4 className="text-gray-900 dark:text-gray-100 font-medium text-sm sm:text-base">{cert.title}</h4>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</p>
                            </div>
                            <FontAwesomeIcon 
                                icon="certificate" 
                                className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 object-contain filter dark:brightness-90 flex-shrink-0"
                            />
                        </div>                        {cert.proof && (
                            <a 
                                href={cert.proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                            >
                                View Credential                                <FontAwesomeIcon icon="external-link-alt" className="w-3 h-3 sm:w-4 sm:h-4" />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default Certifications;
