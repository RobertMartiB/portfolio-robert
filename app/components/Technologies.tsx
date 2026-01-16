"use client";
import { portfolioData } from '../data/portfolio';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'framer-motion';

// Utility to wrap a number between a range
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Technologies() {
    // 1. Rename to TECNOLOGÍAS
    const title = "TECNOLOGÍAS";

    // Flatten items
    const allTechnologies = portfolioData.technologies.flatMap(category => category.items);
    // Use 4 copies for the seamless loop
    const doubledItems = [...allTechnologies, ...allTechnologies, ...allTechnologies, ...allTechnologies];

    // Motion State
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    // Interaction State
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);

    // Calculate the width of one single set of items to know where to wrap
    useEffect(() => {
        if (containerRef.current) {
            // Total scroll width is roughly the width of the inner content
            // We have 4 sets. One set width = Total / 4.
            const totalWidth = containerRef.current.scrollWidth;
            setItemWidth(totalWidth / 4);
        }
    }, [allTechnologies]);

    // Speed configuration
    // Negative = moves left.
    const baseVelocity = -0.5;

    useAnimationFrame((t, delta) => {
        if (!itemWidth) return;

        let moveBy = baseVelocity * (delta / 1000) * 60; // Normalize to 60fps

        // Optionally add scroll velocity effect (parallax speed up)
        // if (velocityFactor.get() !== 0) {
        //   moveBy += moveBy * velocityFactor.get();
        // }

        // If dragging, we stop the auto-scroll
        if (!isDragging) {
            baseX.set(baseX.get() + moveBy);
        }
    });

    // The transform that creates the loop
    // It takes the infinite baseX and "wraps" it into the range [-itemWidth, 0]
    // So it constantly loops effectively.
    // Note: wrap(min, max, v)
    const x = useTransform(baseX, (v) => {
        if (!itemWidth) return "0px";
        // Wrap between -itemWidth and 0
        return `${wrap(-itemWidth, 0, v)}px`;
    });

    return (
        <section id="skills" className="w-full py-12 bg-black/50 border-y border-white/5 overflow-hidden select-none">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex justify-center mb-8">
                    <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest bg-black z-10 px-4">
                        {title}
                    </h2>
                </div>

                <div
                    className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                    }}
                    onPointerDown={() => setIsDragging(true)}
                    onPointerUp={() => setIsDragging(false)}
                    onPointerLeave={() => setIsDragging(false)}
                >
                    <motion.div
                        className="flex items-center w-max"
                        style={{ x }}
                        ref={containerRef}
                        onPan={(_, info) => {
                            // Update baseX with the drag delta
                            baseX.set(baseX.get() + info.delta.x);
                        }}
                    >
                        {doubledItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 shrink-0 mr-16"
                            >
                                <div className="relative w-8 h-8 pointer-events-none">
                                    <Image
                                        src={`https://cdn.simpleicons.org/${item.icon}/white`}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-lg font-medium text-white/90 pointer-events-none">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
