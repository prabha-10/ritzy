
import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { getServiceSectionBySlug, getBrands } from '../lib/content';
import { ServiceSection, Brand } from '../types';
import { BrandGrid } from '../components/BrandGrid';
import * as Icons from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<ServiceSection | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      setLoading(true);
      try {
        const serviceData = await getServiceSectionBySlug(id);
        setService(serviceData);

        if (serviceData) {
          const allBrands = await getBrands();
          const serviceBrands = allBrands.filter(b =>
            serviceData.supportedBrands?.includes(b.id)
          );
          setBrands(serviceBrands);
        }
      } catch (error) {
        console.error("Failed to load service data", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Dynamic Icon
  const Icon = (Icons as any)[service.icon] || Icons.Zap;

  return (
    <div className="min-h-screen bg-smart-bg">

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden m-4 rounded-[3rem] bg-smart-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-smart-charcoal via-smart-charcoalLight to-black" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-smart-gold/10 p-6 rounded-full mb-8 border border-smart-gold/20 text-smart-gold"
          >
            <Icon size={48} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Intro / Features Content */}
      <Section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: What We Offer */}
          <div>
            <h2 className="text-sm font-bold text-smart-gold uppercase tracking-widest mb-8">What We Offer</h2>
            <div className="space-y-6">
              {service.offers.map((feature, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-smart-gold/30 transition-colors"
                >
                  <div className="bg-smart-charcoalLight p-3 rounded-full text-smart-gold mr-6 shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    {feature.description && (
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Sub-sectors (if any) or Call to Action */}
          <div className="space-y-12">
            {service.subSectors && service.subSectors.length > 0 && (
              <div className="bg-smart-charcoalLight rounded-3xl p-12 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Specialized For</h3>
                <ul className="grid grid-cols-1 gap-4">
                  {service.subSectors.map((sector, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-smart-gold rounded-full mr-4" />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-smart-gold rounded-3xl p-12 text-smart-charcoal">
              <h3 className="text-3xl font-bold mb-4">Ready to upgrade?</h3>
              <p className="mb-8 font-medium">Get a customized plan for your space today.</p>
              <Link to="/contact">
                <Button variant="outline" className="w-full border-smart-charcoal text-smart-charcoal hover:bg-smart-charcoal hover:text-white">
                  Start Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Supported Brands */}
      <Section className="py-12 bg-gray-50">
        <BrandGrid brands={brands} title="Our Trusted Partners" />
      </Section>

      {/* Navigation Footer for Services */}
      <Section className="py-24">
        <div className="border-t border-gray-800 pt-12 flex justify-between items-center">
          <Link to="/services" className="text-white font-bold flex items-center gap-2 hover:text-smart-gold transition-colors">
            <ArrowRight className="rotate-180" size={20} /> Back to Services
          </Link>
          <div className="hidden md:block text-gray-600 font-mono text-xs">
            RITZY LIFESTYLE
          </div>
        </div>
      </Section>

    </div>
  );
};
