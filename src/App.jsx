import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Education from "./sections/Education"

import ProjectDetail from "./pages/ProjectDetail"

function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* Glow global */}
      <div
        className="
          fixed
          top-[-300px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[900px]
          rounded-full
          bg-blue-500/20
          blur-[160px]
          pointer-events-none
          z-0
        "
      />

      {/* Glow secundario */}
      <div
        className="
          fixed
          top-[200px]
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[600px]
          rounded-full
          bg-cyan-500/10
          blur-[140px]
          pointer-events-none
          z-0
        "
      />

      {/* contenido */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <About />
      </div>

    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App