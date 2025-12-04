
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SERVICE_DETAILS } from '../constants';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the service data
  const service = id ? SERVICE_DETAILS[id] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] overflow-hidden m-4 rounded-[3rem]">
        <img 
          src={service.heroImage} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
           <div className="flex justify-between items-start">
              <div className="text-white/80 text-sm font-bold tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                Ritzy Services
              </div>
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
           >
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
               {service.title}
             </h1>
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                  {service.subtitle}
                </p>
             </div>
           </motion.div>
           
           {/* Scroll Indicator / Page Number Style */}
           <div className="absolute bottom-16 right-16 text-white/60 font-mono hidden md:block">
             01 — 06
           </div>
        </div>
      </div>

      {/* Intro Content */}
      <Section className="py-24">
        <div className="flex flex-col lg:flex-row gap-16">
           <div className="lg:w-1/3">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 sticky top-32">About</h2>
           </div>
           <div className="lg:w-2/3">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-medium text-smart-text mb-12 leading-tight"
              >
                {service.introTitle}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <p className="text-gray-500 text-lg leading-relaxed">
                   {service.introText}
                 </p>
                 <div className="flex flex-col justify-end">
                   <Link to="/contact">
                     <Button size="lg" className="w-full md:w-auto">
                       Start Consultation <ArrowRight className="ml-2" size={18} />
                     </Button>
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Features Breakdown */}
      <Section className="bg-smart-bg py-24 rounded-[3rem] mx-4">
         <div className="mb-16 px-4 md:px-12">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Capabilities</h2>
            <h3 className="text-4xl font-bold text-smart-text">Key Features</h3>
         </div>

         <div className="space-y-32 px-4 md:px-12">
            {service.features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                 <div className="w-full md:w-1/2 relative group">
                    <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                       <img 
                         src={feature.image} 
                         alt={feature.title} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                    </div>
                 </div>
                 <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-xs font-mono text-smart-accent">0{index + 1}</span>
                       <div className="h-[1px] w-12 bg-gray-200"></div>
                    </div>
                    <h4 className="text-3xl font-bold text-smart-text mb-6">{feature.title}</h4>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-sm font-bold text-smart-text hover:text-smart-accent transition-colors uppercase tracking-wide group/link">
                      Inquire <ArrowUpRight className="ml-2 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" size={16} />
                    </Link>
                 </div>
              </div>
            ))}
         </div>
      </Section>

      {/* Navigation Footer for Services */}
      <Section className="py-24">
         <div className="border-t border-gray-200 pt-12 flex justify-between items-center">
            <Link to="/services" className="text-smart-text font-bold flex items-center gap-2 hover:text-gray-500 transition-colors">
               <ArrowRight className="rotate-180" size={20} /> Back to Services
            </Link>
            <div className="hidden md:block text-gray-300 font-mono text-xs">
               NEXT GENERATION LIVING
            </div>
         </div>
      </Section>

    </div>
  );
};
