// filepath: d:\Codes\Portfolio\src\components\Education\Education.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { educationData } from '../../data/education';
import './Education.css';

const Education = () => {
    return (
        <BentoCard
            colSpan="col-span-12 md:col-span-4"
            className="education-card"
        >
            <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Academic Foundation</h3>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">B.S. CS // Honors</span>
            </div>
            <div className="space-y-6">
                {educationData.map((item, index) => (
                    <div key={index} className="education-item border-b border-black/10 dark:border-white/10 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                            <div className="flex-grow">
                                <span className="text-[10px] items-center space-x-2 text-black/50 dark:text-white/50 uppercase tracking-widest block mb-1">{item.year}</span>
                                <h4 className="font-bold text-black dark:text-white text-sm uppercase tracking-tight">{item.degree}</h4>
                                <p className="text-xs text-black dark:text-white opacity-60 font-medium">{item.institution}</p>
                            </div>
                        </div>
                        {item.description && (
                            <p className="mt-2 text-xs text-black/40 dark:text-white/40 leading-relaxed italic">
                                {`// ${item.description}`}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default Education;
