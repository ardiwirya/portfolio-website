# Ardi Wirya — Portfolio

Personal portfolio at [ardiwirya.vercel.app](https://ardiwirya.vercel.app), with a photo hero, professional experience, education, projects, certificates, and a contact form.

## Stack

- Next.js 16.4.6 App Router and React 19.3.1
- TypeScript 6.0.3 with strict checking for application code and browser tests
- Tailwind CSS 4.3.5 with CSS theme tokens in `src/app/globals.css`
- Framer Motion 14.13.0 and react-type-animation
- Resend 6.38.0 through the server-side contact route
- ESLint 9.39.5, Playwright 1.65.0, and axe-core accessibility checks
- Node.js 24 LTS, configured in `.nvmrc` and `package.json`

Dependency versions were checked on 13 November 2026. TypeScript 6 and ESLint 9 match the peer ranges of the current Next.js ESLint plugins. Review those ranges before upgrading either major version. Tailwind 4 targets Safari 16.4+, Chrome 111+, and Firefox 128+.

Inter and Space Grotesk fonts are bundled locally. The interface supports dark and light themes, keyboard navigation, native dialogs, and reduced-motion preferences.

## Development

```sh
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

On PowerShell, use `Copy-Item .env.example .env.local` for the environment-file step. Add `RESEND_API_KEY` to `.env.local` to enable contact email. The API returns HTTP 503 when the key is unavailable, and the form offers a direct email link.

## Content and design

- `src/app/data/profile.ts` contains the headline, About copy, education, CV path, location, and contact links.
- `src/app/data/about.ts` contains skills, professional experience, organizations, and publication details.
- `src/app/data/projects.ts` contains eight projects, led by NusaMart, CollabSpace, and Clinic Information System.
- `src/app/data/certificates.ts` contains fifteen certificate and achievement entries, with the five CV certifications first.
- `src/app/data/types.ts` defines the shared content contracts used by cards and dialogs.
- `public/images/ardi-hero.webp` is the optimized personal photo. Hero cropping is controlled by the image scale and transform origin in `HeroSection.tsx`.
- `public/CV_Ardi_Wirya_Indarto.pdf` serves the downloadable CV.

Experience is the initial About tab. The content reflects the supplied CV, including the September 2026 apprenticeship at PT Bakrie Autoparts, July 2023–August 2026 freelance work, the 918-hour independent study program, and the university degree with GPA 3.75. Project and certificate counts derive from their data arrays.

## Checks

```sh
npm run check
npm audit --audit-level=high
npx playwright install chromium
npm run test:e2e
```

`check` runs ESLint, `next typegen && tsc --noEmit`, and the production build. Browser tests use the production server, so run the build first. The suite covers 360, 390, 768, and 1440 px, both themes, hero image loading, CV facts, keyboard navigation, modal focus, certificate expansion, contact success/failure, invalid JSON payloads, the PDF and metadata routes, and unavailable browser storage. Axe checks WCAG 2/2.1 A/AA rules.

Contact UI tests intercept network requests. Provider acceptance and delivery to the recipient's inbox require separate verification with the configured Resend account.

For an existing browser installation, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to its executable. Set `PLAYWRIGHT_BASE_URL` when testing an already-running preview server.

## Deployment

Use the existing Vercel project with Node.js 24.x and its `RESEND_API_KEY`. GitHub Actions installs dependencies, runs the checks, audits dependencies, and executes browser tests for pull requests and pushes to `main`. Review the branch preview before merging.
