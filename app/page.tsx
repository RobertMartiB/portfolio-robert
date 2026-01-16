import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import SocialPopup from "./components/SocialPopup";

import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robert Martí",
    "url": "https://robertmarti.com",
    "jobTitle": "Desarrollador de Software",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Granollers",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://github.com/robertmarti", // Placeholder
      "https://linkedin.com/in/robertmarti" // Placeholder
    ]
  };

  return (
    <main className="relative min-h-screen selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 bg-black/50 backdrop-blur-md">
        <div className="font-bold text-xl tracking-tight">RM.</div>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <Link href="/projects" className="hover:text-white transition-colors">Todos los Proyectos</Link>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </nav>

      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <SocialPopup />

      <footer className="w-full py-6 text-center text-zinc-600 text-xs">
        <p>Created by <a href="https://github.com/CrushedDev" target="_blank" rel="noopener noreferrer" className="text-zinc-400 font-medium hover:text-white transition-colors">crusheed</a></p>
      </footer>
    </main>
  );
}
