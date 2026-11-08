# AGENTS.md

Guía de contexto para agentes que trabajan en este repositorio.

## Qué es este proyecto

Portfolio / CV personal de Lucas Delgado (Full Stack Developer). Es una landing
page de una sola ruta, estática y content-driven, construida con **Next.js 16
(App Router, Turbopack)**, **React 19**, **TypeScript** y **CSS plano**. Se
despliega en Vercel y usa `@vercel/analytics`.

- Repo: `github.com/LucasDelgado/lucasdelgado-v23`
- Branch principal: `master` (hay histórico en `origin/develop`)
- Dominio canónico: `https://www.lucasdelgado.dev` (el apex redirige a `www`;
  `lucasdelgado.com` no resuelve).
- No hay tests ni pipeline de CI.
- Todo el contenido está en inglés.

### Versiones

| Paquete | Versión |
| --- | --- |
| Next.js | 16.4.5 |
| React / React DOM | 19.3.1 |
| TypeScript | 5.9.3 |
| Node requerido | >= 20.9.0 |
| Node local probado | 24.14.1 (no requiere upgrade) |
| ESLint | 9.x (flat config) |

`package.json` declara `engines.node >= 20.9.0`. Next 16 usa Turbopack por
defecto para `dev` y `build`.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # dev server en http://localhost:3000
npm run build     # build de producción (Turbopack)
npm run start     # servir el build
npm run lint      # eslint . (flat config en eslint.config.mjs)
npm run typecheck # tsc --noEmit
```

`next lint` ya no existe en Next 16; el script `lint` usa ESLint directamente.
No hay tests configurados.

## Estructura

```
src/
├── site.config.tsx          # ÚNICA fuente de contenido + iconos JSX
└── app/
    ├── layout.tsx            # root layout, metadata, viewport, fuentes, <Analytics />
    ├── page.tsx              # home: Header + Nav + 3 secciones + Footer
    ├── globals.css           # reset, variables CSS, layout base, animaciones
    ├── page.css              # estilos del header/hero
    ├── robots.txt            # metadata route estática
    ├── sitemap.xml           # metadata route estática
    └── components/
        ├── articleContent/   # wrapper <article id={title}> + título
        ├── education/
        ├── experience/
        ├── footer/
        ├── header/           # 'use client' (react-scroll)
        ├── nav/              # 'use client' (react-scroll + scrollToBottom)
        ├── skills/
        └── svg/              # biblioteca de SVGs inline (sin dependencias)
public/
└── Lucas_Delgado_CV.pdf     # CV descargado desde el sitio
```

Cada componente vive en su carpeta con `index.tsx` + `style.css` (import
relativo `./style.css`). No hay CSS Modules ni Tailwind.

## Arquitectura y flujo

1. `layout.tsx` importa `site.config`, define `metadata` (con `metadataBase` y
   canonical), exporta `viewport` por separado (API de Next 16), carga las
   fuentes de Google (`Encode_Sans_SC` global y `Bebas_Neue` en el header) y
   renderiza `children` + `<Analytics />`.
2. `page.tsx` arma:
   - `<Header />` con nombre, rol, ubicación y links de contacto.
   - Un grid de dos columnas (aside sticky con `Nav` + contenido).
   - Tres `<ArticleContent title="...">` con `Experience`, `Education`, `Skills`.
   - `<Footer />` fijo detrás del `main` (el `main` reserva espacio con
     `margin-bottom: 29rem` y `border-radius` inferior).
3. `Nav` usa `react-scroll` con `to={name}` y hace `scrollToBottom` desde un
   `<button>` accesible. Los `id` de destino los genera `ArticleContent` con
   `id={title}` (`Experience`, `Education`, `Skills`). **Si cambiás un título,
   actualizá `SiteConfig.nav` y viceversa.**
4. El responsive se resuelve con CSS (breakpoint mobile en 767px); ya no existe
   `MatchMediaWrapper`.

## Contenido: `src/site.config.tsx`

Es el lugar para editar datos, no los componentes:

- `metadata`: título/descripción SEO.
- `main`: nombre, rol, descripción, email.
- `sections.experience.list`: `rol`, `company`, `date: [desde, hasta]`,
  `description`.
- `sections.education`: `main` (carrera, `date: [desde, hasta]`) y `courses[]`.
- `sections.contact[]`: `title`, `component` (elemento JSX de `components/svg`),
  `link`.
- `sections.skills[]`: `title` + `component` (SVG).
- `nav[]`: nombres de secciones; deben coincidir con los `title` de
  `ArticleContent`.

Los iconos son componentes SVG inline exportados desde
`src/app/components/svg/index.tsx` (`WhatsAppSVG`, `LinkedinSVG`, `ReactSVG`,
`ReactNativeSVG`, `CicdSVG`, etc.). Para sumar una skill: exportá el SVG y
referencialo en `site.config.tsx`.

## Estilos

- CSS plano global + un `style.css` por componente.
- Variables en `globals.css`: colores `--light-*`, `--red-*`, `--violet-*`,
  `--teal-*`, `--green-*` y tamaños `--font-size-sm|md|lg|xl|xxl|xxxl`.
- Breakpoints usados: `1024px`, `768px` y `767px` (mobile). Mantené esos valores
  para no romper la consistencia.
- El layout depende de posicionamiento: `header` 100vh, `nav` sticky,
  `.btn__contact` fixed, `footer` fixed al fondo y `main` con margen inferior
  grande. Cuidado al tocar alturas/márgenes.
- Animaciones definidas pero prácticamente sin uso: `.fadeIn`, `.zoomIn`.
- `globals.css` incluye un reset manual y `scroll-behavior: smooth`.

## Convenciones de código

- Path alias `@/*` → `./src/*` (ver `tsconfig.json`). Se usa en la mayoría de
  los imports, aunque `header` importa `site.config` de forma relativa.
- Componentes: default export, función nombrada, Props tipadas con `type Props`.
- `'use client'` solo donde hace falta interactividad: `header` y `nav`. El
  resto son Server Components.
- `site.config.tsx` contiene JSX (por eso `.tsx`): no agregar hooks ahí.
- `tsconfig.json`: `strict: true`, `jsx: "react-jsx"`, `target: es5`,
  `moduleResolution: bundler`. Next agregó `.next/dev/types/**/*.ts` al include.
- Prettier está configurado (`.prettierrc.json`: single quotes, semi, tab 2,
  trailing comma es5) pero no instalado como dependencia ni script.
- ESLint usa flat config (`eslint.config.mjs`) con `eslint-config-next`
  (`core-web-vitals` + `typescript`).
- No hay `next-env.d.ts` versionado (está en `.gitignore`, lo genera Next).

## Rutas estáticas y SEO

- `src/app/robots.txt` y `src/app/sitemap.xml` son metadata routes estáticas de
  Next; se sirven en `/robots.txt` y `/sitemap.xml`.
- Dominio unificado en `https://www.lucasdelgado.dev`: `metadataBase`,
  canonical, Open Graph, sitemap y `robots.txt`.
- `robots.txt` apunta a `https://www.lucasdelgado.dev/sitemap.xml`.
- El CV se linkea relativo (`Lucas_Delgado_CV.pdf`) y se sirve desde `public/`.
- Los links externos abren con `target="_blank"` + `rel="noopener noreferrer"`.

## Deuda técnica pendiente

1. No hay tests automatizados ni CI.
2. `npm audit` reporta 8 avisos moderados, todos en tooling de desarrollo
   (`typescript-eslint` vía `eslint-config-next` y `minimatch`). En producción
   (`npm audit --omit=dev`) hay 0 vulnerabilidades; esperar actualización upstream
   antes de forzar versiones.
3. `next dev` agrega automáticamente el bloque `nextjs-agent-rules` al final de
   este archivo. No lo borres: se vuelve a generar.

## Cómo verificar cambios

```bash
npm run typecheck
npm run lint
npm run build
npm run dev   # revisar home, navegación por anclas y responsive <768px
```

Checklist manual: header + hero, navegación sticky (Experience/Education/
Skills), botón de contacto que scrollea al footer, links sociales, descarga del
CV, layout mobile (nav rotado a 270°) y que el footer no tape contenido.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
