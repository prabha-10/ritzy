
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Star, Wind, Tv, Zap, ShieldCheck, Leaf, Smartphone, Film, Heart, Headset, Plus } from 'lucide-react';
import { DashboardWidgets } from '../components/home/DashboardWidgets';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PRODUCTS, HERO_SLIDES } from '../constants';
import { CTASection } from '../components/home/CTASection';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { AddReviewModal } from '../components/home/AddReviewModal';
import { FAQSection } from '../components/home/FAQSection';



export const Home: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // Dashboard scroll refs removed as we are using infinite marquee
  const featureScrollRef = useRef<HTMLDivElement>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Widget States
  const [temp, setTemp] = useState(22);
  const [lightingActive, setLightingActive] = useState(true);
  const [lockStatus, setLockStatus] = useState('Locked');

  // Auto-scroll to active tab
  useEffect(() => {
    if (tabRefs.current[activeSlideIndex] && tabNavRef.current) {
      tabRefs.current[activeSlideIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeSlideIndex]);

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Optional: Auto advance can be disabled if it interferes with reading
      // nextSlide(); 
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // scrollDashboard function removed as we are using infinite marquee

  const scrollFeatures = (direction: 'left' | 'right') => {
    if (featureScrollRef.current) {
      const container = featureScrollRef.current;
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const increaseTemp = () => setTemp(prev => Math.min(prev + 1, 30));
  const decreaseTemp = () => setTemp(prev => Math.max(prev - 1, 16));

  const activeSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <div className="w-full overflow-hidden bg-smart-bg">
      <AnimatePresence>
        {showReviewModal && <AddReviewModal onClose={() => setShowReviewModal(false)} />}
      </AnimatePresence>

      {/* Hero Section with Tabs */}
      <div className="relative h-[calc(100vh-80px)] mt-[100px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="relative w-full h-full overflow-hidden shadow-2xl transition-all duration-700 group bg-black">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover opacity-80"
              />
              {/* Darker overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col p-6 md:p-12 lg:p-16">

            {/* Main Centered Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-center pt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center max-w-7xl mx-auto w-full"
                >
                  <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold text-white leading-[0.9] mb-8 uppercase tracking-widest drop-shadow-2xl font-heading scale-y-[1.05] origin-bottom">
                    {activeSlide.title}
                  </h1>

                  <p className="text-lg md:text-2xl text-gray-200 font-light mb-12 max-w-3xl tracking-wide drop-shadow-md leading-relaxed">
                    {activeSlide.subtitle}
                  </p>

                  {/* Featured Subtitle Pill & Navigation */}
                  <div className="flex items-center justify-center gap-4 mb-8 w-full max-w-5xl px-4">
                    <div className="h-[1px] bg-white/20 flex-1"></div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => scrollFeatures('left')}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-smart-text transition-all active:scale-95"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-[0.2em]">
                        Featured Collection
                      </span>
                      <button
                        onClick={() => scrollFeatures('right')}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-smart-text transition-all active:scale-95"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    <div className="h-[1px] bg-white/20 flex-1"></div>
                  </div>

                  {/* Slide Specific Features - Horizontal Scrollable Cards */}
                  <div
                    ref={featureScrollRef}
                    className="w-full max-w-6xl overflow-x-auto pb-8 scrollbar-hide flex gap-6 px-4 snap-x"
                  >
                    {activeSlide.features && activeSlide.features.map((feature, idx) => (
                      <div key={idx} className="flex-shrink-0 w-72 h-48 rounded-2xl relative overflow-hidden group/card cursor-pointer snap-center border border-white/10 shadow-xl hover:border-white/30 transition-all hover:-translate-y-1">
                        <img src={feature.image} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/card:opacity-90 transition-opacity duration-500" alt={feature.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5 w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={14} className="text-smart-accent" />
                            <p className="text-white font-bold text-lg leading-tight">{feature.title}</p>
                          </div>
                          <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer of Hero: Navigation Tabs */}
            <div className="w-full mt-auto pt-4 flex flex-col items-center justify-center px-4">
              <div ref={tabNavRef} className="flex gap-2 md:gap-3 overflow-x-scroll md:overflow-x-auto w-full md:w-auto mx-auto p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    ref={(el) => (tabRefs.current[index] = el)}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex-shrink-0 ${index === activeSlideIndex
                      ? 'bg-white text-smart-text shadow-lg scale-105'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                      } `}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <Section className="bg-smart-charcoal py-20 md:py-32 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-smart-gold/5 rounded-full blur-[100px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-smart-gold/10 text-smart-gold text-xs font-bold uppercase tracking-widest mb-6 border border-smart-gold/20">
              Trusted Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              ELEVATING LIFESTYLES, <br />
              <span className="text-gray-500">ONE SPACE AT A TIME</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
              Ritzy isn't just about gadgets; it's about integrating intelligence into the fabric of your home.
              We have a proven track record of delivering robust, energy-efficient, and secure environments for discerning clients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Stat 1 */}
              <div className="bg-smart-charcoalLight p-6 rounded-2xl shadow-lg border border-white/5 hover:border-smart-gold/30 transition-colors">
                <div className="flex items-baseline gap-1">
                  <h4 className="text-4xl font-bold text-white">300</h4>
                  <span className="text-2xl font-bold text-smart-gold">+</span>
                </div>
                <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-wide">Clients Served</p>
                <p className="text-xs text-gray-500 mt-2">Transforming luxury residences and commercial hubs since 2014.</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-smart-charcoalLight p-6 rounded-2xl shadow-lg border border-white/5 hover:border-smart-gold/30 transition-colors">
                <div className="flex items-baseline gap-1">
                  <h4 className="text-4xl font-bold text-white">99</h4>
                  <span className="text-2xl font-bold text-smart-gold">%</span>
                </div>
                <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-wide">Efficiency</p>
                <p className="text-xs text-gray-500 mt-2">Our systems optimize energy usage, reducing your carbon footprint.</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-smart-charcoalLight p-6 rounded-2xl shadow-lg border border-white/5 hover:border-smart-gold/30 transition-colors">
                <div className="flex items-baseline gap-1">
                  <h4 className="text-4xl font-bold text-white">500</h4>
                  <span className="text-2xl font-bold text-smart-gold">+</span>
                </div>
                <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-wide">Projects</p>
                <p className="text-xs text-gray-500 mt-2">Completed with precision engineering and zero downtime.</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-smart-charcoalLight p-6 rounded-2xl shadow-lg border border-white/5 hover:border-smart-gold/30 transition-colors">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-smart-gold text-smart-gold" />)}
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-bold mt-2 uppercase tracking-wide">5-Star Rating</p>
                <p className="text-xs text-gray-500 mt-2">Consistently rated top-tier for support and installation quality.</p>
              </div>
            </div>

            <Link to="/about">
              <Button size="lg" className="bg-white text-smart-charcoal hover:bg-smart-platinum w-full sm:w-auto">
                Read Our Story <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src="/assets/images/img_b8938e49ff0e.jpg"
              alt="Luxury Home Interior"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-smart-charcoal via-transparent to-transparent" />

            <div className="absolute bottom-12 left-10 right-10 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://randomuser.me/api/portraits/women/${i + 40}.jpg`} className="w-12 h-12 rounded-full border-2 border-smart-charcoal object-cover" alt="client" />
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-smart-charcoal bg-smart-gold text-smart-charcoal flex items-center justify-center font-bold text-xs">
                    +300
                  </div>
                </div >
              </div >
              <div className="bg-smart-charcoal/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-lg font-light italic mb-4 text-gray-200">"The level of integration Ritzy achieved in our home is phenomenal. It simply works, beautifully."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-smart-gold flex items-center justify-center font-bold text-smart-charcoal">EJ</div>
                  <div>
                    <p className="font-bold text-sm text-white">Elena Jenkins</p>
                    <p className="text-xs text-gray-400">Architectural Digest Featured Homeowner</p>
                  </div>
                </div>
              </div>
            </div >
          </motion.div >
        </div >
      </Section >

      {/* Dashboard / Widgets Section */}
      < Section className="bg-smart-bg" >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-smart-text text-xs font-bold uppercase tracking-widest mb-4">
              Smart Features
            </div>
            <h2 className="text-4xl font-bold text-smart-text mb-4">CONTROL AND <br /> MONITOR YOUR SMART HOME</h2>
            <p className="text-gray-500">Enhance your home management experience with our intuitive control interfaces. Everything at your fingertips.</p>
          </div>

        </div>

        <div className="relative w-full overflow-hidden select-none -mx-6 md:-mx-0">

          {/* RETHINKING: Using a pure CSS Marquee is better for "pause on hover". */}
          <div className="w-full overflow-hidden group">
            <div className="flex gap-8 w-max animate-marquee group-hover:[animation-play-state:paused] px-6 md:px-0">
              {/* First Set */}
              <DashboardWidgets />
              {/* Second Set for Loop */}
              <DashboardWidgets />
            </div>
          </div>
        </div>
      </Section >

      {/* CTA Section */}
      < CTASection />

      {/* Portfolio Section */}
      < PortfolioSection />

      {/* Products Showcase */}
      < Section className="bg-smart-charcoal text-white relative" >
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-smart-charcoal text-smart-gold text-xs font-bold uppercase tracking-widest mb-4">
            Premium Products
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">EXPLORE OUR CURATED COLLECTION</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From keypads to speakers, every product is selected for performance, aesthetics, and seamless integration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
          {PRODUCTS.slice(0, 8).map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-smart-charcoalLight rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1 border border-white/5"
            >
              <div className="aspect-square overflow-hidden bg-gray-900 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-smart-gold transition-colors mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 relative z-10">
          <Link to="/products">
            <Button size="lg" className="bg-smart-gold text-smart-charcoal hover:bg-white border-none">
              View All Products <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </Section >

      {/* Reviews Section */}
      < Section className="bg-smart-charcoal border-t border-white/5" id="reviews" >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">WHAT OUR CLIENTS SAY</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Hear from homeowners who've transformed their living spaces with Ritzy.
          </p>
          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all font-semibold text-sm border border-white/20 backdrop-blur-sm"
          >
            <Plus size={18} /> Add Your Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Mitchell", role: "Interior Designer", rating: 5, comment: "Ritzy transformed our showroom into a tech marvel. Clients are always impressed by the seamless integration.", image: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "James Anderson", role: "Homeowner", rating: 5, comment: "Best investment we made. The support team is incredible and the system just works flawlessly every single day.", image: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Emily Chen", role: "Architect", rating: 5, comment: "I recommend Ritzy to all my clients. Their attention to detail and understanding of modern architecture is unparalleled.", image: "https://randomuser.me/api/portraits/women/68.jpg" }
          ].map((review, idx) => (
            <div key={idx} className="bg-smart-charcoalLight p-8 rounded-3xl shadow-lg border border-white/5 hover:border-smart-gold/20 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-smart-gold text-smart-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section >

      {/* FAQ Section */}
      < FAQSection />

    </div >
  );
};
