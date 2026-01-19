
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Star } from 'lucide-react';
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
      <div className="bg-white min-h-screen font-sans text-smart-charcoal">

         {/* 1. Hero Section - Harmony Style */}
         <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0">
               <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
               {/* Top Bar (Brand/Nav placeholder if needed, but we have global header) */}
               <div className="flex justify-between items-start pt-20">
                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="text-white text-4xl md:text-6xl font-light tracking-tight"
                  >
                     {product.name}
                  </motion.h1>

                  <div className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white max-w-xs">
                     <p className="text-sm font-medium opacity-90">{product.tagline}</p>
                     <div className="flex items-center gap-2 mt-2">
                        <Star size={14} className="fill-smart-gold text-smart-gold" />
                        <span className="text-xs font-bold">{product.rating} ({product.reviews} reviews)</span>
                     </div>
                  </div>
               </div>

               <div className="flex justify-between items-end">
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="text-white/80 text-sm max-w-md hidden md:block"
                  >
                     {product.quote}
                  </motion.div>

                  {/* Floating "One Step Away" Card - Positioned bottom right like reference */}
                  <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.8 }}
                     className="bg-white rounded-3xl p-6 md:p-8 max-w-sm shadow-2xl relative z-10"
                  >
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl font-bold text-smart-charcoal">
                           70+
                        </span>
                        <div className="flex -space-x-2">
                           {[1, 2, 3].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                           ))}
                        </div>
                     </div>
                     <p className="text-sm text-gray-500 mb-6">
                        Premium installations completed this month.
                     </p>
                     <Button className="w-full rounded-full py-6 text-sm uppercase tracking-widest bg-smart-charcoal text-white hover:bg-black">
                        Book Consultation
                     </Button>
                  </motion.div>
               </div>
            </div>
         </div>

         {/* 2. "Your Property Just One Step Away" - Variants Grid */}
         <Section className="py-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-light text-smart-charcoal mb-6">
                  {product.variantsTitle || "Your smart home, just one step away"}
               </h2>
               <p className="text-gray-500 font-light">
                  Explore our curated collection of premium interfaces and devices.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {product.variants.map((variant, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1 }}
                     className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                  >
                     <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                     <div className="absolute bottom-0 left-0 p-8 w-full">
                        <p className="text-xs font-bold text-smart-gold uppercase tracking-widest mb-2">Collection 0{idx + 1}</p>
                        <h3 className="text-white text-2xl font-light mb-1">{variant.name}</h3>
                        <p className="text-white/60 text-sm">{variant.price}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </Section>


         {/* 3. Feature Split Section with Floating Card */}
         <Section className="py-12">
            <div className="relative rounded-[3rem] overflow-hidden h-[800px] w-full">
               <img
                  src={product.bannerImage}
                  alt="Feature Banner"
                  className="w-full h-full object-cover"
               />

               {/* Floating Content Card */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-12 left-6 md:top-24 md:left-24 bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl max-w-md shadow-lg"
               >
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Key Specifications</h3>

                  <div className="space-y-8">
                     {product.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-4">
                           <span className="text-xs font-mono text-gray-400 pt-1">0{idx + 1}</span>
                           <div>
                              <h4 className="font-bold text-lg text-smart-charcoal mb-1">{highlight.title}</h4>
                              <p className="text-sm text-gray-500 leading-relaxed font-light">
                                 {highlight.description}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                     <Button variant="ghost" className="text-smart-charcoal pl-0 hover:bg-transparent hover:text-smart-gold transition-colors flex items-center gap-2">
                        View Technical Sheet <ArrowRight size={16} />
                     </Button>
                  </div>
               </motion.div>
            </div>
         </Section>

         {/* 4. Insights / Feature Grid */}
         <Section className="py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                     {product.bannerTitle}
                  </h2>
                  <p className="text-gray-500 font-light text-lg">
                     {product.description}
                  </p>
               </div>
               <Button variant="outline" className="rounded-full px-8 border-gray-300">
                  Explore All Features
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {product.featureGrid.map((feature, idx) => (
                  <div key={idx} className="space-y-4 group">
                     <div className="rounded-3xl overflow-hidden h-80 w-full relative">
                        <img
                           src={feature.image}
                           alt={feature.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <ArrowRight size={16} className="text-smart-charcoal -rotate-45" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Section>


         {/* 5. FAQ Section - Minimal Accordion */}
         <Section className="py-24 bg-gray-50">
            <div className="flex flex-col md:flex-row gap-16">
               <div className="md:w-1/3">
                  <h2 className="text-4xl font-light mb-6">Frequently asked<br />questions.</h2>
                  <p className="text-gray-500 font-light mb-8">
                     Everything you need to know about functionality, installation, and support.
                  </p>
               </div>

               <div className="md:w-2/3 divide-y divide-gray-200">
                  {product.faqs.map((faq, idx) => (
                     <div key={idx} className="py-6">
                        <button
                           onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                           className="w-full flex justify-between items-center text-left group"
                        >
                           <span className="font-medium text-lg text-smart-charcoal group-hover:text-black transition-colors">
                              {faq.question}
                           </span>
                           <span className={`p-2 rounded-full border border-gray-200 transition-colors group-hover:bg-white ${activeFAQ === idx ? 'bg-smart-charcoal text-white border-smart-charcoal' : ''}`}>
                              {activeFAQ === idx ? <Minus size={14} /> : <Plus size={14} />}
                           </span>
                        </button>
                        <AnimatePresence>
                           {activeFAQ === idx && (
                              <motion.div
                                 initial={{ height: 0, opacity: 0 }}
                                 animate={{ height: 'auto', opacity: 1 }}
                                 exit={{ height: 0, opacity: 0 }}
                                 className="overflow-hidden"
                              >
                                 <p className="pt-4 text-gray-500 font-light leading-relaxed pr-12">
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


         {/* 6. Footer / Upgrade Banner */}
         <Section className="py-24">
            <div className="bg-smart-bg rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
               <div className="relative z-10 md:w-1/2 space-y-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                     New
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-smart-charcoal leading-tight">
                     {product.closingTitle || "Our Expertise, Your Advantage"}
                  </h2>
                  <p className="text-gray-600 font-light text-lg">
                     Transform your living space today. Our team of experts is ready to design the perfect system for you.
                  </p>

                  <div className="space-y-4 pt-4">
                     <div className="flex gap-12">
                        <div>
                           <h4 className="font-bold text-smart-charcoal">Property Match</h4>
                           <p className="text-xs text-gray-500 mt-1">Custom tailored solutions</p>
                        </div>
                        <div>
                           <h4 className="font-bold text-smart-charcoal">Seamless Tech</h4>
                           <p className="text-xs text-gray-500 mt-1">Invisible integration</p>
                        </div>
                     </div>
                  </div>

                  <Button className="rounded-full px-8 py-6 bg-smart-charcoal text-white mt-4">
                     Start Your Project
                  </Button>
               </div>

               <div className="relative z-10 md:w-1/2 h-full min-h-[400px]">
                  <img
                     src={product.closingImage}
                     alt="Upgrade"
                     className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
               </div>
            </div>
         </Section>

      </div>
   );
};
