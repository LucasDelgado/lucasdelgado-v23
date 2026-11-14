# lucasdelgado.dev

Personal portfolio and CV for Lucas Delgado, Full Stack Developer. Single-page,
static, content-driven landing built with Next.js and deployed on Vercel.

- Production: [https://www.lucasdelgado.dev](https://www.lucasdelgado.dev)
- Repository: [github.com/LucasDelgado/lucasdelgado-v23](https://github.com/LucasDelgado/lucasdelgado-v23)

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5
- Plain CSS (no Tailwind or CSS Modules)
- `@vercel/analytics` and `react-scroll`

Node `>= 20.9.0` is required.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev       # development server
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint (flat config)
npm run typecheck # tsc --noEmit
```

## Structure

```
src/
├── site.config.tsx   # single source of truth for content and icons
└── app/
    ├── layout.tsx    # metadata, viewport, fonts, <Analytics />
    ├── page.tsx      # header + nav + Experience/Education/Skills + footer
    ├── globals.css
    ├── page.css
    ├── robots.txt
    ├── sitemap.xml
    └── components/   # one folder per component: index.tsx + style.css
public/
└── Lucas_Delgado_CV.pdf
```

## Editing content

All copy and data live in `src/site.config.tsx`: metadata, name and role,
experience, education, contact links and skills. Components only render it.

- If you rename a section, update both the `ArticleContent` title in
  `src/app/page.tsx` and the matching entry in `SiteConfig.nav`; the nav anchor
  IDs are generated from those titles.
- Icons are inline SVG components exported from
  `src/app/components/svg/index.tsx`.

## Deployment

The site is deployed on Vercel. The canonical host is
`https://www.lucasdelgado.dev` (the apex domain redirects to `www`).

## Verification

Before shipping, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Then check the home page, anchor navigation, the contact button, social links,
the CV download and the mobile layout (`< 768px`).
