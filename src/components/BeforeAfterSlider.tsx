import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { BeforeAfterCase } from '../types';

interface BeforeAfterSliderProps {
  cases: BeforeAfterCase[];
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ cases }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = cases[activeCaseIndex] || cases[0];

  return (
    <div className="w-full space-y-6">
      {/* Category selector pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {cases.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setActiveCaseIndex(idx)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition flex items-center gap-2 cursor-pointer border ${
              activeCaseIndex === idx
                ? 'bg-[#e6b133] text-black border-[#e6b133] shadow-md shadow-[#e6b133]/20'
                : 'bg-[#141416] text-gray-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
            }`}
          >
            <span>{c.treatment}</span>
          </button>
        ))}
      </div>

      {/* Main Display Box */}
      <div className="bg-[#141416] border border-zinc-800 rounded-3xl p-5 md:p-8 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Showcase */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-black aspect-[4/3] flex items-center justify-center">
              <img
                src={currentCase.beforeImage}
                alt={currentCase.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#e6b133] border border-[#e6b133]/30">
                ⭐ Verified Patient Result
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span>Treatment: <strong className="text-white">{currentCase.treatment}</strong></span>
              <span>Protocol: <strong className="text-[#e6b133]">{currentCase.sessions}</strong></span>
            </div>
          </div>

          {/* Details & Action */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#e6b133]/15 text-[#e6b133] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Clinical Transformation</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {currentCase.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-zinc-800 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6b133] shrink-0" />
                <span>Customized dermatologist-monitored dosage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6b133] shrink-0" />
                <span>FDA-approved equipment & sterile disposables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6b133] shrink-0" />
                <span>Zero downtime with rapid visible improvement</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#appointment-form"
                className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#e6b133] to-[#d2a02b] hover:from-[#d2a02b] hover:to-[#be8e24] text-black font-bold text-sm shadow-lg transition gap-2"
              >
                <span>Book Similar Treatment Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-zinc-500 text-center mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                Confidential & individual consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
