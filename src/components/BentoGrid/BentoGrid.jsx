import React from 'react';
import PropTypes from 'prop-types';
import './BentoGrid.css';

const BentoGrid = ({ children }) => {
    return (
        <div className="bento-grid-container max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <div className="bento-grid grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
                {children}
            </div>
        </div>
    );
};

BentoGrid.propTypes = {
    children: PropTypes.node.isRequired
};

export default BentoGrid;
