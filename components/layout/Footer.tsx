import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-smart-text border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-smart-accent rounded-lg flex items-center justify-center text-white font-bold">R</div>
               <span className="font-bold text-xl tracking-tight font-logo">Ritzy</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevating spaces through intelligent design and state-of-the-art automation. 
              Experience the future of living, today.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/services" className="hover:text-smart-accent transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-smart-accent transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-smart-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-smart-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-smart-accent" />
                <span>35A, 1st Cross Rd, Chiranjeevi Layout,<br />Hebbal Kempapura, Bengaluru,<br />Karnataka 560024</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-smart-accent" />
                <span>+91 78995 83046</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-smart-accent" />
                <span>Contact@ritzylifestyle.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-sm text-gray-500 mb-4">Join our exclusive list for updates.</p>
            <div className="flex bg-gray-50 rounded-full p-1 pr-2 border border-gray-200">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full focus:outline-none text-smart-text placeholder-gray-400 text-sm px-4"
              />
              <button className="bg-smart-dark text-white rounded-full px-4 py-2 text-xs font-bold hover:bg-black transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="text-gray-400 hover:text-smart-accent transition-colors"><Instagram size={20}/></a>
              <a href="#" className="text-gray-400 hover:text-smart-accent transition-colors"><Linkedin size={20}/></a>
              <a href="#" className="text-gray-400 hover:text-smart-accent transition-colors"><Twitter size={20}/></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ritzy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-smart-text">Privacy Policy</a>
            <a href="#" className="hover:text-smart-text">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};