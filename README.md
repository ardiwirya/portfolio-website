# Portfolio Website Ardi Wirya

My personal portfolio website showcasing my background, projects, and certifications as a Front-End Developer and fresh graduate in Informatics Engineering.
 
**Live Site:** [My Portfolio Website](https://ardiwirya.vercel.app/)

## Preview

![Screencapture](/github/portfolio-website.png)

## About

I'm a Front-End Developer and fresh graduate in Informatics Engineering from Universitas Malikussaleh, with hands-on experience building responsive web applications using React and Next.js. This site is where I showcase my work, skills, and certifications.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Contact Form:** Next.js API Route + [Resend](https://resend.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## Features

- Responsive dark-themed UI with custom color palette
- Animated hero section with role/title cycling text
- About section with tabbed Skills / Experience / Organizations / Awards
- Project showcase with detail modal
- Certificate gallery with curated highlights + expandable full list
- Working contact form via a Next.js API route
- Downloadable CV (PDF)

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/ardiwirya/portfolio-website.git
   cd portfolio-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory (see [Environment Variables](#environment-variables) below).
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

This project uses [Resend](https://resend.com/) to power the contact form via a Next.js API route (`src/app/api/contact/route.js`). Create a free Resend account, get an API key, then add it to a `.env.local` file (and to your Vercel project settings):

```
RESEND_API_KEY=your_resend_api_key
```

The key is only used server-side inside the API route — it is never exposed to the browser.

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Any push to the `main` branch automatically triggers a new deployment.

## Contact

- **LinkedIn:** [Ardi Wirya](https://www.linkedin.com/in/ardiwirya11/)
- **GitHub:** [ardiwirya](https://github.com/ardiwirya)

---

Built with Next.js, bootstrapped from [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
