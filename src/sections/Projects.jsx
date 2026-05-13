import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Proyectos
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Algunos proyectos destacados.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="border border-white/10 bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition"
                  >
                    <FaGithub size={22} />
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition"
                  >
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects