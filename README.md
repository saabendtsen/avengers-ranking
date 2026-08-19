# Avengers Power Ranking

A small, static, Danish-language fan page that ranks Marvel Cinematic Universe
heroes by raw power, with a short blurb for each. Built with
[Astro](https://astro.build) and Tailwind CSS 4 and served as plain HTML.

> Dansk: En lille statisk fanside der rangerer MCU's Avengers efter ren styrke.
> Indholdet (beskrivelserne) er på dansk.

## Status

Experimental hobby project, feature-complete for what it is, and only
maintained occasionally. Expect no releases, changelog or support.

## How it works

- `src/data/characters.ts` holds the ranking: name, alias, power score (1–100),
  a Danish description and an accent colour. Edit this file to change the list.
- `src/pages/index.astro` renders the list; `src/layouts/Layout.astro` and
  `src/styles/global.css` hold the layout and Tailwind setup.
- `npm run build` produces a fully static site in `dist/`. The `Dockerfile`
  wraps that output in an `nginx:alpine` image.

## Setup

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the build locally
```

Container build and run:

```sh
docker build -t avengers-ranking .
docker run --rm -p 8080:80 avengers-ranking
```

The workflow in `.github/workflows/ci-cd.yml` deploys `main` to the
maintainer's own self-hosted runner and is specific to that environment; it is
not needed to build or run the site.

## Data and privacy

The site is fully static and collects no data: no analytics, cookies, forms or
external requests at runtime. The repository contains no personal data.

This is an unofficial fan project. Character names and the Marvel Cinematic
Universe are trademarks of Marvel / The Walt Disney Company; the descriptions
and the ranking are the maintainer's own opinion and are not affiliated with or
endorsed by Marvel.

## Third-party material

All dependencies are published under permissive licences (Astro and Tailwind
CSS: MIT). No fonts, images or data sets are vendored; the two favicons in
`public/` are the Astro starter defaults.

## Security

See [SECURITY.md](SECURITY.md) for how to report a vulnerability.

## License

[MIT](LICENSE) © 2026 Søren Aabendtsen.
