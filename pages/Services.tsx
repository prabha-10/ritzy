
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-smart-charcoal min-h-screen">
      {/* Hero with Background Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/assets/images/img_a151a9e5ca5f.jpg"
          alt="Smart Home Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-smart-charcoal/60" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Section className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-smart-gold font-bold tracking-widest text-sm uppercase mb-4 block">What We Do</span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Elevate Your Living Experience</h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">
                Comprehensive automation solutions tailored for luxury residences and modern commercial spaces.
              </p>
            </motion.div>
          </Section>
        </div>
      </div>

      {/* Services Grid */}
      <Section className="relative z-10 -mt-12 md:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-smart-charcoalLight rounded-3xl overflow-hidden shadow-2xl border border-white/5 hover:border-smart-gold/30 hover:shadow-smart-gold/10 transition-all duration-500 group cursor-pointer h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smart-charcoalLight via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-smart-charcoal/80 backdrop-blur rounded-full p-3 text-smart-gold border border-white/10">
                    <service.icon size={24} />
                  </div>
                </div>
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-smart-gold transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-smart-gold mr-3"></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center text-sm font-bold text-white group-hover:text-smart-gold transition-colors tracking-wide uppercase">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};
