import React, { useState, useEffect } from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { certifications as certificationsData } from '../../data/certifications';
import './Certifications.css';

const Certifications = () => {
    const [certs, setCerts] = useState(certificationsData);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCerts = async () => {
            try {
                // Using a CORS proxy because Credly API doesn't allow direct cross-origin requests
                const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.credly.com/users/elishasanmiguel/badges.json'));
                const data = await response.json();

                if (data.contents) {
                    const jsonData = JSON.parse(data.contents);
                    if (jsonData.data && jsonData.data.length > 0) {
                        const dynamicCerts = jsonData.data.map(item => ({
                            id: item.id,
                            title: item.badge_template.name,
                            issuer: item.issuer.summary.replace('issued by ', ''),
                            year: new Date(item.issued_at_date).getFullYear(),
                            proof: `https://www.credly.com/badges/${item.id}/public_url`,
                            image: item.badge_template.image_url,
                            isDynamic: true
                        }));

                        // Merge logic: Start with local data and add dynamic ones if they don't already exist (by title)
                        setCerts(prevCerts => {
                            const merged = [...prevCerts];
                            dynamicCerts.forEach(dCert => {
                                // Check if this dynamic badge is already in our manual list (by title)
                                const exists = merged.find(mCert =>
                                    mCert.title.toLowerCase().trim() === dCert.title.toLowerCase().trim()
                                );
                                if (!exists) {
                                    merged.push(dCert);
                                } else if (!exists.image) {
                                    // If it exists manually but has no image, upgrade it with the dynamic image/link
                                    Object.assign(exists, dCert);
                                }
                            });
                            // Sort by year descending
                            return merged.sort((a, b) => b.year - a.year);
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching Credly badges:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCerts();
    }, []);

    return (<BentoCard
        colSpan="col-span-12 md:col-span-8"
        className="certifications-card"
    >
        <div className="flex items-center justify-between mb-8 border-b border-black dark:border-white pb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest">Credentials</h3>
            <span className="text-[10px] uppercase tracking-tighter opacity-50">
                {isLoading ? "Synchronizing..." : "Verified / Active"}
            </span>
        </div>
        <div className="certifications-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-black/10 dark:border-white/10">
            {certs.map((cert, index) => (
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
    </BentoCard>
    );
};

export default Certifications;
