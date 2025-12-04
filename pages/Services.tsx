
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-smart-bg min-h-screen">
      {/* Header */}
      <Section className="text-center pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-smart-accent font-bold tracking-widest text-sm uppercase mb-4 block">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-bold text-smart-text mb-6">Elevate Your Living Experience</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive automation solutions tailored for luxury residences and modern commercial spaces.
          </p>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full p-2 text-smart-text">
                   <service.icon size={20} />
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-smart-text mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                   {service.features.slice(0,3).map((f, i) => (
                     <li key={i} className="flex items-center text-xs font-medium text-gray-400">
                       <div className="w-1.5 h-1.5 rounded-full bg-smart-accent mr-2"></div>
                       {f}
                     </li>
                   ))}
                </ul>
                <Link to={`/services/${service.id}`} className="inline-flex items-center text-sm font-bold text-smart-text group-hover:text-smart-accent transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
