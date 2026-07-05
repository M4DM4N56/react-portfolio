import { Link } from "react-router-dom"

function NotFound() {
    return <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-fg1">404 - Page Not Found</h1>
        <p className="text-fg2 mb-6">The page you're looking for doesn't exist.</p>
        <Link to="/" className="font-mono text-accent hover:text-accent-hover underline">Back home</Link>
    </div>
}

export default NotFound
