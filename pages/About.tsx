
import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
  { title: 'Consultation', desc: 'We listen to your lifestyle needs and architectural vision.' },
  { title: 'System Design', desc: 'Engineering a bespoke schematic tailored to your floorplan.' },
  { title: 'Installation', desc: 'Precision deployment by certified technicians with zero mess.' },
  { title: 'Support', desc: 'Ongoing maintenance and remote monitoring for 100% uptime.' },
];

export const About: React.FC = () => {
  return (
    <div className="pt-24 bg-smart-bg">
       {/* Hero */}
       <div className="relative h-[50vh] rounded-b-[3rem] overflow-hidden mx-4 md:mx-8">
         <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000" className="w-full h-full object-cover" alt="About Hero" />
         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
           <div className="text-center max-w-4xl px-6">
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">The iHaven Standard</h1>
             <p className="text-xl text-white/90 font-light">Architecting the invisible layer of luxury.</p>
           </div>
         </div>
       </div>

       {/* Mission */}
       <Section>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
           <div>
             <span className="text-smart-accent font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
             <h2 className="text-4xl font-bold text-smart-text mb-6">Technology meets tranquility.</h2>
             <p className="text-gray-500 text-lg mb-6 leading-relaxed">
               iHaven was founded on a simple premise: sophisticated technology should simplify life, not complicate it. We bridge the gap between complex engineering and intuitive user experience.
             </p>
             <p className="text-gray-500 text-lg leading-relaxed">
               Working alongside top architects, interior designers, and builders, we ensure that our systems blend seamlessly into the aesthetic of your home or office. No clutter, no confusion—just pure, effortless control.
             </p>
           </div>
           <div className="relative">
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800" className="w-full h-96 object-cover rounded-3xl shadow-2xl" alt="Team working" />
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-bold text-smart-accent mb-2">10+</p>
                <p className="text-gray-500 font-medium">Years of excellence in home automation.</p>
             </div>
           </div>
         </div>
       </Section>

       {/* Process */}
       <Section className="bg-white rounded-[3rem] my-12 mx-4 md:mx-8">
         <div className="text-center mb-16">
           <h2 className="text-4xl font-bold text-smart-text">Our Methodology</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {PROCESS_STEPS.map((step, idx) => (
             <div key={idx} className="relative p-8 bg-smart-bg rounded-2xl hover:bg-smart-dark hover:text-white transition-colors group">
               <span className="absolute -top-5 left-6 text-6xl font-bold text-gray-200 group-hover:text-gray-700 transition-colors">0{idx + 1}</span>
               <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
               <p className="text-gray-500 group-hover:text-gray-300 text-sm relative z-10 leading-relaxed">{step.desc}</p>
             </div>
           ))}
         </div>
       </Section>

        <Section className="text-center py-24">
           <h2 className="text-4xl font-bold text-smart-text mb-8">Ready to transform your space?</h2>
           <Link to="/contact">
             <Button size="lg">Start Your Project</Button>
           </Link>
        </Section>
    </div>
  );
};
