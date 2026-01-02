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
    ]; return (<BentoCard colSpan="col-span-12 md:col-span-6"
        className="process-card"
    >
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6 border-b border-black dark:border-white pb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Procedural Framework</h3>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">Standard Operating Protocol</span>
            </div>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {processes.map((process, index) => (
                        <div
                            key={process.id}
                            className="process-item p-4 border border-black dark:border-white flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[10px] font-mono opacity-40 uppercase">Phase_0{process.id}</span>
                                    <div className="h-6 w-6 border border-black dark:border-white flex items-center justify-center opacity-40">
                                        <FontAwesomeIcon icon={process.icon} className="text-[10px]" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-black dark:text-white text-base uppercase tracking-tighter mb-2">{process.title}</h4>
                                <p className="text-[10px] text-black/60 dark:text-white/60 leading-relaxed uppercase">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </BentoCard>
    );
};

export default WorkProcessBox;
