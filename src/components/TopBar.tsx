import React from 'react';
import { Gift, Calendar, ShieldCheck, Award } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div id="top-announcement-bar" className="bg-[#0f0e0c] border-b border-[#2a261a] text-zinc-300 text-xs py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-y-1.5 gap-x-6">
        <div className="flex items-center gap-1.5 text-[#e6b133] font-medium">
          <Gift className="w-3.5 h-3.5 shrink-0" />
          <span>100% FREE CONSULTATION OFFER (ACTIVE TODAY)</span>
        </div>
        
        <div className="hidden sm:flex items-center gap-1.5 text-zinc-300">
          <Calendar className="w-3.5 h-3.5 text-[#e6b133] shrink-0" />
          <span>SAME DAY APPOINTMENT AVAILABLE</span>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-zinc-300">
          <ShieldCheck className="w-3.5 h-3.5 text-[#e6b133] shrink-0" />
          <span>FDA-APPROVED CLINICAL TREATMENTS</span>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-zinc-300">
          <Award className="w-3.5 h-3.5 text-[#e6b133] shrink-0" />
          <span>DOUBLE-BOARD CERTIFIED DERMATOLOGISTS</span>
        </div>
      </div>
    </div>
  );
};
