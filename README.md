# LudwigHubertPages

This is a repo containing my static pages:

- www.ludwig-hubert.de (Landing Page, UX & Tech Portfolio)
- www.fotografie.ludwig-hubert.de (Photographer Designer) (TODO: refactor to live in the main Next.js project)

## Hosting

The pages are hosted on Google Firebase.

### Deploy

```bash
$ firebase deploy
```

## Development

The main project (`/ux`) is a Next.js React app.

Since the goal was to be highly performant and accessible, the Next.js app is rendered during build time and saved as static html files. This allows easy and static hosting as well as fast page loading times.
Did you see the fireworks lighthouse is showing on perfect scores?

### Commands

```bash
# Run with
$ npm run dev
# Build with
$ npm run build
```
