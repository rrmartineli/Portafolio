import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiPostgresql,
  SiFlutter,
  SiTailwindcss,
  SiLinux,
} from "react-icons/si"

const skills = [
  {
    name: "React",
    icon: <FaReact size={28} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={28} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={28} />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter size={28} />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={28} />,
  },
  {
    name: "Docker",
    icon: <FaDocker size={28} />,
  },
  {
    name: "Linux",
    icon: <SiLinux size={28} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={28} />,
  },
]

function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Tecnologías y herramientas.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="border border-white/10 bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition"
            >
              <div className="text-blue-400">
                {skill.icon}
              </div>

              <p className="text-zinc-300 font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills