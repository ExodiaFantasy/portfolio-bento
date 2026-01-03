export const projects = [
    {
        id: 1,
        title: "Rayvengers: A Real-Time Gamified Learning Ecosystem",
        description: "Developed a high-performance, real-time educational platform designed to transform classroom engagement through competitive gamification. Rayvengers orchestrates synchronous, multi-user game sessions by bridging a custom-built Socket.io signaling server with Next.js 15. The platform provides teachers with a 'Command Center' for granular lobby orchestration and live leaderboard tracking, while students experience seamless, low-latency interaction during high-stakes learning chapters. Key technical challenges solved include JWT-secured socket authentication, transient connection recovery (grace periods), and centralized real-time state synchronization across complex game lobbies",
        technologies: ["TypeScript", "Socket.io", "Next.js", "Tailwind CSS", "JWT", "Express", "Prisma ORM"],
        link: null,
        media: [
            { type: "image", url: "/projects/Rayvengers/SpedUp.gif", caption: "Gameplay Preview" },
            { type: "image", url: "/projects/Rayvengers/Teacher Lobby.png", caption: "Teacher Control Dashboard" },
            { type: "image", url: "/projects/Rayvengers/Student Lobby.png", caption: "Student Participation Interface" }
        ]
    },
    {
        id: 2,
        title: "PromptForge: AI Instruction Management System",
        description: "PromptForge is a professional-grade environment designed to bridge the gap between creative prompt engineering and production AI deployments. Unlike simple text editors, it implements a full Prompt Lifecycle Management (PLM) workflow—featuring multi-environment versioning (Dev/Staging/Prod), automated AI-powered structural validation, and semantic diff visualization. Built to ensure reliability in LLM-powered applications, it empowers teams to collaborate on complex AI instructions with the same rigor as traditional source code.",
        technologies: ["React18", "PostgreSQL", "DrizzleORM", "Tailwind CSS", "GitHub OAuth", "OpenAI API"],
        link: "https://promptforge-wsyh.onrender.com/",
        media: [
            { type: "image", url: "/projects/PromptForge/Overview.gif", caption: "Platform Overview" },
            { type: "image", url: "/projects/PromptForge/LifeRetention.png", caption: "Analytics Dashboard" },
            { type: "image", url: "/projects/PromptForge/Settings.png", caption: "Configuration Management" },
            { type: "image", url: "/projects/PromptForge/OAuth.png", caption: "Secure Authentication" }
        ]
    },
    {
        id: 3,
        title: "Enterprise AI Workflow Strategy",
        description: "Directed AI strategy and delivered AWS-powered bots that drove workflow automation, resulting in a 70% gain in employee growth, 30-50% cost reductions, and a 40% improvement in process efficiency.",
        technologies: ["AWS", "Amazon Bedrock", "Python", "AI Strategy", "TypeScript", "Next.js", "Tailwind CSS", "JWT", "Express", "Prisma ORM"],
        link: null,
    },
    {
        id: 4,
        title: "Pagsibol 2024 Event Platform",
        description: "Spearheaded the development of the 'Pagsibol 2024' event website during internship at Manila Bulletin Publishing Corporation.",
        technologies: ["Web Development", "UI/UX Design", "Figma"],
        link: "https://pagsibol2024.netlify.app",
    },
    {
        id: 5,
        title: "Amazon Connect Contact Center",
        description: "Built and deployed cloud-based contact center solutions, significantly improving customer satisfaction and lowering average handling times.",
        technologies: ["Amazon Connect", "AWS Lambda", "Cloud Development"],
        link: null,
    }
];