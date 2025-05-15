import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';

const StatsBox = () => {
    return (
        <BentoCard colSpan="col-span-12 md:col-span-4" className="row-span-1">
            <div className="grid grid-cols-3 gap-2 h-full">
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">32+</span>
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Projects</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">20+</span>
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Clients</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">5+</span>
                    <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Years Exp</span>
                </div>
            </div>
        </BentoCard>
    );
};

export default StatsBox;
