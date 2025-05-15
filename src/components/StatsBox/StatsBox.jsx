import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StatsBox.css';

const StatsBox = () => {
    const stats = [
        { icon: 'code', label: 'Projects', value: '25+' },
        { icon: 'users', label: 'Clients', value: '15+' },
        { icon: 'star', label: 'Reviews', value: '4.9' },
        { icon: 'clock', label: 'Experience', value: '5+ yrs' }
    ];

    return (
        <BentoCard colSpan="col-span-12 md:col-span-4" className="row-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">✨ Stats</h3>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <div className="stat-icon">
                            <FontAwesomeIcon icon={stat.icon} />
                        </div>
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default StatsBox;
