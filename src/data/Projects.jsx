import municipalImg from "../assets/projects/alcaldia1.png"
import ikuImg from "../assets/projects/iku.png"
import iku2Img from "../assets/projects/iku2.png"

export const projects = [
  {
    title: "Actualización de Sistema de Turnos",
    
    titleEn: "Queue Management System Upgrade",

    description: "Rediseño y escalabilidad de un sistema de tickets bajo Clean Architecture. Automatización de flujos con módulos de RPA, analítica de rendimiento y seguridad OWASP SAMM.",

    descriptionEn: "Redesign and scalability of a ticketing system under Clean Architecture. Workflow automation featuring RPA, performance analytics, and OWASP SAMM security.",

    slug: "sistema-gestion-municipal",

    image: municipalImg,

    type: "Aplicación Web",

    typeEn: "Web Application",
  
    content: [
      "Proyecto enfocado al desarrollo de una nueva versión del sistema para su despliegue en una entidad aliada, priorizando la modularidad y la escalabilidad del software. El sistema fue rediseñado bajo principios de Clean Architecture, optimizando el módulo de gestión de turnos con flujos automatizados. Como innovación clave, se implementó un módulo de RPA y analítica de rendimiento para evaluar el cumplimiento de objetivos de los funcionarios mediante métricas como tiempos laborados y feedback de usuarios. Adicionalmente, se integró un componente estadístico avanzado que procesa el volumen de atención por rangos de fechas y automatiza la generación de reportes en Excel, replicando fielmente los formatos manuales tradicionales pero eliminando el error operativo. El producto final se entregó bajo estándares de seguridad (OWASP SAMM) tras superar pruebas de penetración e integración, garantizando un ecosistema estable, seguro y completamente documentado con diagramas UML.",
    ],

    contentEn: [
      "Project focused on the architecture and development of a new version of the management system for deployment in a partner entity, prioritizing software modularity and scalability. The system was redesigned under Clean Architecture principles, optimizing the shift management module with automated workflows and robust validations. As a key innovation, an RPA and performance analytics module was implemented to evaluate staff objective compliance through metrics such as hours worked and user feedback. Additionally, an advanced statistical component was integrated to process service volume by date ranges and automate Excel report generation, faithfully replicating traditional manual formats while eliminating operational error. The final product was delivered under strict security standards (OWASP SAMM) after passing penetration and integration testing, ensuring a stable, secure, and fully documented ecosystem with UML diagrams."
    ],

    tech: [
      "React",
      "JavaScript",
      "PostgreSQL",
      "Laravel",
      "PHP",
      "Docker"
    ],

    github: "#",

    demo: "#",
  },

  {
    title: "Iku",

    slug: "Iku",

    type: "Aplicación Móvil",

    image: iku2Img,

    detailImage: ikuImg,

    typeEn: "Mobile App",

    description:
      "Plataforma SaaS de movilidad por suscripción. Edge computing mediante hardware SBC Plug & Play de fácil sincronización, arquitectura móvil en Flutter y seguridad OWASP MASVS.",

    descriptionEn:
      "Subscription-based mobility SaaS solution. Edge computing via easy-to-sync Plug & Play SBC hardware, Flutter mobile architecture, and OWASP MASVS security",

    content: [ "Plataforma de Smart Cities diseñada para la optimización del transporte público mediante un modelo SaaS escalable de suscripción por unidad. El ecosistema móvil está desarrollado sobre Flutter, integrando Firebase para la gestión de identidad y notificaciones push, y Supabase como núcleo de persistencia de datos. La innovación del sistema radica en su hardware SBC, diseñado para un despliegue masivo gracias a un protocolo de aprovisionamiento automatizado y sincronización Plug & Play con la app. Este hardware ejecuta modelos de Visión por Computadora (IA) embebida (Edge Computing) para la auditoría y conteo de pasajeros en tiempo real, mitigando el error operativo de sistemas tradicionales. Una capa de API intermedia actúa como gateway para validar, sanitizar y estructurar la telemetría antes de su almacenamiento. Construido bajo Clean Architecture, el sistema provee un dashboard analítico de rendimiento con reportes automatizados y cumple rigurosamente con el estándar de seguridad móvil OWASP MASVS."
    ],

    contentEn: [
      "Smart Cities platform designed to optimize public transit through a scalable, unit-based subscription SaaS model. The mobile ecosystem is built on Flutter, integrating Firebase for identity management and push notifications, and Supabase as the core data persistence layer. The system's core innovation lies in its SBC hardware, engineered for mass deployment through an automated provisioning protocol and Plug & Play synchronization with the app. This hardware executes embedded Computer Vision (AI) models at the edge (Edge Computing) for real-time passenger auditing and counting, mitigating the operational errors of traditional systems. An intermediate API layer acts as a gateway to validate, sanitize, and structure telemetry data prior to storage. Built under Clean Architecture, the system provides an analytical performance dashboard with automated reporting and strictly complies with the OWASP MASVS mobile security standard",
    ],

    tech: [
      "Flutter",
      "FastAPI",
      "Firebase",
      "Supabase",
      "OWASP",
      "Yolo"
    ],

    github: "#",

    demo: "#",
  }
]