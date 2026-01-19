
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { getNewServices } from '../lib/content';
import { ServiceSection, ServiceFeature } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductItem extends ServiceFeature {
  serviceId: string;
  serviceTitle: string;
}

export const Products: React.FC = () => {
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [allProducts, setAllProducts] = useState<ProductItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getNewServices();
        setServices(data);

        const products: ProductItem[] = [];
        data.forEach(service => {
          service.offers.forEach(offer => {
            products.push({
              ...offer,
              serviceId: service.id,
              serviceTitle: service.title
            });
          });
        });
        setAllProducts(products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredProducts = activeCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.serviceId === activeCategory);

  if (loading) {
    return (
      <div className="bg-[#F7F7F0] min-h-screen flex items-center justify-center">
        <p className="text-smart-muted" style={{ fontFamily: 'Manrope, sans-serif' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F0] min-h-screen">
      {/* Hero Section - Premium Style with Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/assets/images/img_6ea09ac655b8.jpg"
            alt="Product Ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>

        <Section className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-tight tracking-tight text-white mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Product Ecosystem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
            >
              Premium hardware and integrated solutions from the world's leading technology partners.
            </motion.p>
          </div>
        </Section>
      </section>

      {/* Filter Tabs - Haven Style */}
      <Section className="!py-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === 'All'
              ? 'bg-white text-smart-text border-black/10 shadow-sm'
              : 'text-smart-muted border-transparent hover:text-smart-text'
              }`}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            All Products
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveCategory(service.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === service.id
                ? 'bg-white text-smart-text border-black/10 shadow-sm'
                : 'text-smart-muted border-transparent hover:text-smart-text'
                }`}
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {service.title}
            </button>
          ))}
        </div>
      </Section>

      {/* Products Grid - Haven Style Cards */}
      <Section className="!pt-4 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={`${product.serviceId}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={product.image || '/assets/images/img_4fbf3280f66f.jpg'}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-[10px] font-bold text-smart-accent uppercase tracking-widest mb-2 block">{product.serviceTitle}</span>
                      <div className="flex items-start justify-between">
                        <h3
                          className="text-xl font-medium text-smart-text"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {product.title}
                        </h3>
                        <ArrowRight
                          size={18}
                          className="text-smart-muted group-hover:text-smart-text group-hover:translate-x-1 transition-all mt-1"
                        />
                      </div>
                    </div>

                    <p
                      className="text-smart-muted text-sm leading-relaxed mb-6 line-clamp-2"
                      style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                    >
                      {product.description || `Premium solutions for ${product.serviceTitle.toLowerCase()}.`}
                    </p>

                    {/* Brands/Features Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {product.brands && product.brands.slice(0, 2).map((brand, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-[10px] font-bold text-smart-muted bg-gray-50 rounded-full border border-gray-100 uppercase tracking-widest"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </div>
  );
};
