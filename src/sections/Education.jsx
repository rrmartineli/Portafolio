import { motion } from "framer-motion"

import udecLogo from "../assets/Udec.png"
import MinTIC from "../assets/MinTIC.png"
import Platzi from "../assets/Platzi.png"

import { layout } from "../styles/layout"

function Education({ language }) {

  const translations = {
    ES: {
      title: "Educación",

      educationData: [
        {
          title: "Universidad De Cundinamarca",
          subtitle: "UDEC",
          date: "2026",
          description: "Ingeniero electrónico",
          image: udecLogo,
        },

        {
          title:
            "Ministerio de Tecnologías de la Información y las Comunicaciones",

          subtitle: "MinTIC",

          date: "2025",

          description:
            "Bootcamp Inteligencia Artificial",

          image: MinTIC,
        },

        {
          title: "Platzi",

          subtitle:
            "Inteligencia Para La Ciberseguridad",

          date: "2024",

          description:
            "Análisis de amenazas, OSINT y uso de herramientas como Shodan, FOCA y Maltego",

          image: Platzi,
        },

        {
          title: "Platzi",

          subtitle: "Hacking Ético",

          date: "2024",

          description:
            "Pentesting, análisis de vulnerabilidades, phishing, sniffing y seguridad ofensiva",

          image: Platzi,
        },
      ],
    },

    EN: {
      title: "Education",

      educationData: [
        {
          title: "University of Cundinamarca",
          subtitle: "UDEC",
          date: "2026",
          description: "Electronic Engineer",
          image: udecLogo,
        },

        {
          title:
            "Ministry of Information and Communication Technologies",

          subtitle: "MinTIC",

          date: "2025",

          description:
            "Artificial Intelligence Bootcamp",

          image: MinTIC,
        },

        {
          title: "Platzi",

          subtitle:
            "Cybersecurity Intelligence",

          date: "2024",

          description:
            "Threat analysis, OSINT, and usage of tools such as Shodan, FOCA, and Maltego",

          image: Platzi,
        },

        {
          title: "Platzi",

          subtitle: "Ethical Hacking",

          date: "2024",

          description:
            "Pentesting, vulnerability analysis, phishing, sniffing, and offensive security",

          image: Platzi,
        },
      ],
    },
  }

  const t = translations[language]

  return (
    <section
      id="Education"
      className={`${layout.section} scroll-mt-28`}
    >

      <div className={layout.container}>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mb-10
          "
        >

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            "
          >
            {t.title}
          </h2>

        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {t.educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-8
                min-h-[200px]
                transition-all
                duration-500
                hover:border-blue-500/30
                hover:bg-white/[0.07]
                hover:shadow-[0_0_45px_rgba(59,130,246,0.15)]
              "
            >

              {/* BACKGROUND IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  bottom-0
                  right-0
                  w-52
                  h-70
                  opacity-[0.07]
                  object-contain
                  pointer-events-none
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:opacity-[0.12]
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  bg-gradient-to-br
                  from-blue-500/10
                  via-transparent
                  to-purple-500/10
                  pointer-events-none
                "
              />

              {/* CONTENT */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  flex
                  flex-col
                  justify-between
                "
              >

                {/* HEADER */}
                <div
                  className="
                    flex
                    justify-between
                    gap-6
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                        leading-tight
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-zinc-400
                        text-md
                        mt-1
                      "
                    >
                      {item.subtitle}
                    </p>

                  </div>

                  <p
                    className="
                      text-zinc-500
                      whitespace-nowrap
                      text-md
                    "
                  >
                    {item.date}
                  </p>

                </div>

                {/* DESCRIPTION */}
                <div className="mt-10">

                  <p
                    className="
                      text-zinc-200
                      text-md
                      leading-relaxed
                      whitespace-pre-line
                    "
                  >
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Education