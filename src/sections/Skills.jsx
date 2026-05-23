import { motion } from "framer-motion"
import { layout } from "../styles/layout"

import { BiLogoVisualStudio } from "react-icons/bi"
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
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
  SiDart,
  SiPostgresql,
  SiAndroidstudio,
  SiN8N,
  SiOwasp
} from "react-icons/si"

/* =========================
   DATA
========================= */

const skillsTop = [
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "n8n", icon: SiN8N, color: "text-pink-400" },
]

const skillsBottom = [
  { name: "Dart", icon: SiDart, color: "text-sky-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "OWASP", icon: SiOwasp, color: "text-white" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "text-green-400" },
  { name: "Visual Studio Code", icon: BiLogoVisualStudio, color: "text-cyan-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
]

/* =========================
   SECTION
========================= */

function Skills() {
  return (
    <section className={`${layout.section} relative`}>
      <div className={`${layout.container} relative overflow-hidden `}>
        <div className="absolute left-0 top-0 z-10 h-full w-20 lg:w-50 pointer-events-none bg-gradient-to-r from-black via-black/95 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 lg:w-50 pointer-events-none bg-gradient-to-l from-black via-black/95 to-transparent" />

        <div className="justify-center items-center relative ">          
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Tecnologías
            </h2>
          </motion.div>

          {/* STRIP TOP */}
          <Strip skills={skillsTop} direction="left" />

          {/* STRIP BOTTOM */}
          <Strip skills={skillsBottom} direction="right" />

        </div>
      </div>
    </section>
  )
}

/* =========================
   STRIP
========================= */

function Strip({ skills, direction }) {
  return (
    <div className="relative py-10 overflow-hidden">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max "
      >
        {[...skills, ...skills].map((skill, i) => (
          <SkillItem key={i} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

/* =========================
   ITEM (FIXED TOOLTIP + SPACING)
========================= */

function SkillItem({ skill }) {
  const Icon = skill.icon

  return (
    <div className="relative group flex flex-col items-center min-w-[80px] sm:min-w-[100px] md:min-w-[110px] lg:min-w-[150px]">

      {/* ICON */}
      <div
        className={`
          text-4xl
          md:text-5xl
          lg:text-6xl
          ${skill.color}
          transition-all duration-300
          group-hover:scale-110
          group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.18)]
          [&_svg]:fill-current
          [&_svg]:stroke-current
        `}
      >
        <Icon />
      </div>

      {/* TOOLTIP (CENTERED + NO CUT OFF) */}
      <div
        className="
          absolute -top-5
          left-1/2 -translate-x-1/2

          opacity-0 group-hover:opacity-100
          group-hover:-translate-y-1

          transition-all duration-300

          text-xs tracking-widest uppercase
          text-white/70

          whitespace-nowrap
          pointer-events-none
          z-50
        "
      >
        {skill.name}
      </div>

    </div>
  )
}

export default Skills