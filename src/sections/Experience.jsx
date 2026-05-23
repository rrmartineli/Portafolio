import { motion } from "framer-motion";
import { layout } from "../styles/layout"

function Experience() {
  const experiencias = [
    {
      id: 1,
      fecha: "Enero - Actualidad",
      empresa: "Freelance",
      puesto: "Desarrollador móbile — Remoto",
      descripcion: "Desarrollo de aplicaciones móviles multiplataforma e integración de servicios backend con Flutter",
      puntos: [
        "Implementación de aplicaciones móviles con Flutter utilizando Clean Architecture.",
        "Integración de Firebase y Supabase para autenticación y gestión de datos.",
        "Diseño de interfaces enfocadas en rendimiento y experiencia de usuario (UI/UX)",
        "Aplicación de buenas prácticas de seguridad móvil basadas en OWASP MASVS",
      ],
    },
    {
      id: 2,
      fecha: "Noviembre 2024 - Julio 2025",
      empresa: "Oficina TIC",
      puesto: "Desarrollador FullStack — Presencial - Alcaldia Municipal De Fusagasugá",
      descripcion: "Actualización e implementación de modelo de madurez en sistema de gestion de turnos",
      puntos: [
        "Análisis de requerimientos y desarrollo de nuevas funcionalidades",
        "Implementación y mantenimiento de módulos, automatización de flujos y validaciones operativas.",
        "Ejecución de pruebas funcionales e integración para garantizar estabilidad, continuidad y rendimiento del sistema.",
        "Aplicación prácticas de seguridad basadas en OWASP SAMM, elaboración de documentación técnica y diagramas UML.",
      ],
    },
    {
      id: 3,
      fecha: "Marzo 2024 - Noviembre 2025",
      empresa: "Freelance",
      puesto: "Ingeniero de integraciones y automatizacion — Remoto",
      descripcion: "Integración, automatización y soporte de sistemas internos.",
      puntos: [
        "Desarrollo de integraciones con APIs REST, Webhooks y pasarelas de pago.",
        "Implementación de módulos e-commerce, sincronización de datos y validaciones en tiempo real.",
        "Mantenimiento y mejora de sistemas internos mediante monitoreo, corrección de incidencias y soporte funcional.",
        "Participación en la creación de microservicios para automatización e integración de procesos.",
      ],
    },
  ];

  return (
    <section id="experience" className={layout.section}>
      <div className={layout.container}>
        
        {/* Encabezado simple */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
          >
          <h2 className="text-4xl md:text-5xl font-bold text-white justify-center flex">
            Experiencia
          </h2>
        </motion.div>

        <div className="relative ">
          <div className="absolute left-2 md:left-8 top-2 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/20 via-blue-500/20 to-transparent" />

          <div className="space-y-24">
            {experiencias.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-24"
              >
                {/* Nodo minimalista azul suave */}
                <div className="absolute left-0 md:left-[25px] top-2 z-10">
                  <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
                  </div>
                </div>

                {/* Contenido sin cajas, ocupando el ancho disponible */}
                <div className="flex flex-col gap-6 px-2">
                  
                  {/* Fecha con badge púrpura sutil */}
                  <div className="inline-flex items-center gap-3">
                    <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
                      {item.fecha}
                    </span>
                
                  </div>

                  {/* Títulos */}
                  <div className="space-y-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {item.empresa}
                    </h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-tighter">
                      {item.puesto}
                    </p>
                  </div>

                  {/* Descripción y Puntos */}
                  <div className="max-w-5xl space-y-6">
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {item.descripcion}
                    </p>

                    <ul className="space-y-3">
                      {item.puntos.map((punto, i) => (
                        <li key={i} className="flex items-start gap-4 text-zinc-500 text-sm">
                          <span className="mt-2 w-1 h-1 rounded-full bg-blue-500/30 flex-shrink-0" />
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
  );
}

export default Experience;