import React, { useState } from 'react';
import { Sparkles, Calendar, Activity, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data';

interface BeforeAfterGalleryProps {
  onBookClick: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onBookClick }) => {
  const [selectedTab, setSelectedTab] = useState<string>('acne');

  const currentCase = BEFORE_AFTER_CASES.find(c => c.tabKey === selectedTab) || BEFORE_AFTER_CASES[0];

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-[#08080a] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VISIBLE CLINICAL TRANSFORMATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Before & After Patient Gallery
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Hover and slide on any transformation below to compare before-treatment conditions with actual completed results. No retouching, pure medical efficacy.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {BEFORE_AFTER_CASES.map(c => (
              <button
                key={c.tabKey}
                onClick={() => setSelectedTab(c.tabKey)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedTab === c.tabKey
                    ? 'bg-[#e6b133] text-black shadow-md shadow-[#e6b133]/20 scale-105'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {c.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Transformation Showcase Box */}
        <div className="max-w-5xl mx-auto bg-[#121215] border border-zinc-800/90 rounded-3xl p-5 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Patient Clinical Photo */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#e6b133]/40 text-[#e6b133] text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    ACTUAL CLINICAL PATIENT TRANSFORMATION
                  </span>
                </div>

                <img
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="w-full h-80 sm:h-96 object-contain bg-zinc-950 p-2"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-[10px] text-zinc-400 text-center mt-3 italic">
                *Actual unretouched clinical photos of our real patients. Results may vary depending on individual scalp/skin conditions.
              </p>
            </div>

            {/* Right: Transformation Case Details */}
            <div className="md:col-span-6 space-y-6">
              
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#e6b133]/15 border border-[#e6b133]/30 text-[#e6b133] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentCase.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {currentCase.title}
                </h3>
              </div>

              <div className="space-y-4 bg-black/40 border border-zinc-800/90 rounded-2xl p-5">
                
                {/* Clinical Treatment */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-[#e6b133]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      CLINICAL TREATMENT
                    </span>
                    <span className="text-sm font-bold text-white">
                      {currentCase.treatmentName}
                    </span>
                  </div>
                </div>

                {/* Transformation Period */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4 text-[#e6b133]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      TRANSFORMATION PERIOD
                    </span>
                    <span className="text-sm font-bold text-white">
                      {currentCase.period}
                    </span>
                  </div>
                </div>

                {/* Transformation Report */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#e6b133]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                      TRANSFORMATION REPORT
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {currentCase.report}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={onBookClick}
                className="w-full py-3.5 px-6 rounded-xl bg-[#e6b133] hover:bg-[#d49f25] text-black font-bold text-sm uppercase tracking-wider transition shadow-lg shadow-[#e6b133]/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                Get Similar Results - Book Now
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
