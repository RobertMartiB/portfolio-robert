import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import SocialPopup from "./components/SocialPopup";
import Navbar from "./components/Navbar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robert Martí",
    "url": "https://robertmartib.github.io/portfolio-robert/",
    "jobTitle": "Técnico de sistemas",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Granollers",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://github.com/RobertMartiB",
      "https://www.linkedin.com/in/robert-marti-badia-119710235/"
    ]
  };

  return (
    <main className="relative min-h-screen selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <SocialPopup />

      <footer className="w-full py-6 text-center text-zinc-600 text-xs">
       </footer>
    </main>
  );
}
