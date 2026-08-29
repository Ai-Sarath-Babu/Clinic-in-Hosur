import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Zap, 
  Flame, 
  Droplet, 
  Activity,
  Layers,
  HeartPulse
} from 'lucide-react';
import { SKIN_TREATMENTS, HAIR_TREATMENTS } from '../data';
import { Treatment } from '../types';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment }) => {
  const [activeCategory, setActiveCategory] = useState<'skin' | 'hair'>('skin');

  const treatments: Treatment[] = activeCategory === 'skin' ? SKIN_TREATMENTS : HAIR_TREATMENTS;

  const getTreatmentIcon = (index: number) => {
    const icons = [Sparkles, ShieldCheck, Flame, Droplet, Activity, Layers, HeartPulse, Zap];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-4 h-4 text-[#e6b133]" />;
  };

  return (
    <section id="treatments" className="py-16 lg:py-24 bg-[#0a0a0b] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#e6b133]" />
            <span>DERMATOLOGIST FORMULATED CLINICAL CARE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advanced Clinical Treatments We Offer
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Select your concern below. All clinical procedures are performed by certified dermatologists using state-of-the-art FDA-approved technology.
          </p>

          {/* Category Toggle Tabs */}
          <div className="inline-flex items-center p-1 bg-zinc-900/90 border border-zinc-800 rounded-full mt-6">
            <button
              onClick={() => setActiveCategory('skin')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'skin'
                  ? 'bg-[#e6b133] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Skin Treatments
            </button>
            <button
              onClick={() => setActiveCategory('hair')}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'hair'
                  ? 'bg-[#e6b133] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hair Treatments
            </button>
          </div>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#121215] border border-zinc-800/90 hover:border-[#e6b133]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 group hover:translate-y-[-2px] shadow-lg"
            >
              <div>
                {/* Icon Box */}
                <div className="w-9 h-9 rounded-xl bg-black border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-[#e6b133]/50 transition">
                  {getTreatmentIcon(idx)}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#e6b133] transition">
                  {item.name}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 min-h-[48px]">
                  {item.description}
                </p>

                {/* Benefits Checkpoints */}
                <div className="space-y-2 border-t border-zinc-800/80 pt-3 mb-5">
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#e6b133] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTreatment(item.name)}
                className="w-full py-2.5 px-3 rounded-xl bg-zinc-900/90 hover:bg-[#e6b133] text-zinc-300 hover:text-black font-semibold text-xs flex items-center justify-center gap-1.5 transition border border-zinc-800 group-hover:border-[#e6b133]/40"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* 2 Feature Highlight Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          
          {/* Skin Laser Banner */}
          <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
            <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-zinc-800 bg-zinc-900">
              <img
                src="/assets/result_4.jpeg"
                alt="Dermatologist Skin Procedures"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#e6b133] bg-[#e6b133]/10 px-2 py-0.5 rounded border border-[#e6b133]/20">
                FDA APPROVED LASERS
              </span>
              <h4 className="text-lg font-bold text-white mt-2 mb-1.5">
                Dermatologist Skin Procedures
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                We use precise fractional CO2 lasers, specialized chemical resurfacing, and cellular nutrition treatments to resolve deep pitted scars, sun spots, and melasma.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('skin');
                  onSelectTreatment('Dermatologist Skin Procedures');
                }}
                className="text-xs font-bold text-[#e6b133] hover:underline flex items-center gap-1"
              >
                <span>Explore Skin Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Hair GFC Banner */}
          <div className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
            <div className="w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-zinc-800 bg-zinc-900">
              <img
                src="/assets/result_1.jpeg"
                alt="Advanced GFC and PRP Therapy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#e6b133] bg-[#e6b133]/10 px-2 py-0.5 rounded border border-[#e6b133]/20">
                SCIENTIFIC HAIR REGROWTH
              </span>
              <h4 className="text-lg font-bold text-white mt-2 mb-1.5">
                Advanced GFC & PRP Therapy
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                Harness your own growth factors to naturally revive dormant hair follicles, increase hair shaft diameter, and arrest pattern baldness without surgery.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('hair');
                  onSelectTreatment('Advanced GFC & PRP Therapy');
                }}
                className="text-xs font-bold text-[#e6b133] hover:underline flex items-center gap-1"
              >
                <span>Explore Hair Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
