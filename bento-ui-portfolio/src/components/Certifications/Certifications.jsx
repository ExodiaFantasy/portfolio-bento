import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            name: "AWS Solutions Architect",
            organization: "Amazon Web Services",
            date: "Mar 2023",
            icon: "certificate",
            proof: "/certs/aws-sa.pdf"
        },
        {
            id: 2,
            name: "Azure Cloud Engineer",
            organization: "Microsoft",
            date: "Jan 2023",
            icon: "cloud",
            proof: "/certs/azure-cloud.pdf"
        },
        {
            id: 3,
            name: "Machine Learning Specialization",
            organization: "Stanford University",
            date: "Nov 2022",
            icon: "robot",
            proof: "/certs/ml-stanford.pdf"
        },
        {
            id: 4,
            name: "TensorFlow Developer",
            organization: "Google",
            date: "Sep 2022",
            icon: "brain",
            proof: "/certs/tensorflow-dev.pdf"
        },
        {
            id: 5,
            name: "DevOps Professional",
            organization: "Linux Foundation",
            date: "Jul 2022",
            icon: "server",
            proof: "/certs/devops-pro.pdf"
        },
        {
            id: 6,
            name: "Kubernetes Administrator",
            organization: "CNCF",
            date: "May 2022",
            icon: "cubes",
            proof: "/certs/k8s-admin.pdf"
        },
        {
            id: 7,
            name: "Advanced Python Programming",
            organization: "Python Institute",
            date: "Feb 2022",
            icon: "code",
            proof: "/certs/python-adv.pdf"
        }
    ];

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">🎓 Certifications</h3>
            <div className="grid gap-4">
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-gray-900 dark:text-gray-100 font-medium">{cert.name}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.organization}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
                            </div>
                            {cert.icon && (
                                <FontAwesomeIcon 
                                    icon={cert.icon} 
                                    className="h-10 w-10 object-contain filter dark:brightness-90"
                                />
                            )}
                        </div>
                        {cert.proof && (
                            <a 
                                href={cert.proof}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
                            >
                                View Credential
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
