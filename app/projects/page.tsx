import Link from 'next/link';
import { portfolioData } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard'; // Relative to app/projects is ../components/ProjectCard
import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Proyectos - Portfolio',
    description: 'Lista completa de mis proyectos y trabajos realizados.',
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black selection:bg-accent/30 text-zinc-100 pb-20">
            {/* Background elements (similar to blog post page) */}
            <div className="fixed inset-0 bg-[#000000] -z-10" />
            <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 via-black to-black -z-10 blur-3xl opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al inicio
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Todos los Proyectos
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Una colección completa de mis trabajos, experimentos y desarrollos a lo largo de mi carrera.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
