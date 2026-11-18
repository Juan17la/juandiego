// All site content lives here. Edit this file, not the components.
// Anything marked `placeholder: true` renders with a visible PLACEHOLDER stamp until replaced with real material.

export const profile = {
  name: 'Juan Diego',
  role: 'Software developer & engineer',
  tagline: 'Open to ideas, willing to rethink my own.',
  location: 'Colombia',
  pitch:
    'Full-stack developer driven by curiosity, constantly exploring AI, infrastructure, and new technologies. I care less about the tools I use and more about finding the right ones to build better things.',
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
  'I’m someone who’s constantly curious and interested in learning about different things, especially from people who are passionate about what they do. Although I’m more of an introvert, I genuinely enjoy connecting with people, sharing ideas, and having conversations that introduce me to new perspectives.',
  'Outside software, I enjoy keeping up with Formula 1, exploring theories and stories from the series and anime I follow, and personalizing my Linux environment. I like tweaking the little details until everything feels like my own, from the wallpapers and widgets to the overall layout.',
]

// About bento: photos in /public/photos plus a few personal tiles.
// `community`, `cars`, `anime` and `music.albums` each rotate inside their own tile.
// Car photos: Wikimedia Commons (Lotus Exige: exfordy, CC BY 2.0; Mercedes W12: Lukas Raich, CC BY-SA 4.0; Ferrari 296 GT3: Alexander-93, CC BY-SA 4.0; Valkyrie: Calreyn88, CC BY-SA 4.0).
// Anime covers and album art belong to their publishers and are shown as small illustrations of taste.
export const aboutBento = {
  photo: '/photos/photo.jpeg',
  community: ['/photos/1783117172005.jpeg', '/photos/1778003933249.jpeg', '/photos/1778177775745.jpeg', '/photos/1778177667228.jpeg'],
  communityAlt: 'Juan Diego at a tech community meetup',
  cars: [
    { src: '/cars/lotus-exige-gt3.jpg', caption: 'Lotus Exige GT3, 2009' },
    { src: '/cars/mercedes-w12.jpg', caption: 'Mercedes W12, 2021' },
    { src: '/cars/ferrari-296-gt3.jpg', caption: 'Ferrari 296 GT3' },
    { src: '/cars/valkyrie-lmh.jpg', caption: 'Aston Martin Valkyrie AMR-LMH' },
  ],
  anime: [
    { src: '/anime/naruto.jpg', title: 'Naruto' },
    { src: '/anime/mha.png', title: 'My Hero Academia' },
    { src: '/anime/chainsaw-man.jpg', title: 'Chainsaw Man' },
    { src: '/anime/claymore.jpg', title: 'Claymore' },
    { src: '/anime/tokyo-ghoul.jpg', title: 'Tokyo Ghoul' },
    { src: '/anime/blood-c.jpg', title: 'Blood-C' },
    { src: '/anime/lain.jpg', title: 'Serial Experiments Lain' },
  ],
  online: { big: '2012', text: 'My first step into software: my dad’s old laptop, unrestricted internet access and videogames.' },
  planB: { title: 'Before software', text: 'Before software, I wanted to study criminology or forensic science, which I found fascinating. I chose software because of the skills I had in tech.' },
  likes: { title: 'Off the clock', items: ['Formula 1', 'Learning guitar & bass', 'Exploring Minecraft worlds', 'Series & anime theories'] },
  music: {
    title: 'On repeat',
    items: ['Garage punk', '2000s metal', 'Screamo'],
    albums: [
      { src: '/albums/riot.jpg', title: 'Riot!', artist: 'Paramore', song: 'That’s What You Get' },
      { src: '/albums/edge-of-your-seat.jpg', title: 'This Is What the Edge of Your Seat Was Made For', artist: 'Bring Me the Horizon', song: 'Who Wants Flowers When You’re Dead? Nobody.' },
      { src: '/albums/silverstein.jpg', title: 'Discovering the Waterfront', artist: 'Silverstein', song: 'Already Dead' },
      { src: '/albums/hawthorne.jpg', title: 'The Silence in Black and White', artist: 'Hawthorne Heights', song: 'Niki FM' },
      { src: '/albums/let-go.jpg', title: 'Let Go', artist: 'Avril Lavigne', song: 'Complicated' },
    ],
  },
}

export type Link = { label: string; href: string }

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
  // Promo video in /public/project_videos; shown first in the project modal.
  video?: string
  // Third shot is a phone screenshot: shown as a tall card instead of a landscape one.
  portraitFront?: boolean
  logo?: string
  // Modal content, taken from each public README at github.com/Juan17la.
  story: string[]
  highlights: string[]
  stack: string[]
  links: Link[]
}

const gh = (r: string) => `https://github.com/Juan17la/${r}`

type Brief = Omit<Project, 'story' | 'highlights' | 'stack' | 'links'>
const L = (label: string, href: string): Link => ({ label, href })

const base: Brief[] = [
  {
    name: 'Udeos Launcher',
    blurb: 'Open-source Minecraft launcher for Windows, Linux and macOS. Vanilla, Forge or Fabric, plus an addons library, local servers, a skin editor and a built-in AI assistant.',
    techs: ['Go', 'Desktop', 'AI'],
    repo: gh('Udeos_Launcher'),
    preview: 'https://udeouslauncherwebsite.pages.dev/#download',
    image: '/projects/udeos.webp',
    video: '/project_videos/udeos-launcher-promo-creator.mp4',
    shots: ['/projects/udeos/1.webp', '/projects/udeos/2.webp', '/projects/udeos/3.webp'],
  },
  {
    name: 'Shareboard',
    blurb: 'Collaborative whiteboard, no account needed. Share a six-character code and draw together with live cursors. Works offline, on web and Android.',
    techs: ['TypeScript', 'React Native', 'Realtime'],
    repo: gh('shareboard_web'),
    preview: 'https://shareboard-web.vercel.app/about',
    image: '/projects/shareboard.webp',
    video: '/project_videos/shareboard-promo.mp4',
    shots: ['/projects/shareboard/1.webp', '/projects/shareboard/2.webp', '/projects/shareboard/3.webp'],
    portraitFront: true,
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
    video: '/project_videos/morse-promo.mp4',
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
    image: '/projects/agreements.webp',
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

// One entry per `base` project, same order. Spanish lives in lib/content.ts.
const details: Pick<Project, 'story' | 'highlights' | 'stack' | 'links'>[] = [
  {
    story: [
      'Udeos is a Minecraft: Java Edition launcher for players who just want to play. There is no sign-in screen and nothing to configure: you type a nickname, create an instance for any version of the game and the launcher downloads everything it needs, Java included.',
      'Each instance is its own little world, with its own worlds, mods, resource packs and settings, so a heavily modded pack never touches a vanilla survival save. When you want more, the launcher finds it for you: thousands of mods, shaders and modpacks from Modrinth are one click away.',
      'It runs on Windows, Linux and macOS, keeps everything on your computer, and is released as open source under the MIT licence.',
    ],
    highlights: [
      'Every release, snapshot and classic version, with the right Java runtime downloaded for you',
      'Fabric, Quilt, Forge and NeoForge install themselves',
      'Modrinth browser with compatibility and dependency checks before anything is installed',
      'Ask AI: describe a problem in plain words and get a short list of real mods that fit',
      'One-minute servers with a shareable internet address, plus a 3D skin editor and library',
      'Profiles for the whole family, each with its own instances, skins, language and theme',
    ],
    stack: ['Go', 'Wails', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [L('Repository', gh('Udeos_Launcher')), L('Download site', 'https://udeouslauncherwebsite.pages.dev/#download'), L('Releases', gh('Udeos_Launcher/releases')), L('Website repo', gh('UdeousLauncherWebsite'))],
  },
  {
    story: [
      'Shareboard is a collaborative whiteboard that opens ready to draw. Pick the pencil and sketch; when you want company, press Share and send a six-character code, a link or a QR code. Everyone who opens it draws on the same board at the same time and sees each other’s cursors live.',
      'There is nothing to sign up for. Your first board lives on your device and works without internet, and sharing it puts a copy online, public or protected with a PIN, with control over who can edit and who can only watch.',
      'It is three projects working together: this React web app, a React Native Android app, and a Fastify server that handles REST and a WebSocket for live sync, with boards written behind to MongoDB.',
    ],
    highlights: [
      'Infinite canvas with pencil smoothing, shapes, arrows, text and pictures',
      'Arrows snap to figures and follow them, with 15 end styles including database crow’s feet',
      'Hold still on a rough scribble and it becomes a clean shape',
      'Draw with AI: describe a login flow and get an editable drawing with a preview',
      'PNG, JPG, SVG or JSON exports that carry the board inside, so they import back editable',
      'Offline-first, light and dark boards, English and Spanish',
    ],
    stack: ['TypeScript', 'React', 'React Native', 'Fastify', 'Node.js', 'MongoDB'],
    links: [L('Live app', 'https://shareboard-web.vercel.app'), L('Web repo', gh('shareboard_web')), L('Android repo', gh('shareboard_mobile')), L('Server repo', gh('shareboard_server')), L('Android releases', gh('shareboard_mobile/releases'))],
  },
  {
    story: [
      'LazyCode is a code editor that runs in your terminal, made for writing code next to AI tools. It sits between VS Code and Neovim: you edit with the keys you already know, with no modes to learn, and it runs anywhere a terminal does, from a laptop to a server over SSH.',
      'It is built around a way of working most editors were not designed for: an AI coding tool does part of the work while you watch, review and steer. LazyCode runs those tools in its own tabs next to your code and shows what they change as they change it.',
      'It ships as one small program of about 22 MB with nothing else to install, no telemetry, and an MIT licence.',
    ],
    highlights: [
      'Projects made of several folders, switched with one key press',
      'Claude Code, OpenCode, Codex or any command-line tool in a tab, with per-project sessions that sleep and resume',
      'Edits by AI tools appear live and the changed lines are marked in the margin',
      'Git view with status, staging, commits, branches, diffs and history',
      'Syntax colours through tree-sitter, and go to definition, rename and format through language servers',
      'Lua plugins and twelve themes, including Gruvbox, Nord and Catppuccin',
    ],
    stack: ['Go', 'Lua', 'Git', 'Linux'],
    links: [L('Repository', gh('lazycode')), L('Latest release', gh('lazycode/releases/latest'))],
  },
  {
    story: [
      'Morse is a native Wear OS app for small groups that talk without speaking. Pick a word, send it, and it arrives on your friends’ watches as a Morse vibration they can read by feel, with no need to look at the screen.',
      'A group is up to three watches. One person creates it and shares a 4-digit code, the others join over Wi-Fi Direct, and from then on every word plays on everyone’s wrist as a haptic pattern. It is made for places where phones or voices are out of place: a class, a meeting, a theatre.',
      'It started as a university interface-design project.',
    ],
    highlights: [
      'Haptic Morse at 120 ms per beat, with the dots and dashes lit up on screen in sync',
      'Dictation: say a sentence and AI condenses it to 20 characters or fewer',
      'Smart replies from the latest messages, online with Gemini or offline with built-in rules',
      'Connection over Wi-Fi Direct with no phone, account or internet needed',
      'A narrated SOS to learn the rhythm, and a unique vibration for each event',
      'Round and square watches, English and Spanish, large text and TalkBack',
    ],
    stack: ['Kotlin', 'Wear OS', 'Android', 'Gemini'],
    links: [L('Repository', gh('Morse'))],
  },
  {
    story: [
      'AloMedia is a browser-based video editor. It has a multi-track timeline, real-time preview and client-side media processing powered by FFmpeg compiled to WebAssembly, so editing happens in the browser without uploading your footage.',
      'It adds AI for automatic audio transcription into subtitles and for audio cleanup. The core of the editor works on timelines, clips and time and space transforms, and renders through FFmpeg either in WASM or on a dedicated export server.',
      'The project is a hybrid: pure functions and immutable state for the timeline, history and filters, and classes where the browser or FFmpeg hold mutable state, such as the video double buffer and the audio context.',
    ],
    highlights: [
      'Multi-track timeline with real-time playback and gapless double-buffered video',
      'Undo and redo built on two stacks of pure state transitions',
      'Binary search over a clip index so the active clip is found each frame in O(log n)',
      'FFmpeg WASM on the client or a server encoder for heavier exports',
      'Auto-subtitles and audio cleanup through a Spring Boot backend and a Python AI service',
    ],
    stack: ['React', 'TypeScript', 'WASM', 'FFmpeg', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'Python'],
    links: [L('Live app', 'https://alo-media.vercel.app'), L('Frontend repo', gh('AloMediaReact')), L('Spring Boot repo', gh('AloMediaSpringBoot')), L('Export server repo', gh('AloMediaServerExport')), L('AI service repo', gh('AlomediaAI'))],
  },
  {
    story: [
      'A Java backend built from a real university problem: managing agreements between the university and companies. It handles documents and digital signatures stored on AWS S3, defines more than five roles with different access levels, and supports several types of agreement, each with its own workflow and rules.',
      'Requests flow through legal review and campus and national signatures before becoming an agreement. Scheduled jobs raise expiry alerts, and renewals link back to the original agreement.',
    ],
    highlights: [
      'REST API in layers: controllers, services, Spring Data repositories, DTOs and MapStruct mappers',
      'Documents and signatures stored on AWS S3',
      'Role-based access with Spring Security and JWT',
      'Scheduled expiry alerts and renewal tracking',
      'Cascading relations between agreements, documents and alerts to keep data consistent',
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS S3'],
    links: [L('Repository', gh('UniversityAgreementManager'))],
  },
  {
    story: [
      'An interactive simulator to analyse how race cars, and other cars, behave aerodynamically at different speeds. It focuses on downforce and suspension, and shows how different parameters change performance on track.',
      'You adjust a car with sliders and the charts update in real time. A second page compares several configurations side by side. It is a reference and teaching tool built on idealised track conditions.',
    ],
    highlights: [
      'Downforce calculated from speed and vehicle configuration',
      'Suspension behaviour under aerodynamic load',
      'Side-by-side comparison of several car setups',
      'Interactive charts with Chart.js and a custom physics module',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    links: [L('Live site', 'https://juan17la.github.io/Downforce-Analitics/'), L('Repository', gh('Downforce-Analitics'))],
  },
  {
    story: [
      'A web application for booking medical appointments, built with Django. A small project to practise a full request cycle: models, views, forms and templates around scheduling.',
    ],
    highlights: ['Appointment booking built on Django models, views and forms'],
    stack: ['Python', 'Django'],
    links: [L('Repository', gh('AgendadorCitasMedicas'))],
  },
  {
    story: [
      'A mechanical physics project that models the interception of a bomb dropped from an aircraft by an anti-aircraft system. It uses mathematical approximations and SciPy to compute values such as the optimal force and firing angle, applying real physical concepts.',
    ],
    highlights: ['Numerical approximation of the interception', 'Optimal firing force and angle computed with SciPy'],
    stack: ['Python', 'SciPy'],
    links: [L('Repository', gh('AntiAircraftSimulator'))],
  },
]

export const projects: Project[] = base.map((b, i) => ({ ...b, ...details[i] }))

export const techs = {
  main: ['React', 'TypeScript', 'Go', 'Spring Boot', 'PostgreSQL'],
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
    quote: 'Juan mentored me in UI design and videogame development. He helped me understand the concepts clearly and develop the logic of my game effectively.',
  },
  {
    name: 'Alan Cañar',
    role: 'Chemical Engineering student',
    work: 'Maths, data analysis and Python',
    quote: 'We studied maths together, and Juan helped me with data analysis in Python and R for my research projects. With his help I got relevant results and could draw sound analyses and conclusions.',
  },
  {
    name: 'Carlos Bastidas',
    role: 'Medicine student',
    work: 'Study and tech help',
    quote: 'Juan helped me with a few things and made them simple. Patient, clear and always willing to help.',
  },
]

// certificate: path in /public (e.g. '/certs/aws.webp'); credentialUrl: optional verify link.
export type AcademicItem = { title: string; org: string; detail: string; facts: string[]; placeholder?: boolean; certificate?: string; credentialUrl?: string }

export const academicItems: AcademicItem[] = [
  {
    title: 'English, C1',
    org: 'Cambridge Academy of Language, Pasto, Colombia',
    detail: 'A one-year English course where I got certified at B2, then an MCER exam that certifies me as a C1 English speaker.',
    facts: ['1-year course: B2', 'MCER exam: C1'],
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
  {
    title: 'Software Engineering Major',
    org: 'Universidad Cooperativa de Colombia',
    detail: 'Undergraduate software engineering degree, in progress.',
    facts: ['Aug 2024 – present'],
    certificate: '',
    credentialUrl: '',
  },
]

// A timeline entry: a role or a project (`project` links to its card when set).
export type ExperienceItem = { when: string; title: string; where: string; text?: string; project?: string }

export const experienceItems: ExperienceItem[] = [
  { when: '2026', title: 'LazyCode', where: 'Project', project: 'LazyCode', text: 'Built a terminal code editor for working with AI tools.' },
  { when: '2026', title: 'Udeos Launcher', where: 'Project', project: 'Udeos', text: 'Built a Minecraft launcher in Go with a download site.' },
  { when: '2026', title: 'Shareboard', where: 'Project', project: 'Shareboard', text: 'Built a realtime collaborative board for web and mobile.' },
  { when: '2026', title: 'AloMedia', where: 'Project', project: 'AloMedia', text: 'Built a browser video editor with FFmpeg in WebAssembly.' },
  {
    when: 'Aug 2024 – present',
    title: 'IT support',
    where: 'Schools',
    text: 'Basic IT support for schools: setting up and maintaining computers, installing software, troubleshooting network and printer issues, and helping staff and students day to day.',
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
  cv: { label: 'Download CV', href: '/Juan-Lopez-CV.pdf' },
  moreProjects: 'More projects',
  moreInfo: 'View details',
  close: 'Close',
  story: 'The story',
  highlights: 'Highlights',
  stack: 'Stack',
  links: 'Links',
  shot: (n: number, total: number) => `Image ${n} of ${total}`,
  video: 'Video',
  play: 'Play',
  pause: 'Pause',
  mute: 'Mute',
  unmute: 'Unmute',
  seek: 'Seek',
  fullscreen: 'Full screen',
  mainTechs: 'Main techs',
  livePreview: 'Live preview',
  repository: 'Repository',
  testimonials: 'Testimonials',
  placeholder: 'Placeholder',
  certificateHere: 'Certificate goes here',
  certificateAlt: (title: string) => `${title} certificate`,
  verify: 'Verify credential',
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
