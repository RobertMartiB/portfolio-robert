import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import SocialPopup from "./components/SocialPopup";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-accent/30">
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
    </main>
  );
}
