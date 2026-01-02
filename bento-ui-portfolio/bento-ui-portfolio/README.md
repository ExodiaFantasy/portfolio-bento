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