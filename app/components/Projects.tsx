"use client";
import { portfolioData } from '../data/portfolio';
import Section from './Section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    // Show only featured projects, or fallback to first 4 if none are featured
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    const projectsToShow = featuredProjects.length > 0 ? featuredProjects : portfolioData.projects.slice(0, 4);

    return (
        <Section id="projects" className="bg-black overflow-hidden relative">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold text-white tracking-tight mb-2 text-center">Proyectos Destacados</h2>
                <p className="text-zinc-400 text-center max-w-2xl">
                    Una selección de mis trabajos recientes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
                {projectsToShow.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full transition-all active:scale-95"
                >
                    Ver todos los proyectos
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </Section>
    );
}

