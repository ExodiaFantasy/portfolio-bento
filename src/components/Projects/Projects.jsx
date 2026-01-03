import React, { useState } from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { projects as projectsData } from '../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeMediaIndex, setActiveMediaIndex] = useState(0);

    const closeModal = () => {
        setSelectedProject(null);
        setActiveMediaIndex(0);
    };

    const nextMedia = () => {
        if (selectedProject?.media) {
            setActiveMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
        }
    };

    const prevMedia = () => {
        if (selectedProject?.media) {
            setActiveMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
        }
    };

    return (
        <BentoCard
            colSpan="col-span-12 md:col-span-6"
            className="projects-card"
        >
            <div className="flex items-center justify-between mb-6 border-b border-black dark:border-white pb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest">Technical Engagements</h3>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">Enterprise / Internal</span>
            </div>

            <div className="max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectsData.length === 0 ? (
                        <div className="col-span-2 flex flex-col items-start justify-center min-h-[200px] w-full border border-dashed border-black/20 dark:border-white/20 p-8">
                            <span className="text-black dark:text-white text-sm font-medium mb-1 tracking-tight">NULL_ARRAY</span>
                            <span className="text-black/40 dark:text-white/40 text-xs">Awaiting deployment documentation.</span>
                        </div>
                    ) : (
                        projectsData.map((project, index) => (
                            <div
                                key={index}
                                className="project-item min-h-[240px] p-5 border border-black dark:border-white flex flex-col justify-between"
                            >
                                <div className="flex flex-col flex-grow">
                                    <div className="mb-3 h-[50px] flex items-start">
                                        <h4 className="font-bold text-black dark:text-white text-[13px] uppercase leading-tight tracking-tighter line-clamp-2">
                                            {project.title}
                                        </h4>
                                    </div>

                                    <div className="mb-4 h-[45px]">
                                        <p className="text-[10px] text-black/70 dark:text-white/70 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-[9px] uppercase font-bold tracking-widest border-b border-black dark:border-white hover:opacity-50 transition-opacity"
                                        >
                                            [ Read Dossier ]
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-black/10 dark:border-white/10">
                                    <div className="flex flex-wrap gap-2 text-[8px] uppercase tracking-tighter opacity-40 font-mono">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span key={i}>#{tech}</span>
                                        ))}
                                        {project.technologies.length > 3 && <span>...</span>}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Technical Dossier Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-white/10 dark:bg-black/40 backdrop-blur-md animate-fadeIn"
                    onClick={closeModal}
                    onKeyDown={(e) => e.key === 'Escape' && closeModal()}
                    role="button"
                    tabIndex="0"
                >
                    <div
                        className="bg-neutral-50 dark:bg-[#0a0a0a] border border-black dark:border-white w-full max-w-2xl max-h-[85vh] p-8 md:p-12 relative overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="presentation"
                    >
                        {/* Static noise-like frame element */}
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] select-none uppercase">
                            Ref_Ext_Dossier_{selectedProject.id}
                        </div>

                        <div className="flex justify-between items-start mb-10 border-b border-black dark:border-white pb-6 shrink-0">
                            <div className="pr-4">
                                <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-2 font-bold">Project Engagement // Detail</span>
                                <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tighter leading-none break-words">{selectedProject.title}</h3>
                            </div>
                            <button
                                onClick={closeModal}
                                className="h-10 w-10 shrink-0 border border-black dark:border-white flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
                            >
                                <span className="text-lg">×</span>
                            </button>
                        </div>

                        <div className="flex-grow space-y-8 overflow-y-auto custom-scrollbar pr-4">
                            {selectedProject.media && selectedProject.media.length > 0 && (
                                <div className="space-y-4">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40 text-black dark:text-white border-l-2 border-black dark:border-white pl-3">Visual Documentation</h4>

                                    <div className="relative group bg-neutral-200 dark:bg-neutral-900 border border-black dark:border-white overflow-hidden aspect-video flex items-center justify-center">
                                        <img
                                            src={selectedProject.media[activeMediaIndex].url}
                                            alt={selectedProject.media[activeMediaIndex].caption}
                                            className="max-w-full max-h-full object-contain"
                                        />

                                        {selectedProject.media.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevMedia}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 w-8 h-8 flex items-center justify-center border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity modal-nav-button"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={nextMedia}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/80 w-8 h-8 flex items-center justify-center border border-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity modal-nav-button"
                                                >
                                                    →
                                                </button>

                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                                    {selectedProject.media.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-1.5 h-1.5 rounded-full ${i === activeMediaIndex ? 'bg-black dark:bg-white' : 'bg-black/20 dark:white/20'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <p className="text-[9px] uppercase tracking-wider opacity-60 font-mono text-center">
                                        {selectedProject.media[activeMediaIndex].caption} ({activeMediaIndex + 1}/{selectedProject.media.length})
                                    </p>
                                </div>
                            )}

                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40 text-black dark:text-white border-l-2 border-black dark:border-white pl-3">Executive Overview</h4>
                                <p className="text-sm md:text-base leading-relaxed opacity-80 text-black dark:text-white">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40 text-black dark:text-white border-l-2 border-black dark:border-white pl-3">Technical Stack</h4>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 border border-black/20 dark:border-white/20 text-[10px] uppercase font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {selectedProject.link && (
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 opacity-40 text-black dark:text-white border-l-2 border-black dark:border-white pl-3">Access Portal</h4>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
                                    >
                                        Visit Engagement Site
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center shrink-0">
                            <span className="text-[8px] font-mono opacity-30 uppercase tracking-widest">Auth_Token: Verified_Access</span>
                            <button
                                onClick={closeModal}
                                className="text-[10px] uppercase font-bold tracking-widest opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4"
                            >
                                Close Terminal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </BentoCard>
    );
};

export default Projects;
