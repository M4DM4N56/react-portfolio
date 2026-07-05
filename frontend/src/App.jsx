import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom"


function App() {

  return <div>

      <div className="min-h-screen min-w-screen bg-bg0 text-fg1 font-sans">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </div>

    </div>

}

export default App
