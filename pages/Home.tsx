
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Wind, Tv, Star, ChevronRight, Plus, Lock, Zap, ShieldCheck, Leaf, Smartphone, Film, Heart, Headset, X, Upload, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PRODUCTS, HERO_SLIDES, FAQ_CATEGORIES } from '../constants';

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", // Modern Exterior
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80", // Luxury Living Room
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80", // Minimalist Kitchen
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", // Home Theater
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&q=80", // Smart Lighting
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80", // Pool Area
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80", // Modern Bedroom
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=600&q=80", // Glass Facade
];

const CTASection: React.FC = () => {
  const scrollToReviews = () => {
    const element = document.getElementById('reviews');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-black mt-0">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-smart-darkgreen/40 mix-blend-multiply" />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-10 opacity-90"
        >
           <div className="w-8 h-8 bg-smart-accent rounded-tl-xl rounded-br-xl shadow-[0_0_15px_rgba(170,204,133,0.5)]"></div>
           <span className="text-white font-bold tracking-[0.3em] uppercase text-sm">Ritzy</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase max-w-6xl"
        >
          Where Vision Meets <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Intelligence</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="flex flex-col items-center"
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Explore architecture reimagined for the next century. We blend science, nature, and aesthetic to craft structures that transcend time.
          </p>
          
          <Link to="/contact">
            <Button size="lg" className="bg-smart-accent text-smart-dark font-bold px-12 py-5 rounded-2xl text-lg shadow-[0_0_30px_rgba(170,204,133,0.3)] hover:shadow-[0_0_50px_rgba(170,204,133,0.5)] hover:scale-105 transition-all border border-white/20 backdrop-blur-sm">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Left: Reviews Link */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-8 md:bottom-16 md:left-16 z-20 cursor-pointer group hidden md:block"
        onClick={scrollToReviews}
      >
         <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-4 pr-6 rounded-2xl hover:bg-black/60 transition-all hover:border-smart-accent/50 flex items-center gap-4 group-hover:scale-105 duration-300">
            <div className="flex -space-x-4">
               {[1,2,3,4].map(i => (
                 <img key={i} src={`https://randomuser.me/api/portraits/women/${i+30}.jpg`} className="w-12 h-12 rounded-full border-2 border-black/50 object-cover" alt="Reviewer" />
               ))}
            </div>
            <div>
               <div className="flex gap-1 mb-1">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-smart-accent text-smart-accent" />)}
               </div>
               <p className="text-white text-xs font-bold group-hover:text-smart-accent transition-colors">Trusted by Visionaries Worldwide</p>
            </div>
         </div>
      </motion.div>

      {/* Bottom Right: Feature Card */}
      <motion.div 
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.6 }}
         className="absolute bottom-10 right-8 md:bottom-16 md:right-16 z-20 hidden md:block"
      >
         <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 pr-6 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform cursor-default shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200" 
              className="w-20 h-16 object-cover rounded-xl shadow-inner" 
              alt="Project" 
            />
            <div>
               <h4 className="text-white font-bold text-sm tracking-wide">Iconic Architecture</h4>
               <p className="text-gray-300 text-[10px] mt-1">Explore our latest build...</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-smart-accent text-smart-dark flex items-center justify-center ml-2 shadow-lg">
               <ArrowRight size={14} />
            </div>
         </div>
      </motion.div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section className="py-32 bg-smart-darkgreen text-white overflow-hidden relative min-h-[900px] flex items-center justify-center">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

       <div 
          className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onTouchStart={() => setIsExpanded(!isExpanded)}
       >
          {/* Central Content */}
          <motion.div 
            className="z-20 text-center relative max-w-md px-6"
            animate={{ 
              opacity: isExpanded ? 1 : 1, // Keep visible but possibly obscured
              scale: isExpanded ? 1 : 0.95,
              filter: isExpanded ? 'blur(0px)' : 'blur(0px)'
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
             <motion.span 
                className="text-smart-accent font-bold tracking-widest text-xs uppercase mb-4 block"
                animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
             >
               Selected Works
             </motion.span>
             <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6 relative z-20"
                animate={{ y: isExpanded ? 0 : 10 }}
             >
               Our Portfolio
             </motion.h2>
             <motion.p 
                className="text-gray-400 text-lg mb-8 leading-relaxed"
                animate={{ opacity: isExpanded ? 1 : 0 }}
             >
               Explore a curated selection of our most prestigious residential and commercial automation projects.
             </motion.p>
             <Link to="/portfolio">
               <Button variant="primary" className={`transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                 View All Projects <ArrowRight className="ml-2" size={18} />
               </Button>
             </Link>
          </motion.div>

          {/* Orbiting Cards */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Center Anchor Point */}
            <div className="absolute top-1/2 left-1/2 w-0 h-0">
              {PORTFOLIO_IMAGES.map((src, index) => {
                // Calculate position on a circle
                const angleDeg = (360 / PORTFOLIO_IMAGES.length) * index;
                const angleRad = (angleDeg * Math.PI) / 180;
                
                // Expanded Radius
                const radius = 320; // Distance from center when expanded
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                // Random scattered offset for idle state
                const randomRotate = (index % 2 === 0 ? 8 : -8) + (index * 2); 

                return (
                  <Link to="/portfolio" key={index} className="pointer-events-auto">
                    <motion.div
                      className="absolute w-32 h-44 -ml-16 -mt-22 md:w-40 md:h-56 md:-ml-20 md:-mt-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gray-900 cursor-pointer"
                      initial={{ x: 0, y: 0, rotate: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.1, zIndex: 50 }}
                      animate={isExpanded 
                        ? { 
                            x: x, 
                            y: y, 
                            rotate: 0, 
                            scale: 1,
                            zIndex: 10
                          } 
                        : { 
                            // Breathing pile animation
                            x: Math.cos(angleRad + Date.now() / 1000) * 10, 
                            y: Math.sin(angleRad + Date.now() / 1000) * 10,
                            rotate: randomRotate, 
                            scale: 0.85,
                            zIndex: index
                          }
                      }
                      transition={{ 
                        type: "spring", 
                        stiffness: 50, 
                        damping: 15,
                        mass: 1
                      }}
                    >
                       <div className="w-full h-full relative bg-gray-800">
                          <img src={src} alt={`Project ${index}`} className="w-full h-full object-cover" />
                          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`} />
                       </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
       </div>
    </Section>
  );
};

const AddReviewModal = ({ onClose }: { onClose: () => void }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Review submitted successfully! It will be visible after moderation.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden relative z-10"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-smart-text">Share Experience</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="flex justify-center">
              <div 
                className="relative group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden hover:border-smart-accent transition-colors">
                  {previewImage ? (
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <Camera className="text-gray-400 group-hover:text-smart-accent" size={32} />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 bg-smart-accent text-white p-1.5 rounded-full shadow-md">
                  <Plus size={14} />
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 -mt-2">Upload Profile Picture</p>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Name</label>
                <input type="text" required placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Designation</label>
                <input type="text" required placeholder="Homeowner" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent" />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star 
                      size={28} 
                      className={`${(hoveredRating || rating) >= star ? 'fill-smart-accent text-smart-accent' : 'text-gray-300'}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Comments</label>
              <textarea 
                required 
                rows={3} 
                placeholder="How was your experience with Ritzy?" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-smart-accent" 
              />
            </div>

            <Button type="submit" className="w-full">Submit Review</Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FAQ_CATEGORIES[0].id);
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_CATEGORIES[0].questions[0].id);

  const activeCategory = FAQ_CATEGORIES.find(c => c.id === activeTab);

  if (!FAQ_CATEGORIES || FAQ_CATEGORIES.length === 0) {
    return null;
  }

  return (
    <Section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-smart-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl font-bold text-smart-text mb-4">Frequently Asked Questions</h2>
           <p className="text-gray-500">
             Everything you need to know about transforming your living space. Can't find the answer you're looking for? Reach out to our team.
           </p>
        </div>

        <div className="bg-smart-bg/50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Tabs */}
            <div className="w-full md:w-1/3 flex flex-col gap-3">
               {FAQ_CATEGORIES.map(cat => (
                 <button
                   key={cat.id}
                   onClick={() => setActiveTab(cat.id)}
                   className={`text-left px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex justify-between items-center ${
                     activeTab === cat.id 
                       ? 'bg-white text-smart-text shadow-lg shadow-gray-100 scale-105' 
                       : 'text-gray-400 hover:bg-white/50 hover:text-smart-text'
                   }`}
                 >
                   {cat.label}
                   {activeTab === cat.id && <div className="w-2 h-2 rounded-full bg-smart-accent"></div>}
                 </button>
               ))}
            </div>

            {/* Questions */}
            <div className="w-full md:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {activeCategory?.questions.map((item) => (
                    <div 
                      key={item.id}
                      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                        openQuestion === item.id 
                          ? 'bg-white shadow-md' 
                          : 'bg-transparent hover:bg-white/50'
                      }`}
                    >
                      <button 
                        onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                      >
                        <span className={`font-bold text-lg ${openQuestion === item.id ? 'text-smart-text' : 'text-gray-600'}`}>
                          {item.question}
                        </span>
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openQuestion === item.id ? 'bg-smart-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                          {openQuestion === item.id ? <X size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {openQuestion === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export const Home: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const dashboardScrollRef = useRef<HTMLDivElement>(null);
  const featureScrollRef = useRef<HTMLDivElement>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  // Widget States
  const [temp, setTemp] = useState(22);
  const [lightingActive, setLightingActive] = useState(true);
  const [lockStatus, setLockStatus] = useState('Locked');

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

  const scrollDashboard = (direction: 'left' | 'right') => {
    if (dashboardScrollRef.current) {
      const container = dashboardScrollRef.current;
      const scrollAmount = direction === 'left' ? -420 : 420;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
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
      <div className="relative h-screen min-h-[800px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group bg-black">
          
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
                   <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] mb-6 uppercase tracking-tighter drop-shadow-2xl">
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
                        <span className="px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold uppercase tracking-[0.2em]">
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
             <div className="w-full mt-auto pt-4 flex flex-col items-center md:items-end">
                <div className="flex gap-2 md:gap-3 overflow-x-auto max-w-full pb-2 scrollbar-hide mx-auto md:mx-0 p-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
                   {HERO_SLIDES.map((slide, index) => (
                     <button 
                       key={slide.id} 
                       onClick={() => setActiveSlideIndex(index)}
                       className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                         index === activeSlideIndex 
                           ? 'bg-white text-smart-text shadow-lg scale-105' 
                           : 'text-white/60 hover:text-white hover:bg-white/10'
                       }`}
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
      <Section className="bg-smart-bg py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-smart-accent/10 text-smart-accent text-xs font-bold uppercase tracking-widest mb-6">
              Trusted Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-smart-text mb-6 leading-tight tracking-tight">
              ELEVATING LIFESTYLES, <br/>
              <span className="text-gray-400">ONE SPACE AT A TIME</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-xl">
              Ritzy isn't just about gadgets; it's about integrating intelligence into the fabric of your home. 
              We have a proven track record of delivering robust, energy-efficient, and secure environments for discerning clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
               {/* Stat 1 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <div className="flex items-baseline gap-1">
                    <h4 className="text-4xl font-bold text-smart-text">300</h4>
                    <span className="text-2xl font-bold text-smart-accent">+</span>
                 </div>
                 <p className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-wide">Clients Served</p>
                 <p className="text-xs text-gray-400 mt-2">Transforming luxury residences and commercial hubs since 2014.</p>
               </div>

               {/* Stat 2 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <div className="flex items-baseline gap-1">
                    <h4 className="text-4xl font-bold text-smart-text">99</h4>
                    <span className="text-2xl font-bold text-smart-accent">%</span>
                 </div>
                 <p className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-wide">Efficiency</p>
                 <p className="text-xs text-gray-400 mt-2">Our systems optimize energy usage, reducing your carbon footprint.</p>
               </div>

               {/* Stat 3 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <div className="flex items-baseline gap-1">
                    <h4 className="text-4xl font-bold text-smart-text">500</h4>
                    <span className="text-2xl font-bold text-smart-accent">+</span>
                 </div>
                 <p className="text-sm text-gray-500 font-bold mt-1 uppercase tracking-wide">Projects</p>
                 <p className="text-xs text-gray-400 mt-2">Completed with precision engineering and zero downtime.</p>
               </div>

               {/* Stat 4 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-smart-accent text-smart-accent" />)}
                    </div>
                 </div>
                 <p className="text-sm text-gray-500 font-bold mt-2 uppercase tracking-wide">5-Star Rating</p>
                 <p className="text-xs text-gray-400 mt-2">Consistently rated top-tier for support and installation quality.</p>
               </div>
            </div>

            <Link to="/about">
                <Button size="lg" className="bg-smart-dark text-white shadow-xl hover:bg-black w-full sm:w-auto">
                  Read Our Story <ArrowRight className="ml-2" size={18} />
                </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Home Interior" 
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
             
             <div className="absolute bottom-12 left-10 right-10 text-white">
                <div className="flex items-center gap-4 mb-6">
                   <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                       <img key={i} src={`https://randomuser.me/api/portraits/women/${i+40}.jpg`} className="w-12 h-12 rounded-full border-2 border-smart-dark object-cover" alt="client" />
                     ))}
                     <div className="w-12 h-12 rounded-full border-2 border-smart-dark bg-white text-smart-dark flex items-center justify-center font-bold text-xs">
                       +300
                     </div>
                   </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-lg font-light italic mb-4">"The level of integration Ritzy achieved in our home is phenomenal. It simply works, beautifully."</p>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-smart-accent flex items-center justify-center font-bold text-white">EJ</div>
                     <div>
                       <p className="font-bold text-sm">Elena Jenkins</p>
                       <p className="text-xs text-gray-300">Architectural Digest Featured Homeowner</p>
                     </div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </Section>

      {/* Dashboard / Widgets Section */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-smart-text text-xs font-bold uppercase tracking-widest mb-4">
                 Smart Features
              </div>
              <h2 className="text-4xl font-bold text-smart-text mb-4">CONTROL AND <br/> MONITOR YOUR SMART HOME</h2>
              <p className="text-gray-500">Enhance your home management experience with our intuitive control interfaces. Everything at your fingertips.</p>
           </div>

           {/* Dashboard Navigation Arrows */}
           <div className="flex gap-3 mt-6 md:mt-0">
              <button 
                onClick={() => scrollDashboard('left')}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-smart-text hover:bg-smart-accent hover:text-white hover:border-smart-accent transition-all shadow-sm"
                aria-label="Scroll Left"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={() => scrollDashboard('right')}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-smart-text hover:bg-smart-accent hover:text-white hover:border-smart-accent transition-all shadow-sm"
                aria-label="Scroll Right"
              >
                <ArrowRight size={20} />
              </button>
           </div>
        </div>

        <div 
          ref={dashboardScrollRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide -mx-6 px-6 md:-mx-0 md:px-0"
        >
           {/* Widget 1: Security - Full Card Image Style */}
           <div className="min-w-[100%] md:min-w-[400px] snap-center bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 group h-[380px] flex flex-col relative overflow-hidden">
              {/* Full Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                alt="Front Gate Camera Feed" 
              />
              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60" />

              {/* Header */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white">Outdoor Camera</h3>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white">REC</span>
                </div>
              </div>

              {/* Center - Live Indicator */}
              <div className="flex-1 relative z-10 flex items-center justify-center">
                {/* Optional center element can go here */}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-auto relative z-10">
                <div>
                  <span className="text-2xl font-bold text-white">Active</span>
                  <span className="text-xs text-gray-300 block mt-1">Motion Detected: 2m ago</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-12 h-7 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
           </div>

           {/* Widget 2: Climate - Fixed Buttons */}
           <div className="min-w-[100%] md:min-w-[400px] snap-center bg-smart-dark text-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden h-[380px] flex flex-col justify-between">
              <img src="https://images.unsplash.com/photo-1616594039964-408e4044adf6?auto=format&fit=crop&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="room bg" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-smart-accent/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-xl font-bold">Climate</h3>
                <Wind className="text-smart-accent" />
             </div>
             
             <div className="flex items-center justify-center relative z-10 py-4">
               <div className="w-48 h-48 rounded-full border-[6px] border-white/10 flex items-center justify-center relative bg-white/5 backdrop-blur-sm">
                 <div className="absolute inset-0 border-[6px] border-smart-accent rounded-full border-t-transparent border-l-transparent rotate-45 transition-all duration-500" style={{ transform: `rotate(${45 + (temp - 22) * 10}deg)`}}></div>
                 <div className="text-center">
                    <span className="text-6xl font-bold block mb-1">{temp}°</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Celsius</span>
                 </div>
               </div>
             </div>
             
             <div className="flex justify-between items-center relative z-10 bg-white/10 p-4 rounded-2xl backdrop-blur-md">
               <div>
                  <p className="font-bold text-lg">Cooling</p>
                  <p className="text-xs text-gray-400">Living Room</p>
               </div>
               <div className="flex gap-3">
                 <button onClick={decreaseTemp} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center transition-colors text-xl font-medium cursor-pointer active:scale-90">-</button>
                 <button onClick={increaseTemp} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center transition-colors text-xl font-medium cursor-pointer active:scale-90">+</button>
               </div>
             </div>
           </div>

           {/* Widget 3: Lighting - Added Background Image */}
           <div className="min-w-[100%] md:min-w-[400px] snap-center bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 group h-[380px] flex flex-col relative overflow-hidden">
              {/* Background Image for Lighting Widget */}
              <img 
                src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80" 
                alt="Living Room Lighting" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white">Lighting</h3>
                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-bold border border-yellow-500/30 backdrop-blur">
                  85% Intensity
                </div>
             </div>
             
             <div className="space-y-4 mb-auto relative z-10">
               <div 
                  className={`flex items-center gap-4 p-3 rounded-2xl transition-all cursor-pointer border ${lightingActive ? 'bg-white/20 border-white/30' : 'bg-transparent border-transparent hover:bg-white/10'}`}
                  onClick={() => setLightingActive(!lightingActive)}
                >
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0 backdrop-blur-md">
                    <img src="https://images.unsplash.com/photo-1513506003011-3b03c8e321c9?auto=format&fit=crop&w=100" className="w-full h-full object-cover mix-blend-overlay opacity-80" alt="lamp"/>
                 </div>
                 <div className="flex-1">
                   <p className="font-bold text-sm text-white">Floor Lamp</p>
                   <p className="text-xs text-gray-300">Living Room • Hue</p>
                 </div>
                 <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] transition-colors ${lightingActive ? 'bg-green-400 text-green-400' : 'bg-gray-500 text-gray-500'}`}></div>
               </div>

               <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer border border-transparent">
                 <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center shrink-0 backdrop-blur-md">
                    <div className="text-purple-300">
                      <Tv size={20} />
                    </div>
                 </div>
                 <div className="flex-1">
                   <p className="font-bold text-sm text-white">Cinema Mode</p>
                   <p className="text-xs text-gray-300">Home Theater • Ready</p>
                 </div>
                  <div className="w-10 h-6 bg-white/20 rounded-full relative">
                    <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
               </div>
             </div>
             <Button variant="white" className="w-full rounded-xl py-3 text-sm relative z-10 mt-4 bg-white/10 text-white border-white/20 hover:bg-white hover:text-black">
               View All Scenes
             </Button>
           </div>

           {/* Widget 4: Energy (New) */}
           <div className="min-w-[100%] md:min-w-[400px] snap-center bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 group h-[380px] flex flex-col">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-bold text-emerald-900">Energy</h3>
                 <Zap className="text-emerald-600 fill-emerald-600" />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center">
                 <div className="text-center mb-6">
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-wide">Current Usage</p>
                    <h4 className="text-5xl font-bold text-emerald-900 mt-2">1.2 <span className="text-2xl text-emerald-700">kW</span></h4>
                 </div>
                 <div className="w-full h-32 bg-white/50 rounded-2xl flex items-end justify-between px-4 pb-4 pt-8 gap-2 relative overflow-hidden">
                    {/* Simulated Graph Bars */}
                    {[40, 65, 45, 80, 55, 70, 45].map((h, i) => (
                      <div key={i} className="w-full bg-emerald-400 rounded-t-sm transition-all duration-1000 group-hover:bg-emerald-500" style={{ height: `${h}%`}}></div>
                    ))}
                 </div>
              </div>
              <div className="mt-4 flex justify-between text-xs font-bold text-emerald-700">
                <span>Today: 12.4 kWh</span>
                <span>-15% vs Avg</span>
              </div>
           </div>

            {/* Widget 5: Smart Lock (New) */}
            <div className="min-w-[100%] md:min-w-[400px] snap-center bg-white p-0 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-[380px] flex flex-col relative overflow-hidden">
               <img src="https://images.unsplash.com/photo-1558002038-1091a16610d6?auto=format&fit=crop&w=800" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="smart lock" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
               
               <div className="p-8 relative z-10 flex flex-col h-full">
                 <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white">Front Door</h3>
                    <Lock className={`text-white ${lockStatus === 'Locked' ? 'fill-white' : ''}`} />
                 </div>
                 
                 <div className="mt-auto text-center">
                    <button 
                      onClick={() => setLockStatus(prev => prev === 'Locked' ? 'Unlocked' : 'Locked')}
                      className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${lockStatus === 'Locked' ? 'border-green-400 bg-green-400/20 text-green-400' : 'border-red-400 bg-red-400/20 text-red-400'}`}
                    >
                       <span className="font-bold text-xl">{lockStatus}</span>
                    </button>
                    <p className="text-gray-300 text-xs">Last entry: Mom (12:30 PM)</p>
                 </div>
               </div>
            </div>

        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-smart-accent/10 text-smart-accent text-xs font-bold uppercase tracking-widest mb-4">
             The Ritzy Advantage
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-smart-text mb-6">Unlock the Potential of Your Home</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
             Experience the perfect blend of luxury and technology with our comprehensive automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Uncompromising Security</h3>
                <p className="text-gray-500 leading-relaxed">
                    Advanced surveillance, smart locks, and automated presence simulation ensure your sanctuary remains safe 24/7.
                </p>
            </div>

             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <Leaf size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Sustainable Living</h3>
                <p className="text-gray-500 leading-relaxed">
                    Intelligent climate and lighting algorithms optimize your energy consumption, reducing your carbon footprint effortlessly.
                </p>
            </div>

             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <Smartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Seamless Integration</h3>
                <p className="text-gray-500 leading-relaxed">
                    Control every aspect of your estate—from home theater to pool temperature—through a single, intuitive interface.
                </p>
            </div>

             {/* New Benefit 4: Immersive Entertainment */}
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <Film size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Immersive Entertainment</h3>
                <p className="text-gray-500 leading-relaxed">
                    Transform your living space into a private cinema with concert-grade audio and crystal-clear 4K projection technology.
                </p>
            </div>

             {/* New Benefit 5: Health & Wellness */}
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Health & Wellness</h3>
                <p className="text-gray-500 leading-relaxed">
                    Circadian lighting and automated climate control create a healthier environment that supports your natural biological rhythms.
                </p>
            </div>

             {/* New Benefit 6: Premier Support */}
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-smart-bg flex items-center justify-center text-smart-accent mb-8 group-hover:bg-smart-accent group-hover:text-white transition-colors">
                    <Headset size={32} />
                </div>
                <h3 className="text-2xl font-bold text-smart-text mb-4">Premier Support</h3>
                <p className="text-gray-500 leading-relaxed">
                    Our white-glove service includes 24/7 remote monitoring and priority on-site support for total peace of mind.
                </p>
            </div>
        </div>
      </Section>

      {/* New Portfolio Section */}
      <PortfolioSection />
      
      {/* Reviews */}
      <Section id="reviews" className="bg-smart-bg py-24">
        <div className="flex flex-col items-center mb-20 text-center">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">CUSTOMER INSIGHTS <br/> AND REVIEWS</h2>
           <Button 
              variant="outline" 
              onClick={() => setShowReviewModal(true)}
              className="group"
           >
              <Plus size={18} className="mr-2 group-hover:rotate-90 transition-transform" /> Add Review
           </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             {
               text: "Ritzy transformed our chaotic home into a zen paradise. The lighting automation is specifically a game changer for our family evenings.",
               name: "Sarah Johnson",
               role: "Interior Designer",
               img: "https://randomuser.me/api/portraits/women/44.jpg"
             },
             {
               text: "The commercial integration for our new office block was seamless. Security, access control, and energy management all in one dashboard.",
               name: "Michael Chen",
               role: "Property Developer",
               img: "https://randomuser.me/api/portraits/men/32.jpg"
             },
             {
               text: "I love the attention to detail. The installation team was professional and the ongoing support has been fantastic. Highly recommended.",
               name: "Emma Wilson",
               role: "Homeowner",
               img: "https://randomuser.me/api/portraits/women/68.jpg"
             }
           ].map((review, i) => (
             <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
               <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(star => (
                   <Star key={star} size={18} className="fill-smart-accent text-smart-accent" />
                 ))}
               </div>
               <p className="text-base text-gray-600 mb-8 leading-relaxed">
                 "{review.text}"
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                 <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                   <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <p className="text-sm font-bold text-smart-text">{review.name}</p>
                   <p className="text-xs text-gray-400">{review.role}</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </Section>

      {/* New FAQ Section */}
      <FAQSection />

      {/* New CTA Section */}
      <CTASection />
    </div>
  );
};
