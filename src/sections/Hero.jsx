import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMail } from "react-icons/fi";
import cvPreview from "../assets/cv-preview.png";
import mapaBogota from "../assets/mapa-bogota.png";
import { layout } from "../styles/layout"

const SOCIAL_LINKS = [
  { 
    id: 'github', 
    href: 'https://github.com/', 
    icon: FaGithub, 
    hover: 'hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]' 
  },
  { 
    id: 'linkedin', 
    href: 'https://www.linkedin.com/in/rafael-martinez-587822374/', 
    icon: FaLinkedin, 
    hover: 'hover:bg-[#0077B5] hover:text-white hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]' 
  },
  { 
    id: 'mail', 
    href: 'mailto:rrmartinez@ucundinamarca.edu.co', 
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
    <section className={layout.section}>
      <div className={layout.heroGrid}>

        {/* CARD PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0 }}
          whileHover={{ y: -5 }}
          className="
            group
            relative
            bg-gradient-to-br
            from-white/10
            to-white/5
            border
            border-white/10
            rounded-[20px]
            backdrop-blur-xl
            flex
          
            /* MOBILE 0px - 640px */
            flex-col
            items-center
            row-span-2
            justify-center
            text-center
            gap-3
            

            /* MOBILE 640px - 768px */
            sm:col-span-2
            sm:row-span-2    
    

            /* TABLET+ 768px - --px*/
            md:col-span-2
            md:row-span-2
            md:flex-col
            md:items-center
            md:justify-center
            md:text-center
            md:gap-0
            md:p-10

            overflow-hidden
            hover:border-blue-500/30
            hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]

            transition-all
            duration-500
          "
        >
          {/* Luz de fondo ambiental (Sutil) */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors duration-500" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500" />

          {/* Contenedor del Avatar/Emoji */}
          <div className="relative sm:items-center md:mt-2 md:mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* SOLO CAMBIÉ EL TAMAÑO EN MOBILE */}
            <div className="relative w-28 h-28 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-6xl shadow-2xl backdrop-blur-sm">
              👨🏽‍💻
            </div>
          </div>

          {/* Texto Principal */}
          <div className="relative z-10">
            {/* SOLO AJUSTÉ EL TEXTO EN MOBILE */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight">
              Rafael Martínez
            </h1>
            
            {/* Badge de Rol */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mt-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
              <span className="text-blue-400 text-sm md:text-xs font-medium tracking-wide uppercase">
                Fullstack Developer
              </span>
            </div>
          </div>
        </motion.div>

        {/* REDES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="
            group
            relative
            overflow-hidden
            bg-white/5
            border
            border-white/10
            rounded-[20px]
            p-4
            flex
            flex-col
            justify-between
            hover:border-blue-500/30
            hover:bg-white/[0.07]
            hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]
            backdrop-blur-xl
          "
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col ">
              <p className="text-zinc-500 uppercase text-xs tracking-[0.2em] group-hover:text-zinc-300">Redes</p>
              <div className="flex h-full items-center">
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 md:py-2 gap-2 w-fit mx-auto">
                {SOCIAL_LINKS.map(({ id, href, icon: Icon, hover },index) => (
                  <a key={id} href={href} target="_blank" rel="noopener noreferrer"
                    className={`
                      group/icon
                      relative
                      w-12
                      h-12
                      text-4xl
                      md:w-8
                      md:h-8
                      lg:w-9
                      lg:h-9
                      xl:w-12
                      xl:h-12
                      rounded-lg
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      md:text-xl
                      lg:text-2xl
                      xl:text-3xl
                      text-zinc-400
                      overflow-hidden
                      hover:scale-105
                      hover:-translate-y-1
                      transition-all
                      duration-300
                      ${index === 2 ? "md:col-span-2 md:justify-self-center lg:col-span-1" : ""}
                      ${hover}
                    `}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                    <Icon className="relative z-10 group-hover/icon:rotate-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CV */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 flex items-center justify-center hover:border-blue-500/30 hover:bg-white/[0.07] hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]"
        >
          <img src={cvPreview} alt="CV Preview" className="absolute inset-0 w-full h-full object-top scale-105 blur-[0.5px] opacity-50 group-hover:scale-100 group-hover:blur-[1px]" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
          <div className="relative z-10">
           <button className="
              group/button 
              flex
              items-center
              justify-center

              text-center

              gap-2
              px-2
              py-2

              rounded-xl
              border

              md:w-20
              md:h-9
              md:text-xs

              lg:w-32
              lg:text-xs
              lg:h-10
              xl:w-36
              xl:text-sm
              border-white/10 
              bg-white/10 
              backdrop-blur-xl 
              text-white 
              transition-all 
              duration-300 
              hover:bg-white 
              hover:text-black 
              hover:scale-105 
              hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
            ">
              <FiDownload className=" hidden lg:block transition-transform duration-300 lg:group-hover/button:translate-y-[1px]" />
              Descargar CV
            </button>
          </div>
        </motion.div>

        {/* EXPERIENCIA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ y: -4 }}
          onMouseEnter={handleMouseEnter}
          className="
            group
            relative
            overflow-hidden 
            bg-gradient-to-br
            from-white/10
            to-white/5
            border
            border-white/10 
            rounded-[20px] 
            flex 
            flex-col 
            items-center 
            justify-center 
            hover:border-blue-500/30 
            hover:shadow-[0_0_45px_rgba(59,130,246,0.18)]    
            
            
            "
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
          className="
            group 
            relative 
            order-6
            md:order-5
            sm:col-span-2
            md:col-span-2 
            bg-gradient-to-br 
            from-white/10 
            to-white/5 
            border 
            border-white/10 
            hover:border-blue-500/30 
            hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] 
            rounded-[20px] 
            p-5 
            flex 
            items-center 
            text-left 
            overflow-hidden "
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <p className="relative z-10 md:text-xs md:text-center lg:text-sm lg:text-left xl:text-base leading-[1.4] font-normal tracking-normal text-zinc-200 antialiased">
            Desarrollador de Software con experiencia en el diseño desarrollo e integración de aplicaciones multiplataforma.
          </p>
        </motion.div>

        {/* EXTRA CARD: UBICACIÓN (MAPA) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="group relative order-5 md:order-6 overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_45px_rgba(59,130,246,0.18)] rounded-[20px] flex items-center justify-center cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 4.0, rotate: 360 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={mapaBogota} 
              alt="Ubicación Fusagasugá"
              className="w-full h-full object-cover opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Agregamos pointer-events-none aquí para que no interfiera con el hover del mapa */}
          <div className="relative z-10 flex flex-col items-center gap-2 pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-40 animate-pulse" />
              
              <div className="relative backdrop-blur-md p-2 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center w-14 h-9">
                <img 
                  src="https://flagcdn.com/co.svg" 
                  alt="Colombia Flag" 
                  className="w-10 h-7 object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 rounded-[20px] transition-colors duration-500 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;