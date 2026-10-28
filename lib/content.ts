import * as en from './data'

export type Lang = 'en' | 'es'
export type Content = typeof en

const over = <T extends object>(base: T[], texts: Partial<T>[]): T[] => base.map((b, i) => ({ ...b, ...texts[i] }))

// Spanish overrides text only; links, paths and tech names come from the English data.
export const es: Content = {
  ...en,
  profile: {
    ...en.profile,
    role: 'Desarrollador e ingeniero de software',
    tagline: 'Solo hazlo',
    location: 'Colombia',
    pitch:
      'Soy ingeniero de software y me gusta construir aplicaciones que se vean bien, sean útiles y prueben algo nuevo, sobre todo full stack. Me importa igual la lógica de fondo: las reglas de negocio, el procesamiento de datos y que todo se sienta fácil y fluido.',
    facts: ['Colombia', '¡Abierto a trabajar!', 'en/es'],
  },
  navSections: [
    { id: 'intro', title: 'Inicio', time: '0:20' },
    { id: 'about', title: 'Sobre mí', time: '0:40' },
    { id: 'projects', title: 'Proyectos', time: '2:30' },
    { id: 'techs', title: 'Techs', time: '0:30' },
    { id: 'voices', title: 'Voces', time: '0:40' },
    { id: 'academic', title: 'Académico', time: '0:20' },
    { id: 'experience', title: 'Experiencia', time: '1:00' },
    { id: 'archive', title: 'El Archivo', time: '1:30' },
    { id: 'contact', title: 'Contacto', time: '0:10' },
  ],
  aboutParagraphs: [
    'En 2012 mi papá me dejó usar su portátil y me lancé de lleno a un internet que casi no entendía. YouTube y largas horas en foros me mostraron historias y conversaciones que de otro modo nunca habría encontrado, desde novelas visuales de terror hasta modificar los juegos que jugaba y ajustar mi computador para que corriera lo más rápido posible. En mi último año de colegio me enseñaron HTML básico y PSeInt, y por primera vez vi qué tan profundo era el mundo en el que vivía desde niño.',
    'Hoy dedico mi tiempo libre a personalizar mi entorno de Linux, ver Fórmula 1 y descubrir cómo funcionan las cosas. El terror, el horror y las historias criminales me siguen atrayendo y me quitan bastante tiempo. Cuando decidía hacia dónde llevar mi vida, la criminalística y la ciencia forense eran las otras opciones.',
  ],
  projects: over(en.projects, [
    { blurb: 'Launcher de Minecraft de código abierto para Windows, Linux y macOS. Vanilla, Forge o Fabric, más biblioteca de addons, servidores locales, editor de skins y un asistente de IA integrado.' },
    { blurb: 'Editor de video en el navegador: línea de tiempo multipista, vista previa en tiempo real y procesamiento en el cliente con FFmpeg compilado a WebAssembly. Subtítulos automáticos y limpieza de audio con IA sobre un backend en Spring Boot.' },
    { blurb: 'Pizarra Colaborativa. Comparte un código de seis caracteres y dibujen juntos con cursores en vivo. Disponible en web y Android.' },
    { blurb: 'App de Wear OS que permite a grupos pequeños de relojes hablar en código Morse háptico, con dictado por IA y respuestas inteligentes.' },
    { name: 'Gestor de Convenios Universitarios', blurb: 'Backend para un problema real de una universidad: gestionar convenios con documentos y firmas digitales en AWS S3, más de 5 roles y flujos por convenio.' },
    { blurb: 'Un sitio para simular cómo se comportan aerodinámicamente distintos autos de carreras (y otros autos) a diferentes velocidades.' },
    { blurb: 'Un reproductor de música web.' },
    { name: 'Agendador de Citas Médicas', blurb: 'Una aplicación web para agendar citas médicas, hecha con Django.' },
    { name: 'Simulador Antiaéreo', blurb: 'Proyecto de física que modela la intercepción de una bomba en caída. Usa SciPy y aproximaciones numéricas para hallar la fuerza y el ángulo de disparo óptimos.' },
  ]),
  techs: {
    ...en.techs,
    groups: over(en.techs.groups, [
      { title: 'Lenguajes y frameworks' },
      { title: 'Bases de datos' },
      { title: 'Nube e infraestructura' },
      { title: 'Sistemas operativos' },
      { title: 'Herramientas de IA' },
      { title: 'Flujo de trabajo y diseño' },
    ]),
  },
  testimonials: over(en.testimonials, [
    { name: 'Nombre del compañero', role: 'Compañero', work: 'Shareboard', quote: 'Reemplaza con lo que dijo un compañero sobre trabajar contigo.' },
    { name: 'Nombre del profesor', role: 'Profesor', work: 'Diseño de software', quote: 'Reemplaza con una nota de un profesor sobre tu trabajo.' },
    { name: 'Dueño del proyecto', role: 'Dueño del proyecto', work: 'Gestor de Convenios Universitarios', quote: 'Reemplaza con comentarios de quienes usaron el sistema.' },
    { name: 'Nombre del amigo', role: 'Amigo / usuario', work: 'Udeos Launcher', quote: 'Reemplaza con lo que dice alguien que te conoce como persona.' },
  ]),
  academicItems: over(en.academicItems, [
    { title: 'Inglés, curso intensivo', org: 'Nombre de la institución', detail: 'Curso intensivo de inglés, certificado por un examen internacional.', facts: ['Examen: nombre + puntaje', 'Nivel: nivel MCER'] },
    { detail: 'Curso gratuito completado: servicios centrales de AWS, infraestructura global, seguridad, precios y el modelo de responsabilidad compartida.', facts: ['Curso completado', 'Fundamentos de la nube'] },
  ]),
  experienceItems: over(en.experienceItems, [
    {
      when: 'Ago 2025 – presente',
      title: 'Desarrollador de software freelance',
      where: 'Independiente',
      text: 'Diseño, construyo y publico productos de principio a fin: web, móvil, escritorio y los servidores detrás.',
      work: [
        { name: 'Udeos Launcher', text: 'Launcher multiplataforma en Go con cargadores de mods, editor de skins y asistente de IA, además de su sitio de descargas.' },
        { name: 'Shareboard', text: 'Pizarra colaborativa en tiempo real en tres repos: web en React, app en React Native y un servidor en TypeScript.' },
        { name: 'Morse', text: 'App de Wear OS para mensajes en código Morse háptico entre relojes, con dictado por IA y respuestas inteligentes.' },
        { name: 'AloMedia', text: 'FFmpeg en WebAssembly en el cliente, Spring Boot y PostgreSQL para los proyectos, y un servicio en Python para audio y subtítulos con IA.' },
        { name: 'Gestor de Convenios', text: 'Flujos por rol, almacenamiento de documentos y firmas digitales en AWS S3 para convenios universitarios reales.' },
      ],
    },
    {
      when: 'Ago 2024 – presente',
      title: 'Soporte de TI',
      where: 'Colegios',
      text: 'Soporte de TI básico para colegios: instalar y mantener computadores, instalar software, resolver problemas de red e impresoras y ayudar a docentes y estudiantes en el día a día.',
    },
  ]),
  archive: {
    ...en.archive,
    intro:
      'Mi papá me dejó usar su viejo portátil Acer. Corría Windows XP y fue mi salida al internet. Desde entonces estoy demasiado en línea, y así es como terminé escribiendo código.',
    intro2: 'Nunca planeé ser desarrollador. Solo seguía queriendo cambiar cómo funcionaban las cosas, y el internet me seguía dando mejores herramientas para hacerlo.',
    aside: 'Me gusta un solo patrón, aplicado en todas partes. Prefiero la barra de búsqueda de GNOME a la calculadora de KDE si no combinan.',
  },
  ui: {
    switchLang: { short: 'EN', name: 'English' },
    theme: { dark: 'Cambiar a tema oscuro', light: 'Cambiar a tema claro' },
    expandSidebar: 'Expandir barra lateral',
    collapseSidebar: 'Contraer barra lateral',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    seeProjects: 'Ver los proyectos',
    emailMe: 'Escríbeme',
    mainTechs: 'Techs principales',
    quickFacts: 'Datos rápidos',
    captions: { hero: 'ese soy yo', about: 'fuera de horario', archive: 'la era Acer' },
    photoHere: 'La foto va aquí',
    livePreview: 'Vista en vivo',
    repository: 'Repositorio',
    screenshotPending: 'Captura pendiente',
    projectsPages: 'Páginas de proyectos',
    previousPage: 'Página anterior',
    nextPage: 'Página siguiente',
    page: (n) => `Página ${n}`,
    pager: (count, page, pages) => `${count} proyectos · página ${page} de ${pages}`,
    previous: 'Anterior',
    next: 'Siguiente',
    testimonials: 'Testimonios',
    placeholder: 'Provisional',
    certificateHere: 'El certificado va aquí',
    certificateAlt: (title) => `Certificado de ${title}`,
    verify: 'Verificar credencial',
    techsNote: 'He trabajado con todo esto, aunque no soy experto en cada cosa.',
    experienceNote: 'Freelance desde 2025 y soporte de TI desde 2024.',
    archivePrompt: 'Abre el archivo: escribe help, o simplemente haz clic en los nombres.',
    contactCta: 'Construyamos algo.',
    footer: {
      explore: 'Explorar',
      findMe: 'Encuéntrame',
      about: 'Sobre este sitio',
      builtWith: 'Hecho con Next.js, TypeScript y Tailwind CSS',
      fonts: 'Fuentes: Bricolage Grotesque, JetBrains Mono, Permanent Marker, Silkscreen',
      top: 'Volver arriba',
      thanks: 'Gracias por hacer scroll.',
    },
    terminal: {
      motd: [
        'Acer Aspire, Windows XP y una conexión lenta.',
        'En algún punto entre los mods de Minecraft y Linux, empecé a aprender cómo funcionan los computadores.',
        '',
        "Escribe 'help' para ver qué puedes hacer.",
      ],
      help: [
        'Esto funciona como una mini terminal de Linux.',
        '',
        '  ls            lista lo que hay en esta carpeta (ls -a muestra lo oculto)',
        '  cd <carpeta>  entra a una carpeta      cd ..   sube un nivel',
        '  cd            vuelve al inicio         pwd     ¿dónde estoy?',
        '  cat <archivo> lee una nota',
        '  tree          muestra todas las carpetas y archivos',
        '  fastfetch     el sistema que uso ahora',
        '  clear         limpia la pantalla',
        '',
        'Tab completa nombres. Flecha arriba repite comandos. También puedes hacer clic en los nombres.',
      ],
    },
  },
}

export const content: Record<Lang, Content> = { en, es }
