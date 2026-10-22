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
  title: "Robert Martí | Técnico de sistemas",
  description: "Portafolio de Robert Martí, técnico de sistemas: Técnico Superior en ASIX y estudiante de Ingeniería Informática. Linux, Windows Server, Proxmox, Bash y redes.",
  keywords: ["Técnico de sistemas", "Administrador de sistemas", "CPD", "Linux", "Windows Server", "Proxmox", "Bash", "Robert Martí", "ASIX", "Granollers", "Barcelona"],
  authors: [{ name: "Robert Martí" }],
  creator: "Robert Martí",
  openGraph: {
    title: "Robert Martí | Técnico de sistemas",
    description: "Portafolio profesional de Robert Martí. Proyectos, experiencia y habilidades en administración de sistemas.",
    url: "https://robertmartib.github.io/portfolio-robert/",
    siteName: "Robert Martí Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Martí | Técnico de sistemas",
    description: "Portafolio profesional de Robert Martí. Proyectos, experiencia y habilidades.",
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
