import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.map(item => (
        <div
          key={item.id}
          className="bg-[#141416] border border-zinc-800 rounded-2xl p-6 relative hover:border-[#e6b133]/40 transition duration-300 shadow-lg flex flex-col justify-between"
        >
          <Quote className="absolute top-5 right-5 w-8 h-8 text-zinc-800 pointer-events-none" />

          <div className="space-y-4">
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#e6b133] text-[#e6b133]" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-sm text-gray-300 leading-relaxed italic">
              "{item.review}"
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                {item.name}
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              </h4>
              <p className="text-xs text-[#e6b133]">{item.treatment}</p>
            </div>
            <span className="text-[11px] text-zinc-500">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
