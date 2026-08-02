import type { Metadata, Viewport } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-display",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Senior full-stack engineer (Angular/React, Node, MongoDB, Docker, AWS). I own delivery end to end: requirements, architecture, build, CI/CD and production.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: profile.name + " — " + profile.role,
    template: "%s — " + profile.name,
  },
  description,
  keywords: [
    "full-stack engineer","MERN","MEAN","Angular","React","Node.js","MongoDB",
    "Docker","AWS","CI/CD","freelance engineer","contract engineer","Hyderabad",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    siteName: profile.name,
    title: profile.name + " — " + profile.role,
    description,
    locale: "en_GB",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: profile.headline }],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name + " — " + profile.role,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

// Applied before paint so a dark-mode visitor never sees a light flash.
const themeBoot = [
  "(function(){try{",
  "var s=localStorage.getItem('theme');",
  "var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;",
  "if(d)document.documentElement.classList.add('dark');",
  "}catch(e){}})();",
].join("");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: "mailto:" + profile.email,
  url: profile.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Angular","React","Next.js","Node.js","Express","MongoDB","Docker","AWS","CI/CD"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={[display.variable, sans.variable, mono.variable, "font-sans"].join(" ")}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
