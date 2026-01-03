# Bento UI Portfolio - Quick Edit Guide

This portfolio is built with React and Tailwind CSS. To make changes to your portfolio, refer to the following key files and sections:

## 📂 Quick Edit Guide (Direct Content)

For 90% of your updates, you only need to edit the files in the `src/data/` directory.

- **Projects / Engagements:** 
  - File: `src/data/projects.js`
  - *Note: Set `link: null` for projects that don't have a public website.*
- **Technical Skills:** 
  - File: `src/data/skills.js`
- **Digital Footprint (Social Links):**
  - File: `src/components/OnlinePresenceBox/OnlinePresenceBox.jsx`
- **Certifications (Hybrid System):** 
  - File: `src/data/certifications.js`
  - *Internal Logic: The portfolio automatically syncs with your **Credly profile** (user: `elishasanmiguel`). If a certificate is on Credly, it will automatically pull the image and verification link. Use this file for **manual/non-Credly** certificates; they will be merged with the dynamic ones.*
- **Education:** 
  - File: `src/data/education.js`

## 🛠️ Component & UI Logic

If you want to change the **Layout** or **Static Text**:

- **Hero Section (Name, Title, iCXeed Link, Resume Link):**
  - Path: `src/components/Hero/Hero.jsx`
- **Executive Summary & Dashboard Headers:**
  - Path: `src/App.jsx`
- **Work Process / SOP:**
  - Path: `src/components/WorkProcessBox/WorkProcessBox.jsx`
- **Global Theme & Variables (Colors, Spacing):**
  - Path: `src/styles/variables.css`
  - Path: `tailwind.config.js`

## 🌐 Site Metadata (Title & Favicon)

- **Page Title:**
  - Edit the `<title>` tag in `public/index.html`. 
  - *Current: "Elisha San Miguel | AI & Cloud Architect"*
- **Favicon:**
  - Replace the `favicon.ico` file in the `public/` folder with your own icon.
  - If you use a `.png` or `.svg`, update the `<link rel="icon">` tag in `public/index.html`.


## 🔄 Automatic Dual-Remote Sync (GitHub & GitLab)

I have configured the `origin` remote to push to **both** GitLab and GitHub simultaneously. This ensures your portfolio is always in sync across both platforms with a single command.

- **Standard Git Command:**
  - `git push origin main` (This now pushes to both GitLab and GitHub).
- **One-Click Command:**
  - `npm run sync`
  - *Internal Logic: This command runs `git add .`, commits with a generic message, and pushes to both remotes.*

## How to Add Projects
- Edit `src/data/projects.js` and add objects to the exported array. Each project should have a `title`, `description`, `technologies`, and optionally a `link`.

## How to Change Employment Status
- In `src/components/Hero/Hero.jsx`, look for the employment status indicator. Change the color and text as needed:
  - **Green**: Looking for Employment
  - **Red**: Currently Employed

## How to Run/Build
- Use `npm start` to run locally.
- Use `npm run build` to build for production.
- Use `npm run sync` to commit and push changes to both GitLab and GitHub.

## More
- For new sections, add a new component in `src/components/` and import it in `src/App.jsx`.
- For icons, see `src/components/FontAwesomeIcons/FontAwesomeIcons.js`.

---

For further help, see the main README or ask your developer!

# Original README

# Bento UI Portfolio

This is a React-based portfolio application showcasing projects, skills, education, and certifications in a Bento UI style.

## Features

- **Responsive Design**: The portfolio is designed to be fully responsive, adapting to various screen sizes.
- **Theme Toggle**: Users can switch between light and dark themes.
- **Dynamic Content**: The portfolio content is managed through separate data files for easy updates.

## Project Structure

```
bento-ui-portfolio
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── BentoCard
│   │   │   ├── BentoCard.jsx
│   │   │   └── BentoCard.css
│   │   ├── BentoGrid
│   │   │   ├── BentoGrid.jsx
│   │   │   └── BentoGrid.css
│   │   ├── Education
│   │   │   └── Education.jsx
│   │   ├── Hero
│   │   │   └── Hero.jsx
│   │   ├── Projects
│   │   │   └── Projects.jsx
│   │   ├── Skills
│   │   │   └── Skills.jsx
│   │   └── ThemeToggle
│   │       └── ThemeToggle.jsx
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── data
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks
│   │   └── useTheme.js
│   ├── styles
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   └── index.css
├── .env
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bento-ui-portfolio.git
   cd bento-ui-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Technologies Used

- React
- Tailwind CSS
- JavaScript
- HTML
- CSS

## License

This project is licensed under the MIT License. See the LICENSE file for details.