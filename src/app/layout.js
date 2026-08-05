import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-display" });

export const metadata = {
  title: "Portofolio Ardi Wirya",
  description:
    "Portfolio Ardi Wirya Indarto, Front-End Developer & fresh graduate Informatics Engineering, Universitas Malikussaleh.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Portofolio Ardi Wirya",
    description:
      "Portfolio Ardi Wirya Indarto, Front-End Developer & fresh graduate Informatics Engineering, Universitas Malikussaleh.",
    url: "https://ardiwirya.vercel.app",
    siteName: "Ardi Wirya Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Ardi Wirya",
    description:
      "Portfolio Ardi Wirya Indarto, Front-End Developer & fresh graduate Informatics Engineering, Universitas Malikussaleh.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
