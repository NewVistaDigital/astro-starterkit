# Astro Starter Kit for New Vista Digital

[![Netlify Status](https://api.netlify.com/api/v1/badges/8a58c02e-2733-4c2d-9ac7-4049f486f600/deploy-status)](https://app.netlify.com/sites/avalanche-hardwood-floors/deploys)
[![NVD Status](https://img.shields.io/badge/NVD_Starterkit-1.0.0_beta-blue)](https://github.com/NewVistaDigital/astro-starterkit)

![Starterkit Image](public/new-vista-digital-starterkit.jpg)

This starterkit is set up to use Tailwindcss and Astro to build quick and performant custom static sites.
## New Installation

Update `consts.ts` with relevant site information.

TODO: use the yaml file for this. Seems like it would be nicer.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│  ├── components/
│  │   ├── content/     Things like CTA, Galleries, etc.
│  │   ├── site/        Head, Footer, Header, etc.
│  │   ├── ui/          Buttons, Forms, Links, Alert, etc.
│  ├── content/         If a blog is used, it goes here.
│  ├── js/              Any js script components.
│  ├── layouts/         Typically BaseLayout will do.
│  ├── pages/
│  ├── config.yml       Unused for now.
│  └── consts.ts        All site variables set here.
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

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

## Packages used

\* Indicates official integration maintained by astro

- [astro-icon](https://github.com/natemoo-re/astro-icon)
- [astro-navbar](https://github.com/surjithctly/astro-navbar)
- [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)
- [astro-sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)\*
- [netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/)\*
- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)\*
- [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [Icon libraries](https://iconify.design/) - Try to pick one per project

## 👀 Want to learn more?

Check out the [Astro documentation](https://docs.astro.build).

