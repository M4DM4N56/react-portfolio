import { Link } from "react-router-dom"

import gmailIcon from "../assets/icons/gmail.png"
import githubIcon from "../assets/icons/github.png"
import linkedinIcon from "../assets/icons/linkedin.png"
import resumeIcon from "../assets/icons/resume.png"
import letterboxdIcon from "../assets/icons/letterboxd.png"
import aotyIcon from "../assets/icons/albumoftheyear.png"



function ContactMe(){
    return <>

        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-zinc-800">Contact Me</h1>

            <br/>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-zinc-700">Professional Links</h2>
            
            <div className="ml-4 space-y-2">
                <a href="mailto:mancusoluca404@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={gmailIcon} alt="Gmail" className="w-6 h-6" />
                    Gmail
                </a>
                <a href="https://github.com/M4DM4N56" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Github" className="w-6 h-6" />
                    Github
                </a>
                <a href="https://www.linkedin.com/in/luca-mancuso-a469162a7/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Linkedin" className="w-6 h-6" />
                    Linkedin
                </a>
                <a href="/Luca Mancuso Resume.pdf" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={resumeIcon} alt="Resume" className="w-6 h-6" />
                    Download my Resume
                </a>
            </div>
            
            <hr className="my-10 border-t border-gray-300" />

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-zinc-700">Personal Interests</h2>

            <div className="ml-4 space-y-2">
                <a href="https://www.albumoftheyear.org/user/madman56/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={aotyIcon} alt="aoty" className="w-6 h-6" />
                    Album of the Year
                </a>
                <a href="https://letterboxd.com/MADMAN56/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-sans transition-colors duration-100" target="_blank" rel="noopener noreferrer">
                    <img src={letterboxdIcon} alt="Letterboxd" className="w-6 h-6" />
                    Letterboxd
                </a>
            </div>

        </div>
    </>
}

export default ContactMe