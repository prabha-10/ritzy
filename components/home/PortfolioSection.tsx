import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const PORTFOLIO_IMAGES = [
    "/assets/images/img_908c1367bc62.jpg", // Modern Exterior
    "/assets/images/img_3bd47ef2d6ce.jpg", // Luxury Living Room
    "/assets/images/img_795bdf48be64.jpg", // Minimalist Kitchen
    "/assets/images/img_74bc9d8541ca.jpg", // Home Theater
    "/assets/images/img_3c0478faeddc.jpg", // Smart Lighting
    "/assets/images/img_816262825d0e.jpg", // Pool Area
    "/assets/images/img_4f2777d22abf.jpg", // Modern Bedroom
    "/assets/images/img_f09fdf964e08.jpg", // Glass Facade
];

/**
 * Interactive portfolio section with hover-activated orbiting image cards
 * Cards animate from a central pile to orbit positions on hover
 */
export const PortfolioSection: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Section className="py-32 bg-smart-darkgreen text-white overflow-hidden relative min-h-[900px] flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

            <div
                className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                onTouchStart={() => setIsExpanded(!isExpanded)}
            >
                {/* Central Content */}
                <motion.div
                    className="z-20 text-center relative max-w-md px-6"
                    animate={{
                        opacity: isExpanded ? 1 : 1,
                        scale: isExpanded ? 1 : 0.95,
                        filter: isExpanded ? 'blur(0px)' : 'blur(0px)'
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.span
                        className="text-smart-accent font-bold tracking-widest text-xs uppercase mb-4 block"
                        animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                    >
                        Selected Works
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-6 relative z-20"
                        animate={{ y: isExpanded ? 0 : 10 }}
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg mb-8 leading-relaxed"
                        animate={{ opacity: isExpanded ? 1 : 0 }}
                    >
                        Explore a curated selection of our most prestigious residential and commercial automation projects.
                    </motion.p>
                    <Link to="/portfolio">
                        <Button variant="primary" className={`transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                            View All Projects <ArrowRight className="ml-2" size={18} />
                        </Button>
                    </Link>
                </motion.div>

                {/* Orbiting Cards */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Center Anchor Point */}
                    <div className="absolute top-1/2 left-1/2 w-0 h-0">
                        {PORTFOLIO_IMAGES.map((src, index) => {
                            // Calculate position on a circle
                            const angleDeg = (360 / PORTFOLIO_IMAGES.length) * index;
                            const angleRad = (angleDeg * Math.PI) / 180;

                            // Expanded Radius
                            const radius = 320; // Distance from center when expanded
                            const x = Math.cos(angleRad) * radius;
                            const y = Math.sin(angleRad) * radius;

                            // Random scattered offset for idle state
                            const randomRotate = (index % 2 === 0 ? 8 : -8) + (index * 2);

                            return (
                                <Link to="/portfolio" key={index} className="pointer-events-auto">
                                    <motion.div
                                        className="absolute w-32 h-44 -ml-16 -mt-22 md:w-40 md:h-56 md:-ml-20 md:-mt-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gray-900 cursor-pointer"
                                        initial={{ x: 0, y: 0, rotate: 0, scale: 0.8 }}
                                        whileHover={{ scale: 1.1, zIndex: 50 }}
                                        animate={isExpanded
                                            ? {
                                                x: x,
                                                y: y,
                                                rotate: 0,
                                                scale: 1,
                                                zIndex: 10
                                            }
                                            : {
                                                // Breathing pile animation
                                                x: Math.cos(angleRad + Date.now() / 1000) * 10,
                                                y: Math.sin(angleRad + Date.now() / 1000) * 10,
                                                rotate: randomRotate,
                                                scale: 0.85,
                                                zIndex: index
                                            }
                                        }
                                        transition={{
                                            type: "spring",
                                            stiffness: 50,
                                            damping: 15,
                                            mass: 1
                                        }}
                                    >
                                        <div className="w-full h-full relative bg-gray-800">
                                            <img src={src} alt={`Project ${index}`} className="w-full h-full object-cover" />
                                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};
