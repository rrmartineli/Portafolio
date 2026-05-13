import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import cvPreview from "../assets/cv-preview.png";
// Asegúrate de tener una imagen del mapa en esta ruta
import mapaBogota from "../assets/mapa-bogota.png"; 

const SOCIAL_LINKS = [
  { 
    id: 'github', 
    href: 'https://github.com/', 
    icon: FaGithub, 
    hover: 'hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]' 
  },
  { 
    id: 'linkedin', 
    href: 'https://linkedin.com/', 
    icon: FaLinkedin, 
    hover: 'hover:bg-[#0077B5] hover:text-white hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]' 
  },
  { 
    id: 'mail', 
    href: 'mailto:tu-correo@ejemplo.com', 
    icon: FiMail, 
    hover: 'hover:bg-rose-500 hover:text-white hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]' 
  },
];

function Hero() {
  const [count, setCount] = useState(2);

  const handleMouseEnter = () => {
    let start = 0;
    const end = 2;
    const duration = 600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  return (
    <section className="flex items-center justify-center px-6 py-8 md:pt-24 md:pb-0">
      <div className="max-w-7xl w-270 grid grid-cols-1 md:grid-cols-5 gap-5 auto-rows-[130px]">

        {/* CARD PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-[20px] p-10 backdrop-blur-xl flex flex-col items-center justify-center text-center"
        >
          <div className="w-1 h-15 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-6xl mb-8 shadow-2xl">
            👨🏽‍💻
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Rafael Martínez</h1>
          <p className="text-zinc-400 text-xl">Fullstack Developer</p>
        </motion.div>

        {/* REDES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ y: -4 }}
          className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[20px] p-6 flex flex-col justify-between hover:border-blue-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] backdrop-blur-xl"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-zinc-500 uppercase text-xs tracking-[0.2em] mb-5 group-hover:text-zinc-300">Redes</p>
            <div className="grid grid-cols-3 gap-4">
              {SOCIAL_LINKS.map(({ id, href, icon: Icon, hover }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer"
                  className={`group/icon relative aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-zinc-400 overflow-hidden hover:scale-105 hover:-translate-y-1 ${hover}`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  <Icon className="relative z-10 group-hover/icon:rotate-6" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CV */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 flex items-center justify-center hover:border-blue-500/30 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
        >
          <img src={cvPreview} alt="CV Preview" className="absolute inset-0 w-full h-full object-top scale-105 blur-[0.5px] opacity-80 group-hover:scale-100 group-hover:blur-[1px]" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="relative z-10">
            <button className="group/button flex items-center gap-1 px-2 py-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <FiDownload className="transition-transform duration-300 group-hover/button:translate-y-[1px]" />
              Descargar CV
            </button>
          </div>
        </motion.div>

        {/* EXPERIENCIA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ y: -4 }}
          onMouseEnter={handleMouseEnter}
          className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[20px] p-8 flex flex-col items-center justify-center hover:border-blue-500/30 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <h2 className="relative z-10 text-6xl font-bold mb-2 text-white tabular-nums">+{count}</h2>
          <p className="relative z-10 text-zinc-400 text-center uppercase text-[10px] tracking-widest">años de experiencia</p>
        </motion.div>

        {/* DESCRIPCIÓN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
          className="group relative md:col-span-2 bg-white/5 border border-white/10 rounded-[20px] p-10 flex items-center text-left overflow-hidden"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <p className="relative z-10 text-2xl md:text-lg leading-relaxed font-medium tracking-tight text-zinc-100 italic selection:bg-blue-500/30">
            Desarrollador de Software con experiencia en el <span className="text-white font-semibold">diseño</span>, <span className="text-white font-semibold">desarrollo</span> e <span className="text-white font-semibold">integración</span> de aplicaciones multiplataforma.
          </p>
        </motion.div>

        {/* EXTRA CARD: UBICACIÓN (MAPA) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={mapaBogota} 
              alt="Ubicación Bogotá"
              className="w-full h-full object-cover opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-40 animate-pulse" />
              
              {/* USANDO IMAGEN SVG PARA LA BANDERA (Solución al error del emoji) */}
              <div className="relative backdrop-blur-md p-2 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center w-14 h-10">
                <img 
                  src="https://flagcdn.com/co.svg" 
                  alt="Colombia Flag" 
                  className="w-10 h-7 object-cover rounded-sm"
                />
              </div>
            </div>
            
            <p className="text-[10px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-md">
              Fusagasugá
            </p>
          </div>

          <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-[20px] transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;