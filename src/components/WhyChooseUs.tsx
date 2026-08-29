import React from 'react';
import { 
  Award, 
  Stethoscope, 
  Sliders, 
  Cpu, 
  Tag, 
  Video, 
  CalendarCheck, 
  FileCheck, 
  TrendingUp, 
  Check, 
  Calendar 
} from 'lucide-react';
import { TRUST_FACTORS } from '../data';

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-4 h-4 text-[#e6b133]" />;
      case 'Sliders': return <Sliders className="w-4 h-4 text-[#e6b133]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#e6b133]" />;
      case 'Tag': return <Tag className="w-4 h-4 text-[#e6b133]" />;
      case 'Video': return <Video className="w-4 h-4 text-[#e6b133]" />;
      case 'CalendarCheck': return <CalendarCheck className="w-4 h-4 text-[#e6b133]" />;
      case 'FileCheck': return <FileCheck className="w-4 h-4 text-[#e6b133]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#e6b133]" />;
      default: return <Award className="w-4 h-4 text-[#e6b133]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-[#0a0a0b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>THE GOLD STANDARD OF AESTHETICS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why We Are Hosur's Most Trusted Clinic
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            We combine professional dermatological diagnostics with fair pricing, outstanding hygiene, and top-tier FDA-approved machinery.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_FACTORS.map((factor) => (
            <div
              key={factor.id}
              className="bg-[#121215] border border-zinc-800/90 hover:border-[#e6b133]/40 rounded-2xl p-5 transition duration-200 group shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-[#e6b133]/50 transition">
                {getIcon(factor.iconName)}
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#e6b133] transition">
                {factor.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Direct Discussion Banner */}
        <div className="mt-10 bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-zinc-800 bg-zinc-900 shadow-md">
              <img
                src="/assets/result_4.jpeg"
                alt="Clinic Specialists"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                Discuss Your Condition Directly with an Expert
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl mt-1.5">
                Avoid guessing and self-treatment, which can worsen skin scars and hair thinning. Our senior dermatologist will analyze your scalp/skin health, check medical histories, and give you an honest prescription plan. All 100% Free today.
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-[11px] font-bold text-zinc-300">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>NO HIDDEN SESSION CHARGES</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>PRESCRIPTIONS ONLY WHEN NEEDED</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>GENUINE MEDICAL RECOMMENDATIONS</span>
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#e6b133] hover:bg-[#d49f25] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-lg shadow-[#e6b133]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK FREE CONSULTATION</span>
          </button>

        </div>

      </div>
    </section>
  );
};
