import React from 'react';

const Hero = () => {
    return (
        <section className="pt-20 pb-10 px-6 max-w-6xl mx-auto text-center">
            <div className="profile-image-container mb-6">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="Profile" className="profile-image" />
            </div>
            <h1 className="text-4xl font-bold mb-2">John Doe</h1>
            <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-xl text-gray-600 dark:text-gray-300">Cloud/AI Engineer</span>
                <div className="status-indicator status-available ml-2"></div>
                <span className="text-sm text-green-600 dark:text-green-400">Open for Work</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                Creating innovative solutions at the intersection of cloud computing and artificial intelligence.
            </p>
        </section>
    );
};

export default Hero;