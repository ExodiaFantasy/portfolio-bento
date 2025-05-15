import React from 'react';
import PropTypes from 'prop-types';
import './BentoCard.css';

const BentoCard = ({ 
    children, 
    className = '', 
    colSpan = 'col-span-12 md:col-span-6',
    rowSpan = '',
    gradient = false,
    gradientFrom = 'from-blue-500',
    gradientTo = 'to-indigo-600'
}) => {
    const baseClasses = `bento-card relative overflow-hidden rounded-xl p-4 md:p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${colSpan} ${rowSpan}`;
    
    const backgroundClasses = gradient 
        ? `bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`
        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700';
    
    return (
        <div className={`${baseClasses} ${backgroundClasses} ${className}`}>
            {children}
        </div>
    );
};

BentoCard.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    colSpan: PropTypes.string,
    rowSpan: PropTypes.string,
    gradient: PropTypes.bool,
    gradientFrom: PropTypes.string,
    gradientTo: PropTypes.string
};

export default BentoCard;
