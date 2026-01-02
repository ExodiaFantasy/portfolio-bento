// filepath: d:\Codes\Portfolio\src\components\OnlinePresenceBox\OnlinePresenceBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './OnlinePresenceBox.css';

const OnlinePresenceBox = () => {
    const [copiedEmail, setCopiedEmail] = React.useState(false);
    const platforms = [
        {
            name: "LinkedIn",
            username: "elishasanmiguel",
            url: "https://linkedin.com/in/elishasanmiguel",
            icon: ["fab", "linkedin-in"],
            color: "text-blue-500"
        },
        {
            name: "GitHub",
            username: "elishasanmiguel",
            url: "https://github.com/ExodiaFantasy",
            icon: ["fab", "github"],
            color: "text-gray-800 dark:text-white"
        },
        {
            name: "Credly",
            username: "elishasanmiguel",
            url: "https://www.credly.com/users/elishasanmiguel",
            icon: ["fas", "certificate"],
            color: "text-orange-500"
        },
        {
            name: "Mail",
            username: "japhetelishabuenasanmiguel@gmail.com",
            url: "mailto:japhetelishabuenasanmiguel@gmail.com",
            icon: ["fas", "envelope"],
            color: "text-gray-800 dark:text-white",
            isEmail: true
        }
    ];

    const handleMailClick = (url, email) => {
        window.location.href = url;
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (<BentoCard
        colSpan="col-span-12 md:col-span-6"
        className="online-presence-card"
    >
        <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Digital Footprint</h3>
            <span className="text-[10px] uppercase tracking-tighter opacity-50">Authorized Links</span>
        </div>
        <div className="grid grid-cols-2 gap-0 border-l border-t border-black/10 dark:border-white/10">
            {platforms.map((platform, index) => {
                if (platform.isEmail) {
                    return (
                        <button
                            key={index}
                            onClick={() => handleMailClick(platform.url, platform.username)}
                            className="flex flex-col items-start gap-4 p-6 border-r border-b border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group w-full text-left"
                        >
                            <div className="flex justify-between w-full items-center">
                                <span className="text-[10px] uppercase font-bold tracking-widest">
                                    {copiedEmail ? "Address Copied" : platform.name}
                                </span>
                                <FontAwesomeIcon icon={platform.icon} className="text-xs opacity-40 group-hover:opacity-100" />
                            </div>
                            <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100 break-all">{platform.username}</span>
                        </button>
                    );
                }
                return (
                    <a
                        key={index}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start gap-4 p-6 border-r border-b border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                    >
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[10px] uppercase font-bold tracking-widest">{platform.name}</span>
                            <FontAwesomeIcon icon={platform.icon} className="text-xs opacity-40 group-hover:opacity-100" />
                        </div>
                        <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100">{platform.username}</span>
                    </a>
                );
            })}
        </div>
    </BentoCard>
    );
};

export default OnlinePresenceBox;
