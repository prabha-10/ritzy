
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Image Section - Tandem Style */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <img
          src="/assets/images/img_e2877fa82205.jpg"
          alt="Smart Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Section 1 - Our Approach (Image Right) */}
      <Section className="pt-32 pb-24 bg-gray-50">
        {/* Centered Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
            APPROACH
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach
            </h3>
            <h4 className="text-xl text-gray-500 mb-8 font-light">
              Technology that thinks for you.
            </h4>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Seamless Integration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We design systems that disappear into your lifestyle. From lighting to climate control, everything works in harmony, responding to your needs before you even ask.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Premium Quality
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We partner with world-leading brands and use only the finest components. Every installation is a masterpiece of engineering disguised as simplicity.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Future-Proof Solutions
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our systems are built to evolve. As technology advances, your home stays ahead—always smart, never outdated.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-200"
          >
            <img
              src="/assets/images/img_dc1759ad49a0.jpg"
              alt="Smart Home Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* Section 2 - Our Expertise (Image Left) */}
      <Section className="py-24">
        {/* Centered Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
            EXPERTISE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-3xl overflow-hidden order-2 lg:order-1 bg-gray-200"
          >
            <img
              src="/assets/images/img_8cd5de336830.jpg"
              alt="Advanced Technology"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <h3 className="text-xl text-gray-500 mb-8 font-light">
              Hands-on precision.
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Complete System Design
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  From concept to completion, our engineers craft bespoke automation solutions tailored to your architecture, lifestyle, and aesthetic vision.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Professional Installation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our certified technicians bring decades of combined experience. Every wire, every sensor, every interface—installed with meticulous care and zero disruption.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Continuous Innovation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We stay at the forefront of smart home technology, constantly testing new solutions to bring you tomorrow's innovations today.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 3 - Our Commitment (Image Right) */}
      <Section className="py-24 bg-gray-50">
        {/* Centered Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
            COMMITMENT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <h3 className="text-xl text-gray-500 mb-8 font-light">
              We'll take care of everything.
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  White-Glove Service
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  From the first consultation to long after installation, we treat your home with the respect it deserves. Clear communication, pristine workspaces, and a genuine partnership approach.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Always Available
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  24/7 support means peace of mind. Whether it's a simple question or urgent troubleshooting, our team is just a call away—responsive, knowledgeable, and ready to help.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Built to Last
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We don't just install systems—we build lasting relationships. Many of our clients return for expansions, upgrades, and new projects. That trust is everything to us.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-200"
          >
            <img
              src="/assets/images/img_91b150fa96d3.jpg"
              alt="Luxury Living"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We're easy to reach and even easier to work with.
          </h2>
          <p className="text-xl text-gray-500 mb-10">
            Let's start a conversation about transforming your space.
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
};
