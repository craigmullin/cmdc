# CMDC

CMDC is the React, TypeScript, and Vite application for
[`www.craigmullin.com`](https://www.craigmullin.com).

## Local development

1. Run `npm install`.
2. Run `npm run dev`.
3. Open the local address shown by Vite.

Use `npm run lint` to check the source and `npm run build` to create the
production output in `dist`.

## Content

Portfolio links and optional contact details live in `src/data/site.ts`. The
interface hides empty optional values rather than presenting placeholders.

## Deployment

Firebase Hosting project `craigmullin` serves the production site. The
repository's `.firebaserc` and `firebase.json` select that project and publish
the generated `dist` directory. Deployment is intentionally separate from
build verification.

## Repository history

This repository preserves the complete early history shared with the Craig
Mullin Design Language. The application and design language were separated with
ordinary cleanup commits so original commit identifiers remain intact.
