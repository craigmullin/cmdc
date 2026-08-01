# Craig Mullin — Alpha 0.3

The first public version of craigmullin.com and the design language that supports it. The site is a small, responsive portfolio built with React, TypeScript, Vite, and token-driven CSS.

## Local development

1. Install dependencies with `npm install`.
2. Start the site with `npm run dev`.
3. Open the local address shown in the terminal.

Use `npm run build` to create the production site in `dist`, `npm run preview` to inspect that build locally, and `npm run lint` to check the source.

## Content configuration

Personal links live in `src/data/site.ts`. Empty optional values are hidden automatically. Add a public résumé to `public/resume.pdf` and set `resumeUrl` to `/resume.pdf` when it is ready.

## Deployment

The site is configured for the `craigmullin` Firebase project. Run `npm run build`, then `firebase deploy --only hosting`. Firebase serves the generated `dist` directory and provides the production SSL certificate. The custom domain is managed through Firebase Hosting and GoDaddy DNS.

## Alpha decisions

- The GitHub profile and this repository are the only external destinations currently shown because they are confirmed by the repository remote.
- Email, LinkedIn, résumé, and the two unfinished project destinations remain empty in one configuration file; the interface hides them instead of exposing placeholders or broken links.
- The hero substitutes an `About me` action until a résumé is available.
- Web fonts use the families and weights specified by the design language. The system fallbacks keep the page readable if they cannot load.
- The portfolio lives beside the original source documents so future project and design-language sections can reuse the same foundation.
- The homepage uses the original warm-paper palette with orange as its sole accent. Semantic aliases in `src/styles/tokens.css` separate theme meaning from palette names.
- Alpha 0.3 cools the paper slightly toward premium cotton, raises the hero for a more immediate opening, further quiets the buttons, and uses a provisional serif `C.` as a printer’s signature in the header.

## Maker’s-mark explorations

The `explorations/` directory contains the 50 monochrome SVG studies produced for Alpha 0.2. `explorations/contact-sheet.svg` displays the complete set. Exploration is paused in Alpha 0.3; none of these studies is the site’s finalized logo, and no permanent mark should be selected yet.
