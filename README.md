# Alice Feng's portfolio page

My new, improved and completely overhauled portfolio page created with [`SvelteKit`](https://kit.svelte.dev/).

## How to run this project

First, clone this repo.

Then, `cd` into the repo directory and install the dependencies with `npm install` (or `pnpm install` or `yarn`). 

Afterwards, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## How to build and deploy this project

To create a production version of your app, first commit all changes to the `master` branch, then run:

```bash
npm run build
```

To preview the production build, run `npm run preview`.

Since I'm deploying this on GitHub Pages, I used the [static adapter](https://kit.svelte.dev/docs/adapter-static) along with the [gh-pages](https://www.npmjs.com/package/gh-pages) package. I then configured my repo to build from the `gh-pages` branch created by the gh-pages package.

To deploy the app and update the site, run:

```bash
npm run deploy
```

### References I found useful for figuring out how to deploy this app:
- [How to deploy svelte app in Github Pages](https://hrishikeshpathak.com/blog/svelte-gh-pages/)
- [Publishing a SvelteKit App to GitHub Pages](https://blog.seancoughlin.me/publishing-a-sveltekit-app-to-github-pages)
- [How to deploy a SvelteKit website to GitHub pages](https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages)
