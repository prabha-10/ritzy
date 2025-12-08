
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
    <div className="bg-smart-charcoal min-h-screen">
      {/* Hero with Background Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="/assets/images/img_f40680bbf23e.jpg"
          alt="Premium Smart Products"
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
              <span className="text-smart-gold font-bold tracking-widest text-sm uppercase mb-4 block">Product Ecosystem</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Designed for Distinction</h1>
              <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">
                Explore our curated selection of premium hardware, seamlessly integrating with your lifestyle.
              </p>
            </motion.div>
          </Section>
        </div>
      </div>

      {/* Filter Tabs */}
      <Section className="py-8 !pb-4 relative z-10 -mt-8">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === category
                ? 'bg-smart-gold text-smart-charcoal border-smart-gold shadow-lg shadow-smart-gold/20 scale-105'
                : 'bg-smart-charcoalLight text-gray-400 border-white/10 hover:border-smart-gold/30 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Products Grid */}
      <Section className="!pt-0">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="block group bg-smart-charcoalLight rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 border border-white/5 relative"
                >
                  <div className="aspect-square overflow-hidden bg-gray-900 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-6 py-2 bg-smart-gold text-smart-charcoal font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-bold text-smart-gold uppercase tracking-wider mb-1">{product.category}</p>
                        <h3 className="font-bold text-xl text-white group-hover:text-smart-gold transition-colors">{product.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <Button
              variant="outline"
              className="mt-4 border-white/20 text-white hover:bg-white/10"
              onClick={() => setActiveCategory('All')}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>
    </div>
  );
};
