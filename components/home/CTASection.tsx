import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

/**
 * Call-to-Action section with dramatic full-screen background
 * Features animated content, client reviews link, and project showcase
 */
export const CTASection: React.FC = () => {
  const scrollToReviews = () => {
    const element = document.getElementById('reviews');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-black mt-0">
      {/* Background Image */}
      <img
        src="/assets/images/hero_luxury.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2s] hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-smart-darkgreen/40 mix-blend-multiply" />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-10 opacity-90"
        >
          <div className="w-8 h-8 bg-smart-accent rounded-tl-xl rounded-br-xl shadow-[0_0_15px_rgba(170,204,133,0.5)]"></div>
          <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">Ritzy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase max-w-6xl"
        >
          Where Vision Meets <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Intelligence</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Explore architecture reimagined for the next century. We blend science, nature, and aesthetic to craft structures that transcend time.
          </p>

          <Link to="/contact">
            <Button size="lg" className="bg-smart-accent text-smart-dark font-bold px-12 py-5 rounded-2xl text-lg shadow-[0_0_30px_rgba(170,204,133,0.3)] hover:shadow-[0_0_50px_rgba(170,204,133,0.5)] hover:scale-105 transition-all border border-white/20 backdrop-blur-sm">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Left: Reviews Link */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        whileInView={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:translate-x-0 md:bottom-16 md:left-16 z-20 cursor-pointer group"
        onClick={scrollToReviews}
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 pr-6 rounded-2xl hover:bg-black/60 transition-all hover:border-smart-accent/50 flex items-center gap-4 group-hover:scale-105 duration-300 justify-center md:justify-start">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://randomuser.me/api/portraits/women/${i + 30}.jpg`} className="w-12 h-12 rounded-full border-2 border-black/50 object-cover" alt="Reviewer" />
            ))}
          </div>
          <div>
            <div className="flex gap-1 mb-1 justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-smart-accent text-smart-accent" />)}
            </div>
            <p className="text-white text-xs font-bold group-hover:text-smart-accent transition-colors">Trusted by Visionaries Worldwide</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right: Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        whileInView={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:left-auto md:right-16 md:translate-x-0 md:bottom-16 z-20"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 pr-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default shadow-2xl justify-between md:justify-start">
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/img_fc40a000c7ae.jpg"
              className="w-20 h-16 object-cover rounded-xl shadow-inner"
              alt="Project"
            />
            <div className="text-left">
              <h4 className="text-white font-bold text-sm tracking-wide">Iconic Architecture</h4>
              <p className="text-gray-300 text-[10px] mt-1">Explore our latest build...</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-smart-accent text-smart-dark flex items-center justify-center ml-2 shadow-lg">
            <ArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
