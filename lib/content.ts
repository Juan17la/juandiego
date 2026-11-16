import * as en from './data'

export type Lang = 'en' | 'es'
export type Content = typeof en

const over = <T extends object>(base: T[], texts: Partial<T>[]): T[] => base.map((b, i) => ({ ...b, ...texts[i] }))

// Spanish text for each project's modal. Same order as `projects` in data.ts; stack and links come from English.
const esDetails: Partial<Content['projects'][number]>[] = [
  {
    story: [
      'Udeos es un launcher de Minecraft: Java Edition para quienes solo quieren jugar. No hay pantalla de inicio de sesión ni nada que configurar: escribes un apodo, creas una instancia de cualquier versión y el launcher descarga todo lo necesario, Java incluido.',
      'Cada instancia es su propio mundo, con sus mundos, mods, paquetes de recursos y ajustes, así que un pack con muchos mods nunca toca tu partida de supervivencia vanilla. Cuando quieres más, el launcher lo encuentra: miles de mods, shaders y modpacks de Modrinth a un clic.',
      'Funciona en Windows, Linux y macOS, guarda todo en tu computador y es de código abierto bajo licencia MIT.',
    ],
    highlights: [
      'Todas las versiones, snapshots y clásicas, con el Java correcto descargado por ti',
      'Fabric, Quilt, Forge y NeoForge se instalan solos',
      'Explorador de Modrinth que revisa compatibilidad y dependencias antes de instalar',
      'Pregunta a la IA: describe un problema con tus palabras y recibe una lista corta de mods reales',
      'Servidores en un minuto con dirección de internet para compartir, más editor y biblioteca de skins en 3D',
      'Perfiles para toda la familia, cada uno con sus instancias, skins, idioma y tema',
    ],
  },
  {
    story: [
      'Shareboard es una pizarra colaborativa que abre lista para dibujar. Elige el lápiz y dibuja; cuando quieras compañía, pulsa Compartir y envía un código de seis caracteres, un enlace o un QR. Quien lo abra dibuja en la misma pizarra al mismo tiempo y ve los cursores en vivo.',
      'No hay nada que registrar. Tu primera pizarra vive en tu dispositivo y funciona sin internet; compartirla sube una copia, pública o protegida con PIN, y decides quién edita y quién solo mira.',
      'Son tres proyectos que trabajan juntos: esta app web en React, una app Android en React Native y un servidor Fastify con REST y un WebSocket para la sincronización en vivo, con las pizarras guardadas en MongoDB.',
    ],
    highlights: [
      'Lienzo infinito con lápiz suavizado, formas, flechas, texto e imágenes',
      'Las flechas se pegan a las figuras y las siguen, con 15 estilos de extremo, incluida la pata de gallo de bases de datos',
      'Mantén quieto un garabato y se convierte en una forma limpia',
      'Dibuja con IA: describe un flujo de inicio de sesión y obtén un dibujo editable con vista previa',
      'Exportaciones PNG, JPG, SVG o JSON que llevan la pizarra dentro, para volver a importarlas editables',
      'Funciona sin conexión, pizarras clara y oscura, inglés y español',
    ],
  },
  {
    story: [
      'LazyCode es un editor de código que corre en tu terminal, hecho para escribir código junto a herramientas de IA. Está entre VS Code y Neovim: editas con las teclas que ya conoces, sin modos que aprender, y corre donde haya una terminal, desde un portátil hasta un servidor por SSH.',
      'Está pensado para una forma de trabajar que la mayoría de editores no previó: una herramienta de IA hace parte del trabajo mientras tú miras, revisas y diriges. LazyCode las corre en sus propias pestañas junto al código y muestra lo que cambian a medida que lo cambian.',
      'Es un programa pequeño de unos 22 MB sin nada más que instalar, sin telemetría y con licencia MIT.',
    ],
    highlights: [
      'Proyectos de varias carpetas, con cambio en una sola tecla',
      'Claude Code, OpenCode, Codex o cualquier herramienta de línea de comandos en una pestaña, con sesiones por proyecto que duermen y se reanudan',
      'Las ediciones de la IA aparecen en vivo y las líneas cambiadas se marcan en el margen',
      'Vista de Git con estado, staging, commits, ramas, diffs e historial',
      'Colores de sintaxis con tree-sitter, e ir a definición, renombrar y formatear con servidores de lenguaje',
      'Plugins en Lua y doce temas, entre ellos Gruvbox, Nord y Catppuccin',
    ],
  },
  {
    story: [
      'Morse es una app nativa de Wear OS para grupos pequeños que hablan sin hablar. Eliges una palabra, la envías y llega a los relojes de tus amigos como una vibración en Morse que pueden leer con el tacto, sin mirar la pantalla.',
      'Un grupo son hasta tres relojes. Una persona lo crea y comparte un código de 4 dígitos, los demás se unen por Wi-Fi Direct y desde ahí cada palabra suena en la muñeca de todos como un patrón háptico. Está hecha para lugares donde el teléfono o la voz estorban: una clase, una reunión, un teatro.',
      'Empezó como un proyecto universitario de diseño de interfaces.',
    ],
    highlights: [
      'Morse háptico a 120 ms por pulso, con puntos y rayas iluminados en pantalla al mismo ritmo',
      'Dictado: di una frase y la IA la condensa a 20 caracteres o menos',
      'Respuestas inteligentes según los últimos mensajes, en línea con Gemini o sin conexión con reglas propias',
      'Conexión por Wi-Fi Direct sin teléfono, cuenta ni internet',
      'Un SOS narrado para aprender el ritmo y una vibración única para cada evento',
      'Relojes redondos y cuadrados, inglés y español, texto grande y TalkBack',
    ],
  },
  {
    story: [
      'AloMedia es un editor de video en el navegador. Tiene una línea de tiempo multipista, vista previa en tiempo real y procesamiento de medios en el cliente con FFmpeg compilado a WebAssembly, así que se edita en el navegador sin subir tu material.',
      'Suma IA para transcribir el audio a subtítulos automáticamente y para limpiar el audio. El núcleo del editor trabaja con líneas de tiempo, clips y transformaciones de tiempo y espacio, y renderiza con FFmpeg en WASM o en un servidor de exportación dedicado.',
      'El proyecto es un híbrido: funciones puras y estado inmutable para la línea de tiempo, el historial y los filtros, y clases donde el navegador o FFmpeg guardan estado mutable, como el doble búfer de video y el contexto de audio.',
    ],
    highlights: [
      'Línea de tiempo multipista con reproducción en tiempo real y video con doble búfer sin cortes',
      'Deshacer y rehacer con dos pilas de transiciones de estado puras',
      'Búsqueda binaria sobre un índice de clips para hallar el clip activo en cada fotograma en O(log n)',
      'FFmpeg WASM en el cliente o un codificador en servidor para exportaciones más pesadas',
      'Subtítulos automáticos y limpieza de audio con un backend Spring Boot y un servicio de IA en Python',
    ],
  },
  {
    story: [
      'Un backend en Java hecho a partir de un problema real de una universidad: gestionar convenios entre la universidad y empresas. Maneja documentos y firmas digitales guardados en AWS S3, define más de cinco roles con distintos niveles de acceso y soporta varios tipos de convenio, cada uno con su propio flujo y reglas.',
      'Las peticiones pasan por revisión jurídica y firmas de campus y nacional antes de volverse convenio. Tareas programadas generan alertas de vencimiento y las renovaciones enlazan con el convenio original.',
    ],
    highlights: [
      'API REST en capas: controladores, servicios, repositorios de Spring Data, DTOs y mappers de MapStruct',
      'Documentos y firmas guardados en AWS S3',
      'Acceso por roles con Spring Security y JWT',
      'Alertas de vencimiento programadas y seguimiento de renovaciones',
      'Relaciones en cascada entre convenios, documentos y alertas para mantener los datos consistentes',
    ],
  },
  {
    story: [
      'Un simulador interactivo para analizar cómo se comportan aerodinámicamente los autos de carreras, y otros autos, a distintas velocidades. Se centra en el downforce y la suspensión, y muestra cómo cambian el rendimiento en pista los distintos parámetros.',
      'Ajustas un auto con controles deslizantes y las gráficas se actualizan en tiempo real. Una segunda página compara varias configuraciones lado a lado. Es una herramienta de referencia y enseñanza basada en condiciones de pista idealizadas.',
    ],
    highlights: [
      'Downforce calculado según la velocidad y la configuración del vehículo',
      'Comportamiento de la suspensión bajo carga aerodinámica',
      'Comparación lado a lado de varias configuraciones',
      'Gráficas interactivas con Chart.js y un módulo de física propio',
    ],
  },
  {
    story: ['Una aplicación web para agendar citas médicas, hecha con Django. Un proyecto pequeño para practicar un ciclo completo de petición: modelos, vistas, formularios y plantillas alrededor de la agenda.'],
    highlights: ['Agendamiento de citas con modelos, vistas y formularios de Django'],
  },
  {
    story: ['Un proyecto de física mecánica que modela la intercepción de una bomba lanzada desde un avión por un sistema antiaéreo. Usa aproximaciones matemáticas y SciPy para calcular valores como la fuerza y el ángulo de disparo óptimos, aplicando conceptos físicos reales.'],
    highlights: ['Aproximación numérica de la intercepción', 'Fuerza y ángulo de disparo óptimos calculados con SciPy'],
  },
]

// Spanish overrides text only; links, paths and tech names come from the English data.
export const es: Content = {
  ...en,
  profile: {
    ...en.profile,
    role: 'Desarrollador e ingeniero de software',
    tagline: 'Abierto a ideas, dispuesto a replantear las mías.',
    location: 'Colombia',
    pitch:
      'Desarrollador full stack movido por la curiosidad, siempre explorando IA, infraestructura y nuevas tecnologías. Me importan menos las herramientas que uso y más encontrar las correctas para construir mejores cosas.',
    facts: ['Colombia', '¡Abierto a trabajar!', 'en/es'],
  },
  navSections: [
    { id: 'intro', title: 'Inicio', time: '0:20' },
    { id: 'about', title: 'Sobre mí', time: '0:40' },
    { id: 'projects', title: 'Proyectos', time: '2:30' },
    { id: 'experience', title: 'Experiencia', time: '1:00' },
    { id: 'techs', title: 'Techs', time: '0:30' },
    { id: 'voices', title: 'Testimonios', time: '0:40' },
    { id: 'academic', title: 'Académico', time: '0:20' },
    { id: 'archive', title: 'El Archivo', time: '1:30' },
    { id: 'contact', title: 'Contacto', time: '0:10' },
  ],
  aboutParagraphs: [
    'Soy alguien constantemente curioso e interesado en aprender de cosas distintas, sobre todo de personas apasionadas por lo que hacen. Aunque soy más bien introvertido, disfruto de verdad conectar con la gente, compartir ideas y tener conversaciones que me muestran nuevas perspectivas.',
    'Fuera del software, me gusta seguir la Fórmula 1, explorar teorías e historias de las series y animes que sigo, y personalizar mi entorno Linux. Me gusta ajustar los pequeños detalles hasta que todo se sienta mío, desde los fondos y widgets hasta la distribución general.',
  ],
  aboutBento: {
    ...en.aboutBento,
    communityAlt: 'Juan Diego en un encuentro de una comunidad tech',
    online: { big: '2012', text: 'Mi primer paso al software: el viejo portátil de mi papá, internet sin restricciones y videojuegos.' },
    planB: { title: 'Antes del software', text: 'Antes del software me apasionaba la ciencia forense, y esa curiosidad nunca se fue del todo.' },
    likes: { title: 'Fuera de horario', items: ['Fórmula 1', 'Aprender guitarra y bajo', 'Explorar mundos de Minecraft', 'Teorías de series y anime'] },
    music: { ...en.aboutBento.music, title: 'En repetición', items: ['Garage punk', 'Metal de los 2000', 'Screamo'] },
  },
  projects: over(over(en.projects, [
    { blurb: 'Launcher de Minecraft de código abierto para Windows, Linux y macOS. Vanilla, Forge o Fabric, más biblioteca de addons, servidores locales, editor de skins y un asistente de IA integrado.' },
    { blurb: 'Pizarra Colaborativa. Comparte un código de seis caracteres y dibujen juntos con cursores en vivo. Disponible en web y Android.' },
    { blurb: 'Un editor de código ligero y rápido para la terminal, hecho en Go. Busca ser lo más cercano a VS Code en una terminal: teclas de siempre, proyectos de varias carpetas, Git y sesiones de IA integradas, con una fracción de la RAM.' },
    { blurb: 'App de Wear OS que permite a grupos pequeños de relojes hablar en código Morse háptico, con dictado por IA y respuestas inteligentes.' },
    { blurb: 'Editor de video en el navegador: línea de tiempo multipista, vista previa en tiempo real y procesamiento en el cliente con FFmpeg compilado a WebAssembly. Subtítulos automáticos y limpieza de audio con IA sobre un backend en Spring Boot.' },
    { name: 'Gestor de Convenios Universitarios', blurb: 'Backend para un problema real de una universidad: gestionar convenios con documentos y firmas digitales en AWS S3, más de 5 roles y flujos por convenio.' },
    { blurb: 'Un sitio para simular cómo se comportan aerodinámicamente distintos autos de carreras (y otros autos) a diferentes velocidades.' },
    { name: 'Agendador de Citas Médicas', blurb: 'Una aplicación web para agendar citas médicas, hecha con Django.' },
    { name: 'Simulador Antiaéreo', blurb: 'Proyecto de física que modela la intercepción de una bomba en caída. Usa SciPy y aproximaciones numéricas para hallar la fuerza y el ángulo de disparo óptimos.' },
  ]), esDetails),
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
    {
      role: 'Diseñador gráfico',
      work: 'Asesoría en diseño UI y desarrollo de videojuegos',
      quote: 'Juan me asesoró en diseño de interfaces y desarrollo de videojuegos. Logró que comprendiera los conceptos con claridad y que desarrollara la lógica de mi videojuego con eficacia.',
    },
    {
      role: 'Estudiante de Ingeniería Química',
      work: 'Matemáticas, análisis de datos y Python',
      quote: 'Estudiamos matemáticas juntos y Juan me ayudó con el análisis de datos en Python y R para mis proyectos de investigación. Gracias a su apoyo obtuve resultados relevantes y pude elaborar análisis y conclusiones pertinentes.',
    },
  ]),
  academicItems: over(en.academicItems, [
    { title: 'Inglés, C1', org: 'Cambridge Academy of Language, Pasto, Colombia', detail: 'Un curso de inglés de un año donde me certifiqué en B2, y luego un examen MCER que me certifica como hablante de inglés C1.', facts: ['Curso de 1 año: B2', 'Examen MCER: C1'] },
    { detail: 'Curso gratuito completado: servicios centrales de AWS, infraestructura global, seguridad, precios y el modelo de responsabilidad compartida.', facts: ['Curso completado', 'Fundamentos de la nube'] },
    { title: 'Ingeniería de Software', org: 'Universidad Cooperativa de Colombia', detail: 'Carrera de ingeniería de software, en curso.', facts: ['Ago 2024 – presente'] },
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
  ui: {
    switchLang: { short: 'EN', name: 'English' },
    theme: { dark: 'Cambiar a tema oscuro', light: 'Cambiar a tema claro' },
    seeProjects: 'Ver los proyectos',
    emailMe: 'Escríbeme',
    cv: { label: 'Descargar CV', href: '/cv-es.pdf' },
    moreProjects: 'Más proyectos',
    moreInfo: 'Ver detalles',
    close: 'Cerrar',
    story: 'La historia',
    highlights: 'Lo más destacado',
    stack: 'Stack',
    links: 'Enlaces',
    shot: (n: number, total: number) => `Imagen ${n} de ${total}`,
    video: 'Video',
    play: 'Reproducir',
    pause: 'Pausar',
    mute: 'Silenciar',
    unmute: 'Activar sonido',
    seek: 'Buscar',
    fullscreen: 'Pantalla completa',
    mainTechs: 'Techs principales',
    livePreview: 'Vista en vivo',
    repository: 'Repositorio',
    testimonials: 'Testimonios',
    placeholder: 'Provisional',
    certificateHere: 'El certificado va aquí',
    certificateAlt: (title) => `Certificado de ${title}`,
    verify: 'Verificar credencial',
    experienceNote: 'Freelance desde 2025 y soporte de TI desde 2024.',
    archivePrompt: 'Abre el archivo: escribe help, o simplemente haz clic en los nombres.',
    contactCta: 'Construyamos algo.',
    footer: {
      explore: 'Explorar',
      findMe: 'Encuéntrame',
      about: 'Sobre este sitio',
      builtWith: 'Hecho con Next.js, TypeScript y Tailwind CSS',
      fonts: 'Fuentes: Bricolage Grotesque, JetBrains Mono, Permanent Marker',
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
