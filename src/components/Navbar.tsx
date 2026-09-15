import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_INTL } from '../data';

interface NavbarProps {
  onBookClick: () => void;
  onNavigateHome?: () => void;
  onNavigatePolicy?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onNavigateHome, onNavigatePolicy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header id="main-header" className="sticky top-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img 
                src="/assets/bonitaa_clinic_logo.png" 
                alt="Bonitaa Skin & Hair Care Hosur" 
                className="h-9 sm:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#treatments" className="text-zinc-300 hover:text-[#e6b133] text-sm font-medium transition">
              Treatments
            </a>
            <a href="#success-stories" className="text-zinc-300 hover:text-[#e6b133] text-sm font-medium transition">
              Success Stories
            </a>
            <a href="#why-choose-us" className="text-zinc-300 hover:text-[#e6b133] text-sm font-medium transition">
              Why Choose Us
            </a>
            <a href="#patient-reviews" className="text-zinc-300 hover:text-[#e6b133] text-sm font-medium transition">
              Patient Reviews
            </a>
            <a 
              href="https://maps.google.com/?q=Bonitaa+Skin+and+Hair+Care+Hosur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-[#e6b133] text-sm font-medium transition"
            >
              Directions
            </a>
          </nav>

          {/* Right Action / Contact Button */}
          <div className="hidden md:flex items-center gap-5">
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                CALL SPECIALIST
              </span>
              <a 
                href={`tel:${CLINIC_PHONE_INTL}`} 
                className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5 hover:text-[#e6b133] transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#e6b133]" />
                <span>{CLINIC_PHONE_DISPLAY}</span>
              </a>
            </div>

            <button
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-lg bg-[#e6b133] hover:bg-[#d49f25] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#e6b133]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookClick}
              className="px-3 py-1.5 rounded-md bg-[#e6b133] text-black font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111114] border-b border-zinc-800 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#treatments"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Treatments
          </a>
          <a
            href="#success-stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Success Stories
          </a>
          <a
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Why Choose Us
          </a>
          <a
            href="#patient-reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Patient Reviews
          </a>
          <a
            href="https://maps.google.com/?q=Bonitaa+Skin+and+Hair+Care+Hosur"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Directions
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (onNavigatePolicy) {
                e.preventDefault();
                onNavigatePolicy();
              }
            }}
            className="block text-zinc-300 hover:text-[#e6b133] text-sm py-1.5"
          >
            Privacy Policy
          </a>
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <a
              href={`tel:${CLINIC_PHONE_INTL}`}
              className="text-sm font-bold text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#e6b133]" />
              <span>{CLINIC_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
