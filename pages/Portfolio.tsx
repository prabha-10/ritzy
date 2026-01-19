import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { PORTFOLIO_PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Image Section - Like About Page */}
      <div className="relative h-[60vh] min-h-[400px] md:min-h-[500px] overflow-hidden">
        <img
          src="/assets/images/img_f40680bbf23e.jpg"
          alt="Our Work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">Our Work</h1>
            <p className="text-lg md:text-xl font-light tracking-wide opacity-90 drop-shadow-sm">A Selection of Signature Projects</p>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Grid Section */}
      <Section className="py-24 bg-gray-50">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Link to={`/portfolio/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-light text-white mb-2">{project.title}</h3>
                  <p className="text-smart-gold text-xs font-bold uppercase tracking-widest">{project.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
