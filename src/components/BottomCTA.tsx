import React from 'react';
import { Phone, Calendar, MapPin, Clock, ShieldCheck, Zap } from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_INTL, CLINIC_NAME, CLINIC_LOCATION } from '../data';

interface BottomCTAProps {
  onBookClick: () => void;
  onNavigatePolicy?: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onBookClick, onNavigatePolicy }) => {
  return (
    <div className="bg-[#0c0c0e] border-t border-zinc-900">
      
      {/* Bottom CTA Banner */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT HELPLINE ACTIVE TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
            Speak to Our Dermatologist & Hair Specialist Today
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Get an accurate assessment of your skin or hair concern with a complimentary 100% Free Consultation in Hosur. Walk in today or book your preferred slot online.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-xl bg-[#e6b133] hover:bg-[#d49f25] text-black font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 transition shadow-xl shadow-[#e6b133]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK FREE CONSULTATION</span>
            </button>

            <a
              href={`tel:${CLINIC_PHONE_INTL}`}
              className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-sm tracking-wide flex items-center gap-2 transition hover:border-zinc-700"
            >
              <Phone className="w-4 h-4 text-[#e6b133]" />
              <span>CALL: {CLINIC_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Quick Clinic Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 text-left">
            
            <div className="bg-[#121215] border border-zinc-800/80 rounded-xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#e6b133] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-white">Clinic Location</span>
                <span className="text-xs text-zinc-400">{CLIC_ADDRESS_TEXT}</span>
              </div>
            </div>

            <div className="bg-[#121215] border border-zinc-800/80 rounded-xl p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#e6b133] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-white">Consulting Hours</span>
                <span className="text-xs text-zinc-400">10:00 AM – 8:00 PM (All Days)</span>
              </div>
            </div>

            <div className="bg-[#121215] border border-zinc-800/80 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#e6b133] shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-white">Safety & Hygiene</span>
                <span className="text-xs text-zinc-400">100% Sterilized & US-FDA Approved</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          
          <div className="flex items-center gap-3">
            <img
              src="/assets/bonitaa_clinic_logo.png"
              alt="Bonitaa Skin & Hair Care"
              className="h-8 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-zinc-400">
              © {new Date().getFullYear()} {CLINIC_NAME}. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a href="#treatments" className="hover:text-white transition">Treatments</a>
            <a href="#success-stories" className="hover:text-white transition">Success Stories</a>
            <a href="#why-choose-us" className="hover:text-white transition">Why Choose Us</a>
            <a href="#patient-reviews" className="hover:text-white transition">Patient Reviews</a>
            <a 
              href="/privacy-policy" 
              onClick={(e) => {
                if (onNavigatePolicy) {
                  e.preventDefault();
                  onNavigatePolicy();
                }
              }}
              className="hover:text-[#e6b133] transition"
            >
              Privacy Policy
            </a>
            <a 
              href="https://maps.google.com/?q=Bonitaa+Skin+and+Hair+Care+Hosur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#e6b133] transition"
            >
              Get Directions
            </a>
          </div>

        </div>
      </footer>

      {/* Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0a0a0b]/95 backdrop-blur-lg border-t border-zinc-800 p-2.5">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${CLINIC_PHONE_INTL}`}
            className="py-2.5 px-3 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#e6b133]" />
            <span>Call Clinic</span>
          </a>
          <button
            onClick={onBookClick}
            className="py-2.5 px-3 bg-[#e6b133] text-black rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#e6b133]/20"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Book Free Slot</span>
          </button>
        </div>
      </div>

    </div>
  );
};

const CLIC_ADDRESS_TEXT = "Shanthi Nagar, Hosur, Tamil Nadu 635109 (Near Bus Stand)";
