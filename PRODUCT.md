# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 15 (static export to `out/`) + TypeScript + Tailwind CSS v4, Phosphor icons, simple-icons. Bilingual en/es: English content in `lib/data.ts`, Spanish text overrides in `lib/content.ts`, switched via `lib/i18n.tsx`. Light and dark themes.

## Users

Recruiters / hiring managers and tech peers / collaborators, equally. Both skim: they need the who, what and proof in the least time, with enough personality to remember the person.

## Product Purpose

Personal portfolio of Juan Diego (Juan17la), software developer and engineering student from Colombia. Success: a visitor grasps who Juan is, what Juan builds and how to reach Juan within seconds, and remembers the person. Not generic; it must catch attention.

## Positioning

A portfolio where the person is visible: balance of creativity and logic, a lifelong-online childhood (2010s internet, Minecraft, fanfic, FNaF), and real shipped projects (Go launcher, WASM video editor, Wear OS Morse app, realtime whiteboard).

## Operating Context

Sections, in page order (all kept):
1. Hero: name, role, tagline, pitch, main techs, a Download CV button and social links (Email, LinkedIn, GitHub). No X link anywhere on the site.
2. About: who Juan is personally, with a bento of photos and personal facts. **Primary section.**
3. Projects: per project brief, stack, preview, repository and image. **Primary section.**
4. Techs: short section.
5. Testimonials ("Voices"): short section.
6. Academic: intensive English course (certified by an international exam) and AWS Cloud Practitioner Essentials completion.
7. Experience: timeline: freelance software developer (Aug 2025 – present, with project work under it) and IT support for schools (Aug 2024 – present). **Primary section.**
8. The Archive: beyond-code deep dive (internet childhood, games, music), placed right before Contact.
9. Contact: Gmail, LinkedIn, GitHub.

Navigation: no sidebar. Section progress and context are carried by the scroll itself.

## Capabilities and Constraints

- Profiles: GitHub https://github.com/Juan17la, LinkedIn https://www.linkedin.com/in/juan07diego. Email in `lib/data.ts` (`contacts.email`). X is removed from the site at the owner's request.
- CV: owner will add `/public/cv.pdf` (English) and `/public/cv-es.pdf` (Spanish); the hero button links to the one matching the active language. Files not in the repo yet.
- Project data in `lib/data.ts`: Udeos Launcher, AloMedia, Shareboard, Morse, University Agreement Manager, Downforce, Medical Appointment Scheduler, Anti-Aircraft Simulator.
- Beyond-code content: Formula 1; online since 2012 on dad's Windows XP Acer; Minecraft cities; creepypasta and FNaF theories; own Minecraft mods; fanfics (Naruto, My Hero Academia); Linux distros and ricing. Games: Minecraft, Roblox, Cry of Fear, FNaF, horror visual novels. Music: garage punk, 2000s metal, screamo.
- 2000s webcore is not to be used as the UI style; 2000s content stays where it is a real interest.

## Brand Commitments

- Style must represent Juan and Juan's preferences; it is not locked to a prior look.
- Simplicity, consistent patterns and standardization; inconsistent styles or objectives bother the owner (example: dislikes mixing KDE's calculator with GNOME's search bar).
- Tagline: "Just do it." / "Solo hazlo".

## Evidence on Hand

- Real project list, repos, screenshots (`public/projects/`).
- 13 real photos of Juan in `public/photos/` (selfies; `photo2.jpeg` carries a watermark). Hero uses `photo4.jpeg`; the About bento uses a varied set of five chosen by the designer at the owner's request.
- Testimonials (people real; wording drafted at the owner's request, owner to confirm with them):
  - Emmanuel Gomez, Graphic Designer: Juan helped in UI design and videogame development classes.
  - Alan Cañar, Chemical Engineering student: studied maths together; Juan helped with data analysis and Python.
- English exam name/score/institution still placeholder; never fabricate it.
- Work history is only what `experienceItems` states; do not invent more.

## Product Principles

1. Scan first: key facts and proof within seconds, depth on demand.
2. Real over invented: only real projects, quotes, credentials and photos.
3. One consistent pattern system across all sections.
4. The person shows through, balancing logic and personal making.
5. Weight follows importance: About, Projects and Experience lead; Techs and Testimonials stay brief.

## Accessibility & Inclusion

None specified beyond web basics; sections work on mobile, by keyboard, and respect reduced motion.
