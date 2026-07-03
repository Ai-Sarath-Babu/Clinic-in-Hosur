import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { BeforeAfterCase } from '../types';
import { Sparkles, History, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface Props {
  cases: BeforeAfterCase[];
}

export default function BeforeAfterSlider({ cases }: Props) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = cases[activeCaseIndex];

  // Reset slider position when changing case
  useEffect(() => {
    setSliderPosition(50);
  }, [activeCaseIndex]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className="w-full" id="before-after-gallery">
      {/* Category selector tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
        {cases.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setActiveCaseIndex(idx)}
            className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${
              activeCaseIndex === idx
                ? 'bg-brand-gold border-brand-gold text-clinic-dark shadow-lg shadow-brand-gold/15'
                : 'bg-clinic-card/60 border-clinic-border text-gray-400 hover:text-white hover:border-brand-gold/30'
            }`}
          >
            {c.title.split(' ')[0]} Case
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Comparison Slider (Left 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div 
            ref={containerRef}
            className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-hidden border border-clinic-border bg-clinic-dark select-none shadow-2xl"
          >
            {/* AFTER Image (Background) */}
            <img 
              src={activeCase.afterImg} 
              alt={`${activeCase.title} - After Treatment`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute right-4 bottom-4 bg-clinic-dark/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] md:text-xs font-semibold tracking-wider text-brand-gold border border-brand-gold/20 z-10">
              AFTER TREATMENT
            </div>

            {/* BEFORE Image (Foreground clipped) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={activeCase.beforeImg} 
                alt={`${activeCase.title} - Before Treatment`}
                className="absolute inset-0 w-[550px] h-full object-cover max-w-none pointer-events-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute left-4 bottom-4 bg-clinic-dark/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] md:text-xs font-semibold tracking-wider text-gray-400 border border-clinic-border z-10">
              BEFORE TREATMENT
            </div>

            {/* Drag Handle Divider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-brand-gold cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={startDragging}
              onTouchStart={startDragging}
            >
              {/* Drag Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-brand-gold rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/40 border-2 border-clinic-dark select-none pointer-events-none">
                <div className="flex gap-0.5 text-clinic-dark font-black">
                  <ChevronLeft className="w-3.5 h-3.5 -mr-1" />
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Hover tooltip hint */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] text-gray-300 border border-white/10 flex items-center gap-1.5 pointer-events-none animate-pulse">
              <Eye className="w-3.5 h-3.5 text-brand-gold" />
              <span>Drag the gold slider center to compare</span>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mt-3 text-center">
            *Actual unretouched clinical photos of our real patients. Results may vary depending on individual scalp/skin conditions.
          </p>
        </div>

        {/* Case Study Details (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-2.5 py-1 rounded-md border border-brand-gold/20">
              <Sparkles className="w-3 h-3" />
              {activeCase.category === 'skin' ? 'Skin Transformation' : 'Hair Transformation'}
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
              {activeCase.title}
            </h3>
          </div>

          <div className="bg-clinic-card/80 border border-clinic-border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Clinical Treatment</p>
                <p className="text-sm font-semibold text-white">{activeCase.treatmentName}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Transformation Period</p>
                <p className="text-sm font-semibold text-white">{activeCase.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-clinic-border/60 pt-4 mt-2">
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <History className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Transformation Report</p>
                <p className="text-sm text-gray-300 mt-0.5 leading-relaxed">
                  {activeCase.details}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a 
              href="#appointment-form"
              className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 border border-brand-gold bg-brand-gold/10 text-brand-gold hover:bg-brand-gold hover:text-clinic-dark font-bold text-sm rounded-xl transition-all duration-300 shadow-md shadow-brand-gold/5"
            >
              Get Similar Results - Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
