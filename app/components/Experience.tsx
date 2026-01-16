import Section from './Section';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <Section id="experience">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-12">Experiencia</h2>
            <div className="relative border-l border-white/10 ml-3 space-y-16">
                {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 group">
                        {/* Dot */}
                        <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-800 ring-4 ring-black group-hover:bg-accent transition-colors duration-300" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                            <span className="text-sm text-zinc-500 font-mono">{exp.period}</span>
                        </div>

                        <div className="mb-4">
                            <span className="text-accent text-sm">{exp.company}</span>
                            <span className="text-zinc-600 text-sm mx-2">•</span>
                            <span className="text-zinc-500 text-sm">{exp.location}</span>
                        </div>

                        <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed max-w-2xl">
                            {exp.description.map((item, i) => (
                                <li key={i}>- {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
