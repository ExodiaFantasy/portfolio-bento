// filepath: d:\Codes\Portfolio\src\components\WorkProcessBox\WorkProcessBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WorkProcessBox.css';

const WorkProcessBox = () => {
    const processes = [
        {
            id: 1,
            title: "Discovery",
            description: "Understanding project requirements and objectives",
            icon: "laptop-code"
        },
        {
            id: 2,
            title: "Planning",
            description: "Developing a strategic approach and timeline",
            icon: "briefcase"
        },
        {
            id: 3,
            title: "Implementation",
            description: "Building scalable and efficient solutions",
            icon: "code"
        },
        {
            id: 4,
            title: "Optimization",
            description: "Fine-tuning for optimal performance",
            icon: "server"
        }
    ];    return (        <BentoCard            colSpan="col-span-12 md:col-span-6" 
            className="process-card bg-gray-50 dark:bg-gray-900 p-6 rounded-xl"
        >              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Work Process</h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">Work Steps</span>
            </div>              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 work-process-grid">
                {processes.map((process, index) => (<div 
                        key={process.id} 
                        className="process-item p-5 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="process-icon w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon 
                                icon={process.icon} 
                                className="text-white text-2xl" 
                            />
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-xl mb-3">{process.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {process.description}
                        </p>
                        <div className="w-12 h-1 bg-blue-500 rounded mb-4"></div>
                        <div>
                            <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                                Step {process.id}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default WorkProcessBox;
