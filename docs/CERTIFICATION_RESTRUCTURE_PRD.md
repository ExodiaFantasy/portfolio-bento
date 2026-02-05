# Certification System Restructure PRD

## Objective
Transform flat 70+ item certification list into 3-tier system optimizing for recruiter trust and AI/Cloud/GenAI role alignment.

---

## Task Checklist

### Phase 1: Data Schema
- [x] 1.1 Create new `certifications.js` with 3-tier structure
- [x] 1.2 Define `featuredCertifications` (4-6 exam-based certs)
- [x] 1.3 Define `professionalTraining` (8-12 grouped items)
- [x] 1.4 Define `learningArchive` (everything else)
- [x] 1.5 Add metadata fields: `type`, `examBased`, `capability`, `components`

### Phase 2: Deduplication
- [x] 2.1 Merge AI Practitioner + Early Adopter → single record
- [x] 2.2 Merge Cloud Practitioner variants → single record
- [x] 2.3 Collapse 30+ AWS Connect courses → single grouped entry
- [x] 2.4 Collapse GenAI training courses → single grouped entry
- [x] 2.5 Move attendance/awards/intro courses to archive

### Phase 3: UI Component Update
- [ ] 3.1 Update `Certifications.jsx` to import new structure
- [ ] 3.2 Render Featured tier as always-visible cards
- [ ] 3.3 Add collapsible Professional Training section
- [ ] 3.4 Replace archive modal with minimal link/hidden section
- [ ] 3.5 Add capability-based grouping (AI/ML, Cloud, Data, Contact Center)

### Phase 4: Cleanup
- [ ] 4.1 Remove unused Credly sync logic for non-featured items
- [ ] 4.2 Update CSS for new layout
- [ ] 4.3 Add governance comment block to data file
- [ ] 4.4 Test and verify render

---

## Featured Certifications (Tier 1)
| Title | Issuer | Year | Type |
|-------|--------|------|------|
| AWS Certified AI Practitioner | AWS | 2025 | certification |
| AWS Certified Cloud Practitioner | AWS | 2024 | certification |

## Professional Training (Tier 2) - Grouped
| Group Title | Component Count | Capability |
|-------------|-----------------|------------|
| AWS Connect Developer Specialist | 30 | contact-center |
| AWS Generative AI Fundamentals | 5 | ai-ml |
| AWS Cloud Essentials Path | 6 | cloud |
| Data Analytics Bootcamp | 2 | data |
| Google Data Analytics | 4 | data |

## Archive (Tier 3) - Hidden
- All individual Connect micro-courses
- Intro courses (Cisco, Xaltius)
- Attendance certs (UX)
- Awards (iCXeed)
- Non-relevant (SkillFloor SEO, Social Media)
- PDF/PNG duplicates

---

## Current Session
**Active Task**: Phase 2  
**Last Completed**: 1.5 - Verified all metadata fields (id, type, examBased, verifiable, capability, components, proofArchive)  
**Next Task**: 2.1 - Merge AI Practitioner + Early Adopter → single record

## Phase 1 Summary
✅ Created 3-tier data structure:
- **Featured**: 2 exam-based certifications (AWS AI Practitioner, AWS Cloud Practitioner)
- **Professional**: 6 grouped training programs (AWS Connect 30 courses, GenAI 5 courses, Cloud Essentials 6 courses, Data Analytics Bootcamp, Google Data Analytics 4 courses, Google AI 2 courses)
- **Archive**: 18 items (intro courses, attendance, awards, duplicates, non-relevant skills)
