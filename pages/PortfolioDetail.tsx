
import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { PORTFOLIO_DETAILS } from '../constants';

export const PortfolioDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const project = id && PORTFOLIO_DETAILS[id] ? PORTFOLIO_DETAILS[id] : null;

    if (!project) {
        return <Navigate to="/portfolio" replace />;
    }

    return (
        <div className="bg-white min-h-screen text-smart-charcoal font-sans">

            {/* 1. Hero Section - Full Width with Overlay */}
            <div className="relative w-full h-[calc(85vh-80px)] mt-[100px] min-h-[500px] overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 text-white">
                    {/* Top Bar */}
                    <div className="flex justify-between items-start pt-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">{project.subtitle}</p>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-5xl md:text-7xl font-light tracking-tight"
                            >
                                {project.title}
                            </motion.h1>
                        </div>

                        <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-smart-gold transition-colors">
                            <ArrowLeft size={16} /> Back to Works
                        </Link>
                    </div>

                    {/* Bottom Stats Row - Ayano Style */}
                    <div className="flex gap-12 border-t border-white/20 pt-6 mt-auto overflow-x-auto">
                        {project.overlayStats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                            >
                                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">{stat.label}</p>
                                <p className="text-xl font-light">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Split Description Section */}
            <Section className="py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-light leading-tight mb-8"
                        >
                            {project.descriptionTitle}
                        </motion.h2>
                    </div>

                    <div className="lg:w-1/2 space-y-12">
                        <p className="text-gray-600 text-lg leading-relaxed font-light">
                            {project.description}
                        </p>

                        {/* Details List */}
                        <div className="space-y-6">
                            {project.details.map((detail, idx) => (
                                <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">{detail.label}</span>
                                    <span className="text-normal font-medium text-smart-charcoal">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Gallery Grid */}
            <Section className="pb-24">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-light text-gray-400">Gallery</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {project.gallery.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`rounded-2xl overflow-hidden shadow-sm ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 4. Next Project / Footer Nav */}
            <div className="bg-gray-50 py-24 border-t border-gray-100">
                <Section className="flex justify-between items-center">
                    <Link to="/portfolio" className="text-xl font-bold text-gray-400 hover:text-smart-charcoal transition-colors">
                        All Projects
                    </Link>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-smart-charcoal hover:text-white transition-all">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </Section>
            </div>

        </div>
    );
};
