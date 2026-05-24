import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import LanguageSwitcher from "./LanguageSwitcher"

function Navbar({
  language,
  setLanguage,
}) {

  const [showNavbar, setShowNavbar] = useState(false)
  const [openLang, setOpenLang] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      setShowNavbar(
        window.scrollY > window.innerHeight * 0.4
      )
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const navItems = [
    {
      id: "Projects",
      label: language === "EN"
        ? "Projects"
        : "Proyectos",
    },

    {
      id: "experience",
      label: language === "EN"
        ? "Experience"
        : "Experiencia",
    },

    {
      id: "Education",
      label: language === "EN"
        ? "Education"
        : "Educación",
    },

    {
      id: "Tecnologias",
      label: language === "EN"
        ? "Skills"
        : "Tecnologías",
    },

    {
      id: "Sobre mi",
      label: language === "EN"
        ? "About"
        : "Sobre mi",
    },
  ]

  const scrollToSection = (id) => {

    const section = document.getElementById(id)

    if (!section) return

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-black/30
        border-b
        border-white/10
        transition-all
        duration-500
        ${
          showNavbar
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >

      <nav
        className="
          max-w-7xl
          mx-auto
          px-5
          md:px-8
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
          className="
            text-xl
            font-bold
            tracking-[0.2em]
            text-white
          "
        >
          RM
        </motion.button>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* NAV LINKS */}
          <ul
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-sm
              text-zinc-300
            "
          >

            {navItems.map((item, index) => (

              <li key={index}>

                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    hover:text-white
                    transition
                    duration-300
                  "
                >
                  {item.label}
                </button>

              </li>

            ))}

          </ul>

          {/* LANGUAGE */}
          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
            openLang={openLang}
            setOpenLang={setOpenLang}
          />

        </div>

      </nav>

    </header>
  )
}

export default Navbar