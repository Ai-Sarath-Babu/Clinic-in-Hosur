import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Calendar, 
  Phone, 
  Users, 
  Award, 
  ShieldCheck, 
  MapPin, 
  User, 
  Mail, 
  Zap, 
  Lock, 
  Laptop, 
  Building2 
} from 'lucide-react';
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_INTL, CLINIC_NAME, CLINIC_LOCATION, FORMSPREE_ENDPOINT } from '../data';
import { LeadFormData } from '../types';

interface HeroSectionProps {
  onFormSubmit: (data: LeadFormData) => void;
  onBookClick: () => void;
  onNavigatePolicy?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onFormSubmit, onBookClick, onNavigatePolicy }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    consultationType: 'IN-CLINIC'
  });

  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 9, seconds: 59 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 7, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      alert('Please fill in your name.');
      return;
    }
    const cleanPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // POST to Formspree Endpoint
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phoneNumber.trim(),
          email: formData.email?.trim() || 'Not provided',
          consultationType: formData.consultationType,
          submissionTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          source: 'Hero Section Lead Form',
          clinic: CLINIC_NAME,
          location: CLINIC_LOCATION
        })
      });
    } catch (err) {
      console.warn('Formspree transmission error (continuing to confirmation):', err);
    } finally {
      setIsSubmitting(false);
      onFormSubmit(formData);
    }
  };

  const formatTimer = () => {
    const h = String(timeLeft.hours).padStart(2, '0');
    const m = String(timeLeft.minutes).padStart(2, '0');
    const s = String(timeLeft.seconds).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <section className="relative isolate pt-4 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      {/* Mild Clinical Grid Box Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Crisp Base Grid Pattern - Very Mild & Subtle */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 25%, black 25%, transparent 90%)',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 25%, black 25%, transparent 90%)'
          }}
        />

        {/* SVG Grid with Subtle Intersection Points */}
        <svg 
          className="absolute inset-0 h-full w-full opacity-20" 
          width="100%" 
          height="100%" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-clinical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              <circle cx="40" cy="40" r="1" fill="#e6b133" fillOpacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-clinical-grid)" />
        </svg>

        {/* Soft Ambient Backlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[300px] bg-gradient-to-b from-[#e6b133]/05 via-transparent to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Hero Copy & Trust Metrics) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-[#e6b133]/15 border border-[#e6b133]/40 text-[#e6b133] text-[11px] sm:text-xs font-semibold tracking-wide">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#e6b133]" />
                <span>100% FREE CONSULTATION (LIMITED PERIOD)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-[11px] sm:text-xs font-semibold">
                <Laptop className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Online & In-Clinic Available</span>
              </div>
            </div>

            {/* Rating Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-widest text-[#e6b133] uppercase">
              <div className="flex text-[#e6b133]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#e6b133]" />
                ))}
              </div>
              <span>4.9 STAR RATED PATIENT SUCCESS STORIES</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-[1.15] sm:leading-[1.1] tracking-tight">
              Best Skin & Hair <br />
              Care Clinic in <span className="text-[#e6b133]">Hosur</span>
            </h1>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Advanced, FDA-approved clinical solutions for <strong className="text-white font-semibold">Hair Transplant, Excel GFC, PRP & GFC Hair Growth, Hair Fall Control, Anti-Dandruff, Microneedling, Laser Hair Therapy, Anti-Acne, MNRF, Meso Glow, Glutathione, Carbon Laser Therapy & Full-Body Laser Hair Removal</strong>. Get treated by senior dermatologists in <strong className="text-white font-semibold">Hosur</strong>. <strong className="text-[#e6b133] font-semibold">Free Consultation</strong> for all online registrations today.
            </p>

            {/* Stats Metric Row */}
            <div className="pt-2.5 pb-2 border-y border-zinc-800/80">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                <div className="text-center sm:text-left">
                  <div className="text-base sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
                    <span>4.9</span>
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#e6b133] text-[#e6b133]" />
                  </div>
                  <div className="text-[9px] sm:text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                    PATIENT RATING
                  </div>
                </div>

                <div className="text-center sm:text-left border-l border-zinc-800/80 pl-2 sm:pl-3">
                  <div className="text-base sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6b133]" />
                    <span>10,000+</span>
                  </div>
                  <div className="text-[9px] sm:text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                    HAPPY PATIENTS
                  </div>
                </div>

                <div className="text-center sm:text-left border-l border-zinc-800/80 pl-2 sm:pl-3">
                  <div className="text-base sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6b133]" />
                    <span>15+ Yrs</span>
                  </div>
                  <div className="text-[9px] sm:text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                    EXPERT DOCTORS
                  </div>
                </div>

                {/* Symmetrical 2nd row on mobile / 4th & 5th columns on desktop */}
                <div className="col-span-3 sm:col-span-2 border-t sm:border-t-0 sm:border-l border-zinc-800/80 pt-2 sm:pt-0 sm:pl-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center sm:text-left">
                      <div className="text-base sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6b133]" />
                        <span>FDA Appr.</span>
                      </div>
                      <div className="text-[9px] sm:text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                        ADVANCED TECH
                      </div>
                    </div>

                    <div className="text-center sm:text-left border-l border-zinc-800/80 pl-2 sm:pl-3">
                      <div className="text-base sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-1">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e6b133]" />
                        <span>Hosur</span>
                      </div>
                      <div className="text-[9px] sm:text-xs text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                        SHANTHI NAGAR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#appointment-form"
                onClick={onBookClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#e6b133] hover:bg-[#d2a02b] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition shadow-lg shadow-[#e6b133]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK FREE CONSULTATION</span>
              </a>

              <a
                href={`tel:${CLINIC_PHONE_INTL}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition hover:border-zinc-700"
              >
                <Phone className="w-4 h-4 text-[#e6b133]" />
                <span>CALL: {CLINIC_PHONE_DISPLAY}</span>
              </a>
            </div>

          </div>

          {/* Right Column (Hero Form Card) */}
          <div id="appointment-form" className="lg:col-span-5 w-full">
            <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 sm:p-7 shadow-2xl relative backdrop-blur-xl">
              
              {/* Header Ribbon */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e6b133]">
                  <Zap className="w-4 h-4 fill-[#e6b133]" />
                  <span>FREE CONSULTATION APPOINTMENT</span>
                </div>
                <div className="px-2 py-0.5 bg-[#e6b133] text-black text-[10px] font-black uppercase rounded tracking-wider">
                  100% OFF
                </div>
              </div>

              {/* Form Title & Pricing */}
              <div className="pt-4 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Schedule Consultation
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Senior Dermatologist Fee:{' '}
                  <span className="text-emerald-400 font-bold text-sm ml-1">FREE</span>{' '}
                  <span className="line-through text-zinc-500 text-xs ml-1">₹400</span>
                </p>
              </div>

              {/* Countdown & Slots Counter */}
              <div className="bg-black/60 rounded-xl p-3 border border-zinc-800/90 grid grid-cols-2 gap-2 text-center mb-5">
                <div>
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    TIME LEFT TODAY
                  </span>
                  <span className="text-sm font-mono font-bold text-[#e6b133] tracking-widest">
                    {formatTimer()}
                  </span>
                </div>
                <div className="border-l border-zinc-800 pl-2">
                  <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    AVAILABLE SLOTS
                  </span>
                  <span className="text-xs font-bold text-rose-400">
                    Only 7 Appointments Left!
                  </span>
                </div>
              </div>

              {/* Booking Form */}
              <form 
                action={FORMSPREE_ENDPOINT} 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <input type="hidden" name="consultationType" value={formData.consultationType} />
                <input type="hidden" name="source" value="Hero Section Booking Form" />
                <input type="hidden" name="clinic" value={CLINIC_NAME} />
                <input type="hidden" name="location" value={CLINIC_LOCATION} />
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    YOUR FULL NAME <span className="text-[#e6b133]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter first and last name"
                      className="w-full bg-[#18181c] border border-zinc-800 focus:border-[#e6b133] focus:ring-1 focus:ring-[#e6b133] rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 outline-none transition"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    PHONE NUMBER <span className="text-[#e6b133]">*</span>
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-zinc-800 focus-within:border-[#e6b133] focus-within:ring-1 focus-within:ring-[#e6b133] transition">
                    <div className="bg-[#1f1f25] px-3.5 py-3 text-xs font-bold text-zinc-300 flex items-center border-r border-zinc-800">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full bg-[#18181c] px-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 outline-none"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    EMAIL ADDRESS <span className="text-zinc-500">(OPTIONAL)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                      className="w-full bg-[#18181c] border border-zinc-800 focus:border-[#e6b133] focus:ring-1 focus:ring-[#e6b133] rounded-xl pl-10 pr-4 py-3 text-base sm:text-sm text-white placeholder-zinc-500 outline-none transition"
                    />
                  </div>
                </div>

                {/* Consultation Type Radio Selection */}
                <div>
                  <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    CONSULTATION TYPE <span className="text-[#e6b133]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'IN-CLINIC' })}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                        formData.consultationType === 'IN-CLINIC'
                          ? 'bg-[#e6b133]/15 border-[#e6b133] text-[#e6b133]'
                          : 'bg-[#18181c] border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>IN-CLINIC</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'ONLINE' })}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition ${
                        formData.consultationType === 'ONLINE'
                          ? 'bg-[#e6b133]/15 border-[#e6b133] text-[#e6b133]'
                          : 'bg-[#18181c] border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>ONLINE</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 rounded-xl bg-[#e6b133] hover:bg-[#d49f25] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg shadow-[#e6b133]/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Lock className="w-4 h-4" />
                  <span>{isSubmitting ? 'CONFIRMING...' : 'CONFIRM FREE CONSULTATION'}</span>
                </button>

                {/* Disclaimer */}
                <p className="text-[10px] text-zinc-400 text-center leading-normal pt-1">
                  By submitting, you agree to our{' '}
                  <a
                    href="/privacy-policy"
                    onClick={(e) => {
                      if (onNavigatePolicy) {
                        e.preventDefault();
                        onNavigatePolicy();
                      }
                    }}
                    className="text-zinc-300 underline underline-offset-2 hover:text-[#e6b133] transition"
                  >
                    Privacy Policy
                  </a>{' '}
                  and to receive a confirmation call/SMS within 15 mins. Limited-time 100% Free Consultation. No payment required.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
