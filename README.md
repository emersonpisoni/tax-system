# Why Astro?

Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you. [Astro DOC](https://docs.astro.build/en/concepts/why-astro/)

- Island architecture
- UI-agnostic
- Server-first
- 0 js, by default

VS Other frameworks (React, Next ...)

Focused on:

- Content-driven
  - Because other frameworks were designed for building web application. Astro focus on content.
- Server-first
  - Other frameworks focus os CSR, because Astro focus on content, server-first is a better solution.
- Island architecture ("Hydration")
  - Only loads JS when requested, else it will be fully static..
- Multi frameworks
  - Astro enable using multi frameworks together, like React, Vue, Svelte, etc.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

# Published in

https://peaceful-wisp-eb773a.netlify.app/