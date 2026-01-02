import React from 'react';
import './BentoCard.css';

const BentoCard = ({ title, description, skills, image }) => {
    return (
        <div className="bento-card">
            <img src={image} alt={title} className="bento-card-image" />
            <div className="bento-card-content">
                <h3 className="bento-card-title">{title}</h3>
                <p className="bento-card-description">{description}</p>
                <div className="bento-card-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="bento-card-skill">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BentoCard;