import React, { useEffect } from 'react';
import logoImg from '../assets/bonitaa_clinic_logo.png';
import { 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowLeft
} from 'lucide-react';
import { LeadFormData } from '../types';

interface ThankYouPageProps {
  data: LeadFormData;
  onReset: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ data, onReset }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const refId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-[#0a0a0b]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Bonitaa Skin & Hair Care Clinic Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          <button
            onClick={onReset}
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Clinic Home</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-12 w-full space-y-8 text-center">
        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="w-20 h-20 bg-gradient-to-tr from-[#e6b133]/20 to-[#e6b133]/40 rounded-full flex items-center justify-center mx-auto text-[#e6b133] shadow-2xl border border-[#e6b133]/50">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
          <div className="absolute -top-1 -right-1 bg-emerald-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Confirmed
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e6b133]/15 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Registration Successful</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thank You, {data.fullName || 'Valued Patient'}!
          </h1>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Your appointment request for <span className="text-[#e6b133] font-semibold">{data.consultationType}</span> has been received. Our clinical coordinator in Hosur is preparing your file.
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="bg-[#141416] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-zinc-800 gap-2">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Reference Ticket ID</p>
              <p className="text-lg font-bold font-mono text-[#e6b133]">#{refId}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Consultation Fee</p>
              <p className="text-lg font-bold text-emerald-400">FREE (₹0.00)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-black/40 rounded-xl border border-zinc-800/80">
              <span className="text-xs text-zinc-500 block mb-1">Registered Patient:</span>
              <span className="font-semibold text-white">{data.fullName}</span>
            </div>
            <div className="p-3 bg-black/40 rounded-xl border border-zinc-800/80">
              <span className="text-xs text-zinc-500 block mb-1">Contact Number:</span>
              <span className="font-semibold text-white">{data.phoneNumber}</span>
            </div>
            <div className="p-3 bg-black/40 rounded-xl border border-zinc-800/80">
              <span className="text-xs text-zinc-500 block mb-1">Mode of Consultation:</span>
              <span className="font-semibold text-[#e6b133]">{data.consultationType}</span>
            </div>
            <div className="p-3 bg-black/40 rounded-xl border border-zinc-800/80">
              <span className="text-xs text-zinc-500 block mb-1">Status:</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Priority Queue Assigned
              </span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              What Happens Next?
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e6b133]/20 text-[#e6b133] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                <span>Our patient care coordinator will call you to confirm your convenient time slot today.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e6b133]/20 text-[#e6b133] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                <span>You will undergo clinical scalp / skin diagnostics with a senior consultant.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e6b133]/20 text-[#e6b133] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                <span>Receive a transparent, personalized treatment plan with zero obligation.</span>
              </div>
            </div>
          </div>

          {/* Urgent Assistance / Direct Hotline */}
          <div className="p-4 bg-gradient-to-r from-[#e6b133]/15 to-transparent rounded-2xl border border-[#e6b133]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <p className="text-sm font-bold text-white">Need an immediate appointment?</p>
              <p className="text-xs text-gray-400">Call our direct Hosur clinic desk directly:</p>
            </div>
            <a
              href="tel:+919176335500"
              className="px-5 py-2.5 bg-[#e6b133] hover:bg-[#d2a02b] text-black font-bold rounded-xl text-xs flex items-center gap-2 transition shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 91763 35500</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919176335500"
            className="px-6 py-3 bg-[#e6b133] hover:bg-[#d2a02b] text-black font-bold rounded-xl text-sm flex items-center gap-2 transition shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call Clinic (+91 91763 35500)</span>
          </a>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl text-sm transition"
          >
            Back to Website
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Bonitaa Skin & Hair Care Clinic • Hosur. All rights reserved.</p>
      </footer>
    </div>
  );
};
