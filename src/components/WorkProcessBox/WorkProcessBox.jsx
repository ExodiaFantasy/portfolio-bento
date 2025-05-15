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
    ];

    return (
        <BentoCard 
            colSpan="col-span-12 md:col-span-4" 
            className="process-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">⚙️ Work Process</h3>
            
            <div className="grid grid-cols-2 gap-4">
                {processes.map(process => (                    <div 
                        key={process.id} 
                        className="process-item flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                        <div className="process-icon w-12 h-12 mb-3 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon 
                                icon={process.icon} 
                                className="text-white text-lg" 
                            />
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{process.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            {process.description}
                        </p>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default WorkProcessBox;
