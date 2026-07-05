import Bubble from "../components/bubble"
import Header from "../components/header"
import TerminalLine from "../components/terminalLine"
import { aboutMe } from "../data/aboutMe"
import { skills } from "../data/skills"
import { projects } from "../data/projects"
import { accomplishments } from "../data/accomplishments"

function Home () {
    return <div className="max-w-7xl mx-auto px-6 py-12">

        <Header />

        <hr className="my-10 border-t border-bg2" />

        <section className="mb-8">
            <TerminalLine command="man luca" />
            <h2 className="text-3xl font-semibold mb-2 text-fg1">About Me</h2>
            <div className="md:w-4/5 text-fg2 leading-relaxed">
                {aboutMe.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>

        <hr className="my-10 border-t border-bg2" />

        <section className="mb-8">
            <TerminalLine command="pacman -Qe" />
            <h2 className="text-3xl font-semibold mb-2 text-fg1">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <Bubble key={skill.title} title={skill.title} items={skill.items} />
                ))}
            </div>
        </section>

        <hr className="my-10 border-t border-bg2" />

        <section className="mb-8">
            <TerminalLine cwd="~/projects" command="ls -la" />
            <h2 className="text-3xl font-semibold mb-2 text-fg1">My Projects</h2>
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project) => (
                    <Bubble key={project.title} title={project.title} tagline={project.tagline} text={project.text} tags={project.tags} links={project.links} />
                ))}
            </div>
        </section>

        <hr className="my-10 border-t border-bg2" />

        <section className="mb-8">
            <TerminalLine command="history | grep shipped" />
            <h2 className="text-3xl font-semibold mb-2 text-fg1">My Accomplishments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accomplishments.map((accomplishment) => (
                    <Bubble key={accomplishment.title} title={accomplishment.title} text={accomplishment.text} />
                ))}
            </div>
        </section>

        <hr className="my-10 border-t border-bg2" />

        <TerminalLine cursor />

    </div>
}

export default Home
