import Section from './Section';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
    return (
        <Section id="contact" className="pb-40">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12">Contacto</h2>
            <div className="max-w-xl">
                <h3 className="text-3xl font-bold text-white mb-6">{portfolioData.contact.heading}</h3>
                <p className="text-zinc-400 mb-10 leading-relaxed text-pretty">
                    {portfolioData.contact.description}
                </p>
                <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-black font-medium transition-transform hover:scale-105 active:scale-95"
                >
                    {portfolioData.contact.cta}
                </a>
            </div>
        </Section>
    );
}
