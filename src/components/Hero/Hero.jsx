// filepath: d:\Codes\Portfolio\src\components\Hero\Hero.jsx
import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
  const [copied, setCopied] = React.useState(false);
  const email = "japhetelishabuenasanmiguel@gmail.com";

  const handleInquiry = () => {
    // Attempt to open mailto
    window.location.href = `mailto:${email}?subject=Strategic%20Inquiry%20-%20[Project/Opportunity]`;

    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (<div className="hero-container py-32 bg-neutral-50 dark:bg-[#0a0a0a] relative border-b-[0.5px] border-black dark:border-white">
    <NeuralBackground />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-start text-left max-w-4xl mx-auto">
        {/* Status Indicator - Technical Style */}
        <div className="mb-8 flex items-center space-x-3 text-xs uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="font-medium opacity-60">Availability: Currently Engaged</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-none">
          ELISHA SAN MIGUEL
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8 opacity-70 tracking-tight">
          AI ENGINEER & CLOUD DEVELOPER
        </h2>

        <div className="w-full mb-8">
          <p className="text-lg max-w-xl leading-relaxed opacity-60">
            Pioneering AI strategy and cloud architectures at <a href="https://icxeed.ai" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity">iCXeed</a>.
            Specializing in AWS-powered automation and enterprise-scale intelligent systems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/file/d/1b-HMUIs-7Rq51v516Vj-uKVOAtuPKx1l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-10 bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity font-medium border border-black dark:border-white"
          >
            Request Access
          </a>
          <button
            onClick={handleInquiry}
            className="py-3 px-10 bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium border border-black dark:border-white min-w-[160px]"
          >
            {copied ? "Email Copied" : "Inquiry"}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;
