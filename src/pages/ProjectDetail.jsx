import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Link, useParams } from "react-router-dom"



import { BiLogoVisualStudio } from "react-icons/bi"

import {
  FiArrowLeft,
  FiExternalLink
} from "react-icons/fi"


import {
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaGithub,
  FaJs
} from "react-icons/fa"

import {
  SiLaravel,
  SiFirebase,
  SiTailwindcss,
  SiDart,
  SiPostgresql,
  SiAndroidstudio,
  SiN8N,
  SiFlutter,
  SiSupabase,
  SiOwasp,
  SiFastapi,
  SiYolo
} from "react-icons/si"

import { projects } from "../data/projects"

function ProjectDetail() {

  const { slug } = useParams()

  const project = projects.find(
    (p) => p.slug?.trim() === slug?.trim()
  )

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          {t.notFound}
        </h1>
      </main>
    )
  }

  const techIcons = {
  PHP: {
    icon: FaPhp,
    color: "text-indigo-400",
  },

  Laravel: {
    icon: SiLaravel,
    color: "text-red-500",
  },

  HTML5: {
    icon: FaHtml5,
    color: "text-orange-500",
  },

  Flutter: {
  icon: SiFlutter,
  color: "text-sky-400",
  },

  Supabase: {
  icon: SiSupabase,
  color: "text-green-400",
  },

  Yolo: {
  icon: SiYolo,
  color: "text-blue-400",
  },

  FastAPI: {
  icon: SiFastapi,
  color: "text-emerald-400",
  },
 
  JavaScript: {
  icon: FaJs,
  color: "text-yellow-300",
  },

  React: {
    icon: FaReact,
    color: "text-cyan-400",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "text-blue-300",
  },

  Docker: {
    icon: FaDocker,
    color: "text-blue-400",
  },

  OWASP: {
  icon: SiOwasp,
  color: "text-white",
  },

  Supabase: {
    icon: SiSupabase,
    color: "text-green-400",
  },

  Firebase: {
    icon: SiFirebase,
    color: "text-yellow-400",
  },

  CSS3: {
    icon: FaCss3Alt,
    color: "text-blue-500",
  },

  TailwindCSS: {
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },

  n8n: {
    icon: SiN8N,
    color: "text-pink-400",
  },

  Dart: {
    icon: SiDart,
    color: "text-sky-400",
  },

  Python: {
    icon: FaPython,
    color: "text-yellow-300",
  },

  GitHub: {
    icon: FaGithub,
    color: "text-white",
  },

  "Android Studio": {
    icon: SiAndroidstudio,
    color: "text-green-400",
  },

  "Visual Studio Code": {
    icon: BiLogoVisualStudio,
    color: "text-cyan-400",
  },
}
    
    const [openLang, setOpenLang] = useState(false)

    const [language, setLanguage] = useState("ES")

    const translations = {
    ES: {
        back: "Página Principal",
        notFound: "Proyecto no encontrado",
        defaultType: "Aplicación Web",
    },

    EN: {
        back: "Home Page",
        notFound: "Project not found",
        defaultType: "Web Application",
    },
    }

    const t = useMemo(() => {
    return translations[language]
    }, [language])

    const translatedDescription =
    language === "EN"
        ? project.descriptionEn || project.description
        : project.description

    const translatedContent =
    language === "EN"
        ? project.contentEn || project.content
        : project.content  

    const translatedTitle =
    language === "EN"
        ? project.titleEn || project.title
        : project.title

    const translatedType =
    language === "EN"
        ? project.typeEn || project.type
        : project.type

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Glow global */}
      <div
        className="
          fixed
          top-[-600px]
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
          top-[20px]
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

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6">

        {/* NAVBAR */}
        <div className="flex items-center justify-between mb-8">

          {/* LEFT */}
          <div
            className="
              relative
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-2xl
              shadow-2xl
              backdrop-blur-sm
            "
          >
            👨🏽‍💻
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* LANGUAGE */}
            <div className="relative">

            <motion.button
                whileHover={{
                y: -2,
                }}
                whileTap={{
                scale: 0.97,
                }}
                onClick={() => setOpenLang(!openLang)}
                className="
                group
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-zinc-300
                hover:text-white
                hover:border-cyan-500/20
                transition-all
                duration-300
                "
            >

                <img
                src={
                    language === "ES"
                    ? "https://flagcdn.com/w40/es.png"
                    : "https://flagcdn.com/w40/gb.png"
                }
                alt={language}
                className="
                    w-5
                    h-5
                    rounded-sm
                    object-cover
                "
                />

                <span className="hidden sm:block text-sm">
                {language}
                </span>

                <motion.span
                animate={{
                    rotate: openLang ? 180 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className="text-xs"
                >
                ▼
                </motion.span>

            </motion.button>

            {/* DROPDOWN */}
            <motion.div
                initial={false}
                animate={{
                opacity: openLang ? 1 : 0,
                y: openLang ? 0 : -10,
                scale: openLang ? 1 : 0.96,
                pointerEvents: openLang ? "auto" : "none",
                }}
                transition={{
                duration: 0.2,
                }}
                className="
                absolute
                top-full
                right-0
                mt-2
                w-full
                min-w-[120px]
                rounded-xl
                border
                border-white/10
                bg-zinc-900/90
                backdrop-blur-xl
                overflow-hidden
                shadow-2xl
                z-50
                "
            >

                {[
                {
                    code: "ES",
                    flag: "https://flagcdn.com/w40/es.png",
                },

                {
                    code: "EN",
                    flag: "https://flagcdn.com/w40/gb.png",
                },
                ].map((lang, index) => (

                <button
                    key={index}
                    onClick={() => {

                    if (lang.code === language) {
                        setOpenLang(false)
                        return
                    }

                    setLanguage(lang.code)

                    setOpenLang(false)
                    }}
                    className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    text-zinc-300
                    hover:bg-white/5
                    hover:text-white
                    transition-all
                    duration-200
                    "
                >

                    <img
                    src={lang.flag}
                    alt={lang.code}
                    className="
                        w-5
                        h-5
                        rounded-sm
                        object-cover
                    "
                    />

                    <span className="text-sm">
                    {lang.code}
                    </span>

                </button>

                ))}

            </motion.div>

            </div>

            {/* BACK */}
            <Link
              to="/"
              className="
                group
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-zinc-300
                hover:text-white
                hover:border-cyan-500/20
                transition-all
                duration-300
              "
            >
              <span className="hidden sm:block text-sm">
                {t.back}
              </span>

              <FiArrowLeft
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
                size={18}
              />
            </Link>

          </div>

        </div>

        {/* HERO */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >

            {/* TYPE */}
            <div
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                text-cyan-300
                text-xs
                tracking-[0.15em]
                uppercase
                mb-4
              "
            >
              {translatedType || t.defaultType}
            </div>

            {/* TITLE */}
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                leading-tight
                mb-5
              "
            >
              {translatedTitle}
            </h1>

            {/* IMAGE */}
            <motion.img
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              src={project.detailImage || project.image}
              alt={project.title}
              className="
                w-full
                max-w-[450px]
                mx-auto
              "
            />

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:pt-20"
          >

            {/* DESCRIPTION */}
            <div
              className="
                text-zinc-300
                text-[15px]
                md:text-base
                leading-relaxed
                space-y-5
                text-justify
              "
            >

              

              {translatedContent?.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

            {/* TECH */}
            <div className="mt-10">

              <div className="flex flex-wrap gap-5 justify-center">

                {project.tech.map((tech, index) => {

                  const techData = techIcons[tech]

                  const Icon = techData?.icon

                  return (
                    <div
                      key={index}
                      className="
                        group
                        flex
                        flex-col
                        items-center
                        gap-2
                      "
                    >

                      {/* ICON */}
                      <div
                        className={`
                          text-4xl
                          transition-all
                          duration-300
                          group-hover:scale-110
                          ${techData?.color || "text-white"}
                        `}
                      >
                        {Icon && <Icon />}
                      </div>

                      {/* NAME */}
                      <span
                        className="
                          text-xs
                          text-zinc-400
                          uppercase
                          tracking-wider
                        "
                      >
                        {tech}
                      </span>

                    </div>
                  )

                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </main>
  )
}

export default ProjectDetail