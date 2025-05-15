// filepath: d:\Codes\Portfolio\src\components\CallToActionBox\CallToActionBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallToActionBox = () => {
    return (        <BentoCard 
            colSpan="col-span-12 md:col-span-6" 
            gradient={true}
            gradientFrom="from-blue-600"
            gradientTo="to-indigo-700"
        ><div className="flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Let&apos;s Work Together</h3>
                <p className="mb-6 text-blue-100 max-w-md">
                    Looking for a skilled engineer to help with your next project? I&apos;m currently available for freelance work.
                </p>
                <a 
                    href="mailto:john.doe@example.com" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 py-3 px-8 rounded-lg font-medium hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                    <span>Get in Touch</span>
                    <FontAwesomeIcon icon="arrow-right" />
                </a>
            </div>
        </BentoCard>
    );
};

export default CallToActionBox;
