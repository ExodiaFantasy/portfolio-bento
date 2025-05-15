import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ClientsBox.css';

const ClientsBox = () => {
    const clients = [
        { name: 'Google', icon: ['fab', 'google'] },
        { name: 'Amazon', icon: ['fab', 'amazon'] },
        { name: 'Microsoft', icon: ['fab', 'microsoft'] },
        { name: 'Adobe', icon: ['fab', 'adobe'] },
        { name: 'Shopify', icon: ['fab', 'shopify'] },
        { name: 'Slack', icon: ['fab', 'slack'] }
    ];

    return (
        <BentoCard colSpan="col-span-12 md:col-span-4" className="row-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🤝 Clients</h3>
            <div className="clients-grid">
                {clients.map((client, index) => (
                    <div key={index} className="client-item">
                        <FontAwesomeIcon icon={client.icon} className="client-icon" />
                        <span className="client-name">{client.name}</span>
                    </div>
                ))}
            </div>
        </BentoCard>
    );
};

export default ClientsBox;
