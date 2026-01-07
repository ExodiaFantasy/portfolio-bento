import React, { useState, useEffect, useCallback } from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications as certificationsData, certificationArchive } from '../../data/certifications';
import './Certifications.css';

const normalizeTitle = (title) => (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
const isAiPractitioner = (title) => normalizeTitle(title).includes('ai practitioner');
const isCloudPractitioner = (title) => normalizeTitle(title).includes('cloud practitioner');

const Certifications = () => {
    const [certs, setCerts] = useState(certificationsData);
    const [isLoading, setIsLoading] = useState(true);
    const [lastSync, setLastSync] = useState(null);
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);
    const [isUsingCache, setIsUsingCache] = useState(false);
    const archiveItems = certificationArchive.filter((cert) => {
        const normalized = normalizeTitle(cert.title);
        return !certs.some((mainCert) => {
            const mainNormalized = normalizeTitle(mainCert.title);
            if (normalized === mainNormalized) return true;
            if (isAiPractitioner(cert.title) && isAiPractitioner(mainCert.title)) return true;
            if (isCloudPractitioner(cert.title) && isCloudPractitioner(mainCert.title)) return true;
            return false;
        });
    });

    const fetchCerts = useCallback(async (forceRefresh = false) => {
            try {
                setIsLoading(true);
                // Using CORS proxies because Credly API doesn't allow direct cross-origin requests
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
                                    setCerts((prevCerts) => {
                                        const merged = [...prevCerts];
                                        parsed.data.forEach((dCert) => {
                                            const normalized = normalizeTitle(dCert.title);
                                            const existingIndex = merged.findIndex(
                                                (mCert) => normalizeTitle(mCert.title) === normalized
                                            );
                                            if (existingIndex === -1) {
                                                merged.push(dCert);
                                            } else if (!merged[existingIndex].image) {
                                                Object.assign(merged[existingIndex], dCert);
                                            }
                                        });
                                        return merged.sort((a, b) => {
                                            const yearDiff = b.year - a.year;
                                            if (yearDiff !== 0) return yearDiff;
                                            const issuerA = (a.issuer || '').toLowerCase();
                                            const issuerB = (b.issuer || '').toLowerCase();
                                            if (issuerA !== issuerB) return issuerA.localeCompare(issuerB);
                                            const titleA = (a.title || '').toLowerCase();
                                            const titleB = (b.title || '').toLowerCase();
                                            return titleA.localeCompare(titleB);
                                        });
                                    });
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
                        isDynamic: true
                    }));
                    try {
                        localStorage.setItem(
                            cacheKey,
                            JSON.stringify({ timestamp: Date.now(), data: dynamicCerts })
                        );
                    } catch (cacheWriteError) {
                        // Ignore cache write errors
                    }

                    // Merge logic: Start with local data and add dynamic ones if they don't already exist (by title)
                    setCerts(prevCerts => {
                        const merged = [...prevCerts];
                        const seenTitles = new Map(
                            merged.map((cert, index) => [normalizeTitle(cert.title), index])
                        );

                        dynamicCerts.forEach(dCert => {
                            // Match by normalized title to avoid duplicates like "(Early Adopter)" vs "- Early Adopter"
                            const normalized = normalizeTitle(dCert.title);
                            const existingIndex = seenTitles.get(normalized);
                            const exists = existingIndex !== undefined ? merged[existingIndex] : null;
                            if (!exists) {
                                merged.push(dCert);
                                seenTitles.set(normalized, merged.length - 1);
                            } else if (!exists.image) {
                                // If it exists manually but has no image, upgrade it with the dynamic image/link
                                Object.assign(exists, dCert);
                            }
                        });
                        // Sort by year desc, then issuer, then title for a stable ordering
                        return merged.sort((a, b) => {
                            const yearDiff = b.year - a.year;
                            if (yearDiff !== 0) return yearDiff;
                            const issuerA = (a.issuer || '').toLowerCase();
                            const issuerB = (b.issuer || '').toLowerCase();
                            if (issuerA !== issuerB) return issuerA.localeCompare(issuerB);
                            const titleA = (a.title || '').toLowerCase();
                            const titleB = (b.title || '').toLowerCase();
                            return titleA.localeCompare(titleB);
                        });
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
        }, 60000); // Fetch data every 60 seconds

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
        className="certifications-card flex flex-col pb-0" // Removed fixed height
    >
        <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Credentials</h3>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-50">
                <span>
                    {isLoading
                        ? "Synchronizing..."
                        : lastSync
                            ? `Last Sync ${lastSync.toLocaleDateString()} ${lastSync.toLocaleTimeString()}`
                            : "Verified / Active"}
                </span>
                <button
                    type="button"
                    onClick={() => {
                        setIsLoading(true);
                        setIsUsingCache(false);
                        setCerts(certificationsData);
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
        <div className="flex items-center justify-between mb-4 text-[10px] uppercase tracking-tighter">
            <span className="opacity-50">
                {isUsingCache ? "Using cached data" : "Live Credly sync"}
            </span>
        </div>
        <div className="certifications-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-black/10 dark:border-white/10">
            {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={`skeleton-${index}`}
                        className="cert-card p-6 border-r border-b border-black/10 dark:border-white/10 flex flex-col justify-between animate-pulse"
                    >
                        <div className="flex flex-col items-start w-full">
                            <div className="flex justify-between w-full items-start mb-4">
                                <div className="h-3 w-10 bg-black/10 dark:bg-white/10" />
                                <div className="h-8 w-8 bg-black/10 dark:bg-white/10 rounded" />
                            </div>
                            <div className="h-3 w-3/4 bg-black/10 dark:bg-white/10 mb-2" />
                            <div className="h-2 w-1/2 bg-black/10 dark:bg-white/10" />
                        </div>
                        <div className="mt-6 h-2 w-24 bg-black/10 dark:bg-white/10" />
                    </div>
                ))
                : certs.map((cert, index) => (
                    <div
                        key={index}
                        className="cert-card p-6 border-r border-b border-black/10 dark:border-white/10 flex flex-col justify-between group hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        <div className="flex flex-col items-start">
                            <div className="flex justify-between w-full items-start mb-4">
                                <span className="text-[10px] text-black/40 dark:text-white/40 uppercase font-mono">{cert.year}</span>
                                {cert.image && (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all"
                                    />
                                )}
                            </div>
                            <h4 className="text-black dark:text-white font-bold text-xs uppercase tracking-tight mb-1 line-clamp-2">{cert.title}</h4>
                            <p className="text-[10px] text-black dark:text-white opacity-60 uppercase">{cert.issuer}</p>
                        </div>
                        {cert.proof && (
                            <a
                                href={cert.proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 text-[10px] uppercase font-bold tracking-widest text-black dark:text-white hover:opacity-50 transition-opacity flex items-center gap-2 border-b border-black/20 dark:border-white/20 pb-1 w-fit"
                            >
                                Verify Archive <FontAwesomeIcon icon="external-link-alt" className="w-2 h-2" />
                            </a>
                        )}
                    </div>
                ))}
        </div>
        <div className="mt-6 border-t border-black/10 dark:border-white/10 pt-4 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white">
                Archive ({archiveItems.length})
            </span>
            <button
                type="button"
                onClick={() => setIsArchiveOpen(true)}
                className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white border border-black/20 dark:border-white/20 px-3 py-1 hover:opacity-60 transition-opacity"
            >
                View Archive
            </button>
        </div>
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
                        <h4 className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                            Certifications Archive
                        </h4>
                        <button
                            type="button"
                            onClick={() => setIsArchiveOpen(false)}
                            className="text-[10px] uppercase tracking-widest font-bold text-black dark:text-white border border-black/20 dark:border-white/20 px-2 py-1 hover:opacity-60 transition-opacity"
                        >
                            Close
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto pr-2">
                        {archiveItems.map((cert, index) => (
                            <a
                                key={`${cert.title}-${index}`}
                                href={cert.proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] uppercase tracking-tight text-black dark:text-white border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold">{cert.title}</span>
                                {cert.issuer && <span className="opacity-60"> — {cert.issuer}</span>}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </BentoCard>
    );
};

export default Certifications;
