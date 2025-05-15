import React from 'react';
import BentoCard from '../BentoCard/BentoCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Skills.css';

const skills = {
  expertise: [
    { name: 'Cloud Infrastructure', level: 95 },
    { name: 'Machine Learning', level: 85 },
    { name: 'DevOps', level: 90 },
    { name: 'Backend Development', level: 88 },
  ],
  languages: ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'SQL'],
  tools: ['Docker', 'Terraform', 'Git', 'Jenkins', 'TensorFlow', 'React'],
};

const Skills = () => {
  return (
    <BentoCard colSpan="col-span-12 md:col-span-4" className="row-span-2">
      <div className="flex items-center mb-3">
        <FontAwesomeIcon icon="code" className="text-blue-500 dark:text-blue-400 mr-2" />
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">Technical Skills</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Expertise Levels</h3>
          {skills.expertise.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Tools & Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
};

export default Skills;