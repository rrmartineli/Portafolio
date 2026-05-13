import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Sobre mí
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Ingeniería, desarrollo e integraciones.
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Ingeniero Electrónico con experiencia en desarrollo
              fullstack, integraciones y automatización de procesos.
              He trabajado en el desarrollo de sistemas reales para
              entidades públicas y actualmente desarrollo aplicaciones
              móviles y soluciones enfocadas en escalabilidad y rendimiento.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Fullstack Development
              </h3>

              <p className="text-zinc-400 text-sm">
                Desarrollo de aplicaciones modernas utilizando
                React, Node.js, PostgreSQL y arquitecturas escalables.
              </p>
            </div>

            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">
                Integraciones & Automatización
              </h3>

              <p className="text-zinc-400 text-sm">
                Integración entre plataformas, APIs, automatización
                de procesos y optimización de flujos de trabajo.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About