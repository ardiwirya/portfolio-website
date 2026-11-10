import MotionProvider from "./components/MotionProvider";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
});
const spaceGrotesk = localFont({
  src: "../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Portofolio Ardi Wirya",
  description:
    "Portfolio Ardi Wirya Indarto, Frontend Developer at PT Bakrie Autoparts. Angular, Ionic, React, Next.js, and TypeScript.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Portofolio Ardi Wirya",
    description:
      "Portfolio Ardi Wirya Indarto, Frontend Developer at PT Bakrie Autoparts. Angular, Ionic, React, Next.js, and TypeScript.",
    url: "https://ardiwirya.vercel.app",
    siteName: "Ardi Wirya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Ardi Wirya",
    description:
      "Portfolio Ardi Wirya Indarto, Frontend Developer at PT Bakrie Autoparts. Angular, Ionic, React, Next.js, and TypeScript.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.dataset.theme = localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"; } catch {}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
