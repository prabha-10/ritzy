
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { PORTFOLIO_PROJECTS } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-smart-darkgreen text-white pt-24 pb-12">
      <Section className="h-full flex flex-col">
        {/* Header Wrapper */}
        <div className="relative mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Our Work
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="text-lg md:text-xl text-gray-300 font-light"
            >
              A Selection of Signature Projects
            </motion.p>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col justify-center">
          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x scrollbar-hide px-6 pb-10 items-start w-fit mx-auto max-w-full"
          >
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial="idle"
                whileHover="hover"
                layout
                className="min-w-[300px] md:min-w-[400px] snap-center bg-white rounded-2xl overflow-hidden text-smart-text shadow-2xl flex flex-col group cursor-pointer"
              >
                 {/* Image Section - Always visible */}
                 <div className="h-[280px] overflow-hidden relative w-full">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>

                 {/* Content Section */}
                 <div className="p-6 bg-white flex flex-col items-center text-center relative z-10">
                   <motion.h3 layout className="text-xl font-bold mb-2">{project.title}</motion.h3>
                   
                   {/* Expandable Details */}
                   <motion.div 
                     variants={{
                       idle: { height: 0, opacity: 0, marginTop: 0 },
                       hover: { height: 'auto', opacity: 1, marginTop: 16 }
                     }}
                     transition={{ duration: 0.3, ease: "easeInOut" }}
                     className="w-full overflow-hidden"
                   >
                       <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-bold uppercase text-xs">Client</span>
                            <span className="font-medium">{project.client}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-bold uppercase text-xs">Categories</span>
                            <span className="font-medium text-gray-600 truncate max-w-[150px]">{project.categories.join(', ')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400 font-bold uppercase text-xs">Year</span>
                            <span className="font-medium">{project.year}</span>
                          </div>
                       </div>
                   </motion.div>
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Controls: Pagination & Arrows */}
          <div className="flex flex-col items-center gap-8 mt-4">
            {/* Simple Pagination Dots Visual */}
            <div className="flex justify-center gap-2">
              {PORTFOLIO_PROJECTS.map((_, i) => (
                 <div key={i} className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '0%' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="h-full bg-white w-full"
                    />
                 </div>
              ))}
            </div>

            {/* Navigation Arrows - Glassmorphism Style */}
            <div className="flex gap-6 justify-center z-20">
               <button 
                 onClick={() => scroll('left')}
                 className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-smart-darkgreen hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
                 aria-label="Previous project"
               >
                 <ArrowLeft size={24} />
               </button>
               <button 
                 onClick={() => scroll('right')}
                 className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-smart-darkgreen hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
                 aria-label="Next project"
               >
                 <ArrowRight size={24} />
               </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
