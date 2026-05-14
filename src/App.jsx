import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Education from "./sections/Education"

function App() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default App