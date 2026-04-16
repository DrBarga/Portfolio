import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Bohdan Zelenskyi | Fullstack Web Developer / ML & AI Engineer",
    template: "%s | Bohdan Zelenskyi",
  },
  description:
    "Freelance portfolio of Bohdan Zelenskyi: modern websites, fullstack web applications, backend systems, AI integrations, and production-ready ML solutions.",
  keywords: [
    "Bohdan Zelenskyi",
    "Fullstack Developer",
    "Web Developer",
    "ML Engineer",
    "AI Engineer",
    "Next.js portfolio",
    "Freelance developer",
  ],
};

export const viewport: Viewport = {
  themeColor: "#04070d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
