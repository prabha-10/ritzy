
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Target,
  ShieldCheck,
  Zap,
  Eye,
  Layers,
  RefreshCcw,
  Users,
  Award,
  ChevronDown,
  MessageSquare,
  ClipboardList,
  Wrench,
  Cpu,
  GraduationCap,
  Clock
} from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F7F0] min-h-screen text-smart-text">
      {/* 1. HERO - The Brand Story */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/img_a151a9e5ca5f.jpg"
            alt="Luxury Smart Home Origin"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/80 text-sm font-medium tracking-[0.3em] uppercase mb-6 block" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Our Story
            </span>
            <h1
              className="text-[clamp(3rem,10vw,6rem)] font-medium leading-[0.95] tracking-tight text-white mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Where Luxury Meets <br className="hidden md:block" /> Intelligence
            </h1>
            <p
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-12"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Transforming exceptional residences into intelligent sanctuaries through bespoke automation and human-centered design.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                variant="white"
                size="lg"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-10"
              >
                Discover Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </Section>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Origin Story Section */}
      <Section id="story" className="!pt-32 !pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-1">
            <span className="text-smart-accent text-sm font-bold rotate-[-90deg] inline-block origin-left absolute -mt-40 md:-mt-20">EST. 2008</span>
          </div>
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,5vw,3rem)] font-medium leading-[1.1] mb-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Beyond the gadgetry. <br />
              Beyond the interface.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-smart-muted mb-6 leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
            >
              Founded in 2008 by a team of engineers and design enthusiasts who believed smart homes shouldn't feel complicated, Ritzy was born from a simple truth: technology should enhance life, not complicate it.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-smart-muted mb-10 leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
            >
              Today, we craft bespoke automation systems for homeowners who demand both sophistication and simplicity. We leading the future of premium smart living, one home at a time.
            </motion.p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
              <div>
                <span className="text-xs font-bold text-smart-accent uppercase tracking-widest block mb-2">Our Mission</span>
                <p className="text-sm font-medium leading-relaxed">Transforming homes into intelligent sanctuaries.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-smart-accent uppercase tracking-widest block mb-2">Our Vision</span>
                <p className="text-sm font-medium leading-relaxed">Redefining the standard of luxury living through technology.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img
                src="/assets/images/img_4fbf3280f66f.jpg"
                alt="Ritzy Craftsmanship"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 2. BY THE NUMBERS - Credibility */}
      <section className="bg-white py-24">
        <Section>
          <div className="text-center mb-16">
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-medium mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Excellence in Every Detail
            </h2>
            <p className="text-smart-muted max-w-xl mx-auto">Credibility built over a decade of high-performance installations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {[
              { label: 'Homes Transformed', value: '500+', icon: <CheckCircle2 className="text-smart-accent" /> },
              { label: 'Years of Excellence', value: '15+', icon: <Award className="text-smart-accent" /> },
              { label: 'Client Satisfaction', value: '98%', icon: <MessageSquare className="text-smart-accent" /> },
              { label: 'White-Glove Support', value: '24/7', icon: <ShieldCheck className="text-smart-accent" /> },
              { label: 'Brand Partnerships', value: '50+', icon: <Layers className="text-smart-accent" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-[#F7F7F0] rounded-3xl text-center flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>{stat.value}</div>
                <div className="text-xs font-bold text-smart-muted uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* 3. OUR PHILOSOPHY - Pillars */}
      <Section className="!pt-32 !pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Foundation</span>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              How We Think About <br /> Smart Living
            </h2>
          </div>
          <p className="text-smart-muted max-w-xs text-lg lg:text-right pb-2">
            Technology serves people, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Human-Centered Design",
              desc: "Systems that anticipate needs intuitively. Interfaces so simple, guests can use them without instruction.",
              icon: <Users size={32} />
            },
            {
              title: "Invisible Integration",
              desc: "Seamless disappearance into architecture. No visible wires or bulky equipment—only atmosphere.",
              icon: <Eye size={32} />
            },
            {
              title: "Premium Components Only",
              desc: "Partnering with tier-1 brands like Crestron and Savant for commercial-grade reliability and 10+ year longevity.",
              icon: <Zap size={32} />
            },
            {
              title: "Future-Ready Architecture",
              desc: "Modular system design that allows for easy expansion, software updates, and technology refresh planning.",
              icon: <RefreshCcw size={32} />
            },
            {
              title: "Holistic Ecosystem",
              desc: "Lighting, climate, security, and audio as one intelligence. Integrated scenarios that optimize energy and mood.",
              icon: <Layers size={32} />
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-black/5 h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F7F7F0] flex items-center justify-center text-smart-accent mb-8">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{pillar.title}</h3>
              <p className="text-smart-muted leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}>{pillar.desc}</p>
            </motion.div>
          ))}
          {/* Decorative Philosophy Card */}
          <div className="hidden lg:flex p-10 bg-smart-accent/10 border-2 border-dashed border-smart-accent/20 rounded-[2.5rem] flex-col items-center justify-center text-center">
            <Target size={48} className="text-smart-accent mb-6 opacity-30" />
            <p className="text-lg font-medium opacity-60">"The best technology is the kind you don't even know is there."</p>
          </div>
        </div>
      </Section>

      {/* 4. THE RITZY DIFFERENCE - Competitive Advantages */}
      <section className="bg-white py-32 overflow-hidden">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
              >
                <img
                  src="/assets/images/img_dc1759ad49a0.jpg"
                  alt="Our Comparison"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating Stat Check Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-sm hidden md:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-smart-accent/20 flex items-center justify-center text-smart-accent font-bold">★</div>
                  <h4 className="font-bold">Platinum Integration</h4>
                </div>
                <p className="text-sm text-smart-muted leading-relaxed italic">"Ritzy isn't just an installer; they're our design partners. They solve problems before we even see them."</p>
              </motion.div>
            </div>

            <div>
              <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Differentiation</span>
              <h2
                className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] mb-12"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Why Homeowners <br /> Choose Ritzy
              </h2>

              <div className="space-y-12">
                {[
                  {
                    title: "vs. DIY Solutions",
                    desc: "Professional design vs. piecemeal gadgets. Unified control vs. a dozen apps. Commercial reliability vs. constant reset cycles."
                  },
                  {
                    title: "vs. General Electricians",
                    desc: "Specialized expertise in complex logic and aesthetics. Ongoing white-glove relationships vs. one-time utility jobs."
                  },
                  {
                    title: "vs. Other Premium Installers",
                    desc: "Industry-leading response times, diamond-tier partner certifications, and a design-first philosophy that respects your space."
                  }
                ].map((diff, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-smart-accent flex items-center justify-center text-white text-[10px]">✓</span>
                      {diff.title}
                    </h3>
                    <p className="text-smart-muted pl-9 leading-relaxed">{diff.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </section>

      {/* 5. OUR PROCESS - The Journey */}
      <Section className="!pt-32 !pb-32 overflow-hidden">
        <div className="text-center mb-20">
          <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Transparency Builds Trust</span>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Journey to Smart Living
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line (Mobile/Tablet) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden lg:block" />

          <div className="space-y-16 relative">
            {[
              {
                step: "01",
                title: "Discovery & Design",
                timing: "2-4 Weeks",
                desc: "Initial consultation, lifestyle interview, and system architecture proposal with visual renderings.",
                icon: <MessageSquare />
              },
              {
                step: "02",
                title: "Planning & Engineering",
                timing: "2-6 Weeks",
                desc: "Detailed blueprints, component selection, and integration planning with your architects.",
                icon: <ClipboardList />
              },
              {
                step: "03",
                title: "Professional Installation",
                timing: "1-4 Weeks",
                desc: "Clean-workspace protocol installations with minimal disruption and daily progress updates.",
                icon: <Wrench />
              },
              {
                step: "04",
                title: "Programming & Testing",
                timing: "1-2 Weeks",
                desc: "Automation scene creation and rigorous stress-testing of every possible scenario.",
                icon: <Cpu />
              },
              {
                step: "05",
                title: "Training & Handoff",
                timing: "1 Week",
                desc: "Comprehensive homeowner training, guest mode walkthrough, and digital user guides.",
                icon: <GraduationCap />
              },
              {
                step: "06",
                title: "Lifetime Support",
                timing: "Ongoing",
                desc: "24/7 technical assistance, annual health checks, and priority software upgrades.",
                icon: <ShieldCheck />
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-32`}
              >
                <div className="flex-1 lg:text-right w-full">
                  <div className={i % 2 === 0 ? 'block' : 'lg:hidden'}>
                    <span className="text-[5rem] font-bold text-smart-accent/10 leading-none mb-2 block">{phase.step}</span>
                    <h3 className="text-3xl font-medium mb-2">{phase.title}</h3>
                    <span className="text-sm font-bold text-smart-accent uppercase tracking-widest">{phase.timing}</span>
                  </div>
                </div>

                {/* Center Node */}
                <div className="w-16 h-16 rounded-full bg-white shadow-xl border-4 border-[#F7F7F0] z-10 flex items-center justify-center text-smart-accent lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  {phase.icon}
                </div>

                <div className="flex-1 w-full">
                  <div className={i % 2 !== 0 ? 'block' : 'lg:hidden'}>
                    <span className="text-[5rem] font-bold text-smart-accent/10 leading-none mb-2 block">{phase.step}</span>
                    <h3 className="text-3xl font-medium mb-2">{phase.title}</h3>
                    <span className="text-sm font-bold text-smart-accent uppercase tracking-widest">{phase.timing}</span>
                  </div>
                  <p className="text-smart-muted mt-6 max-w-sm text-lg leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6. EXPERTISE - Credentials */}
      <section className="bg-white py-32">
        <Section>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Meet the Minds</span>
              <h2
                className="text-4xl font-medium mb-8 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Meticulous Engineering, <br /> Artful Execution
              </h2>
              <p className="text-smart-muted mb-12">
                Our founders and lead engineers are certified specialists with combined decades of high-luxury automation experience.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-6 bg-[#F7F7F0] rounded-2xl">
                  <div className="w-12 h-12 rounded-full border-2 border-smart-accent flex items-center justify-center font-bold text-smart-accent">D</div>
                  <div>
                    <h4 className="font-bold">Crestron Diamond</h4>
                    <p className="text-xs text-smart-muted uppercase tracking-widest">Highest Tier Dealer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#F7F7F0] rounded-2xl">
                  <div className="w-12 h-12 rounded-full border-2 border-smart-accent flex items-center justify-center font-bold text-smart-accent">L</div>
                  <div>
                    <h4 className="font-bold">Lutron HomeWorks</h4>
                    <p className="text-xs text-smart-muted uppercase tracking-widest">Certified Integrator</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Julian Thorne", role: "CEO & Founder", image: "/assets/images/img_91b150fa96d3.jpg" },
                { name: "Elena Varkov", role: "Lead Systems Designer", image: "/assets/images/img_8cd5de336830.jpg" }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="group relative h-[500px] rounded-[2.5rem] overflow-hidden"
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                    <p className="text-white/60 text-sm font-medium tracking-widest uppercase">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* 8. COMMITMENT - Guarantees */}
      <Section className="!pt-32 !pb-32">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Our Promise</span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>Concrete Commitments</h2>
          <p className="text-smart-muted text-lg">We reduce your risk through performance-backed guarantees that outlast the competition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Rapid Response",
              val: "4-Hour",
              desc: "Urgent response time guarantee for system-critical issues. 24/7 technical oversight included for life.",
              icon: <Clock />
            },
            {
              title: "Installation Warranty",
              val: "5-Year",
              desc: "Comprehensive workmanship coverage including all cabling and configuration. Industry standard is 1-2 years.",
              icon: <ShieldCheck />
            },
            {
              title: "White-Glove Support",
              val: "Unlimited",
              desc: "Continuous re-training for new household members and biannual system health checks for 3 years.",
              icon: <Users />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-12 bg-white rounded-[3rem] shadow-sm border border-black/5 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-smart-accent/10 flex items-center justify-center text-smart-accent mb-8">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-smart-accent uppercase tracking-widest mb-2">{item.title}</h3>
              <div className="text-[3rem] font-medium mb-6 leading-none" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.val}</div>
              <p className="text-smart-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 9. PARTNERS - Logo Grid */}
      <section className="bg-white py-24 grayscale opacity-50">
        <Section>
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24">
            {['Crestron', 'Lutron', 'Savant', 'Control4', 'Sonos', 'Loxone'].map((brand) => (
              <span key={brand} className="text-3xl font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'Manrope, sans-serif' }}>{brand}</span>
            ))}
          </div>
        </Section>
      </section>

      {/* 14. FINAL CTA */}
      <Section className="!pt-40 !pb-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className="text-[clamp(3rem,8vw,5rem)] font-medium leading-[1] tracking-tight mb-12"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Ready to Transform <br /> Your Perspective?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-12 py-8 text-lg font-medium">
                Schedule Your Consultation
              </Button>
            </Link>
            <p className="text-smart-muted max-w-[200px] text-left text-sm font-medium">
              Complimentary confidential assessment. <br />
              Typical response: 2 hours.
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};
