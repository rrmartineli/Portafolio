import { motion, AnimatePresence } from "framer-motion"

function LanguageSwitcher({
  language,
  setLanguage,
  openLang,
  setOpenLang,
}) {

  const languages = [
    {
      code: "ES",
      flag: "https://flagcdn.com/w40/es.png",
    },

    {
      code: "EN",
      flag: "https://flagcdn.com/w40/gb.png",
    },
  ]

  return (
    <div className="relative">

      {/* BUTTON */}
      <motion.button
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onClick={() => setOpenLang(!openLang)}
        className="
          group
          relative
          overflow-hidden
          flex
          items-center
          gap-2
          px-4
          py-2.5
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          text-zinc-300
          hover:text-white
          hover:border-cyan-500/20
          transition-all
          duration-300
        "
      >

        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
            bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_70%)]
          "
        />

        <img
          src={
            language === "ES"
              ? "https://flagcdn.com/w40/es.png"
              : "https://flagcdn.com/w40/gb.png"
          }
          alt={language}
          className="
            relative
            z-10
            w-5
            h-5
            rounded-sm
            object-cover
          "
        />

        <span
          className="
            relative
            z-10
            hidden
            sm:block
            text-sm
          "
        >
          {language}
        </span>

        <motion.span
          animate={{
            rotate: openLang ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            relative
            z-10
            text-[10px]
          "
        >
          ▼
        </motion.span>

      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>

        {openLang && (

          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.96,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              absolute
              top-full
              right-0
              mt-2
              min-w-[130px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-zinc-900/90
              backdrop-blur-2xl
              shadow-2xl
              z-50
            "
          >

            {languages.map((lang, index) => (

              <button
                key={index}
                onClick={() => {

                  if (lang.code === language) {
                    setOpenLang(false)
                    return
                  }

                  setLanguage(lang.code)

                  setOpenLang(false)
                }}
                className={`
                  relative
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  transition-all
                  duration-200

                  ${
                    language === lang.code
                      ? "bg-cyan-500/10 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }
                `}
              >

                <img
                  src={lang.flag}
                  alt={lang.code}
                  className="
                    w-5
                    h-5
                    rounded-sm
                    object-cover
                  "
                />

                <span className="text-sm">
                  {lang.code}
                </span>

              </button>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  )
}

export default LanguageSwitcher