
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Star, X } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PRODUCT_DETAILS } from '../constants';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  // Find product data or fallback to default
  const product = id && PRODUCT_DETAILS[id] ? PRODUCT_DETAILS[id] : PRODUCT_DETAILS['default'];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6 md:px-12 pb-24 text-center">
         <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block px-4 py-2 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-widest mb-6"
         >
           {product.tagline}
         </motion.div>
         
         <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-smart-text mb-8 leading-tight tracking-tight"
         >
           {product.name}
         </motion.h1>

         <div className="relative max-w-5xl mx-auto">
            {/* Quote Floating Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block absolute top-1/2 left-0 -translate-y-1/2 max-w-xs text-left z-10"
            >
               <div className="text-6xl text-gray-200 font-serif absolute -top-10 -left-4">"</div>
               <p className="text-gray-600 font-medium text-lg leading-relaxed relative z-10">
                 {product.quote}
               </p>
            </motion.div>

            {/* Hero Image */}
            <motion.img 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src={product.heroImage} 
              alt={product.name}
              className="w-full max-h-[600px] object-contain relative z-0"
            />

            {/* Rating Floating Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block absolute bottom-20 right-0 text-right"
            >
              <div className="text-6xl font-bold text-smart-accent">{product.rating}</div>
              <div className="text-sm text-gray-500 font-bold">{product.reviews}+ Customer Ratings</div>
            </motion.div>
         </div>
      </div>

      {/* Highlights Section - Immersive Banner */}
      <div className="relative bg-gradient-to-b from-orange-50 to-orange-100 py-32 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-12">
               <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">
                 {product.description}
               </h2>
               <div className="space-y-6">
                  {product.highlights.map((highlight, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 }}
                      className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm"
                    >
                       <div className="w-12 h-12 bg-smart-accent rounded-full flex items-center justify-center text-white">
                         {highlight.icon ? <highlight.icon size={24} /> : <Star size={24} />}
                       </div>
                       <div>
                          <h4 className="font-bold text-smart-text">{highlight.title}</h4>
                          <p className="text-sm text-gray-500">{highlight.description}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <img 
                 src={product.heroImage} 
                 className="w-full object-cover rounded-3xl shadow-2xl rotate-[-5deg] border-4 border-white" 
                 alt="Detail View" 
               />
            </div>
         </div>
      </div>

      {/* Variants Grid */}
      <Section className="py-24 bg-gray-50">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold text-smart-text max-w-xl">{product.variantsTitle}</h2>
            <div className="flex gap-2">
               <button className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-smart-dark hover:text-white transition-colors">
                  <ArrowRight size={20} className="rotate-180" />
               </button>
               <button className="w-12 h-12 rounded-full bg-smart-dark text-white shadow-sm flex items-center justify-center hover:bg-black transition-colors">
                  <ArrowRight size={20} />
               </button>
            </div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.variants.map((variant, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-6 rounded-3xl hover:shadow-xl transition-all duration-300 group"
               >
                  <div className="bg-gray-100 rounded-2xl h-64 mb-6 flex items-center justify-center p-4 relative overflow-hidden">
                     <img src={variant.image} alt={variant.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                     <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                        <Star size={16} />
                     </button>
                  </div>
                  <div className="flex justify-between items-end">
                     <div>
                        <h3 className="font-bold text-lg mb-1">{variant.name}</h3>
                        <div className="flex gap-1 mb-4">
                           {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-black text-black" />)}
                           <span className="text-xs text-gray-400 ml-2">120+ Reviews</span>
                        </div>
                     </div>
                     <span className="font-bold text-lg bg-orange-100 text-orange-600 px-3 py-1 rounded-lg mb-4">{variant.price}</span>
                  </div>
                  <div className="flex gap-4">
                     <Button variant="ghost" className="flex-1 bg-gray-100 hover:bg-gray-200">Details</Button>
                     <Button className="flex-1">Inquire</Button>
                  </div>
               </motion.div>
            ))}
         </div>
      </Section>

      {/* Mid Banner */}
      <div className="py-24 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">{product.bannerTitle}</h2>
            <p className="text-xl text-gray-500">{product.bannerSubtitle}</p>
         </div>
         <div className="max-w-[1440px] mx-auto h-[500px] rounded-[3rem] overflow-hidden relative">
            <img src={product.bannerImage} className="w-full h-full object-cover" alt="Banner" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 max-w-lg text-white">
               <h3 className="text-4xl font-bold mb-4">Hear Every Detail.<br/>Embrace Every Beat.</h3>
               <p className="text-lg text-white/90">Discover the perfect balance of deep technology and human-centric design.</p>
            </div>
         </div>
      </div>

      {/* Feature Grid */}
      <Section className="bg-gray-50">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.featureGrid.map((feature, idx) => (
               <div key={idx} className={`bg-white rounded-[3rem] overflow-hidden p-12 flex flex-col ${idx % 2 !== 0 ? 'md:bg-smart-dark md:text-white' : ''}`}>
                  <div className="mb-12">
                     <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                     <p className={`${idx % 2 !== 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                        {feature.description}
                     </p>
                  </div>
                  <div className="mt-auto h-64 rounded-3xl overflow-hidden">
                     <img src={feature.image} className="w-full h-full object-cover" alt={feature.title} />
                  </div>
               </div>
            ))}
         </div>
      </Section>

      {/* FAQ */}
      <Section className="py-24 bg-white">
         <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
               <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-widest mb-6">FAQ</div>
               <h2 className="text-5xl font-bold mb-6">Hear Us Out<br/>Your Questions, Answered</h2>
               <img src="https://images.unsplash.com/photo-1534349762913-96c2255976bf?auto=format&fit=crop&w=400" className="rounded-3xl w-full mt-8" alt="FAQ" />
            </div>
            <div className="md:w-2/3 space-y-4">
               <p className="text-gray-500 mb-8">Perfect blend of Sound and Sophistication. Audio engineering meets elegant design for an unparalleled listening experience.</p>
               {product.faqs.map((faq, idx) => (
                  <div 
                     key={idx}
                     className="border-b border-gray-100 py-6"
                  >
                     <button 
                        onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                        className="w-full flex justify-between items-center text-left font-bold text-lg hover:text-smart-accent transition-colors"
                     >
                        <span className="flex gap-4">
                           <span className="text-gray-300 font-mono">0{idx + 1}</span>
                           {faq.question}
                        </span>
                        <ArrowRight size={20} className={`transition-transform ${activeFAQ === idx ? '-rotate-45' : ''}`} />
                     </button>
                     <AnimatePresence>
                        {activeFAQ === idx && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                           >
                              <p className="pl-10 pt-4 text-gray-500 leading-relaxed">
                                 {faq.answer}
                              </p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </Section>

      {/* Closing Banner */}
      <div className="bg-smart-bg py-24 px-6">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-5xl font-bold mb-12">{product.closingTitle}</h2>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden">
               <img src={product.closingImage} className="w-full h-full object-cover" alt="Closing" />
               <div className="absolute bottom-12 left-12 max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Activate Transparency</h3>
                  <p className="text-sm opacity-90">Mode by pressing the noise control button. This mode allows external sounds to pass through, enabling you to hear your environment.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Final Footer Call */}
      <div className="py-24 bg-white text-center">
         <h2 className="text-4xl md:text-6xl font-bold mb-12">Each Part Flows With<br/>Smooth Balance</h2>
         <div className="max-w-5xl mx-auto h-[400px] rounded-[3rem] overflow-hidden bg-orange-50 flex items-center justify-center">
             <img src={product.heroImage} className="w-full h-full object-contain p-12" alt="Product" />
         </div>
      </div>

    </div>
  );
};
