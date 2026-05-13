import { motion } from "framer-motion"

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Experiencia
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-14">
          Experiencia profesional.
        </h2>

        <div className="space-y-8">
          <div className="border border-white/10 bg-white/5 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold">
                Fullstack Developer
              </h3>

              <span className="text-zinc-400">
                Alcaldía Municipal
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Desarrollo y mantenimiento de sistemas internos,
              integraciones entre plataformas, optimización de
              procesos administrativos y desarrollo de soluciones
              web para automatización y gestión.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold">
                Integration Engineer
              </h3>

              <span className="text-zinc-400">
                Experiencia independiente
              </span>
            </div>

            <p className="text-zinc-400 leading-relaxed">
              Desarrollo de integraciones mediante APIs REST,
              automatización de procesos, sincronización de datos
              y construcción de soluciones enfocadas en eficiencia
              y escalabilidad.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience