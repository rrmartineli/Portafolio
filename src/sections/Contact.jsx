import { FaGithub, FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-14"
    >
      <div className="border border-white/10 bg-white/5 rounded-3xl p-10 md:p-16 text-center">
        <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
          Contacto
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Construyamos algo juntos.
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Actualmente estoy buscando nuevas oportunidades
          relacionadas con desarrollo fullstack, integraciones,
          automatización y aplicaciones móviles.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="border border-white/10 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="border border-white/10 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact