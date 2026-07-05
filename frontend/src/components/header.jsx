import { Mail, Download } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./socialIcons"
import TerminalLine from "./terminalLine"
import { githubUrl, linkedinUrl, gmailUrl, resumeUrl } from "../data/links"

function Header() {
    return <header className="mb-12">
        <TerminalLine command="whoami" cursor />
        <h1 className="font-mono text-6xl font-bold text-fg1 mb-4">Luca Mancuso</h1>
        <p className="text-lg text-fg2 max-w-2xl mb-6">
            Full-stack developer and Computer Science graduate building end-to-end web apps and data-driven tools.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-mono px-5 py-2.5 rounded-xl bg-accent-hover text-bg0 font-semibold hover:bg-accent transition-colors duration-100">
                View Projects
            </a>
            <a href={resumeUrl} download className="font-mono flex items-center gap-2 px-5 py-2.5 rounded-xl border border-bg2 text-fg1 font-semibold hover:border-accent-hover transition-colors duration-100">
                <Download size={18} />
                Resume
            </a>
            <div className="flex gap-3">
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 flex items-center justify-center rounded-xl border border-bg2 text-fg2 hover:text-accent-hover hover:border-accent-hover transition-colors duration-100">
                    <LinkedinIcon size={20} />
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 flex items-center justify-center rounded-xl border border-bg2 text-fg2 hover:text-accent-hover hover:border-accent-hover transition-colors duration-100">
                    <GithubIcon size={20} />
                </a>
                <a href={gmailUrl} aria-label="Email" className="w-11 h-11 flex items-center justify-center rounded-xl border border-bg2 text-fg2 hover:text-accent-hover hover:border-accent-hover transition-colors duration-100">
                    <Mail size={20} />
                </a>
            </div>
        </div>
    </header>
}

export default Header
