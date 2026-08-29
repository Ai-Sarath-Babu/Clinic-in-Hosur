import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Stethoscope,
  CalendarCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import logoImg from './assets/bonitaa_clinic_logo.png';
import { skinTreatments, hairTreatments, beforeAfterCases, testimonials, clinicHighlights } from './data';
import { LeadBookingForm } from './components/LeadBookingForm';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ThankYouPage } from './components/ThankYouPage';
import { LeadFormData } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skin' | 'hair'>('hair');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  const handleLeadSuccess = (data: LeadFormData) => {
    setSubmittedLead(data);
  };

  if (submittedLead) {
    return <ThankYouPage data={submittedLead} onReset={() => setSubmittedLead(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#e6b133] selection:text-black">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#141416] via-[#1c1a14] to-[#141416] border-b border-zinc-800 text-xs py-2 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap text-zinc-300">
          <span className="inline-flex items-center gap-1 text-[#e6b133] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Hosur Clinic Special:
          </span>
          <span>Get 100% Free Senior Dermatologist Consultation for Online Registrations Today!</span>
          <a href="#appointment-form" className="text-[#e6b133] underline font-semibold hover:text-white transition ml-1">
            Claim Free Slot →
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Bonitaa Skin & Hair Care Clinic Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            <a href="#treatments" className="hover:text-[#e6b133] transition">Clinical Services</a>
            <a href="#results" className="hover:text-[#e6b133] transition">Patient Results</a>
            <a href="#why-us" className="hover:text-[#e6b133] transition">Why Choose Us</a>
            <a href="#reviews" className="hover:text-[#e6b133] transition">Reviews</a>
            <a href="#location" className="hover:text-[#e6b133] transition">Hosur Clinic</a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919176335500"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#e6b133]/50 text-xs font-semibold text-gray-200 transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#e6b133]" />
              <span>+91 91763 35500</span>
            </a>
            <a
              href="#appointment-form"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e6b133] to-[#d2a02b] hover:from-[#d2a02b] hover:to-[#be8e24] text-black text-xs font-bold shadow-lg shadow-[#e6b133]/20 transition"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 text-gray-300 border border-zinc-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141416] border-b border-zinc-800 px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-gray-300">
              <a 
                href="#treatments" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#e6b133]"
              >
                Clinical Services
              </a>
              <a 
                href="#results" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#e6b133]"
              >
                Patient Results
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#e6b133]"
              >
                Why Choose Us
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#e6b133]"
              >
                Reviews
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#e6b133]"
              >
                Hosur Clinic Location
              </a>
            </nav>
            <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
              <a
                href="tel:+919176335500"
                className="w-full py-2.5 bg-zinc-900 border border-zinc-800 text-center rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e6b133]" />
                <span>Call Clinic Desk (+91 91763 35500)</span>
              </a>
              <a
                href="#appointment-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-[#e6b133] text-black text-center rounded-xl text-xs font-bold shadow"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-zinc-800/60">
        {/* Background glow effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#e6b133]/10 blur-[130px] pointer-events-none rounded-full" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[#e6b133] font-semibold">Hosur's Leading Aesthetic Center</span>
                <span className="text-zinc-500">•</span>
                <span>Senior Dermatologists</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Best Skin & Hair Care <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#e6b133] via-[#f7d67b] to-[#e6b133] bg-clip-text text-transparent">
                    Clinic in Hosur
                  </span>
                </h1>
                
                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
                  Advanced, FDA-approved clinical solutions for Hair Transplant, Excell GFC, PRP & GFC Hair Growth, Hair Fall Control, Anti-Dandruff, Microneedling, Laser Hair Therapy, Anti-Acne, Botox & Fillers, MNRF, Meso Glow, Glutathione, Carbon Laser Therapy & Full-Body Laser Hair Removal. Get treated by senior dermatologists in Hosur.
                </p>
              </div>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-zinc-800/80">
                <div className="space-y-0.5">
                  <div className="text-[#e6b133] font-bold text-xl sm:text-2xl flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#e6b133] shrink-0" />
                    <span>10,000+</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Happy Patients</p>
                </div>

                <div className="space-y-0.5">
                  <div className="text-white font-bold text-xl sm:text-2xl flex items-center gap-1">
                    <Award className="w-4 h-4 text-[#e6b133] shrink-0" />
                    <span>12+ Yrs</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Clinical Experience</p>
                </div>

                <div className="space-y-0.5">
                  <div className="text-emerald-400 font-bold text-xl sm:text-2xl flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>US-FDA</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Approved Tech</p>
                </div>
              </div>

              {/* Action Quick Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#appointment-form"
                  className="px-6 py-3 rounded-xl bg-[#e6b133] hover:bg-[#d2a02b] text-black font-bold text-sm shadow-xl shadow-[#e6b133]/20 flex items-center gap-2 transition"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919176335500"
                  className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#e6b133]/50 text-white font-semibold text-sm flex items-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 text-[#e6b133]" />
                  <span>Call +91 91763 35500</span>
                </a>
              </div>
            </div>

            {/* Hero Right: Booking Form Card */}
            <div id="appointment-form" className="lg:col-span-5 scroll-mt-24">
              <LeadBookingForm onSuccess={handleLeadSuccess} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio Section */}
      <section id="treatments" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Advanced Clinical Solutions</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Skin & Hair Treatments
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Scientifically engineered protocols tailored specifically to your skin type and scalp condition by certified specialists.
            </p>

            {/* Category Toggle Tabs */}
            <div className="flex items-center justify-center p-1.5 bg-black/60 border border-zinc-800 rounded-2xl max-w-md mx-auto mt-4">
              <button
                onClick={() => setActiveTab('hair')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'hair'
                    ? 'bg-[#e6b133] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Hair Restoration (7)</span>
              </button>
              <button
                onClick={() => setActiveTab('skin')}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'skin'
                    ? 'bg-[#e6b133] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Skin Solutions (7)</span>
              </button>
            </div>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'hair' ? hairTreatments : skinTreatments).map(t => (
              <div
                key={t.id}
                className="bg-[#141416] border border-zinc-800/90 rounded-2xl p-6 hover:border-[#e6b133]/40 transition duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#e6b133]/15 text-[#e6b133] flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-black/50 border border-zinc-800 text-zinc-400">
                      FDA Approved
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#e6b133] transition">
                      {t.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {t.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                    {t.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e6b133] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4">
                  <a
                    href="#appointment-form"
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-[#e6b133] hover:text-black text-gray-300 text-xs font-semibold border border-zinc-800 hover:border-[#e6b133] transition flex items-center justify-center gap-1.5"
                  >
                    <span>Consult For {t.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Results Showcase */}
      <section id="results" className="py-16 md:py-24 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Transformations</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proven Clinical Results
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Browse actual transformations achieved at our Hosur clinic with standardized clinical protocols.
            </p>
          </div>

          <BeforeAfterSlider cases={beforeAfterCases} />
        </div>
      </section>

      {/* Why Choose Bonitaa Clinic Hosur */}
      <section id="why-us" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Bonitaa Standard</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Patients Trust Bonitaa Clinic
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Medical excellence, hygienic sterile environments, and customized therapeutic protocols in the heart of Hosur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicHighlights.map((h, idx) => (
              <div
                key={idx}
                className="bg-[#141416] border border-zinc-800 rounded-2xl p-6 space-y-3 hover:border-[#e6b133]/40 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e6b133]/15 text-[#e6b133] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{h.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section id="reviews" className="py-16 md:py-24 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Verified Feedback</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Over 10,000+ Happy Patients Treated
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Authentic reviews from patients who experienced our clinical care for hair fall, acne, and skin revitalization.
            </p>
          </div>

          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>

      {/* Clinic Location & Directions */}
      <section id="location" className="py-16 md:py-20 border-b border-zinc-800/80 bg-[#0c0c0e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#141416] border border-zinc-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Visit Our Hosur Facility</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Bonitaa Skin & Hair Care Clinic • Hosur
              </h2>

              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e6b133] shrink-0 mt-0.5" />
                  <span>
                    No. 12/4, Bagalur Road, Near Town Hall / Old Bus Stand Junction, Hosur, Tamil Nadu – 635109
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#e6b133] shrink-0" />
                  <span>Monday – Sunday: 09:30 AM to 08:30 PM (All 7 Days Open)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#e6b133] shrink-0" />
                  <span>Direct Hotline: <strong className="text-white">+91 91763 35500</strong></span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+919176335500"
                  className="px-5 py-2.5 rounded-xl bg-[#e6b133] hover:bg-[#d2a02b] text-black font-bold text-xs flex items-center gap-2 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call For Instant Booking</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Hosur,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-xs flex items-center gap-2 transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#e6b133]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-black/60 rounded-2xl border border-zinc-800 text-center space-y-4">
              <div className="w-12 h-12 bg-[#e6b133]/15 text-[#e6b133] rounded-full flex items-center justify-center mx-auto">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Online Registration Active</h3>
              <p className="text-xs text-gray-400">
                Register online to unlock zero consultation fee and skip the waiting lounge queue.
              </p>
              <a
                href="#appointment-form"
                className="w-full py-3 bg-gradient-to-r from-[#e6b133] to-[#d2a02b] text-black font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow"
              >
                <span>Reserve Free Consultation Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08080a] border-t border-zinc-800/80 py-10 text-xs text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Bonitaa Skin & Hair Care Clinic Logo" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a href="#treatments" className="hover:text-[#e6b133] transition">Treatments</a>
              <a href="#results" className="hover:text-[#e6b133] transition">Patient Results</a>
              <a href="#why-us" className="hover:text-[#e6b133] transition">About Us</a>
              <a href="#reviews" className="hover:text-[#e6b133] transition">Testimonials</a>
              <a href="#location" className="hover:text-[#e6b133] transition">Hosur Branch</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
            <p>© {new Date().getFullYear()} Bonitaa Skin & Hair Care Clinic • Hosur. All rights reserved.</p>
            <p>Certified Clinical Dermatology & Trichology Center.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0a0a0b]/95 backdrop-blur-lg border-t border-zinc-800 p-2.5">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+919176335500"
            className="py-2.5 px-3 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#e6b133]" />
            <span>Call Clinic</span>
          </a>
          <a
            href="#appointment-form"
            className="py-2.5 px-3 bg-[#e6b133] text-black rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#e6b133]/20"
          >
            <Zap className="w-4 h-4 fill-black" />
            <span>Book Free Slot</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
