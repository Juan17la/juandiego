// All site content lives here. Edit this file, not the components.
// Anything marked `placeholder: true` renders with a visible PLACEHOLDER stamp until replaced with real material.

export const profile = {
  name: 'Juan Diego',
  role: 'Software developer & engineer',
  tagline: 'I want to have Jarvis in Claude Code.',
  location: 'Colombia',
  pitch:
    'I build things most people wouldn’t bother to: a Go desktop launcher, a video editor that runs FFmpeg in your browser, a smartwatch app that talks in Morse. Current tech, real products, good company.',
  // Photos: drop files in /public and set paths, e.g. '/photos/me.webp'. Empty = placeholder frame.
  photos: { hero: '', about: '', online: '' },
  facts: ['Colombia', 'Software development', 'Looking for a job'],
}

export type Section = { id: string; title: string; time: string }

// Page order = contents order. `time` is the section's read time.
export const sections: Section[] = [
  { id: 'intro', title: 'Intro', time: '0:20' },
  { id: 'about', title: 'About me', time: '0:40' },
  { id: 'projects', title: 'Projects', time: '2:30' },
  { id: 'stack', title: 'Technologies I’ve used', time: '0:30' },
  { id: 'voices', title: 'Voices', time: '0:40' },
  { id: 'academic', title: 'Academic', time: '0:20' },
  { id: 'experience', title: 'Experience', time: '1:00' },
  { id: 'beyond', title: 'The Acer Archive', time: '1:30' },
  { id: 'contact', title: 'Contact', time: '0:10' },
]

export const about = [
  'I’m a software engineering student from Colombia who learns by building. I work mostly with TypeScript, React and Node, and reach for Java/Spring Boot, Python, Kotlin or Go when the problem asks for it.',
  'I sit somewhere between logic and making things mine. I like clean backend design, tools that feel good to use, and shipping things people can actually open and try. I like patterns, and I like when everything follows them.',
  'You’ll see it everywhere: my Linux setups, the cities I built in Minecraft for months, the fanfics I wrote when an anime went somewhere I didn’t like. I’m the person who will rewrite the ending, then build the tool to do it.',
]

export type Project = {
  name: string
  blurb: string
  stack: string[]
  repo: string
  preview?: string
  // Screenshot path in /public, e.g. '/projects/udeos.webp'. Without one, `logo` (an SVG mark) is shown.
  image?: string
  logo?: string
}

const gh = (r: string) => `https://github.com/Juan17la/${r}`

export const projects: Project[] = [
  {
    name: 'Udeos Launcher',
    blurb: 'Open-source Minecraft launcher for Windows, Linux and macOS. Vanilla, Forge or Fabric, plus an addons library, local servers, a skin editor and a built-in AI assistant.',
    stack: ['Go', 'Desktop', 'AI'],
    repo: gh('Udeos_Launcher'),
    preview: 'https://udeouslauncherwebsite.pages.dev/#download',
    image: '/projects/udeos.webp',
  },
  {
    name: 'AloMedia',
    blurb: 'Browser-based non-linear video editor: multi-track timeline, real-time preview and client-side processing with FFmpeg compiled to WebAssembly. Auto-subtitles and AI audio cleanup on a Spring Boot backend.',
    stack: ['React', 'WASM', 'Spring Boot', 'PostgreSQL'],
    repo: gh('AloMediaReact'),
    preview: 'https://alo-media.vercel.app',
    image: '/projects/alomedia.webp',
  },
  {
    name: 'Shareboard',
    blurb: 'Collaborative whiteboard, no account needed. Share a six-character code and draw together with live cursors. Works offline, on web and Android.',
    stack: ['TypeScript', 'React Native', 'Realtime'],
    repo: gh('shareboard_web'),
    preview: 'https://shareboard-web.vercel.app',
    image: '/projects/shareboard.webp',
  },
  {
    name: 'Morse',
    blurb: 'Wear OS app that lets small groups of smartwatches talk in haptic Morse code, with AI dictation and smart replies.',
    stack: ['Kotlin', 'Wear OS', 'AI'],
    repo: gh('Morse'),
    logo: '/projects/morse-logo.svg',
  },
  {
    name: 'Miku’s Money',
    blurb: 'A Nequi/CashApp-style wallet where every user is a Miku with a unique public code. Transfers, balances and auth on a Java backend.',
    stack: ['React', 'Java', 'Spring Boot'],
    repo: gh('MikusMoneyReact'),
    preview: 'https://mikus-money-react.vercel.app',
    image: '/projects/mikus.webp',
  },
  {
    name: 'University Agreement Manager',
    blurb: 'Backend for a real university problem: managing agreements with documents and digital signatures on AWS S3, 5+ roles and per-agreement workflows.',
    stack: ['Java', 'Spring Boot', 'AWS S3'],
    repo: gh('UniversityAgreementManager'),
    logo: '/projects/agreements-logo.svg',
  },
  {
    name: 'Downforce Analytics',
    blurb: 'A website for simulating how different race cars (and other kinds of cars) behave aerodynamically at different speeds.',
    stack: ['JavaScript', 'HTML', 'Aerodynamics'],
    repo: gh('Downforce-Analitics'),
    logo: '/projects/downforce-logo.svg',
  },
  {
    name: 'Muegy',
    blurb: 'A web music player.',
    stack: ['TypeScript', 'CSS'],
    repo: gh('Muegy'),
    logo: '/projects/muegy-logo.svg',
  },
  {
    name: 'Medical Appointment Scheduler',
    blurb: 'A web app for scheduling medical appointments, built with Django.',
    stack: ['Python', 'Django'],
    repo: gh('AgendadorCitasMedicas'),
    logo: '/projects/scheduler-logo.svg',
  },
  {
    name: 'Anti-Aircraft Simulator',
    blurb: 'Physics project modelling the interception of a falling bomb. Uses SciPy and numerical approximations to find the optimal firing force and angle.',
    stack: ['Python', 'SciPy', 'Physics'],
    repo: gh('AntiAircraftSimulator'),
    logo: '/projects/aaa-logo.svg',
  },
]

export const stack = {
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
  { name: 'Teammate name', role: 'Teammate', work: 'Shareboard', quote: 'Replace with what a teammate said about building with you.', placeholder: true },
  { name: 'Professor name', role: 'Professor', work: 'Software design', quote: 'Replace with a professor’s note on your work.', placeholder: true },
  { name: 'Project owner', role: 'Project owner', work: 'University Agreement Manager', quote: 'Replace with feedback from the people who used the system.', placeholder: true },
  { name: 'Friend name', role: 'Friend / user', work: 'Udeos Launcher', quote: 'Replace with what someone who knows you as a person says.', placeholder: true },
]

// certificate: path in /public (e.g. '/certs/aws.webp'); credentialUrl: optional verify link.
export type Academic = { title: string; org: string; detail: string; facts: string[]; placeholder?: boolean; certificate?: string; credentialUrl?: string }

export const academic: Academic[] = [
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

// No professional jobs yet, so "experience" is what was built.
export const experience = [
  { when: 'Ongoing', title: 'Open-source desktop builder', where: 'Udeos Launcher', text: 'Designed and shipped a cross-platform Go launcher with mod loaders, a skin editor and an AI assistant, plus its download site.' },
  { when: 'Project', title: 'Full-stack: web, mobile and server', where: 'Shareboard', text: 'Built a realtime collaborative board across three repos: React web, React Native app and a TypeScript server.' },
  { when: 'Project', title: 'Media and AI pipeline', where: 'AloMedia', text: 'FFmpeg in WebAssembly on the client, Spring Boot and PostgreSQL for projects, and a Python service for AI audio and subtitles.' },
  { when: 'Real problem', title: 'Backend for a university', where: 'Agreement Manager', text: 'Role-based workflows, document storage and digital signatures on AWS S3 for real university agreements.' },
]

export const beyond = {
  intro:
    'My dad let me use his old Acer laptop. It ran Windows XP, and it was my way out into the internet. I’ve been too online ever since, and that’s honestly how I ended up writing code.',
  intro2:
    'I never planned to become a developer. I just kept wanting to change how things worked, and the internet kept handing me better tools to do it.',
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
  aside: 'I like one pattern, applied everywhere. I’d rather have GNOME’s search bar than KDE’s calculator if they won’t match.',
}

export const contacts = {
  email: 'juandiegolopezarias07@gmail.com',
  github: 'https://github.com/Juan17la',
  linkedin: 'https://www.linkedin.com/in/juan07diego',
  x: 'https://x.com/1714Jud',
}
