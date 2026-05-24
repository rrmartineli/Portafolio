import { motion } from "framer-motion"
import { layout } from "../styles/layout"

function Experience({ language }) {

  const translations = {
    ES: {
      title: "Experiencia",

      experiences: [
        {
          id: 1,
          fecha: "Enero - Actualidad",
          empresa: "Freelance",
          puesto: "Desarrollador móvil — Remoto",
          descripcion:
            "Desarrollo de aplicaciones móviles multiplataforma e integración de servicios backend con Flutter",

          puntos: [
            "Implementación de aplicaciones móviles con Flutter utilizando Clean Architecture.",
            "Integración de Firebase y Supabase para autenticación y gestión de datos.",
            "Diseño de interfaces enfocadas en rendimiento y experiencia de usuario (UI/UX).",
            "Aplicación de buenas prácticas de seguridad móvil basadas en OWASP MASVS.",
          ],
        },

        {
          id: 2,
          fecha: "Noviembre 2024 - Julio 2025",
          empresa: "Oficina TIC",
          puesto:
            "Desarrollador FullStack — Presencial - Alcaldía Municipal de Fusagasugá",

          descripcion:
            "Actualización e implementación de modelo de madurez en sistema de gestión de turnos",

          puntos: [
            "Análisis de requerimientos y desarrollo de nuevas funcionalidades.",
            "Implementación y mantenimiento de módulos, automatización de flujos y validaciones operativas.",
            "Ejecución de pruebas funcionales e integración para garantizar estabilidad, continuidad y rendimiento del sistema.",
            "Aplicación de prácticas de seguridad basadas en OWASP SAMM, elaboración de documentación técnica y diagramas UML.",
          ],
        },

        {
          id: 3,
          fecha: "Marzo 2024 - Noviembre 2025",
          empresa: "Freelance",
          puesto:
            "Ingeniero de integraciones y automatización — Remoto",

          descripcion:
            "Integración, automatización y soporte de sistemas internos.",

          puntos: [
            "Desarrollo de integraciones con APIs REST, Webhooks y pasarelas de pago.",
            "Implementación de módulos e-commerce, sincronización de datos y validaciones en tiempo real.",
            "Mantenimiento y mejora de sistemas internos mediante monitoreo, corrección de incidencias y soporte funcional.",
            "Participación en la creación de microservicios para automatización e integración de procesos.",
          ],
        },
      ],
    },

    EN: {
      title: "Experience",

      experiences: [
        {
          id: 1,
          fecha: "January - Present",
          empresa: "Freelance",
          puesto: "Mobile Developer — Remote",

          descripcion:
            "Cross-platform mobile application development and backend service integration with Flutter",

          puntos: [
            "Implementation of mobile applications using Flutter and Clean Architecture.",
            "Firebase and Supabase integration for authentication and data management.",
            "UI/UX-focused interface design optimized for performance and usability.",
            "Application of mobile security best practices based on OWASP MASVS.",
          ],
        },

        {
          id: 2,
          fecha: "November 2024 - July 2025",
          empresa: "ICT Office",

          puesto:
            "FullStack Developer — On-site - Municipal Government of Fusagasugá",

          descripcion:
            "Upgrade and maturity model implementation for a queue management system",

          puntos: [
            "Requirements analysis and development of new features.",
            "Implementation and maintenance of modules, workflow automation, and operational validations.",
            "Execution of functional and integration testing to ensure system stability, continuity, and performance.",
            "Application of OWASP SAMM-based security practices, technical documentation, and UML diagrams.",
          ],
        },

        {
          id: 3,
          fecha: "March 2024 - November 2025",
          empresa: "Freelance",

          puesto:
            "Integration and Automation Engineer — Remote",

          descripcion:
            "Integration, automation, and support for internal systems.",

          puntos: [
            "Development of integrations using REST APIs, Webhooks, and payment gateways.",
            "Implementation of e-commerce modules, data synchronization, and real-time validations.",
            "Maintenance and improvement of internal systems through monitoring, incident resolution, and functional support.",
            "Participation in the development of microservices for process automation and integration.",
          ],
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section
      id="experience"
      className={`${layout.section} scroll-mt-28`}
    >
      <div className={layout.container}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              justify-center
              flex
            "
          >
            {t.title}
          </h2>

        </motion.div>

        <div className="relative">

          {/* LINE */}
          <div
            className="
              absolute
              left-2
              md:left-8
              top-2
              bottom-0
              w-[1px]
              bg-gradient-to-b
              from-purple-500/20
              via-blue-500/20
              to-transparent
            "
          />

          <div className="space-y-24">

            {t.experiences.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-24"
              >

                {/* NODE */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-[25px]
                    top-2
                    z-10
                  "
                >

                  <div
                    className="
                      w-4
                      h-4
                      rounded-full
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div
                      className="
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-blue-500/30
                      "
                    />

                  </div>

                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-6 px-2">

                  {/* DATE */}
                  <div className="inline-flex items-center gap-3">

                    <span
                      className="
                        text-[10px]
                        font-bold
                        text-zinc-500
                        tracking-widest
                        uppercase
                      "
                    >
                      {item.fecha}
                    </span>

                  </div>

                  {/* TITLES */}
                  <div className="space-y-1">

                    <h3
                      className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-white
                      "
                    >
                      {item.empresa}
                    </h3>

                    <p
                      className="
                        text-sm
                        text-zinc-500
                        uppercase
                        tracking-tighter
                      "
                    >
                      {item.puesto}
                    </p>

                  </div>

                  {/* DESCRIPTION */}
                  <div className="max-w-5xl space-y-6">

                    <p
                      className="
                        text-zinc-400
                        text-lg
                        leading-relaxed
                      "
                    >
                      {item.descripcion}
                    </p>

                    {/* BULLETS */}
                    <ul className="space-y-3">

                      {item.puntos.map((punto, i) => (

                        <li
                          key={i}
                          className="
                            flex
                            items-start
                            gap-4
                            text-zinc-500
                            text-sm
                          "
                        >

                          <span
                            className="
                              mt-2
                              w-1
                              h-1
                              rounded-full
                              bg-blue-500/30
                              flex-shrink-0
                            "
                          />

                          {punto}

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience