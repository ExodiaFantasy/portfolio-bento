import React from 'react';
import './BentoGrid.css';

const BentoGrid = ({ children }) => {
    return (
        <div className="bento-grid">
            {children}
        </div>
    );
};

export default BentoGrid;