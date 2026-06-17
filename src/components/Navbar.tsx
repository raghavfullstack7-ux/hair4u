import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { businessInfo } from '../data';
import { cn } from '../lib/utils';

interface NavbarProps {
  onBookNow: () => void;
}

export function Navbar({ onBookNow }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-display font-semibold text-xl tracking-tight">
          Hair4U <span className="text-gray-500 font-normal">Salon</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-gray-600 hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={onBookNow}
            className="px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base text-gray-800 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onBookNow(); }}
            className="w-full mt-4 px-5 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors text-center"
          >
            Book Appointment
          </button>
        </motion.div>
      )}
    </nav>
  );
}
