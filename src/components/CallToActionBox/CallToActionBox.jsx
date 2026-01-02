// filepath: d:\Codes\Portfolio\src\components\CallToActionBox\CallToActionBox.jsx
import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CallToActionBox = () => {
    return (<BentoCard
        colSpan="col-span-12 md:col-span-6"
    >
        <div className="flex flex-col items-start justify-center h-full p-4">
            <div className="mb-8 flex items-center space-x-2 text-[10px] uppercase tracking-widest opacity-60">
                <span className="h-1.5 w-1.5 bg-black dark:bg-white animate-pulse"></span>
                <span>Transmission Status: Ready</span>
            </div>
            <h3 className="text-3xl font-bold mb-6 tracking-tighter uppercase">Credential Access</h3>
            <p className="mb-10 text-xs text-black/60 dark:text-white/60 max-w-sm uppercase leading-loose tracking-tight">
                Full technical dossier and CV available upon request.
                Please initiate a request for authorization.
            </p>
            <a
                href="https://drive.google.com/file/d/1b-HMUIs-7Rq51v516Vj-uKVOAtuPKx1l/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-[0.3em] text-center hover:opacity-80 transition-opacity border border-black dark:border-white"
            >
                Request CV
            </a>
        </div>
    </BentoCard>
    );
};

export default CallToActionBox;
