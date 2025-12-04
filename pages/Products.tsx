
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { Filter, ShoppingBag, Plus, ArrowRight } from 'lucide-react';

// Categories derived from the Miro board hierarchy
const CATEGORIES = ['All', 'Home Automation', 'Home Theater', 'Living Room AV', 'Commercial', 'Automation', 'Fenestrations', 'Security'];

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-smart-bg">
      <Section className="pb-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h1 className="text-5xl font-bold text-smart-text mb-4">Product Ecosystem</h1>
             <p className="text-gray-500">Curated hardware from the world's most prestigious technology brands.</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
           {CATEGORIES.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                 activeCategory === cat 
                   ? 'bg-smart-dark text-white shadow-lg' 
                   : 'bg-white text-gray-400 hover:bg-white hover:text-smart-text shadow-sm'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 bg-gray-50 p-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-smart-text hover:bg-smart-accent hover:text-white transition-colors">
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-smart-text z-10">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-bold text-smart-text group-hover:text-smart-accent transition-colors">{product.name}</h3>
                     {product.priceRange && <span className="text-sm font-bold text-gray-400">{product.priceRange}</span>}
                  </div>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="primary" size="sm" className="w-full group-hover:bg-smart-dark group-hover:text-white transition-colors">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found in this category.
          </div>
        )}
      </Section>
    </div>
  );
};
