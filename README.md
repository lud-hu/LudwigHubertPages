# LudwigHubertPages

This is a repo containing my static pages:

- [ludwig-hubert.de](https://ludwig-hubert.de/) (Landing Page, UX & Tech Portfolio)
- [fotografie.ludwig-hubert.de](https://fotografie.ludwig-hubert.de/) (Photographer Designer) (TODO: refactor to live in the main Next.js project)

<img width="1512" alt="ludwig-hubert de" src="https://user-images.githubusercontent.com/26108368/205703823-d76fb04e-6d1b-4cda-b236-770a83f90eb8.png">

## Hosting

The pages are hosted on Google Firebase.

### Deploy

```bash
$ firebase deploy
```

## Development

The main project (`/ux`) is a Next.js React app.

Since the goal was to be highly performant and accessible, the Next.js app is rendered during build time and saved as static html files. This allows easy and static hosting as well as fast page loading times.
Did you see the fireworks lighthouse is showing on perfect scores? 😊

<img width="418" alt="lighthouse" src="https://user-images.githubusercontent.com/26108368/205703790-486cc68b-e85c-46bb-83ea-a22145de63ad.png">

### Commands

```bash
# Run with
$ npm run dev
# Build with
$ npm run build
```
