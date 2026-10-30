# Feed to Rise

**Nourish. Equip. Rise.**

The official website for **Feed to Rise**, a Nigerian non-profit that meets urgent needs with food and care, then opens pathways to education, skills, and independence. The site tells the organisation's story, shows its impact, and gives visitors ways to donate, volunteer, or partner.

Built by [BeamX Solutions](https://beamxsolutions.com).

## What the site covers

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Hero with headline stats, the three-stage approach, impact highlights, and calls to action |
| About | `/about` | Mission, timeline, and the team |
| Impact | `/impact` | Outreach milestones, key figures, and stories |
| Pathway stage | `/pathway/:stage` | One page per stage: `nourish`, `equip`, `rise` |
| Get Involved | `/involve` | Donate, volunteer, and partner forms |
| Blog | `/blog` | News and updates |
| Contact | `/contact` | Contact form, phone, email, and social links |
| Privacy | `/privacy` | Privacy policy |

### The Feed to Rise pathway

The programme runs in three stages. Content for each lives in `src/data/stages.ts`.

1. **Nourish** (immediate relief): street and community feeding, feeding students in public schools, and basic provisions for families.
2. **Equip**: education and skills support that prepares people to stand on their own.
3. **Rise**: pathways to independence.

## Tech stack

- [Vite](https://vitejs.dev/) and [React 18](https://react.dev/) with TypeScript
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- [TanStack Query](https://tanstack.com/query), [React Hook Form](https://react-hook-form.com/), and [Zod](https://zod.dev/)
- [Lucide](https://lucide.dev/) icons

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22 or later (matches the version used for deployment)
- npm (bundled with Node.js)

### Run locally

```sh
# 1. Clone the repository
git clone https://github.com/BeamX-Solutions/Feed-To-Rise.git
cd Feed-To-Rise

# 2. Install dependencies
npm install

# 3. Start the dev server with hot reload
npm run dev
```

Open **http://localhost:8080** in your browser. The port is set in `vite.config.ts`.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run build:dev` | Creates a build in development mode |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
public/           Static assets: favicons, images, robots.txt
src/
  components/     Shared components (Hero, Navbar, Footer, StoryCard, ...)
    ui/           shadcn/ui primitives
  data/           Content data, such as the pathway stages
  hooks/          Custom React hooks
  lib/            Utilities
  pages/          One component per route
  App.tsx         Router and app providers
  main.tsx        Entry point
```

The `@` import alias points to `src/`, for example `import { cn } from "@/lib/utils"`.

## Editing content

- **Hero stats:** `src/components/Hero.tsx`
- **Impact figures and milestones:** `src/pages/Impact.tsx`
- **Timeline and team:** `src/pages/About.tsx`
- **Nourish, Equip, and Rise content:** `src/data/stages.ts`
- **Contact details and social links:** `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- **SEO title and description:** `index.html`

## Known limitations

- The contact, volunteer, and partnership forms currently show a confirmation message only. They don't send data to a server or email yet.
- Online donations are not live yet. The donate form shows a "coming soon" style message.
- Social links in the footer and contact page point to the platforms' home pages, not the organisation's profiles.

## Deployment

The site is a static single-page app configured for [Netlify](https://www.netlify.com/) (`netlify.toml`):

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22
- All routes redirect to `index.html` so client-side routing works on refresh.

Any static host works as long as it serves `index.html` for unknown paths.

## Contributing

1. Create a branch from `main`.
2. Make your changes and run `npm run lint` and `npm run build`.
3. Open a pull request.

## Credits

Developed by [BeamX Solutions](https://beamxsolutions.com) for Feed to Rise.
