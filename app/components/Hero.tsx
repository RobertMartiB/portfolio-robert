import Section from './Section';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
    return (
        <Section id="about" className="pt-32 pb-16">
            <div className="space-y-6">
                <p className="text-zinc-400">{portfolioData.personal.title}</p>
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                    {portfolioData.personal.name} <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">{portfolioData.personal.surname}</span>
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl text-pretty">
                    {portfolioData.personal.bio}
                </p>
            </div>
        </Section>
    );
}
