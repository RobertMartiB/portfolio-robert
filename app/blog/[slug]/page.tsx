import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { ArrowLeft, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black selection:bg-accent/30 text-zinc-100 pb-20">
            {/* Background elements */}
            <div className="fixed inset-0 bg-[#000000] -z-10" />
            <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-900/10 via-black to-black -z-10 blur-3xl opacity-30 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 pt-32">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al inicio
                </Link>

                <header className="mb-12">
                    <div className="bg-white/5 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 text-purple-400">
                        BLOG
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <Calendar size={16} />
                        <time>{post.date}</time>
                    </div>
                </header>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            p: ({ node, ...props }) => <p className="leading-7 text-zinc-300 mb-6" {...props} />,
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-10 mb-4 text-white" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-white" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-3 text-white" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-6 text-zinc-300" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 text-zinc-300" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-2 pl-1" {...props} />,
                            a: ({ node, ...props }) => <a className="text-purple-400 hover:text-purple-300 underline underline-offset-4" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-purple-500 pl-4 py-1 my-6 text-zinc-400 italic bg-white/5 rounded-r-lg" {...props} />,
                            code: ({ node, inline, className, children, ...props }: any) => {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline ? (
                                    <pre className="bg-[#1a1a1a] p-4 rounded-lg border border-white/10 overflow-x-auto my-6 text-sm">
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    </pre>
                                ) : (
                                    <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-purple-300 font-mono" {...props}>
                                        {children}
                                    </code>
                                )
                            },
                            img: ({ node, ...props }) => (
                                <span className="block my-8">
                                    <img
                                        className="rounded-xl border border-white/10 w-full"
                                        {...props}
                                        alt={props.alt || ''}
                                    />
                                    {props.alt && (
                                        <span className="block text-center text-sm text-zinc-500 mt-2 italic">
                                            {props.alt}
                                        </span>
                                    )}
                                </span>
                            ),
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </main>
    );
}
