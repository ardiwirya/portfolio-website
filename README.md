# Ardi Wirya — Portfolio

Portfolio at [ardiwirya.vercel.app](https://ardiwirya.vercel.app), retaining the original dark design, gradient heading, profile photos, animated text/counters, About tabs, project/certificate modals, certificate expansion, and contact form. Light mode is optional; dark remains the default.

## Local development

Use Node.js 22 LTS:

```sh
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Set `RESEND_API_KEY` in `.env.local` for the contact form. Do not commit the key. The existing recipient and sender are unchanged. Without a key, the API returns a clear service-unavailable error and the form offers a direct email link. A successful API response means the provider accepted the request, not that final inbox delivery was verified.

The app uses Next.js 16, React 19, JavaScript, and Tailwind CSS. Inter and Space Grotesk are bundled locally, so builds do not depend on fetching Google Fonts. Framer Motion handles the existing card/counter animations; anchor scrolling uses native browser behavior instead of a separate library.

## Content updates

- `src/app/data/profile.js`: headline, About copy, CV path, and contact links.
- `src/app/data/about.js`: skills, employment, organizations, and awards.
- `src/app/data/projects.js`: all eight projects, their details, and source/demo links.
- `src/app/data/certificates.js`: all fifteen original certificate/achievement entries.
- `public/CV_Ardi_Wirya_Indarto.pdf`: latest uploaded CV; its public URL is preserved.

The new experience entry describes the MagangHub apprenticeship at PT Bakrie Autoparts from September 2026, with Angular, Ionic, TypeScript, ERIS, authentication/routing/session guards, UI role-based access, and REST API integration. Freelance dates are July 2023–August 2026. Company details stay within the supplied CV; no internal assets are included.

`Modal` and `ItemDetails` share the project/certificate dialog implementation. Native dialogs handle focus containment; close, Escape, backdrop dismissal, focus restoration, and page scroll locking are retained. The theme button uses CSS color variables and remembers the choice in local storage, with a dark fallback if storage is unavailable. Reduced-motion preferences disable animated typing/scrolling and reduce motion.

## Verification

```sh
npm run check
npm audit --audit-level=high
npx playwright install chromium
npm run test:e2e
```

Tests run against a production build and cover both themes at 360, 390, 768, and 1440px; keyboard tabs/menu; modal content and focus restoration; all certificates; contact success/error behavior; PDF/metadata routes; invalid contact payloads; and unavailable browser storage. Contact UI tests intercept requests and do not send email.

Verification on 10 November 2026: build and ESLint pass; all 10 browser tests pass, including axe WCAG 2/2.1 A/AA checks in both themes. Production dependency audit has zero findings. The full audit still reports development-only moderate findings in the ESLint/minimatch chain; the high/critical gate passes. ESLint 9 remains pinned to match the Next.js plugin peer ranges.

## Deployment

Use the existing Vercel project, Node.js 22.x, and its existing `RESEND_API_KEY`. No database migration or new service is needed. Review the branch preview before merging to `main`. Email delivery requires the existing Resend configuration and has not been tested with a real outbound message in this revision.
