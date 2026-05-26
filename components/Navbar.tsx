'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lo Studio', href: '#studio' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Il Team', href: '#team' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className={cn("font-serif text-2xl font-bold tracking-tight transition-colors duration-300", isScrolled ? "text-brand-navy" : "text-white")}>
              Studio<span className="text-brand-gold">Vitiello</span>
            </span>
            <span className={cn("text-[10px] tracking-widest uppercase mt-0.5", isScrolled ? "text-slate-500" : "text-slate-300")}>
              Dottori Commercialisti
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors hover:text-brand-gold',
                  isScrolled ? 'text-slate-600' : 'text-slate-200'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contatti"
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-sm transition-all duration-300 border",
                isScrolled 
                  ? "bg-brand-navy text-white border-brand-navy hover:bg-brand-gold hover:border-brand-gold" 
                  : "bg-transparent text-white border-white/50 hover:bg-white hover:text-brand-navy"
              )}
            >
              Richiedi Consulenza
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-brand-navy" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-brand-navy" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-navy pt-24 px-4 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-2xl font-serif border-b border-white/10 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col space-y-4">
                <a href="mailto:amministrazione@studiovitiellospa.com" className="flex items-center text-slate-300">
                  <Mail className="h-5 w-5 mr-3 text-brand-gold" /> amministrazione@studiovitiellospa.com
                </a>
                <a href="tel:025460782" className="flex items-center text-slate-300">
                  <Phone className="h-5 w-5 mr-3 text-brand-gold" /> 025460782
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
