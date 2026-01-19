
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { getNewServices } from '../lib/content';
import { ServiceSection } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await getNewServices();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

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
            src="/assets/images/img_dc1759ad49a0.jpg"
            alt="Our Services"
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
            >
              Comprehensive automation solutions tailored for luxury residences and modern commercial spaces.
            </motion.p>
          </div>
        </Section>
      </section>

      {/* Services Grid - Haven Style Cards */}
      <Section className="!pt-0 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || '/assets/images/img_4fbf3280f66f.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title + Arrow Row */}
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="text-2xl font-medium text-smart-text group-hover:text-smart-accent transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <ArrowRight
                      size={20}
                      className="text-smart-muted group-hover:text-smart-text group-hover:translate-x-1 transition-all"
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="text-smart-muted text-sm leading-relaxed mb-6 line-clamp-2"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                  >
                    {service.description}
                  </p>

                  {/* Tags/Pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.offers && service.offers.slice(0, 3).map((offer, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 text-xs font-medium text-smart-muted bg-gray-100 rounded-full border border-gray-200"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {offer.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
