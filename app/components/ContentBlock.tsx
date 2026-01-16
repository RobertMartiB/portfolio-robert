import React from 'react';

interface ContentBlockProps {
    block: {
        type: string;
        text?: string;
        code?: string;
        language?: string;
        src?: string;
        alt?: string;
        items?: string[];
    };
}

export default function ContentBlock({ block }: ContentBlockProps) {
    switch (block.type) {
        case 'heading':
            return (
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                    {block.text}
                </h2>
            );

        case 'paragraph':
            return (
                <p className="text-zinc-400 leading-relaxed mb-6 text-lg text-pretty">
                    {block.text}
                </p>
            );

        case 'code':
            return (
                <div className="my-6 rounded-lg overflow-hidden border border-white/10 bg-[#0a0a0a]">
                    {block.language && (
                        <div className="bg-white/5 px-4 py-2 border-b border-white/5 text-xs font-mono text-zinc-500 uppercase">
                            {block.language}
                        </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
                        <code>{block.code}</code>
                    </pre>
                </div>
            );

        case 'image':
            return (
                <div className="my-8 rounded-xl overflow-hidden border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={block.src}
                        alt={block.alt || 'Tutorial image'}
                        className="w-full h-auto object-cover"
                    />
                    {block.text && (
                        <p className="mt-2 text-center text-sm text-zinc-500">{block.text}</p>
                    )}
                </div>
            );

        case 'list':
            return (
                <ul className="list-disc list-inside space-y-2 mb-6 text-zinc-400 text-lg">
                    {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );

        default:
            return null;
    }
}
