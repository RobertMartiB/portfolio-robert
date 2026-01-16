'use client';

import { portfolioData } from '../data/portfolio';
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Instagram,
    Facebook,
    Youtube,
    Twitch,
    Globe,
    FileText,
    Dribbble
} from 'lucide-react';

const iconMap: Record<string, any> = {
    Github,
    Linkedin,
    Mail,
    Twitter,
    Instagram,
    Facebook,
    Youtube,
    Twitch,
    Globe,
    FileText,
    Dribbble
};

export default function SocialPopup() {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
            {portfolioData.socials.map((link) => {
                const Icon = iconMap[link.icon] || Globe;
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                        title={link.label}
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
    );
}
