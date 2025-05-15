// filepath: d:\Codes\Portfolio\src\components\WorkProcessBox\WorkProcessBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    ];

    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-4" 
            className="process-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">⚙️ Work Process</h3>
            
            <div className="space-y-4">
                {processes.map(process => (
                    <div key={process.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon 
                                    icon={process.icon} 
                                    className="text-blue-600 dark:text-blue-300 text-sm" 
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{process.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {process.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default WorkProcessBox;
