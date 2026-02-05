"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.certificationArchive = exports.certifications = exports.learningArchive = exports.professionalTraining = exports.featuredCertifications = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * CERTIFICATION GOVERNANCE RULES
 * 
 * Featured Tier (featuredCertifications):
 * - Exam-based certifications ONLY
 * - Must be verifiable on public registry (Credly, vendor site)
 * - Directly relevant to AI/Cloud/GenAI roles
 * - Maximum 6 items
 * - No "Early Adopter" or duplicate variants
 * 
 * Professional Tier (professionalTraining):
 * - Vendor skill badges with assessments
 * - Multi-course learning paths (grouped)
 * - Bootcamps with capstone projects
 * - Maximum 12 items (use grouping for micro-credentials)
 * 
 * Archive Tier (learningArchive):
 * - Attendance certificates
 * - Introductory courses
 * - Awards and recognition
 * - Duplicate proof files (PDFs/PNGs of featured items)
 * - Non-relevant skills for AI/Cloud roles
 * 
 * New additions must include:
 * - id, type, examBased, verifiable, capability fields
 * - Justify tier placement in PR/commit
 */
// ============================================================================
// TIER 1: FEATURED CERTIFICATIONS (Exam-Based, Always Visible)
// ============================================================================
var featuredCertifications = [{
  id: 'aws-ai-practitioner',
  title: 'AWS Certified AI Practitioner',
  issuer: 'AWS',
  type: 'certification',
  examBased: true,
  verifiable: true,
  capability: 'ai-ml',
  year: 2025,
  proof: 'https://www.credly.com/badges/31c32933-5e24-431f-ba63-8e5c9e41c3df/public_url',
  image: null,
  // Will be populated by Credly sync
  proofArchive: ['https://www.credly.com/badges/aa4e9d36-bd04-45dd-bad7-1803e39a6aea/public_url', // Early Adopter variant
  '/Certificates/AWS- AI Practitioner Certificate.pdf', '/Certificates/AWS- AI Practitioner.png']
}, {
  id: 'aws-cloud-practitioner',
  title: 'AWS Certified Cloud Practitioner',
  issuer: 'AWS',
  type: 'certification',
  examBased: true,
  verifiable: true,
  capability: 'cloud',
  year: 2024,
  proof: '/Certificates/AWS- Cloud Practitioner Certificate.pdf',
  image: null,
  proofArchive: ['/Certificates/AWS- Cloud Practitioner.pdf', '/Certificates/AWS- Cloud Practitioner.png']
}]; // ============================================================================
// TIER 2: PROFESSIONAL TRAINING (Grouped, Collapsible)
// ============================================================================

exports.featuredCertifications = featuredCertifications;
var professionalTraining = [{
  id: 'aws-connect-specialist',
  title: 'AWS Connect Developer & Communications Specialist',
  issuer: 'AWS',
  type: 'badge',
  examBased: true,
  verifiable: true,
  capability: 'contact-center',
  year: 2024,
  proof: '/Certificates/AWS- Connect Developer Assessment.pdf',
  componentCount: 30,
  components: [{
    title: 'Connect APIs Intermediate',
    proof: '/Certificates/AWS- Connect APIs Intermediate.pdf'
  }, {
    title: 'Connect Agent Applications Fundamentals',
    proof: '/Certificates/AWS- Connect Agent Applications Fundamentals.pdf'
  }, {
    title: 'Connect Chat and Messaging Fundamentals',
    proof: '/Certificates/AWS- Connect Chat and Messaging Fundamentals.pdf'
  }, {
    title: 'Connect Chat and Messaging Intermediate',
    proof: '/Certificates/AWS- Connect Chat and Messaging Intermediate.pdf'
  }, {
    title: 'Connect Communications Specialist Assessment',
    proof: '/Certificates/AWS- Connect Communications Specialist Assessment.pdf'
  }, {
    title: 'Connect Console Fundamentals',
    proof: '/Certificates/AWS- Connect Console Fundamentals.pdf'
  }, {
    title: 'Connect Contact Lens Fundamentals',
    proof: '/Certificates/AWS- Connect Contact Lens Fundamentals.pdf'
  }, {
    title: 'Connect Conversational Interfaces Fundamentals',
    proof: '/Certificates/AWS- Connect Conversational Interfaces Fundamentals.pdf'
  }, {
    title: 'Connect Conversational Interfaces Intermediate',
    proof: '/Certificates/AWS- Connect Conversational Interfaces Intermediate.pdf'
  }, {
    title: 'Connect Custom Contact Control Panel Fundamentals',
    proof: '/Certificates/AWS- Connect Custom Contact Control Panel Fundamentals.pdf'
  }, {
    title: 'Connect Custom Contact Control Panel Intermediate',
    proof: '/Certificates/AWS- Connect Custom Contact Control Panel Intermediate.pdf'
  }, {
    title: 'Connect Customer Profiles Fundamentals',
    proof: '/Certificates/AWS- Connect Customer Profiles Fundamentals.pdf'
  }, {
    title: 'Connect Data Streaming Intermediate',
    proof: '/Certificates/AWS- Connect Data Streaming Intermediate.pdf'
  }, {
    title: 'Connect Flows Fundamentals',
    proof: '/Certificates/AWS- Connect Flows Fundamentals.pdf'
  }, {
    title: 'Connect Flows Intermediate',
    proof: '/Certificates/AWS- Connect Flows Intermediate.pdf'
  }, {
    title: 'Connect Flows Lambda Integration Fundamentals',
    proof: '/Certificates/AWS- Connect Flows Lambda Integration Fundamentals.pdf'
  }, {
    title: 'Connect Flows Lambda Integration Intermediate',
    proof: '/Certificates/AWS- Connect Flows Lambda Integration Intermediate.pdf'
  }, {
    title: 'Connect Instance Fundamentals',
    proof: '/Certificates/AWS- Connect Instance Fundamentals.pdf'
  }, {
    title: 'Connect Integrations Intermediate',
    proof: '/Certificates/AWS- Connect Integrations Intermediate.pdf'
  }, {
    title: 'Connect Introduction',
    proof: '/Certificates/AWS- Connect Introduction.pdf'
  }, {
    title: 'Connect Optimizing Routing Solutions',
    proof: '/Certificates/AWS- Connect Optimizing Routing Solutions.pdf'
  }, {
    title: 'Connect Routing Fundamentals',
    proof: '/Certificates/AWS- Connect Routing Fundamentals.pdf'
  }, {
    title: 'Connect Routing Intermediate',
    proof: '/Certificates/AWS- Connect Routing Intermediate.pdf'
  }, {
    title: 'Connect Voice Intermediate',
    proof: '/Certificates/AWS- Connect Voice Intermediate.pdf'
  }, {
    title: 'Connect and EventBridge Intermediate',
    proof: '/Certificates/AWS- Connect and EventBridge Intermediate.pdf'
  }],
  proofArchive: ['/Certificates/AWS- Connect Developer.png', '/Certificates/AWS- Connect Communications Specialist.png']
}, {
  id: 'aws-genai-fundamentals',
  title: 'AWS Generative AI Fundamentals',
  issuer: 'AWS',
  type: 'training',
  examBased: false,
  verifiable: false,
  capability: 'ai-ml',
  year: 2026,
  proof: '/Certificates/AWS - Foundations of Prompt Engineering.pdf',
  componentCount: 5,
  components: [{
    title: 'Foundations of Prompt Engineering',
    proof: '/Certificates/AWS - Foundations of Prompt Engineering.pdf'
  }, {
    title: 'Generative AI Professional Domain 1',
    proof: '/Certificates/AWS -  Gen AI Professional Domain 1.pdf'
  }, {
    title: 'Official Pretest: Certified Generative AI Professional',
    proof: '/Certificates/AWS - Official Pretest AWS Certified Generative AI Professional.pdf'
  }, {
    title: 'Automate Handout Creation with BDA and Step Functions',
    proof: '/Certificates/AWS- Automate Handout Creation with BDA and Step Functions.pdf'
  }, {
    title: 'Building Secure and Responsible GenAI with GuardRails for Amazon Bedrock',
    proof: '/Certificates/AWS- Building Secure and Responsible Gen AI with GuardRails for Amazon Bedrock pdf.pdf'
  }]
}, {
  id: 'aws-cloud-essentials',
  title: 'AWS Cloud Essentials Path',
  issuer: 'AWS',
  type: 'training',
  examBased: false,
  verifiable: false,
  capability: 'cloud',
  year: 2024,
  proof: '/Certificates/AWS- AWS Cloud Practitioner Essentials.pdf',
  componentCount: 6,
  components: [{
    title: 'AWS Cloud Practitioner Essentials',
    proof: '/Certificates/AWS- AWS Cloud Practitioner Essentials.pdf'
  }, {
    title: 'Cloud Essentials Knowledge Badge Assessment',
    proof: '/Certificates/AWS- Cloud Essentials Knowledge Badge Assessment.pdf'
  }, {
    title: 'Foundations Getting Started with AWS Cloud Essentials',
    proof: '/Certificates/AWS- Foundations Getting Started with AWS Cloud Essentials.pdf'
  }, {
    title: 'Getting Started with Cloud Acquisition',
    proof: '/Certificates/AWS- Getting Started with Cloud Acquisition.pdf'
  }, {
    title: 'Infrastructure as Code Fundamentals',
    proof: '/Certificates/AWS- Infrastracture as Code Fundamentals.pdf'
  }, {
    title: 'Job Roles in the Cloud',
    proof: '/Certificates/AWS- Job Roles in the Cloud.pdf'
  }],
  proofArchive: ['/Certificates/AWS- Cloud Essentials-Knowledge Badge Readiness Path.pdf', '/Certificates/AWS- Cloud Essentials.png']
}, {
  id: 'data-analytics-bootcamp',
  title: 'Data Analytics Bootcamp',
  issuer: 'Alex the Analyst',
  type: 'bootcamp',
  examBased: false,
  verifiable: true,
  capability: 'data',
  year: 2024,
  proof: '/Certificates/Alex the Analyst- Data Analytics Bootcamp.pdf',
  componentCount: 2,
  components: [{
    title: 'Data Analytics Bootcamp',
    proof: '/Certificates/Alex the Analyst- Data Analytics Bootcamp.pdf'
  }, {
    title: 'Analytics Bootcamp Certification',
    proof: '/Certificates/Verified Analytics Bootcamp Certification.png'
  }]
}, {
  id: 'google-data-analytics',
  title: 'Google Data Analytics Professional Certificate',
  issuer: 'Google',
  type: 'training',
  examBased: false,
  verifiable: false,
  capability: 'data',
  year: 2026,
  proof: '/Certificates/Google- Data Analytics Capstone.pdf',
  componentCount: 4,
  components: [{
    title: 'Data, Data, Everywhere',
    proof: '/Certificates/Google- Data, Data, Everywhere.pdf'
  }, {
    title: 'Data Analytics Capstone',
    proof: '/Certificates/Google- Data Analytics Capstone.pdf'
  }, {
    title: 'The Nuts and Bolts of Machine Learning',
    proof: '/Certificates/Google- The nuts and bolts of Machine Learaning.pdf'
  }, {
    title: 'Simple Linear Regression for the Absolute Beginner',
    proof: '/Certificates/Cousera - Simple Linear Regression for the Absolute.pdf'
  }]
}, {
  id: 'google-ai-fundamentals',
  title: 'Google AI Fundamentals',
  issuer: 'Google',
  type: 'training',
  examBased: false,
  verifiable: false,
  capability: 'ai-ml',
  year: 2026,
  proof: '/Certificates/Google - Introduction to AI.pdf',
  componentCount: 2,
  components: [{
    title: 'Introduction to AI',
    proof: '/Certificates/Google - Introduction to AI.pdf'
  }, {
    title: 'Accelerate Your Job Search with AI',
    proof: '/Certificates/Google- Accelerate Your Job Search with AI.pdf'
  }]
}]; // ============================================================================
// TIER 3: LEARNING ARCHIVE (Hidden by Default)
// ============================================================================

exports.professionalTraining = professionalTraining;
var learningArchive = [// Introductory courses (not role-critical)
{
  title: "Introduction to Data Science",
  issuer: "Cisco",
  type: "intro-course",
  year: 2024,
  proof: "/Certificates/CISCO- Introduction to Data Science.pdf"
}, {
  title: "Computer Hardware Basics",
  issuer: "Cisco",
  type: "intro-course",
  year: 2024,
  proof: "/Certificates/CISCO- Computer Hardware Basics.pdf"
}, {
  title: "Introduction to Cyber Security",
  issuer: "Xaltius",
  type: "intro-course",
  year: 2024,
  proof: "/Certificates/Xaltius- Introduction to Cyber Security.pdf"
}, {
  title: "Cyber Security Bootcamp",
  issuer: "SkillLogic",
  type: "bootcamp",
  year: 2024,
  proof: "/Certificates/SkillLogic- Cyber Security bootcamp.pdf"
}, // Non-relevant skills for AI/Cloud roles
{
  title: "Basics of SEO",
  issuer: "SkillFloor",
  type: "workshop",
  year: 2024,
  proof: "/Certificates/SkillFloor- Basics of SEO.pdf"
}, {
  title: "Leveraging Social Media for Brand Growth",
  issuer: "SkillFloor",
  type: "workshop",
  year: 2024,
  proof: "/Certificates/SkillFloor- Leveraging Social Media for Brand Growth.pdf"
}, {
  title: "UX Certificate of Attendance",
  issuer: "UI/UX",
  type: "attendance",
  year: 2024,
  proof: "/Certificates/UX - Certificate of Attendance.pdf"
}, // Awards and recognition
{
  title: "Dare to Dream Award",
  issuer: "iCXeed",
  type: "award",
  year: 2026,
  proof: "/Certificates/iCXeed- Dare to Dream Award.png"
}, {
  title: "Certificate of Completion",
  issuer: "iCXeed",
  type: "attendance",
  year: 2024,
  proof: "/Certificates/iCXeed- Certificate of Completion.pdf"
}, {
  title: "Certificate of Recognition",
  issuer: "iCXeed",
  type: "attendance",
  year: 2024,
  proof: "/Certificates/iCXeed- Certificate of Recognition.pdf"
}, // AWS training micro-credentials (already grouped in Professional tier)
{
  title: "AWS Billing and Cost Management",
  issuer: "AWS",
  type: "micro-course",
  proof: "/Certificates/AWS- AWS Billing and Cost Management.pdf"
}, {
  title: "Amazon Lex Getting Started",
  issuer: "AWS",
  type: "micro-course",
  proof: "/Certificates/AWS- Amazon Lex Getting Started.pdf"
}, // Duplicate proof files (PDF/PNG variants of featured/professional items)
{
  title: "AI Practitioner Certificate (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- AI Practitioner Certificate.pdf",
  canonicalId: "aws-ai-practitioner"
}, {
  title: "AI Practitioner Early Adopter (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- AI Practitioner Early Adopter.png",
  canonicalId: "aws-ai-practitioner"
}, {
  title: "AI Practitioner (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- AI Practitioner.png",
  canonicalId: "aws-ai-practitioner"
}, {
  title: "Cloud Practitioner (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- Cloud Practitioner.pdf",
  canonicalId: "aws-cloud-practitioner"
}, {
  title: "Cloud Practitioner (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- Cloud Practitioner.png",
  canonicalId: "aws-cloud-practitioner"
}, {
  title: "Connect Developer (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- Connect Developer.png",
  canonicalId: "aws-connect-specialist"
}, {
  title: "Connect Communications Specialist (duplicate)",
  issuer: "AWS",
  type: "duplicate",
  proof: "/Certificates/AWS- Connect Communications Specialist.png",
  canonicalId: "aws-connect-specialist"
}]; // ============================================================================
// LEGACY EXPORTS (DEPRECATED - Remove after UI migration complete)
// These are kept temporarily for backward compatibility with Certifications.jsx
// Once Phase 3 (UI update) is complete, delete these exports entirely
// ============================================================================

/** @deprecated Use featuredCertifications, professionalTraining, learningArchive instead */

exports.learningArchive = learningArchive;
var certifications = [].concat(_toConsumableArray(featuredCertifications.map(function (c) {
  return {
    title: c.title,
    issuer: c.issuer,
    year: c.year,
    proof: c.proof
  };
})), _toConsumableArray(professionalTraining.map(function (c) {
  return {
    title: c.title,
    issuer: c.issuer,
    year: c.year,
    proof: c.proof
  };
})));
/** @deprecated Merged into learningArchive */

exports.certifications = certifications;
var certificationArchive = learningArchive;
exports.certificationArchive = certificationArchive;