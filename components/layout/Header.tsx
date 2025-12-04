import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Button';

// Custom SVG Logo Component
const RitzyLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="35" height="35" rx="4" fill="#FFD700" />
    <path d="M55 10H86C88.2091 10 90 11.7909 90 14V45H59C56.7909 45 55 43.2091 55 41V10Z" fill="url(#grad1)" />
    <rect x="55" y="55" width="35" height="35" rx="4" fill="#FF7F50" />
    <path d="M30 45L30 50C30 60 40 60 55 60" stroke="#333" strokeWidth="2" fill="none" />
    <rect x="28" y="43" width="4" height="4" fill="#111" />
    <rect x="53" y="58" width="4" height="4" fill="#111" />
    <defs>
      <linearGradient id="grad1" x1="55" y1="10" x2="90" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFA500" />
        <stop offset="1" stopColor="#FF4500" />
      </linearGradient>
    </defs>
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 relative">
             <RitzyLogo className="w-full h-full" />
           </div>
          <div className="flex flex-col">
            <span className={`font-bold text-2xl tracking-tight font-logo ${isScrolled || !isHome ? 'text-smart-text' : 'text-white'} group-hover:text-smart-accent transition-colors`}>
              Ritzy
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
          <div className="flex items-center gap-1 bg-white rounded-full px-6 py-2.5 shadow-sm">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-smart-dark text-white' 
                      : 'text-smart-text hover:text-smart-accent'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
           <div className={`flex items-center gap-4 ${isScrolled || !isHome ? 'text-smart-text' : 'text-white'}`}>
             <Search size={20} className="cursor-pointer hover:text-smart-accent transition-colors"/>
           </div>
           <Link to="/contact">
             <Button variant={isScrolled || !isHome ? 'primary' : 'white'} size="sm" className="shadow-none">
               Get Quote
             </Button>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled || !isHome ? 'text-smart-text' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 pt-32 px-8 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-3xl font-bold tracking-tight ${
                  isActive ? 'text-smart-accent' : 'text-smart-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
           <NavLink to="/contact" className="mt-8">
            <Button variant="primary" className="w-full">
              Get Quote
            </Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};