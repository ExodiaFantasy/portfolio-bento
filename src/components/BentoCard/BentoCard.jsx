import React from 'react';
import PropTypes from 'prop-types';
import './BentoCard.css';

const BentoCard = ({
    children,
    className = '',
    colSpan = 'col-span-12 md:col-span-6',
    rowSpan = '',
    borderStyle = 'border-black dark:border-white'
}) => {
    const baseClasses = `bento-card relative overflow-hidden rounded-none p-4 md:p-6 transition-all duration-200 ${colSpan} ${rowSpan}`;

    const backgroundClasses = 'bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-[0.5px] ' + borderStyle;

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
    borderStyle: PropTypes.string
};

export default BentoCard;
