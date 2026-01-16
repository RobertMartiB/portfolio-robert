import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Martí | Desarrollador de Software",
  description: "Portafolio de Robert Martí, Desarrollador de Software y Técnico ASIR. Especializado en desarrollo web, administración de sistemas y soluciones cloud.",
  keywords: ["Desarrollador de Software", "Robert Martí", "ASIR", "Desarrollo Web", "Full Stack", "React", "Next.js", "Granollers", "España"],
  authors: [{ name: "Robert Martí" }],
  creator: "Robert Martí",
  openGraph: {
    title: "Robert Martí | Desarrollador de Software",
    description: "Portafolio profesional de Robert Martí. Proyectos, experiencia y habilidades en desarrollo de software y sistemas.",
    url: "https://robertmarti.com",
    siteName: "Robert Martí Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Martí | Desarrollador de Software",
    description: "Portafolio profesional de Robert Martí. Proyectos, experiencia y habilidades.",
    creator: "@robertmarti", // Placeholder handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
