import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications } from '../../data/certifications';
import './StatsBox.css';

const StatsBox = () => {
    const stats = [
        { icon: 'code', label: 'Projects', value: '25+' },
        { icon: 'certificate', label: 'Certifications', value: String(certifications.length) },
        { icon: 'clock', label: 'Experience', value: '5+ yrs' },
        { icon: 'users', label: 'Clients', value: '15+' }
    ];

    return (
        <BentoCard colSpan="col-span-12 md:col-span-4" className="row-span-1">
            <div className="flex flex-col space-y-2">
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
