# Bento UI Portfolio - Quick Edit Guide

This portfolio is built with React and Tailwind CSS. To make changes to your portfolio, refer to the following key files and sections:

## Where to Edit

- **Hero Section (Name, Title, Status, Description):**
  - `src/components/Hero/Hero.jsx`
- **About Me Section:**
  - `src/App.jsx` (look for the About Me BentoCard)
- **Stats, Skills, Certifications, Education:**
  - `src/components/StatsBox/StatsBox.jsx`
  - `src/components/Skills/Skills.jsx`
  - `src/components/Certifications/Certifications.jsx`
  - `src/components/Education/Education.jsx`
- **Featured Projects:**
  - `src/data/projects.js` (add or remove projects)
  - `src/components/Projects/Projects.jsx` (UI logic)
- **Work Process:**
  - `src/components/WorkProcessBox/WorkProcessBox.jsx`
- **Online Presence:**
  - `src/components/OnlinePresenceBox/OnlinePresenceBox.jsx`
- **Theme/Colors/Global Styles:**
  - `src/styles/global.css`
  - `tailwind.config.js`

## How to Add Projects
- Edit `src/data/projects.js` and add objects to the exported array. Each project should have a `title`, `description`, `technologies`, and optionally a `link`.

## How to Change Employment Status
- In `src/components/Hero/Hero.jsx`, look for the employment status indicator. Change the color and text as needed:
  - **Green**: Looking for Employment
  - **Red**: Currently Employed

## How to Run/Build
- Use `npm start` to run locally.
- Use `npm run build` to build for production.

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