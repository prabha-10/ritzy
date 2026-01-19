import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Button';

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group">
          <div className="w-16 h-16 relative">
            <img
              src="/logo.png"
              alt="Ritzy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center bg-transparent backdrop-blur-xl rounded-full px-2 py-1 border border-black/5 shadow-sm">
          <div className="flex items-center gap-1 px-4 py-2.5">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                    ? 'bg-white text-smart-dark shadow-md'
                    : 'text-smart-dark hover:bg-black/5'
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
          <div className="flex items-center gap-4 text-smart-text">
            <Search size={20} className="cursor-pointer hover:text-smart-accent transition-colors" />
          </div>
          <Link to="/contact">
            <Button variant="primary" size="sm" className="shadow-none">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-smart-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 pt-32 px-8 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-3xl font-bold tracking-tight ${isActive ? 'text-smart-accent' : 'text-smart-text'
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