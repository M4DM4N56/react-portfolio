import SkillBubble from "../components/skillBubble"
import ProjectBubble from "../components/projectBubble"
import AccomplishmentBubble from "../components/accomplishmentBubble"

function Home () {
    return <div className="max-w-7xl mx-auto px-6 py-12">
        
        <h1 className="text-4xl font-bold text-center mb-8 text-zinc-800 ">I'm Luca Mancuso</h1>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-zinc-700 ">About Me</h2>
            <div className="text-zinc-600 leading-relaxed">
                <p>Hi! I'm Luca Mancuso, a fourth-year Computer Science student at the University of Western Ontario with a passion for software development and creative problem-solving. I'm currently seeking internship opportunities for Fall 2025.</p>
                <p>I enjoy blending my personal interests with my technical skills to build projects I find meaningful. I developed a full-stack movie logging website and am currently working on a music collage-making site inspired by my hobbies of watching movies and listening to a wide variety music.</p>
                <p>My technical skills include experience in full-stack development using technologies like React, Next.js, Tailwind, and various backend tools and APIs. I take pride in writing clean, maintainable code and enjoy designing intuitive, user-friendly interfaces.</p>
                <p>Beyond coding, I’m proactive in my learning and teamwork. I've led group projects, competed in hackathons, and taken initiative to explore tools like Godot, Next.js, and Jupyter Notebook. I take pride in being both a quick learner and flexible in new environments.</p>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-zinc-700">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <SkillBubble skill = {{title: "Programming Languages", text: "Python, Javascript, Typescript, HTML/CSS, Java, C#, C++, C, SQL, R, GDScript"}}/>
                <SkillBubble skill = {{title: "Libraries and Frameworks", text: "React, Next.js, Tailwind, Pygame, PyTMX"}}/>
                <SkillBubble skill = {{title: "Programming Skills", text: "Object Oriented Design, Data Structures, Program Optimization, Full Stack Development, Web Design"}}/>
                <SkillBubble skill = {{title: "Machine Learning and Data Analysis", text: "NumPy, Polars, Pandas, Scikit-Learn, Matplotlib, Seaborn"}}/>
                <SkillBubble skill = {{title: "Technologies", text: "Git, GitHub, Confluence, Jira, Jupyter Notebook"}}/>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-zinc-700 ">My Projects</h2>
            
            <div className = "grid grid-cols-1 gap-6 ">
                <ProjectBubble project = {{title: "Music Grid-Builder Website – Full Stack Project (In Progress!)", text: 
                    ["Built a dynamic full-stack web application that lets users create and share grid-style collages of their favorite music albums in a shareable format",
                    "Designed the front end with JavaScript, React and Next.js, featuring album search via the Last.fm API and drag-and-drop functionality using React DnD",
                    "Implemented Firebase Authentication for secure user login and Firestore to persist and retrieve user-created album grids"]}}>
                </ProjectBubble>
                <ProjectBubble project = {{title: "Movie Logging Website – Full Stack Project", text: 
                    ["Designed and developed a personal movie cataloging website using JavaScript with React, enabling users to ‘like’ movies they have watched, and search for movies and their details via the TMDB API.",
                    "Planned the project’s functions and user interface by creating a wireframe plan in Balsamiq and created a UML diagram to keep the project’s architecture modular and understandable.",
                    "Created a prototype based on the SOLID principles that used a Command Line Interface."]}}>
                </ProjectBubble>
                <ProjectBubble project = {{title: "Portfolio Website – Full Stack Project", text: 
                    ["Created a full-stack portfolio website using JavaScript with React and the Tailwind CSS framework, showcasing personal projects and skills in a responsive layout",
                    "Applied modular components with React to keep the code maintainable and understandable"]}}>
                </ProjectBubble>
                <ProjectBubble project = {{title: "Adventure Game – Pygame Group Project", text: 
                    ["Collectively created a proof-of-concept adventure game in Pygame",
                    "Scheduled and coordinated regular group meetings. As lead coordinator, distributed the workload amongst the team each week and made key decisions regarding creative and technical direction",
                    "Created and maintained the group’s software design document and UML diagram to keep the system’s architecture transparent and readable",
                    "Implemented a system to import the game’s terrain, enemies, and player into the game via CSV files, using the library PyTMX and the software Tiled"]}}>
                </ProjectBubble>
            </div>
        </section>

        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-zinc-700">My Accomplishments</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <AccomplishmentBubble project = {{title: "LoJam x Western Game Development Society Hackathon/GameJam 2025 – Platformer Game", text: 
                    ["Competed as a solo entrant, achieving 10th place out of 34 teams",
                    "Challenged with creating and presenting a game in one week, learned the Godot game engine and its language GDScript to create a game that satisfied the competition’s theme in a creative and meaningful way",
                    "Created the game’s concept, node scripts, physics logic, game art, sound effects, and user interface",
                    "Presented and gave a live demonstration of my work to the entrants and judges"]}}>
            </AccomplishmentBubble>
            <AccomplishmentBubble project = {{title: "AInnovation Partners 2023 Business Case Competition – Artificial Intelligence Based Proposal", text: 
                    ["Collaborated with a team to achieve 2nd place out of 30 groups",
                    "Proposed an AI-based business venture to secure investment from venture capitalists",
                    "Researched the competitive landscape and a viable go to market strategy using AI in telemarketing"]}}>
            </AccomplishmentBubble>
            
            </div>
        </section>



    </div>
}

export default Home