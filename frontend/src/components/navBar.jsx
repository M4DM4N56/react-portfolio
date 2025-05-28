import { Link } from "react-router-dom"


function NavBar() {
    return <nav className="fixed top-0 left-0 w-full bg-zinc-800">
        <div className="max-w-5xl mx-auto flex justify-around h-16 items-center">
            <Link to="/contact-me" className="px-8 py-4 transition hover:text-white text-gray-400">Contact Me</Link>
            <Link to="/" className="px-8 py-4 transition hover:text-white text-gray-400">Resume</Link>
        </div>

        </nav>
}


export default NavBar