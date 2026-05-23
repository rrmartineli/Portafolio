import { motion } from "framer-motion"
import { FiExternalLink } from "react-icons/fi"
import { Link } from "react-router-dom"

import { projects } from "../data/projects"
import { layout } from "../styles/layout"

function Projects() {
  return (
    <section
      id="projects"
      className={layout.section}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Proyectos Destacados
        </h2>

        <div className={layout.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {projects.map((project, index) => (

                          
              <motion.div
              key={index}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                hover:border-white/20
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[240px]
                  overflow-hidden
                "
              >

                <motion.img
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    object-[center_50%]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />

                {/* FLOATING BUTTON */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="
                    absolute
                    top-5
                    right-5
                    w-11
                    h-11
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    text-zinc-300
                    hover:text-white
                    hover:bg-cyan-500/10
                    hover:border-cyan-400/20
                    transition-all
                    duration-300
                  "
                >
                  <FiExternalLink size={18} />
                </Link>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                {/* TYPE */}
                <span
                  className="
                    inline-flex
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-cyan-300
                    mb-4
                  "
                >
                  {project.type}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-zinc-400
                    leading-relaxed
                    text-[15px]
                  "
                >
                  {project.description}
                </p>

              </div>

              {/* SUBTLE GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  pointer-events-none
                  bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.10),transparent_70%)]
                "
              />

            </motion.div>

            ))}

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects