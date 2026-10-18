import {
  siAndroid, siArchlinux, siClaude, siCss, siDebian, siDjango, siDocker, siExcalidraw, siFastify, siFfmpeg, siGit, siGithubactions, siGodotengine,
  siGooglegemini, siGo, siHtml5, siJavascript, siJira, siKotlin, siLinux, siMongodb, siNestjs, siNextdotjs, siNginx, siNodedotjs, siNotion,
  siOpenjdk, siPostgresql, siPostman, siPython, siReact, siRedis, siScipy, siSpringboot, siTailwindcss, siTrello, siTypescript, siUbuntu,
  siWearos, siWebassembly,
  type SimpleIcon,
} from 'simple-icons'

type Tech = { path?: string; hex: string; mono?: string }

const si = (i: SimpleIcon): Tech => ({ path: i.path, hex: i.hex })

// Brands simple-icons no longer ships get a colour and a two-letter mark instead of a glyph.
const mark = (hex: string, mono: string): Tech => ({ hex, mono })

const TECH: Record<string, Tech> = {
  TypeScript: si(siTypescript),
  JavaScript: si(siJavascript),
  React: si(siReact),
  'React Native': si(siReact),
  'Node.js': si(siNodedotjs),
  'Tailwind CSS': si(siTailwindcss),
  Python: si(siPython),
  Go: si(siGo),
  Java: si(siOpenjdk),
  Kotlin: si(siKotlin),
  'Next.js': si(siNextdotjs),
  NestJS: si(siNestjs),
  Fastify: si(siFastify),
  Django: si(siDjango),
  'Spring Boot': si(siSpringboot),
  PostgreSQL: si(siPostgresql),
  MongoDB: si(siMongodb),
  Redis: si(siRedis),
  AWS: mark('FF9900', 'aws'),
  'AWS S3': mark('FF9900', 's3'),
  Docker: si(siDocker),
  'GitHub Actions': si(siGithubactions),
  Nginx: si(siNginx),
  Git: si(siGit),
  Linux: si(siLinux),
  'Arch Linux': si(siArchlinux),
  Debian: si(siDebian),
  Ubuntu: si(siUbuntu),
  'Claude Code': si(siClaude),
  OpenAI: mark('10A37F', 'ai'),
  Gemini: si(siGooglegemini),
  OpenCode: mark('3B3B3B', 'oc'),
  Postman: si(siPostman),
  Notion: si(siNotion),
  Jira: si(siJira),
  Trello: si(siTrello),
  Excalidraw: si(siExcalidraw),
  WASM: si(siWebassembly),
  HTML: si(siHtml5),
  CSS: si(siCss),
  SciPy: si(siScipy),
  'Wear OS': si(siWearos),
  Android: si(siAndroid),
  FFmpeg: si(siFfmpeg),
  Godot: si(siGodotengine),
}

export const tech = (name: string): Tech | undefined => TECH[name]

/** Black or white, whichever reads better on this hex. */
export function onColor(hex: string): string {
  const n = parseInt(hex, 16)
  const l = (0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255)) / 255
  return l > 0.6 ? '#131815' : '#ffffff'
}
