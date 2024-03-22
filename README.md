# Astro Starter Kit for New Vista Digital

![v1.0.2](https://img.shields.io/badge/base_version-1.0.2-blue) [![Netlify Status](https://api.netlify.com/api/v1/badges/88c112d8-d37d-4ab5-ad7e-30cb2a8b3d95/deploy-status)](https://app.netlify.com/sites/nvd-starterkit/deploys)

## New Installation

To use the `Button.astro` component you ned to run

```sh
npx add astro-icon
```

Update `consts.ts` with relevant site information.

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

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
