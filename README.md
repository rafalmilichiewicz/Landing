# Landing page

> Written with love and passion for coding ❤️

![Favicon](public/favicon.svg)

This is repository for landing page built with `Solid.js`, `Tailwind CSS`, and `Daisy UI`. It is powered by Deno, Vite, and deployed to Cloudflare Pages via GitHub CI/CD.

# Tech stack

-   `Deno` - for its seamless TS setup
-   `Solid.js` - a no-nonsense frontend framework
-   `Tailwind CSS` & `DaisyUI` - high quality styling and components

# Prerequisites

-   Deno 2

# Running

```sh
deno install # Install dependencies
deno task dev # Dev server available @ port 3000
deno task build # Build action. Files in /dist
deno task preview # Preview built project @ port 4000
```

# Preview and Deployment

This repository uses Github Actions and Cloudflare Wrangler to automatically deploy to this [website](https://rmilichiewicz.com)
