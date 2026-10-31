# Asaréel Dadiouari — Portfolio

Personal portfolio built with React 19, TypeScript and Vite.

Live: https://my-portfolio-2f4de.web.app/

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to build/
npm run preview  # serve the production build
```

## Editing content

The site is bilingual (EN / FR). All text — profile links, experience, projects and skills — lives in
[`src/data.ts`](src/data.ts); translated fields are `{ en: '…', fr: '…' }` objects.
Add a project by appending to the `projects` array; local screenshots go in `src/img/`.

To show CV links, add `public/Asareel-Dadiouari-CV-EN.pdf` and `public/Asareel-Dadiouari-CV-FR.pdf` (without your home address)
and set `profile.resume` in `src/data.ts` to their paths.
