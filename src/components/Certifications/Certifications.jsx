import React, { useState, useEffect, useCallback } from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    featuredCertifications, 
    professionalTraining, 
    learningArchive 
} from '../../data/certifications';
import './Certifications.css';

const normalizeTitle = (title) => (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const Certifications = () => {
    // State for Featured tier (Credly sync)
    const [featuredCerts, setFeaturedCerts] = useState(featuredCertifications);
    const [isLoading, setIsLoading] = useState(true);
    const [lastSync, setLastSync] = useState(null);
    const [isUsingCache, setIsUsingCache] = useState(false);
    
    // State for collapsible sections
    const [isProfessionalOpen, setIsProfessionalOpen] = useState(false);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState({});

    const fetchCerts = useCallback(async (forceRefresh = false) => {
            try {
                setIsLoading(true);
                const credlyUrl = 'https://www.credly.com/users/elishasanmiguel/badges.json';
                const proxies = [
                    {
                        type: 'corsproxy',
                        url: 'https://corsproxy.io/?' + encodeURIComponent(credlyUrl)
                    },
                    {
                        type: 'codetabs',
                        url: 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(credlyUrl)
                    }
                ];
                const cacheKey = 'credlyBadgesCache';
                const cacheTtlMs = 24 * 60 * 60 * 1000;

                if (!forceRefresh) {
                    try {
                        const cached = localStorage.getItem(cacheKey);
                        if (cached) {
                            const parsed = JSON.parse(cached);
                            if (parsed && parsed.timestamp && parsed.data) {
                                const age = Date.now() - parsed.timestamp;
                                if (age < cacheTtlMs) {
                                    setIsUsingCache(true);
                                    setLastSync(new Date(parsed.timestamp));
                                    setFeaturedCerts((prevCerts) => {
                                        const merged = [...prevCerts];
                                        parsed.data.forEach((dCert) => {
                                            const normalized = normalizeTitle(dCert.title);
                                            const existingIndex = merged.findIndex(
                                                (mCert) => normalizeTitle(mCert.title) === normalized
                                            );
                                            if (existingIndex === -1) {
                                                // Only add if it's a featured certification
                                                if (featuredCertifications.some(f => normalizeTitle(f.title) === normalized)) {
                                                    merged.push(dCert);
                                                }
                                            } else if (!merged[existingIndex].image) {
                                                Object.assign(merged[existingIndex], dCert);
                                            }
                                        });
                                        return merged;
                                    });
                                    setIsLoading(false);
                                    return;
                                }
                            }
                        }
                    } catch (cacheError) {
                        // Ignore cache errors and fall back to fetch
                    }
                }

                const timeoutMs = 10000;
                let jsonData = null;
                let timedOut = false;

                const timeoutPromise = new Promise((resolve) => {
                    setTimeout(() => {
                        timedOut = true;
                        resolve(null);
                    }, timeoutMs);
                });

                for (const proxy of proxies) {
                    if (timedOut) break;
                    try {
                        const response = await Promise.race([fetch(proxy.url), timeoutPromise]);
                        if (!response || !response.ok) {
                            continue;
                        }
                        if (proxy.type === 'corsproxy' || proxy.type === 'codetabs') {
                            jsonData = await response.json();
                            break;
                        } else {
                            const data = await response.json();
                            if (data.contents) {
                                jsonData = JSON.parse(data.contents);
                                break;
                            }
                        }
                    } catch (proxyError) {
                        continue;
                    }
                }

                if (jsonData && jsonData.data && jsonData.data.length > 0) {
                    setLastSync(new Date());
                    setIsUsingCache(false);
                    const dynamicCerts = jsonData.data.map(item => ({
                        id: item.id,
                        title: item.badge_template.name,
                        issuer: item.issuer.summary.replace('issued by ', ''),
                        year: new Date(item.issued_at_date).getFullYear(),
                        proof: `https://www.credly.com/badges/${item.id}/public_url`,
                        image: item.badge_template.image_url,
                        isDynamic: true,
                        type: 'certification',
                        examBased: true,
                        verifiable: true
                    }));
                    try {
                        localStorage.setItem(
                            cacheKey,
                            JSON.stringify({ timestamp: Date.now(), data: dynamicCerts })
                        );
                    } catch (cacheWriteError) {
                        // Ignore cache write errors
                    }

                    // Only merge with Featured tier
                    setFeaturedCerts(prevCerts => {
                        const merged = [...prevCerts];
                        const seenTitles = new Map(
                            merged.map((cert, index) => [normalizeTitle(cert.title), index])
                        );

                        dynamicCerts.forEach(dCert => {
                            const normalized = normalizeTitle(dCert.title);
                            const existingIndex = seenTitles.get(normalized);
                            const exists = existingIndex !== undefined ? merged[existingIndex] : null;
                            
                            // Only add if it matches a featured certification
                            if (!exists && featuredCertifications.some(f => normalizeTitle(f.title) === normalized)) {
                                merged.push(dCert);
                                seenTitles.set(normalized, merged.length - 1);
                            } else if (exists && !exists.image) {
                                Object.assign(exists, dCert);
                            }
                        });
                        return merged;
                    });
                }
            } catch (error) {
                console.error("Error fetching Credly badges:", error);
            } finally {
                setIsLoading(false);
            }
        }, []);

    useEffect(() => {
        fetchCerts();
    }, [fetchCerts]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchCerts();
        }, 60000);

        return () => clearInterval(interval);
    }, [fetchCerts]);

    useEffect(() => {
        if (!isArchiveOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsArchiveOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isArchiveOpen]);

    return (<BentoCard
        colSpan="col-span-12 md:col-span-8"
        className="certifications-card flex flex-col pb-0"
    >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Certifications</h3>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-50">
                <span>
                    {isLoading
                        ? "Synchronizing..."
                        : lastSync
                            ? `Last Sync ${lastSync.toLocaleDateString()} ${lastSync.toLocaleTimeString()}`
                            : "Verified"}
                </span>
                <button
                    type="button"
                    onClick={() => {
                        setIsLoading(true);
                        setIsUsingCache(false);
                        setFeaturedCerts(featuredCertifications);
                        fetchCerts(true);
                    }}
                    className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                    aria-label="Refresh Credly sync"
                    title="Refresh"
                >
                    <FontAwesomeIcon icon="arrows-rotate" className="w-3 h-3" />
                </button>
            </div>
        </div>

        {/* Featured Certifications - Always Visible */}
        <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white opacity-60">
                    Featured Certifications
                </h4>
                <span className="text-[10px] uppercase tracking-tighter opacity-50">
                    {isUsingCache ? "Cached" : "Live"}
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-l border-t border-black/10 dark:border-white/10">
                {isLoading
                    ? Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={`skeleton-${index}`}
                            className="cert-card p-6 border-r border-b border-black/10 dark:border-white/10 flex flex-col justify-between animate-pulse"
                        >
                            <div className="flex flex-col items-start w-full">
                                <div className="flex justify-between w-full items-start mb-4">
                                    <div className="h-3 w-10 bg-black/10 dark:bg-white/10" />
                                    <div className="h-12 w-12 bg-black/10 dark:bg-white/10 rounded" />
                                </div>
                                <div className="h-4 w-3/4 bg-black/10 dark:bg-white/10 mb-2" />
                                <div className="h-3 w-1/2 bg-black/10 dark:bg-white/10" />
                            </div>
                            <div className="mt-6 h-2 w-24 bg-black/10 dark:bg-white/10" />
                        </div>
                    ))
                    : featuredCerts.map((cert, index) => (
                        <div
                            key={cert.id || index}
                            className="cert-card p-6 border-r border-b border-black/10 dark:border-white/10 flex flex-col justify-between group hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <div className="flex flex-col items-start">
                                <div className="flex justify-between w-full items-start mb-4">
                                    <span className="text-[10px] text-black/40 dark:text-white/40 uppercase font-mono">{cert.year}</span>
                                    {cert.image && (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    )}
                                </div>
                                <h4 className="text-black dark:text-white font-bold text-sm uppercase tracking-tight mb-2 line-clamp-2">{cert.title}</h4>
                                <p className="text-[10px] text-black dark:text-white opacity-60 uppercase">{cert.issuer}</p>
                                {cert.capability && (
                                    <span className="mt-2 text-[9px] uppercase tracking-wider px-2 py-0.5 bg-black/5 dark:bg-white/5 text-black dark:text-white">
                                        {cert.capability.replace('-', ' ')}
                                    </span>
                                )}
                            </div>
                            {cert.proof && (
                                <a
                                    href={cert.proof}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 text-[10px] uppercase font-bold tracking-widest text-black dark:text-white hover:opacity-50 transition-opacity flex items-center gap-2 border-b border-black/20 dark:border-white/20 pb-1 w-fit"
                                >
                                    Verify <FontAwesomeIcon icon="external-link-alt" className="w-2 h-2" />
                                </a>
                            )}
                        </div>
                    ))}
            </div>
        </div>

        {/* Professional Training - Collapsible */}
        <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-4">
            <button
                type="button"
                onClick={() => setIsProfessionalOpen(!isProfessionalOpen)}
                className="w-full flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-black dark:text-white hover:opacity-60 transition-opacity"
            >
                <span>Professional Training ({professionalTraining.length})</span>
                <FontAwesomeIcon 
                    icon={isProfessionalOpen ? "chevron-up" : "chevron-down"} 
                    className="w-3 h-3" 
                />
            </button>
            
            {isProfessionalOpen && (
                <div className="mt-4 space-y-3">
                    {professionalTraining.map((training) => (
                        <div 
                            key={training.id} 
                            className="border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h5 className="text-xs font-bold uppercase tracking-tight text-black dark:text-white">
                                            {training.title}
                                        </h5>
                                        {training.componentCount && (
                                            <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-black/10 dark:bg-white/10 text-black dark:text-white">
                                                {training.componentCount} courses
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <p className="text-[10px] text-black dark:text-white opacity-60 uppercase">
                                            {training.issuer} • {training.year}
                                        </p>
                                        {training.capability && (
                                            <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-black/5 dark:bg-white/5 text-black dark:text-white">
                                                {training.capability.replace('-', ' ')}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Components Expandable */}
                                    {training.components && training.components.length > 0 && (
                                        <div className="mt-3">
                                            <button
                                                type="button"
                                                onClick={() => setExpandedGroups(prev => ({
                                                    ...prev,
                                                    [training.id]: !prev[training.id]
                                                }))}
                                                className="text-[9px] uppercase tracking-widest font-bold text-black dark:text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1"
                                            >
                                                <FontAwesomeIcon 
                                                    icon={expandedGroups[training.id] ? "minus" : "plus"} 
                                                    className="w-2 h-2" 
                                                />
                                                {expandedGroups[training.id] ? "Hide" : "Show"} Components
                                            </button>
                                            
                                            {expandedGroups[training.id] && (
                                                <div className="mt-2 pl-4 border-l-2 border-black/10 dark:border-white/10 space-y-1">
                                                    {training.components.map((component, idx) => (
                                                        <div key={idx} className="text-[9px] text-black dark:text-white opacity-60">
                                                            • {component.title}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                
                                {training.proof && (
                                    <a
                                        href={training.proof}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[9px] uppercase font-bold tracking-widest text-black dark:text-white hover:opacity-50 transition-opacity flex items-center gap-1 border-b border-black/20 dark:border-white/20 pb-0.5"
                                    >
                                        View <FontAwesomeIcon icon="external-link-alt" className="w-2 h-2" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* Archive Link */}
        <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-4 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white">
                Learning Archive ({learningArchive.length})
            </span>
            <button
                type="button"
                onClick={() => setIsArchiveOpen(true)}
                className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white border border-black/20 dark:border-white/20 px-3 py-1 hover:opacity-60 transition-opacity"
            >
                View Archive
            </button>
        </div>

        {/* Archive Modal */}
        {isArchiveOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <button
                    type="button"
                    className="absolute inset-0 bg-black/60 dark:bg-black/70"
                    aria-label="Close archive"
                    onClick={() => setIsArchiveOpen(false)}
                />
                <div className="relative w-full max-w-4xl bg-white dark:bg-black border border-black/20 dark:border-white/20 p-6">
                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3 mb-4">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                                Learning Archive
                            </h4>
                            <p className="text-[9px] uppercase tracking-wider text-black/50 dark:text-white/50 mt-1">
                                Introductory courses, attendance records, and duplicate proofs
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsArchiveOpen(false)}
                            className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white border border-black/20 dark:border-white/20 px-2 py-1 hover:opacity-60 transition-opacity"
                        >
                            Close
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-2">
                        {learningArchive
                            .filter(cert => cert.type !== 'duplicate')
                            .map((cert, index) => (
                            <a
                                key={`${cert.title}-${index}`}
                                href={cert.proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] uppercase tracking-tight text-black dark:text-white border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex flex-col gap-1"
                            >
                                <span className="font-bold line-clamp-2">{cert.title}</span>
                                <div className="flex items-center gap-2">
                                    {cert.issuer && <span className="opacity-60">{cert.issuer}</span>}
                                    {cert.type && (
                                        <span className="text-[8px] px-1.5 py-0.5 bg-black/5 dark:bg-white/5 opacity-40">
                                            {cert.type.replace('-', ' ')}
                                        </span>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10">
                        <p className="text-[9px] uppercase tracking-wider text-black/40 dark:text-white/40">
                            {learningArchive.filter(c => c.type === 'duplicate').length} duplicate proof files hidden
                        </p>
                    </div>
                </div>
            </div>
        )}
    </BentoCard>
    );
};

export default Certifications;
