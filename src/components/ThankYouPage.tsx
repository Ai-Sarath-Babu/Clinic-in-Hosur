import React, { useEffect } from 'react';
import logoImg from '../assets/bonitaa-skin-hair-clinic-logo.png';
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  User, 
  Building2, 
  FileText,
  HeartHandshake
} from 'lucide-react';

interface BookingData {
  fullName: string;
  mobileNumber: string;
  email: string;
  consultationType: 'In-Clinic' | 'Online';
  referenceId?: string;
}

interface ThankYouPageProps {
  bookingData: BookingData;
  onBackHome: () => void;
  mapsUrl: string;
}

export default function ThankYouPage({ bookingData, onBackHome, mapsUrl }: ThankYouPageProps) {
  const refId = bookingData.referenceId || `BON-${Math.floor(100000 + Math.random() * 900000)}`;

  // Google Ads conversion snippet for Submit lead form thank you page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const windowWithGtag = window as unknown as {
        gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
        dataLayer?: unknown[];
      };

      if (typeof windowWithGtag.gtag === 'function') {
        windowWithGtag.gtag('event', 'conversion', {
          'send_to': 'AW-18351602494/qDJLCP-64dccEL723K5E'
        });
      } else {
        windowWithGtag.dataLayer = windowWithGtag.dataLayer || [];
        windowWithGtag.dataLayer.push({
          event: 'conversion',
          send_to: 'AW-18351602494/qDJLCP-64dccEL723K5E'
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen clinic-grid-bg text-gray-200 font-sans py-8 px-4 sm:px-6 lg:px-8 safe-pt safe-pb-bottom-bar flex flex-col items-center justify-center">
      
      {/* Container */}
      <div className="max-w-2xl w-full bg-clinic-card border border-clinic-border rounded-3xl overflow-hidden shadow-2xl relative">
        
        {/* Top Gold Accent Bar */}
        <div className="h-2 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold" />

        {/* Header Section */}
        <div className="p-6 sm:p-8 text-center border-b border-clinic-border/60 bg-clinic-dark/40">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logoImg} 
              alt="BONITAA Skin & Hair Care Clinic Logo" 
              className="h-14 sm:h-16 w-auto object-contain p-1.5 bg-white/5 border border-brand-gold/30 rounded-2xl shadow-lg shadow-brand-gold/10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Success Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 animate-bounce">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>APPOINTMENT REQUEST CONFIRMED</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Thank You, {bookingData.fullName.split(' ')[0]}!
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-lg mx-auto leading-relaxed">
            Your 100% Free consultation slot request has been successfully registered with <span className="text-brand-gold font-bold">BONITAA Skin & Hair Care Clinic</span>.
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Booking Summary Box */}
          <div className="bg-clinic-dark border border-clinic-border rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-clinic-border/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand-gold" />
                Booking Reference
              </span>
              <span className="text-xs font-mono font-bold text-brand-gold px-2.5 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded-lg">
                #{refId}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-gray-300">
                <User className="w-4 h-4 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Patient Name</p>
                  <p className="font-semibold text-white">{bookingData.fullName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Phone Number</p>
                  <p className="font-semibold text-white font-mono">+91 {bookingData.mobileNumber}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Email Address</p>
                  <p className="font-semibold text-white truncate max-w-[180px]">{bookingData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Building2 className="w-4 h-4 text-brand-gold shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Consultation Mode</p>
                  <p className="font-semibold text-brand-gold">{bookingData.consultationType} (Free Offer)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Timeline */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              What Happens Next?
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              
              <div className="flex items-start gap-3 bg-clinic-dark/60 border border-clinic-border/80 p-3.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Confirmation Call within 15 Minutes</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                    Our clinical coordinator will call you on <span className="font-mono text-white">+91 {bookingData.mobileNumber}</span> to confirm your preferred time slot and doctor availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-clinic-dark/60 border border-clinic-border/80 p-3.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Senior Dermatologist Consultation</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                    Meet our certified skin & hair specialist for comprehensive scalp/skin analysis and customized therapy guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-clinic-dark/60 border border-clinic-border/80 p-3.5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">100% Free Consultation - No Hidden Fees</h4>
                  <p className="text-[11px] text-gray-400 leading-normal mt-0.5">
                    No payment is required for your initial consultation. Experience expert dermatological diagnosis with complete peace of mind.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a 
              href="tel:9626615566"
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-brand-gold hover:bg-brand-gold-hover text-clinic-dark font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-brand-gold/20"
            >
              <Phone className="w-4 h-4" />
              <span>CALL CLINIC DIRECTLY</span>
            </a>

            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-clinic-dark hover:bg-clinic-border border border-clinic-border text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>GET CLINIC DIRECTIONS</span>
            </a>
          </div>

          {/* Clinic Address Footer Box */}
          <div className="bg-clinic-dark/80 border border-clinic-border p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                BONITAA Skin & Hair Care Clinic
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Hosur, Tamil Nadu (Open Mon - Sun: 10 AM - 8 PM)
              </p>
            </div>
            <button
              onClick={onBackHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:underline shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Trust assurances */}
          <div className="flex items-center justify-center gap-6 text-[10px] text-gray-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Confidential
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Certified Dermatologists
            </span>
            <span className="flex items-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-blue-400" />
              Patient Care Guaranteed
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
