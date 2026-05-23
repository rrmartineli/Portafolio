import { useEffect, useState } from "react"

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // altura después del hero
      setShowNavbar(window.scrollY > window.innerHeight * 0.4)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-black/30 border-b border-white/10
        transition-all duration-500
        ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          RM
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <li>
            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-white transition">
              Experiencia
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar