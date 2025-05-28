import Home from './pages/Home'
import ContactMe from './pages/ContactMe'
import NavBar from './components/navBar'
import { Routes, Route } from "react-router-dom"


function App() {
  
  return <div>

    <NavBar/>
      <div className="min-h-screen min-w-screen pt-16 bg-gradient-to-br from-white to-slate-300 text-gray-800 font-sans">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/contact-me" element = {<ContactMe />} />
        </Routes>
      </div>
      
    </div>
  
}

export default App
