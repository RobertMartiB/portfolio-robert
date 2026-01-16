"use client";
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectLink {
    github?: string;
    demo?: string;
    caseStudy?: string;
}

interface ProjectData {
    title: string;
    description: string;
    tags: string[];
    links: ProjectLink;
    image?: string;
    featured?: boolean;
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full"
            whileHover={{ y: -5 }}
        >
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden border-b border-white/5">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/0 group-hover:scale-105 transition-transform duration-500" />
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors truncate pr-2">
                        {project.title}
                    </h3>
                    <div className="flex gap-3 flex-shrink-0">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors"
                                title="Ver Repositorio"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors"
                                title="Ver Proyecto Online"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                        {project.links.caseStudy && (
                            <a
                                href={project.links.caseStudy}
                                className="text-zinc-500 hover:text-accent transition-colors"
                                title="Leer Post / Case Study"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-zinc-400 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
