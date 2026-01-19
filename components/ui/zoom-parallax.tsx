'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
    const scale3 = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

    const scales = [scale1, scale2, scale3, scale4, scale5, scale3, scale2];

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-smart-bg">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="relative w-[60vw] h-[70vh] max-w-5xl">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover rounded-3xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
