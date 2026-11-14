// All site content lives here. Edit this file, not the components.
// Anything marked `placeholder: true` renders with a visible PLACEHOLDER stamp until replaced with real material.

export const profile = {
  name: 'Juan Diego',
  role: 'Software developer & engineer',
  tagline: 'Just do it.',
  location: 'Colombia',
  pitch:
    'I’m a software engineer who likes building applications that look good, are useful and try something new, mostly full stack. I care just as much about the logic underneath: business rules, data processing and making the whole thing feel easy and smooth.',
  facts: ['Colombia', 'Open to work!', 'en/es'],
}

export type NavSection = { id: string; title: string; time: string }

// Page order = contents order. `time` is the section's read time.
export const navSections: NavSection[] = [
  { id: 'intro', title: 'Intro', time: '0:20' },
  { id: 'about', title: 'About me', time: '0:40' },
  { id: 'projects', title: 'Projects', time: '2:30' },
  { id: 'experience', title: 'Experience', time: '1:00' },
  { id: 'techs', title: 'Techs', time: '0:30' },
  { id: 'voices', title: 'Testimonials', time: '0:40' },
  { id: 'academic', title: 'Academic', time: '0:20' },
  { id: 'archive', title: 'The Archive', time: '1:30' },
  { id: 'contact', title: 'Contact', time: '0:10' },
]

// Kept short on purpose: the bento tiles carry the rest.
export const aboutParagraphs = [
  'In 2012 my dad lent me his laptop and I fell into the internet: YouTube, forums, horror visual novels and game modding. Basic HTML and PSeInt at school showed me what was behind it all.',
  'Now I customize Linux, watch Formula 1 and get lost in horror and true crime. I’ve always wanted to know how things work underneath.',
]

// About bento: photos in /public/photos plus a few personal tiles.
export const aboutBento = {
  photos: ['/photos/photo.jpeg', '/photos/photo3.jpeg', '/photos/photo10.jpeg', '/photos/photo5.jpeg'],
  online: { big: '2012', text: 'Online since my dad’s Windows XP laptop.' },
  planB: { title: 'Plan B', text: 'Criminology and forensics, before I chose software.' },
  likes: { title: 'Off the clock', items: ['Formula 1', 'Linux ricing', 'Horror', 'True crime'] },
  music: { title: 'On repeat', items: ['Garage punk', '2000s metal', 'Screamo'] },
}

export type Project = {
  name: string
  blurb: string
  techs: string[]
  repo: string
  preview?: string
  // Screenshot path in /public, e.g. '/projects/udeos.webp'. Without one, `logo` (an SVG mark) is shown.
  image?: string
  // Featured projects: three screenshots, stacked as cards. First is the hero shot.
  shots?: string[]
  logo?: string
}

const gh = (r: string) => `https://github.com/Juan17la/${r}`

export const projects: Project[] = [
  {
    name: 'Udeos Launcher',
    blurb: 'Open-source Minecraft launcher for Windows, Linux and macOS. Vanilla, Forge or Fabric, plus an addons library, local servers, a skin editor and a built-in AI assistant.',
    techs: ['Go', 'Desktop', 'AI'],
    repo: gh('Udeos_Launcher'),
    preview: 'https://udeouslauncherwebsite.pages.dev/#download',
    image: '/projects/udeos.webp',
    shots: ['/projects/udeos/1.webp', '/projects/udeos/2.webp', '/projects/udeos/3.webp'],
  },
  {
    name: 'Shareboard',
    blurb: 'Collaborative whiteboard, no account needed. Share a six-character code and draw together with live cursors. Works offline, on web and Android.',
    techs: ['TypeScript', 'React Native', 'Realtime'],
    repo: gh('shareboard_web'),
    preview: 'https://shareboard-web.vercel.app/about',
    image: '/projects/shareboard.webp',
    shots: ['/projects/shareboard/1.webp', '/projects/shareboard/2.webp', '/projects/shareboard/3.webp'],
  },
  {
    name: 'LazyCode',
    blurb: 'A light, fast code editor for the terminal, written in Go. Aims to be the closest thing to VS Code in a terminal: ordinary keys, multi-folder projects, Git and AI sessions built in, on a fraction of the RAM.',
    techs: ['Go', 'TUI', 'Lua'],
    repo: gh('lazycode'),
    image: '/projects/lazycode/1.webp',
    shots: ['/projects/lazycode/1.webp', '/projects/lazycode/2.webp', '/projects/lazycode/3.webp'],
  },
  {
    name: 'Morse',
    blurb: 'Wear OS app that lets small groups of smartwatches talk in haptic Morse code, with AI dictation and smart replies.',
    techs: ['Kotlin', 'Wear OS', 'AI'],
    repo: gh('Morse'),
    image: '/projects/morse.webp',
    logo: '/projects/morse-logo.svg',
  },
  {
    name: 'AloMedia',
    blurb: 'Browser-based non-linear video editor: multi-track timeline, real-time preview and client-side processing with FFmpeg compiled to WebAssembly. Auto-subtitles and AI audio cleanup on a Spring Boot backend.',
    techs: ['React', 'WASM', 'Spring Boot', 'PostgreSQL'],
    repo: gh('AloMediaReact'),
    preview: 'https://alo-media.vercel.app',
    image: '/projects/alomedia.webp',
  },
  {
    name: 'University Agreement Manager',
    blurb: 'Backend for a real university problem: managing agreements with documents and digital signatures on AWS S3, 5+ roles and per-agreement workflows.',
    techs: ['Java', 'Spring Boot', 'AWS S3'],
    repo: gh('UniversityAgreementManager'),
    logo: '/projects/agreements-logo.svg',
  },
  {
    name: 'Downforce Analytics',
    blurb: 'A website for simulating how different race cars (and other kinds of cars) behave aerodynamically at different speeds.',
    techs: ['JavaScript', 'HTML', 'Aerodynamics'],
    repo: gh('Downforce-Analitics'),
    image: '/projects/downforce.webp',
    logo: '/projects/downforce-logo.svg',
  },
  {
    name: 'Medical Appointment Scheduler',
    blurb: 'A web app for scheduling medical appointments, built with Django.',
    techs: ['Python', 'Django'],
    repo: gh('AgendadorCitasMedicas'),
    image: '/projects/scheduler.webp',
    logo: '/projects/scheduler-logo.svg',
  },
  {
    name: 'Anti-Aircraft Simulator',
    blurb: 'Physics project modelling the interception of a falling bomb. Uses SciPy and numerical approximations to find the optimal firing force and angle.',
    techs: ['Python', 'SciPy', 'Physics'],
    repo: gh('AntiAircraftSimulator'),
    image: '/projects/aaa.webp',
    logo: '/projects/aaa-logo.svg',
  },
]

export const techs = {
  main: ['TypeScript', 'React', 'Node.js', 'Tailwind CSS'],
  groups: [
    { title: 'Languages and frameworks', items: ['Python', 'Go', 'Java', 'Kotlin', 'React Native', 'Next.js', 'NestJS', 'Fastify', 'Django', 'Spring Boot'] },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { title: 'Cloud and infrastructure', items: ['AWS', 'Docker', 'GitHub Actions', 'Nginx', 'Git'] },
    { title: 'Operating systems', items: ['Linux', 'Arch Linux', 'Debian', 'Ubuntu'] },
    { title: 'AI tools', items: ['Claude Code', 'OpenAI', 'Gemini', 'OpenCode'] },
    { title: 'Workflow and design', items: ['Postman', 'Notion', 'Jira', 'Trello', 'Excalidraw'] },
  ],
}

export type Testimonial = { name: string; role: string; work?: string; quote: string; placeholder?: boolean }

export const testimonials: Testimonial[] = [
  {
    name: 'Emmanuel Gomez',
    role: 'Graphic Designer',
    work: 'UI design and game development mentoring',
    quote: 'Juan mentored me in UI design and videogame development. He explains with patience and always finds a way to make the idea work on screen.',
  },
  {
    name: 'Alan Cañar',
    role: 'Chemical Engineering student',
    work: 'Maths, data analysis and Python',
    quote: 'We studied maths together, and Juan helped me with data analysis and Python. He made programming feel approachable and useful for my own field.',
  },
]

// certificate: path in /public (e.g. '/certs/aws.webp'); credentialUrl: optional verify link.
export type AcademicItem = { title: string; org: string; detail: string; facts: string[]; placeholder?: boolean; certificate?: string; credentialUrl?: string }

export const academicItems: AcademicItem[] = [
  {
    title: 'English, intensive course',
    org: 'Institution name',
    detail: 'Intensive English course, certified by an international exam.',
    facts: ['Exam: name + score', 'Level: CEFR level'],
    placeholder: true,
    certificate: '',
    credentialUrl: '',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    org: 'AWS Skill Builder',
    detail: 'Completed the free course: core AWS services, global infrastructure, security, pricing and the shared responsibility model.',
    facts: ['Course completed', 'Cloud fundamentals'],
    certificate: '',
    credentialUrl: '',
  },
]

// A role, with the work done under it (empty when there's nothing to list).
export type ExperienceItem = { when: string; title: string; where: string; text: string; work: { name: string; text: string }[] }

export const experienceItems: ExperienceItem[] = [
  {
    when: 'Aug 2025 – present',
    title: 'Freelance software developer',
    where: 'Independent',
    text: 'Designing, building and shipping products end to end: web, mobile, desktop and the servers behind them.',
    work: [
      { name: 'Udeos Launcher', text: 'Cross-platform Go launcher with mod loaders, a skin editor and an AI assistant, plus its download site.' },
      { name: 'Shareboard', text: 'Realtime collaborative board across three repos: React web, React Native app and a TypeScript server.' },
      { name: 'Morse', text: 'Wear OS app for haptic Morse messaging between smartwatches, with AI dictation and smart replies.' },
      { name: 'AloMedia', text: 'FFmpeg in WebAssembly on the client, Spring Boot and PostgreSQL for projects, and a Python service for AI audio and subtitles.' },
      { name: 'Agreement Manager', text: 'Role-based workflows, document storage and digital signatures on AWS S3 for real university agreements.' },
    ],
  },
  {
    when: 'Aug 2024 – present',
    title: 'IT support',
    where: 'Schools',
    text: 'Basic IT support for schools: setting up and maintaining computers, installing software, troubleshooting network and printer issues, and helping staff and students day to day.',
    work: [],
  },
]

export const archive = {
  // The story, in order: how the internet taught me to build.
  path: [
    { title: 'The Acer laptop', text: 'Windows XP, a slow connection and unlimited curiosity. YouTube and forums were my school.' },
    { title: 'Minecraft cities', text: 'Months at a time planning and building cities. My first lesson in patience, layout and finishing what I start.' },
    { title: 'Creepypastas and FNaF theories', text: 'Hours inside lore, timelines and “wait, that doesn’t add up” threads. Reading systems closely is a habit I kept.' },
    { title: 'My own mods', text: 'Some were copies, some were really bad, all were mine. The first time I changed how something worked instead of just using it.' },
    { title: 'Fanfics', text: 'When an anime went the wrong way I went and read, then wrote, a better one. Mostly Naruto and My Hero Academia. I learned to make things mine.' },
    { title: 'Linux and rice', text: 'Distros, customised until they felt right, and consistent down to the smallest detail. That’s where logic and making-it-mine meet.' },
  ],
  groups: [
    {
      title: 'Watching and playing',
      items: ['Formula 1', 'Minecraft', 'Roblox', 'Cry of Fear', 'Five Nights at Freddy’s', 'Horror and terror visual novels', 'Naruto, My Hero Academia'],
    },
    {
      title: 'On repeat',
      items: ['Garage punk', '2000s metal', 'Screamo'],
    },
  ],
  ticker: ['Formula 1', 'Minecraft', 'Garage punk', 'FNaF', '2000s metal', 'Screamo', 'Horror visual novels', 'Linux', 'Roblox', 'Cry of Fear'],
}

export const contacts = {
  email: 'jdloar17@gmail.com',
  github: 'https://github.com/Juan17la',
  linkedin: 'https://www.linkedin.com/in/juan07diego',
}

// Interface strings. Spanish lives in lib/content.ts.
export const ui = {
  switchLang: { short: 'ES', name: 'Español' },
  theme: { dark: 'Switch to dark theme', light: 'Switch to light theme' },
  seeProjects: 'See the projects',
  emailMe: 'Email me',
  cv: { label: 'Download CV', href: '/cv.pdf' },
  moreProjects: 'More projects',
  mainTechs: 'Main techs',
  livePreview: 'Live preview',
  repository: 'Repository',
  testimonials: 'Testimonials',
  placeholder: 'Placeholder',
  certificateHere: 'Certificate goes here',
  certificateAlt: (title: string) => `${title} certificate`,
  verify: 'Verify credential',
  techsNote: 'I’ve worked with all of these, though I’m not an expert in every one.',
  experienceNote: 'Freelancing since 2025, and IT support since 2024.',
  archivePrompt: 'Open the archive: type help, or just click the names.',
  contactCta: 'Let’s build something.',
  footer: {
    explore: 'Explore',
    findMe: 'Find me',
    about: 'About this site',
    builtWith: 'Built with Next.js, TypeScript and Tailwind CSS',
    fonts: 'Fonts: Bricolage Grotesque, JetBrains Mono, Permanent Marker',
    top: 'Back to the top',
    thanks: 'Thanks for scrolling.',
  },
  terminal: {
    motd: [
      "Acer Aspire, Windows XP, and a slow connection.",
      "Somewhere between Minecraft mods and Linux, I started learning how computers work.",
      "",
      "Type 'help' to see what you can do."
    ],
    help: [
      "This works like a tiny Linux terminal.",
      "",
      "  ls            list what is in this folder (ls -a shows hidden)",
      "  cd <folder>   go into a folder         cd ..   go back one level",
      "  cd            go home                  pwd     where am I?",
      "  cat <file>    read a note",
      "  tree          show every folder and file",
      "  fastfetch     the system I use now",
      "  clear         clean the screen",
      "",
      "Tab completes names. Arrow up repeats commands. You can also just click names."
    ],
  },
}
