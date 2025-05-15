// filepath: d:\Codes\Portfolio\src\components\OnlinePresenceBox\OnlinePresenceBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OnlinePresenceBox.css';

const OnlinePresenceBox = () => {
    const platforms = [
        {
            name: "LinkedIn",
            username: "johndoe",
            url: "https://linkedin.com/in/johndoe",
            icon: ["fab", "linkedin-in"],
            color: "text-blue-500"
        },
        {
            name: "GitHub",
            username: "johndoe",
            url: "https://github.com/johndoe",
            icon: ["fab", "github"],
            color: "text-gray-800 dark:text-white"
        },
        {
            name: "Twitter",
            username: "@johndoe",
            url: "https://twitter.com/johndoe",
            icon: ["fab", "twitter"],
            color: "text-blue-400"
        },
        {
            name: "Medium",
            username: "@johndoe",
            url: "https://medium.com/@johndoe",
            icon: ["fab", "medium"],
            color: "text-gray-800 dark:text-white"
        }
    ];    return (        <BentoCard 
            colSpan="col-span-12 md:col-span-6" 
            className="online-presence-card"
        >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🌐 Online Presence</h3>            
            <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform, index) => (                    <a 
                        key={index}
                        href={platform.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all transform hover:-translate-y-1 hover:shadow-md border border-gray-200 dark:border-gray-600"
                    >                        <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm icon-wrapper">
                            <FontAwesomeIcon 
                                icon={platform.icon} 
                                className={`${platform.color} text-xl`} 
                            />
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{platform.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{platform.username}</p>
                        </div>
                    </a>
                ))}
            </div>
        </BentoCard>
    );
};

export default OnlinePresenceBox;
