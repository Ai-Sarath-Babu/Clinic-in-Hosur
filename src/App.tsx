import { useState, useEffect, FormEvent } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  User, 
  MapPin, 
  Activity, 
  Video, 
  AlertCircle, 
  X, 
  Menu, 
  ArrowRight, 
  ChevronDown, 
  Check, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  ThumbsUp, 
  Gift, 
  Map, 
  Stethoscope,
  Users,
  Award,
  BookmarkCheck,
  Star,
  Sparkle
} from 'lucide-react';

import { 
  skinTreatments, 
  hairTreatments, 
  whyChooseUsFeatures, 
  testimonials, 
  beforeAfterCases 
} from './data';

import { LeadFormInput } from './types';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TestimonialsSection from './components/TestimonialsSection';

// Custom generated high-quality clinic photos from assets
const clinicHeroImg = '/src/assets/images/clinic_hero_1783064344325.jpg';
const doctorConsultationImg = '/src/assets/images/doctor_consultation_1783064360130.jpg';
const skinTreatmentImg = '/src/assets/images/skin_treatment_1783064374170.jpg';
const hairTreatmentImg = '/src/assets/images/hair_treatment_1783064390424.jpg';

export default function App() {
  // Navigation states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<'skin' | 'hair'>('skin');

  // Form states
  const [formData, setFormData] = useState<LeadFormInput>({
    fullName: '',
    mobileNumber: '',
    age: '',
    gender: '',
    city: '',
    treatmentInterested: '',
    preferredDate: '',
    consultationType: 'In-Clinic',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Popup Form States
  const [isExitIntentOpen, setIsExitIntentOpen] = useState(false);
  const [exitForm, setExitForm] = useState({ name: '', phone: '' });
  const [isExitSubmitted, setIsExitSubmitted] = useState(false);
  const [hasShownExit, setHasShownExit] = useState(false);

  const [isScrollPopupOpen, setIsScrollPopupOpen] = useState(false);
  const [scrollForm, setScrollForm] = useState({ name: '', phone: '' });
  const [isScrollSubmitted, setIsScrollSubmitted] = useState(false);
  const [hasShownScroll, setHasShownScroll] = useState(false);

  // Live Scarcity Indicators
  const [spotsLeft, setSpotsLeft] = useState(7);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Dynamic Maps URL for default map application with coordinates directions
  const [mapsUrl, setMapsUrl] = useState('https://www.google.com/maps/dir/?api=1&destination=12.730303,77.825126');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const lat = '12.730303';
    const lng = '77.825126';
    const label = 'BONITAA Skin & Hair Care Clinic Hosur';

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      // iOS default Maps app (Apple Maps) with destination directions pre-filled
      setMapsUrl(`maps://?daddr=${lat},${lng}&q=${encodeURIComponent(label)}`);
    } else if (/android/i.test(userAgent)) {
      // Android default Maps app (Google Maps navigation/directions directly)
      setMapsUrl(`google.navigation:q=${lat},${lng}`);
    } else {
      // Desktop default fallback (Google Maps Directions)
      setMapsUrl(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
    }
  }, []);

  // Urgency & Scarcity triggers
  useEffect(() => {
    // Decrease spots slowly to simulate real-time demand
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev <= 3) return 3; // Keep at least 3 spots to maintain conversion
        return Math.random() > 0.6 ? prev - 1 : prev;
      });
    }, 45000);

    // Live countdown to midnight
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      return { hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  // Exit intent popup detector (mouse leaves top of screen)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !hasShownExit && !isSubmitted && !isExitSubmitted) {
        setIsExitIntentOpen(true);
        setHasShownExit(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExit, isSubmitted, isExitSubmitted]);

  // Scroll popup detector (triggers at 60% scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (hasShownScroll || isSubmitted || isScrollSubmitted) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 60) {
        setIsScrollPopupOpen(true);
        setHasShownScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownScroll, isSubmitted, isScrollSubmitted]);

  // Form submissions
  const handleMainSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber) {
      alert('Please fill out Name and Mobile Number.');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xojopbov', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Main Consultation Form',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Clear forms
        setFormData({
          fullName: '',
          mobileNumber: '',
          age: '',
          gender: '',
          city: '',
          treatmentInterested: '',
          preferredDate: '',
          consultationType: 'In-Clinic',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please call directly at 09626615566 to book instantly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExitSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!exitForm.name || !exitForm.phone) return;

    try {
      await fetch('https://formspree.io/f/xojopbov', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: exitForm.name,
          mobileNumber: exitForm.phone,
          source: 'Exit Intent Popup Form',
          treatmentInterested: '₹99 Consultation Discount Offer',
          timestamp: new Date().toISOString()
        })
      });
      setIsExitSubmitted(true);
      setTimeout(() => {
        setIsExitIntentOpen(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleScrollSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!scrollForm.name || !scrollForm.phone) return;

    try {
      await fetch('https://formspree.io/f/xojopbov', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: scrollForm.name,
          mobileNumber: scrollForm.phone,
          source: 'Scroll 60% Popup Form',
          treatmentInterested: 'Free Skin Analysis + ₹99 Consultation',
          timestamp: new Date().toISOString()
        })
      });
      setIsScrollSubmitted(true);
      setTimeout(() => {
        setIsScrollPopupOpen(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  // Pre-select treatment helper from treating section
  const handlePreSelectTreatment = (treatmentName: string) => {
    setFormData(prev => ({
      ...prev,
      treatmentInterested: treatmentName
    }));
    // Scroll to form smoothly
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen clinic-grid-bg text-gray-200 font-sans selection:bg-brand-gold selection:text-clinic-dark relative">
      
      {/* 1. Header trust bar (not static, elegant) */}
      <div className="bg-clinic-dark/95 border-b border-clinic-border text-[11px] font-medium uppercase tracking-wider py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-brand-gold">
              <Gift className="w-3.5 h-3.5" />
              <span>₹99 Consultation Fee (Offer Active Today)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-gold" />
              <span>Same Day Appointment Available</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>FDA-Approved Clinical Treatments</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-brand-gold" />
              <span>Double-Board Certified Dermatologists</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-clinic-dark/85 backdrop-blur-md border-b border-clinic-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo Brand matching the image branding */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold to-brand-gold-hover flex items-center justify-center shadow-lg shadow-brand-gold/10 border border-brand-gold/30">
              <span className="font-extrabold font-display text-clinic-dark text-lg tracking-tighter">B</span>
            </div>
            <div>
              <span className="block font-bold font-display text-lg tracking-wider text-white group-hover:text-brand-gold transition-colors">
                BONITAA<sup className="text-[9px] font-bold text-brand-gold ml-0.5">®</sup>
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-brand-gold uppercase -mt-1 font-semibold">
                Skin and Hair Care
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#treatments" className="text-gray-300 hover:text-brand-gold transition-colors">Treatments</a>
            <a href="#before-after-gallery" className="text-gray-300 hover:text-brand-gold transition-colors">Success Stories</a>
            <a href="#why-choose-us" className="text-gray-300 hover:text-brand-gold transition-colors">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-300 hover:text-brand-gold transition-colors">Patient Reviews</a>
            <a href="#location" className="text-gray-300 hover:text-brand-gold transition-colors">Directions</a>
          </nav>

          {/* Direct Actions desktop */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="tel:09626615566" 
              className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-brand-gold transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-clinic-border flex items-center justify-center text-brand-gold bg-clinic-card/40">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] text-gray-500 uppercase tracking-widest leading-none">Call Specialist</span>
                <span className="block text-sm font-mono text-white mt-0.5">09626615566</span>
              </div>
            </a>
            
            <a 
              href="#appointment-form" 
              className="px-5 py-2.5 text-xs font-extrabold font-display bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark rounded-xl transition-all duration-300 tracking-wider shadow-md shadow-brand-gold/10"
            >
              BOOK CONSULTATION
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-clinic-dark border-b border-clinic-border py-4 px-6 space-y-3">
            <a 
              href="#treatments" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-brand-gold"
            >
              Treatments
            </a>
            <a 
              href="#before-after-gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-brand-gold"
            >
              Success Stories
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-brand-gold"
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-brand-gold"
            >
              Patient Reviews
            </a>
            <a 
              href="#location" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm text-gray-300 hover:text-brand-gold"
            >
              Directions
            </a>
            <div className="pt-2 border-t border-clinic-border flex flex-col gap-3">
              <a 
                href="tel:09626615566"
                className="flex items-center gap-2 py-2 text-sm font-semibold text-white font-mono"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>09626615566</span>
              </a>
              <a 
                href="#appointment-form"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 bg-brand-gold text-clinic-dark font-bold rounded-xl text-sm"
              >
                Book ₹99 Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Above Fold Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Hero Left Info Area (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              {/* Trust Badges Bar */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-flex items-center gap-1 text-[10px] md:text-xs bg-brand-gold/15 text-brand-gold border border-brand-gold/25 px-3 py-1 rounded-full font-semibold">
                  <Star className="w-3.5 h-3.5 fill-brand-gold" />
                  <span>₹99 CONSULTATION FEE (PAY AT CLINIC)</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] md:text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  <span>Online & In-Clinic Available</span>
                </span>
              </div>

              {/* Title & Heading */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1 text-xs text-brand-gold font-bold tracking-widest uppercase">
                  <Sparkle className="w-3.5 h-3.5 fill-brand-gold" />
                  <span>4.9 Star Rated Patient Success Stories</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-none">
                  Best Skin & Hair <br className="hidden sm:inline" />
                  Care Clinic in <span className="text-brand-gold">Hosur</span>
                </h1>
                
                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
                  Advanced, FDA-approved clinical solutions for <span className="text-white font-semibold">Warts & Mole Removal</span>, <span className="text-white font-semibold">PRP & GFC Hair Growth</span>, and <span className="text-white font-semibold">Acne Scar treatments</span>. Get treated by senior dermatologists in Hosur. Consultation fee just <span className="text-brand-gold font-bold underline">₹99</span> payable at the clinic.
                </p>
              </div>

              {/* Quick Meta Filter Tags from actual site styling */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-gray-500">
                <span className="bg-clinic-card px-2.5 py-1 rounded border border-clinic-border">#SkinSpecialistHosur</span>
                <span className="bg-clinic-card px-2.5 py-1 rounded border border-clinic-border">#WartsTreatment</span>
                <span className="bg-clinic-card px-2.5 py-1 rounded border border-clinic-border">#GFCHairTherapy</span>
                <span className="bg-clinic-card px-2.5 py-1 rounded border border-clinic-border">#AcneScarRemodeling</span>
              </div>

              {/* Trust Badges Icons Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-2 border-t border-clinic-border/60">
                <div className="space-y-1">
                  <div className="flex items-center text-brand-gold gap-0.5">
                    <span className="text-base font-bold text-white">4.9</span>
                    <Star className="w-4 h-4 fill-brand-gold shrink-0" />
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Patient Rating</p>
                </div>
                
                <div className="space-y-1">
                  <div className="text-brand-gold font-bold text-base flex items-center gap-1">
                    <Users className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-white">1,500+</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Happy Patients</p>
                </div>

                <div className="space-y-1">
                  <div className="text-brand-gold font-bold text-base flex items-center gap-1">
                    <Award className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-white">12+ Yrs</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Expert Doctors</p>
                </div>

                <div className="space-y-1">
                  <div className="text-brand-gold font-bold text-base flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-white">FDA Appr.</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Advanced Tech</p>
                </div>

                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <div className="text-brand-gold font-bold text-base flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="text-white">Hosur</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Shanthi Nagar</p>
                </div>
              </div>

              {/* Direct Call & Whatsapp CTA */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <a 
                  href="#appointment-form"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/15 cursor-pointer"
                >
                  <Calendar className="w-4.5 h-4.5" />
                  <span>BOOK ₹99 CONSULTATION</span>
                </a>

                <a 
                  href="tel:09626615566"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-clinic-border bg-clinic-card/40 hover:bg-clinic-card/80 hover:border-brand-gold/30 text-white font-extrabold text-sm rounded-xl transition-all duration-300"
                >
                  <Phone className="w-4.5 h-4.5 text-brand-gold" />
                  <span>CALL: 09626615566</span>
                </a>
              </div>

            </div>

            {/* Hero Right Real-time Booking Widget (5 Cols) */}
            <div className="lg:col-span-5" id="appointment-form">
              <div className="bg-clinic-card border border-clinic-border rounded-2xl overflow-hidden shadow-2xl relative">
                
                {/* Header Offer Ticker banner */}
                <div className="bg-gradient-to-r from-brand-gold to-brand-gold-hover text-clinic-dark py-2.5 px-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>⚡ ₹99 CONSULTATION APPOINTMENT</span>
                  </div>
                  <span className="text-[10px] bg-clinic-dark/15 px-2 py-0.5 rounded font-mono">
                    Save 75%
                  </span>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                  <div className="text-center space-y-1">
                    <h3 className="text-xl font-bold text-white font-display">Schedule Consultation</h3>
                    <p className="text-xs text-gray-400">
                      Senior Dermatologist Fee: <span className="text-brand-gold font-semibold font-mono">₹99</span> <span className="line-through text-gray-600">₹400</span>
                    </p>
                  </div>

                  {/* Scarcity countdown & live count */}
                  <div className="grid grid-cols-2 gap-3 bg-clinic-dark/80 p-3 rounded-xl border border-clinic-border text-center">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-gray-400">Time Left Today</p>
                      <p className="text-sm font-mono font-bold text-brand-gold mt-0.5">
                        {String(timeLeft.hours).padStart(2, '0')}:
                        {String(timeLeft.minutes).padStart(2, '0')}:
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </p>
                    </div>
                    <div className="border-l border-clinic-border/60">
                      <p className="text-[9px] uppercase tracking-wider text-gray-400">Available Slots</p>
                      <p className="text-sm font-bold text-rose-500 mt-0.5 animate-pulse">
                        Only {spotsLeft} Appointments Left!
                      </p>
                    </div>
                  </div>

                  {/* Booking Form */}
                  {isSubmitted ? (
                    <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-6 text-center space-y-3 py-10">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-white">Booking Request Received!</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Thank you! Our dedicated clinical coordinator will contact you within 15 minutes to confirm your ₹99 slot.
                      </p>
                      <div className="pt-2">
                        <a 
                          href="https://wa.me/919626615566?text=Hi%2C%20I%20have%20just%20submitted%20the%20form%20for%20%E2%82%B999%20consultation.%20Please%20confirm."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:underline"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Instantly confirm on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleMainSubmit} className="space-y-4">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Your Full Name <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="Enter first and last name"
                            value={formData.fullName}
                            onChange={e => setFormData({...formData, fullName: e.target.value})}
                            className="w-full pl-9 pr-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none text-xs font-mono font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            pattern="[6-9][0-9]{9}"
                            maxLength={10}
                            placeholder="Enter 10-digit mobile number"
                            value={formData.mobileNumber}
                            onChange={e => setFormData({...formData, mobileNumber: e.target.value.replace(/\D/g, '')})}
                            className="w-full pl-11 pr-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                          />
                        </div>
                      </div>

                      {/* Age & Gender side by side */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                            Age
                          </label>
                          <input
                            type="number"
                            min={1}
                            max={100}
                            placeholder="e.g. 25"
                            value={formData.age}
                            onChange={e => setFormData({...formData, age: e.target.value})}
                            className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                            Gender
                          </label>
                          <select
                            value={formData.gender}
                            onChange={e => setFormData({...formData, gender: e.target.value})}
                            className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white focus:outline-none transition-all"
                          >
                            <option value="">Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          City / Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Hosur, Krishnagiri, Shanthi Nagar"
                          value={formData.city}
                          onChange={e => setFormData({...formData, city: e.target.value})}
                          className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Treatment Interested */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Treatment Interested In
                        </label>
                        <select
                          value={formData.treatmentInterested}
                          onChange={e => setFormData({...formData, treatmentInterested: e.target.value})}
                          className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white focus:outline-none transition-all"
                        >
                          <option value="">Select Treatment</option>
                          <option value="Acne/Pimple Treatment">Skin — Acne/Pimple Treatment</option>
                          <option value="Scar Removal/CO2 Laser">Skin — Scar Removal</option>
                          <option value="Pigmentation/Melasma">Skin — Pigmentation/Melasma</option>
                          <option value="Skin Brightening Glow">Skin — Brightening & Glow</option>
                          <option value="PRP Hair Growth Therapy">Hair — PRP Hair Therapy</option>
                          <option value="Hair Fall Control">Hair — Hair Fall Treatment</option>
                          <option value="Dandruff / Scalp Treatment">Hair — Dandruff Treatment</option>
                          <option value="Hair Transplant Consultation">Hair — Transplant Consultation</option>
                        </select>
                      </div>

                      {/* Consultation Type Toggle Tabs */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                          Consultation Type
                        </label>
                        <div className="grid grid-cols-2 gap-2 bg-clinic-dark p-1 rounded-xl border border-clinic-border">
                          <button
                            type="button"
                            onClick={() => setFormData({...formData, consultationType: 'In-Clinic'})}
                            className={`py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              formData.consultationType === 'In-Clinic'
                                ? 'bg-clinic-card text-brand-gold border border-clinic-border'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            <MapPin className="w-3.5 h-3.5" />
                            <span>IN-CLINIC</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({...formData, consultationType: 'Online'})}
                            className={`py-2 text-[11px] font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                              formData.consultationType === 'Online'
                                ? 'bg-clinic-card text-brand-gold border border-clinic-border'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            <Video className="w-3.5 h-3.5" />
                            <span>ONLINE</span>
                          </button>
                        </div>
                      </div>

                      {/* Date & Message */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={formData.preferredDate}
                            min={new Date().toISOString().split('T')[0]}
                            onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                            className="w-full px-2.5 py-2 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                            Special Request
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Evening slots"
                            value={formData.message}
                            onChange={e => setFormData({...formData, message: e.target.value})}
                            className="w-full px-2.5 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-brand-gold hover:bg-brand-gold-hover disabled:bg-gray-700 text-clinic-dark font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>PROCESSING BOOKING...</span>
                        ) : (
                          <>
                            <BookmarkCheck className="w-4.5 h-4.5" />
                            <span>CONFIRM ₹99 APPOINTMENT</span>
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-center text-gray-500 leading-normal">
                        By submitting, you agree to receive a confirmation call/SMS within 15 mins. No upfront payment required. Pay ₹99 directly at the clinic.
                      </p>

                    </form>
                  )}

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Problems We Treat Section */}
      <section id="treatments" className="py-16 md:py-20 bg-clinic-card/30 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <Activity className="w-3.5 h-3.5" />
              <span>Dermatologist Formulated Clinical Care</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight">
              Advanced Clinical Treatments We Offer
            </h2>
            <p className="text-xs md:text-sm text-gray-400">
              Select your concern below. All clinical procedures are performed by certified dermatologists using state-of-the-art FDA-approved technology.
            </p>

            {/* Skin / Hair Toggle Buttons */}
            <div className="flex gap-2 justify-center pt-4">
              <button
                onClick={() => setActiveTreatmentTab('skin')}
                className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                  activeTreatmentTab === 'skin'
                    ? 'bg-brand-gold border-brand-gold text-clinic-dark shadow-md'
                    : 'bg-clinic-dark border-clinic-border text-gray-400 hover:text-white'
                }`}
              >
                Skin Treatments
              </button>
              <button
                onClick={() => setActiveTreatmentTab('hair')}
                className={`px-5 py-2.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                  activeTreatmentTab === 'hair'
                    ? 'bg-brand-gold border-brand-gold text-clinic-dark shadow-md'
                    : 'bg-clinic-dark border-clinic-border text-gray-400 hover:text-white'
                }`}
              >
                Hair Treatments
              </button>
            </div>
          </div>

          {/* Treatments Rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTreatmentTab === 'skin' ? skinTreatments : hairTreatments).map(treatment => (
              <div 
                key={treatment.id}
                className="bg-clinic-card border border-clinic-border rounded-xl p-5 flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-clinic-dark transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors">{treatment.name}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{treatment.description}</p>
                  </div>

                  {/* Bullet Benefits */}
                  <ul className="space-y-1.5 pt-2 border-t border-clinic-border/40">
                    {treatment.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 text-[11px] text-gray-300">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handlePreSelectTreatment(treatment.name)}
                  className="w-full mt-5 py-2 bg-clinic-dark hover:bg-brand-gold text-gray-300 hover:text-clinic-dark border border-clinic-border hover:border-brand-gold font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Quick Informational Cards with generated photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-clinic-border/60">
            
            {/* Skin Treatment Card */}
            <div className="bg-clinic-card rounded-2xl overflow-hidden border border-clinic-border flex flex-col sm:flex-row gap-6 p-4 items-center">
              <div className="w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                <img 
                  src={skinTreatmentImg} 
                  alt="Clinical Skin Treatment"
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand-gold">FDA Approved Lasers</span>
                <h4 className="text-sm font-bold text-white">Dermatologist Skin Procedures</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  We use precise fractional CO2 lasers, specialized chemical resurfacing, and cellular nutrition treatments to resolve deep pitted scars, sun spots, and melasma.
                </p>
                <button
                  onClick={() => handlePreSelectTreatment('Skin Brightening Glow')}
                  className="text-xs font-bold text-brand-gold hover:underline flex items-center gap-1 justify-center sm:justify-start pt-1"
                >
                  <span>Explore Skin Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Hair Treatment Card */}
            <div className="bg-clinic-card rounded-2xl overflow-hidden border border-clinic-border flex flex-col sm:flex-row gap-6 p-4 items-center">
              <div className="w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                <img 
                  src={hairTreatmentImg} 
                  alt="Clinical Hair PRP GFC Treatment"
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand-gold">Scientific Hair Regrowth</span>
                <h4 className="text-sm font-bold text-white">Advanced GFC & PRP Therapy</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Harness your own growth factors to naturally revive dormant hair follicles, increase hair shaft diameter, and arrest pattern baldness without surgery.
                </p>
                <button
                  onClick={() => handlePreSelectTreatment('PRP Hair Growth Therapy')}
                  className="text-xs font-bold text-brand-gold hover:underline flex items-center gap-1 justify-center sm:justify-start pt-1"
                >
                  <span>Explore Hair Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Before & After Gallery Section */}
      <section className="py-16 md:py-20 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visible Clinical Transformations</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight">
              Before & After Patient Gallery
            </h2>
            <p className="text-xs md:text-sm text-gray-400">
              Hover and slide on any transformation below to compare before-treatment conditions with actual completed results. No retouching, pure medical efficacy.
            </p>
          </div>

          {/* Render Slider Component */}
          <BeforeAfterSlider cases={beforeAfterCases} />

        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-20 bg-clinic-card/20 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Gold Standard of Aesthetics</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight">
              Why We Are Hosur's Most Trusted Clinic
            </h2>
            <p className="text-xs md:text-sm text-gray-400">
              We combine professional dermatological diagnostics with fair pricing, outstanding hygiene, and top-tier FDA-approved machinery.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feat, idx) => (
              <div 
                key={idx}
                className="bg-clinic-card border border-clinic-border rounded-2xl p-6 space-y-3 hover:border-brand-gold/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-clinic-dark transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">{feat.title}</h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Trust CTA banner with doctor photograph */}
          <div className="bg-clinic-card border border-clinic-border rounded-2xl overflow-hidden mt-12 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-clinic-border shrink-0">
              <img 
                src={doctorConsultationImg} 
                alt="Dermatologist consultation"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3 text-center md:text-left flex-1">
              <h3 className="text-lg font-bold text-white">Discuss Your Condition Directly with an Expert</h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-2xl">
                Avoid guessing and self-treatment, which can worsen skin scars and hair thinning. Our senior dermatologist will analyze your scalp/skin health, check medical histories, and give you an honest prescription plan. All for just ₹99.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-brand-gold" />
                  No Hidden Session Charges
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-brand-gold" />
                  Prescriptions Only When Needed
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-brand-gold" />
                  Genuine Medical Recommendations
                </span>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="#appointment-form"
                className="block text-center px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                BOOK ₹99 CONSULTATION
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Patient Testimonials Section */}
      <section className="py-16 md:py-20 border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <Users className="w-3.5 h-3.5" />
              <span>Verified Success Stories</span>
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight">
              Over 1,500+ Happy Patients Treated
            </h2>
            <p className="text-xs md:text-sm text-gray-400">
              Read authentic feedback from patients who completed treatments for acne, scars, hair fall, and skin brightening at our clinic.
            </p>
          </div>

          {/* Testimonial cards wrapper with filtering */}
          <TestimonialsSection testimonials={testimonials} />

        </div>
      </section>

      {/* 8. Emergency Specialist Call CTA (Section 8) */}
      <section className="py-16 bg-gradient-to-br from-clinic-dark to-clinic-card relative overflow-hidden border-b border-clinic-border">
        
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-clinic-grid-bg opacity-30 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-gold font-bold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20 animate-scale-pulse">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT HELPLINE ACTIVE TODAY</span>
          </span>
          
          <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
            Speak to Our Dermatologist & Hair Specialist Today
          </h2>
          
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about hair fall, acne, or scars? Get immediate clarity, price estimations, and same-day physical appointment slots over a quick call.
          </p>

          <div className="bg-clinic-dark/80 border border-clinic-border max-w-md mx-auto p-5 rounded-2xl space-y-2">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold leading-none">Instant Clinic Direct Call</p>
            <a 
              href="tel:09626615566" 
              className="block text-2xl md:text-3xl font-bold font-mono text-brand-gold hover:text-brand-gold-hover transition-colors py-1"
            >
              09626615566
            </a>
            <p className="text-[10px] text-gray-400">Available from 9:00 AM to 9:00 PM (All 7 Days)</p>
          </div>

          {/* CTA Group Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a 
              href="tel:09626615566"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            
            <a 
              href="https://wa.me/919626615566?text=Hi%2C%20I%20want%20to%20book%20a%20%E2%82%B999%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all border border-emerald-500/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>

            <a 
              href="#appointment-form"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-3.5 border border-clinic-border bg-clinic-card/40 hover:bg-clinic-card text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Location Section */}
      <section id="location" className="py-16 md:py-20 bg-clinic-card/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Location Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Hosur Clinic Location</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white tracking-tight">
                  Visit Our Clinic in Hosur
                </h2>
              </div>

              {/* Physical Address Card */}
              <div className="bg-clinic-card border border-clinic-border rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Clinic Address</p>
                    <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                      27/42/1, Denkanikottai Rd,<br />
                      Near Raghavendra Theater,<br />
                      Shanthi Nagar, Hosur,<br />
                      Tamil Nadu 635109
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-clinic-border/60 pt-4">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Contact Direct</p>
                    <p className="text-sm font-mono text-brand-gold font-bold mt-0.5">
                      09626615566
                    </p>
                  </div>
                </div>
              </div>

              {/* Clinic Convenience Features */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Convenience & Accessibility</p>
                
                <ul className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Free Car/Bike Parking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Wheelchair Accessible</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Near Raghavendra Theater</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>Opposite Shanthi Nagar Gate</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all w-full sm:w-auto shadow-md hover:shadow-lg shadow-brand-gold/10"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <a 
                  href="https://maps.google.com/?q=Best+Skin+and+Hair+Clinic+Denkanikottai+Rd+Hosur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-clinic-card hover:bg-clinic-card/80 border border-clinic-border text-gray-300 hover:text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all w-full sm:w-auto"
                >
                  <Map className="w-4 h-4" />
                  <span>Search Clinic on Web</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-clinic-border shadow-2xl aspect-[16/10] bg-clinic-card relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.3087791986423!2d77.82255057597148!3d12.72620712030283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713fc9f874ab%3A0xe9f758ba8933b91a!2sDenkanikottai%20Rd%2C%20Shanthi%20Nagar%2C%20Hosur%2C%20Tamil%20Nadu%20635109!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] brightness-[0.75]"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Best Skin & Hair Clinic Hosur Maps Location"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* 11. Footer Credits */}
      <footer className="bg-clinic-dark border-t border-clinic-border py-8 px-4 text-center text-xs text-gray-500 space-y-4 pb-28 md:pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>© 2026 BONITAA Skin & Hair Care Clinic Hosur. All rights reserved.</p>
          <div className="flex gap-4 text-[11px]">
            <a href="#treatments" className="hover:text-brand-gold">Treatments</a>
            <a href="#before-after-gallery" className="hover:text-brand-gold">Patient Gallery</a>
            <a href="#testimonials" className="hover:text-brand-gold">Reviews</a>
            <a href="#location" className="hover:text-brand-gold">Contact</a>
          </div>
        </div>
        <p className="text-[10px] text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Disclaimer: The clinical information, before & after transformations, and patient reviews on this landing page are provided for educational and appointment booking purposes. Individual results from dermatological and trichology therapies can vary based on hormonal profile, age, genetic pre-dispositions, and consistency of treatment guidelines.
        </p>
      </footer>

      {/* 12. Sticky Conversion Bar (Display permanently) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-clinic-dark/95 backdrop-blur-md border-t border-clinic-border py-3 px-4 shadow-xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          
          {/* Mobile phone click */}
          <a 
            href="tel:09626615566"
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-3 bg-clinic-card hover:bg-clinic-border border border-clinic-border rounded-xl text-xs font-bold text-white tracking-tight font-mono shrink-0"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span className="hidden sm:inline">09626615566</span>
            <span className="sm:hidden">CALL</span>
          </a>

          {/* Core booking CTA */}
          <a 
            href="#appointment-form"
            className="flex-2 md:flex-1 inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wide rounded-xl transition-all shrink-0 animate-scale-pulse"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK ₹99 APPOINTMENT</span>
          </a>

          {/* Whatsapp direct click */}
          <a 
            href="https://wa.me/919626615566?text=Hi%2C%20I%20want%20to%20book%20a%20%E2%82%B999%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold tracking-tight shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp Now</span>
            <span className="sm:hidden">CHAT</span>
          </a>

        </div>
      </div>

      {/* 13. Exit Intent Popup */}
      {isExitIntentOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-clinic-card border border-clinic-border rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative">
            
            <button 
              onClick={() => setIsExitIntentOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8 text-center space-y-5">
              
              <div className="w-12 h-12 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-6 h-6 animate-bounce" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-extrabold font-display text-white">WAIT! DON'T MISS THIS</h3>
                <p className="text-xs text-brand-gold font-bold uppercase tracking-widest">Secure Your ₹99 consultation slot</p>
                <p className="text-xs text-gray-300">
                  Only 20 promotional ₹99 slots are allocated daily. Leave your details below and we will lock your discount for the next 24 hours.
                </p>
              </div>

              {isExitSubmitted ? (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 text-center space-y-1.5 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 mx-auto" />
                  <p className="text-xs font-bold text-white">Your ₹99 Offer is Locked!</p>
                  <p className="text-[10px] text-gray-300">We will text/call you within 15 minutes to lock in your date.</p>
                </div>
              ) : (
                <form onSubmit={handleExitSubmit} className="space-y-3 text-left">
                  <div>
                    <input 
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={exitForm.name}
                      onChange={e => setExitForm({...exitForm, name: e.target.value})}
                      className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      placeholder="Enter 10-digit mobile number"
                      value={exitForm.phone}
                      onChange={e => setExitForm({...exitForm, phone: e.target.value.replace(/\D/g, '')})}
                      className="w-full px-3 py-2.5 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
                  >
                    LOCK MY ₹99 OFFER NOW
                  </button>
                </form>
              )}

              <p className="text-[9px] text-gray-500">
                No payment details required. Clear ₹99 directly at the Hosur clinic on consultation.
              </p>

            </div>
          </div>
        </div>
      )}

      {/* 14. Scroll 60% Popup */}
      {isScrollPopupOpen && (
        <div className="fixed bottom-24 right-4 z-40 max-w-sm w-full p-4 hidden sm:block">
          <div className="bg-clinic-card border border-clinic-border rounded-2xl overflow-hidden shadow-2xl relative">
            
            <button 
              onClick={() => setIsScrollPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-0.5"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center text-brand-gold shrink-0">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">Unlocking Special Scroll Gift</p>
                  <h4 className="text-xs font-bold text-white">Free Skin Analysis + ₹99 consultation</h4>
                </div>
              </div>

              <p className="text-[11px] text-gray-300 leading-normal">
                Interested in our procedures? Submit below to claim a <span className="text-brand-gold font-semibold">Free Digital Skin Hydration Analysis</span> alongside your ₹99 consultation!
              </p>

              {isScrollSubmitted ? (
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-3 text-center text-emerald-400 text-[11px]">
                  <CheckCircle2 className="w-4 h-4 mx-auto mb-1" />
                  <p className="font-bold text-white">Claimed Successfully!</p>
                  <p className="text-gray-300">We will add this to your appointment registry.</p>
                </div>
              ) : (
                <form onSubmit={handleScrollSubmit} className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text"
                      required
                      placeholder="Name"
                      value={scrollForm.name}
                      onChange={e => setScrollForm({...scrollForm, name: e.target.value})}
                      className="w-full px-2.5 py-2 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none transition-all"
                    />
                    <input 
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      placeholder="Phone"
                      value={scrollForm.phone}
                      onChange={e => setScrollForm({...scrollForm, phone: e.target.value.replace(/\D/g, '')})}
                      className="w-full px-2.5 py-2 bg-clinic-dark border border-clinic-border focus:border-brand-gold/60 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-[11px] uppercase tracking-wider rounded-lg transition-all shadow-md"
                  >
                    CLAIM FREE ANALYSIS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 15. Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919626615566?text=Hi%2C%20I%20want%20to%20book%20a%20%E2%82%B999%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-28 right-6 z-35 w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-transform hover:scale-110 group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 group-hover:animate-ping"></div>
        <MessageSquare className="w-7 h-7 fill-white text-emerald-600" />
      </a>

    </div>
  );
}
