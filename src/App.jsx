import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"

import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Education from "./sections/Education"

import ProjectDetail from "./pages/ProjectDetail"

function Home({
  language,
  setLanguage,
}) {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* Glow global */}
      <div
        className="
          fixed
          top-[-180px]
          sm:top-[-250px]
          md:top-[-300px]

          left-1/2
          -translate-x-1/2

          w-[320px]
          h-[420px]

          sm:w-[500px]
          sm:h-[650px]

          md:w-[500px]
          md:h-[900px]

          lg:w-[550px]

          rounded-full
          bg-blue-500/20

          blur-[90px]
          sm:blur-[120px]
          md:blur-[160px]

          pointer-events-none
          z-0
        "
      />

      {/* Glow secundario */}
      <div
        className="
          fixed
          top-[120px]
          sm:top-[160px]
          md:top-[200px]

          left-1/2
          -translate-x-1/2

          w-[100px]
          h-[260px]

          sm:w-[200px]
          sm:h-[420px]

          md:w-[250px]
          md:h-[600px]

          lg:md:w-[500px]

          rounded-full
          bg-cyan-500/10

          blur-[70px]
          sm:blur-[100px]
          md:blur-[140px]

          pointer-events-none
          z-0
        "
      />

      {/* contenido */}
      <div className="relative z-10">

        <Navbar
          language={language}
          setLanguage={setLanguage}
        />

        <Hero language={language} />

        <Projects language={language} />

        <Experience language={language} />

        <Education language={language} />

        <Skills language={language} />

        <About language={language} />

      </div>

    </main>
  )
}

function App() {

  const [language, setLanguage] = useState("ES")

  return (
    <HashRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Home
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <ProjectDetail
              language={language}
              setLanguage={setLanguage}
            />
          }
        />

      </Routes>
    </HashRouter>
  )
}

export default App