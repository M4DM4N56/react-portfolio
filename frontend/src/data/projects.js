export const projects = [
    {
        title: "Muzicboxd",
        tagline: "Full-Stack Web App",
        text: [
            "Architected and directed full-stack development end to end — system design, data modeling, API integration — using AI pair-programming (Claude) to accelerate implementation",
            "Built the data layer around the iTunes Search API as the canonical album source after evaluating and rejecting MusicBrainz for reliability issues",
            "Shipped a production stack: React/TypeScript frontend on Netlify, Node.js/Express backend on Render, PostgreSQL via Neon with Prisma ORM, Google OAuth via Passport.js",
            "Diagnosed and resolved a cross-domain authentication issue between the split frontend/backend deployments"
        ],
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Netlify", "Render"],
        links: {
            github: "https://github.com/M4DM4N56/music-journal",
            live: "https://muzicboxd.netlify.app"
        }
    },
    {
        title: "SpellItOut!",
        tagline: "Godot Game",
        text: [
            "Designed and built every system from scratch: word validation, scoring/combo logic, a passive-upgrade economy, and a rarity-weighted shop loop",
            "Shipped five iterative public beta builds, each with a structured changelog and playtester-driven balance passes",
            "Managed release engineering for a solo project — versioned builds, changelogs, and binary distribution via GitHub Releases"
        ],
        tags: ["Godot", "GDScript", "Game Design"],
        links: {
            github: "https://github.com/M4DM4N56/spellItOut",
            releases: "https://github.com/M4DM4N56/spellItOut/releases"
        }
    },
    {
        title: "Gridz",
        tagline: "Full-Stack Web App",
        text: [
            "Designed and built a full-stack drag-and-drop grid builder for creating, naming, and saving custom album collages (\"topsters\"), distinct from Muzicboxd in both interaction model and data shape",
            "Implemented drag-and-drop grid placement using React DnD, with album search and metadata via the Last.fm API",
            "Used Firebase Authentication for secure login and Firestore to persist and retrieve each user's saved topsters under their account"
        ],
        tags: ["React", "Next.js", "Firebase", "React DnD"],
        links: {
            github: "https://github.com/M4DM4N56/gridz",
            live: "https://albumgridz.netlify.app"
        }
    },
    {
        title: "Savings & Expenditure Analysis",
        tagline: "Data Engineering & ML",
        text: [
            "Cleaned and merged large-scale demographic and spending datasets, resolving schema drift across sources",
            "Segmented households into five spending profiles with K-Means, validated via elbow/silhouette analysis and refined with PCA/UMAP",
            "Built Elastic Net and XGBoost regression models to forecast insurance and pension allocation, reaching R² = 0.84",
            "Surfaced the strongest drivers of savings behavior — income, age, financial planning activity — for policy-relevant insight"
        ],
        tags: ["Python", "Pandas", "XGBoost", "PCA", "NumPy"],
        links: {}
    },
    {
        title: "React Portfolio Site",
        tagline: "Frontend Project",
        text: [
            "This website! Refactored for maintainability — deduplicated components, extracted content into data files — ahead of a full visual redesign",
            "Built with React, Tailwind CSS, and Vite, showcasing my projects, skills, and background in a responsive layout"
        ],
        tags: ["React", "Tailwind CSS", "Vite"],
        links: {
            github: "https://github.com/M4DM4N56/react-portfolio"
        }
    }
]
