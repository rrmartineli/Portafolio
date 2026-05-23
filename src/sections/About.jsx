import { motion } from "framer-motion"
import { FiPhone } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { layout } from "../styles/layout"


function Status() {
  return (
    <section className={layout.section}>
      {/* Luces de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className={layout.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[48px]
            border
            border-white/10
            bg-zinc-900/20
            backdrop-blur-3xl
            p-8
            
          "
        >
          {/* Glow superior */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[70%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
            "
          />

          <div className="relative z-10">
            {/* TITULO */}
            <div className="max-w-4xl">
              <h2
                className="
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-[1]
                  text-white
                  tracking-tight
                "
              >
                Sobre mí
              </h2>
            </div>

            {/* TEXTO */}
            <div
              className="
                mt-10
                max-w-none
                space-y-6
                text-zinc-400
                text-lg
                leading-relaxed
              "
            >
              <p>
                Mi camino en el desarrollo de software comenzó gracias
                a una gran curiosidad por entender cómo funcionan las
                cosas y el deseo de crear herramientas útiles. Con el
                tiempo descubrí que programar no es solo escribir
                código, sino resolver problemas y aprender
                constantemente.
              </p>

              <p>
                Más allá de lo técnico, me considero una persona
                responsable, empática y con facilidad para adaptarme
                a nuevos entornos. Disfruto trabajar en equipo,
                aportar un ambiente positivo y conectar genuinamente
                con las personas para alcanzar objetivos en común.
              </p>
            </div>

            {/* BOTONES */}
            <div
              className="
                flex
                flex-wrap
                gap-5
                mt-12
                items-center
                justify-center
              "
            >
              {/* TELEFONO */}
              <motion.a
                href="tel:+573003598073"
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  to-white/5
                  px-6
                  py-4
                  backdrop-blur-xl
                  
                  hover:border-blue-500/30
                  hover:bg-white/[0.07]
                  hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
                "
              >
                {/* Glow azul */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Glow morado */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Overlay hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 transition-opacity duration-500 pointer-events-none" />

                <div
                  className="
                    relative
                    z-10
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:bg-white/[0.08]
                  "
                >
                  <FiPhone
                    className="
                      text-xl
                      text-zinc-300
                      transition-all
                      duration-300
                      group-hover:text-white
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                    Teléfono
                  </p>

                  <p className="text-white text-sm md:text-base">
                    +57 300 3598073
                  </p>
                </div>
              </motion.a>

             {/* WHATSAPP */}
              <motion.a
                animate={{
                  x: [0, -10, 10, -10, 10, 0],
                  rotate: [0, -1.5, 1.5, -1.5, 1.5, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                href="https://wa.me/573003598073"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  overflow-hidden
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  to-white/5
                  px-6
                  py-4
                  backdrop-blur-xl
                  hover:border-green-500/30
                  hover:bg-white/[0.07]
                  hover:shadow-[0_0_45px_rgba(34,197,94,0.18)]
                "
              >
                {/* Glow verde */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100" />

                {/* Glow emerald */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100" />

                {/* Overlay hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 transition-opacity duration-500 pointer-events-none" />

                {/* 👇 AQUÍ VA EL HOVER (separado de la vibración) */}
                <motion.div
                  whileHover={{
                    
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                    },
                  }}
                  className="relative z-10 flex items-center gap-4 w-full"
                >
                  {/* ICONO */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                      group-hover:bg-green-500/10
                    "
                  >
                    <FaWhatsapp
                      className="
                        text-xl
                        text-zinc-300
                        transition-all
                        duration-300
                        group-hover:text-green-400
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* TEXTO */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      WhatsApp 
                    </p>

                    <p className="text-white text-sm md:text-base">
                      Contacto directo
                    </p>
                  </div>
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Status