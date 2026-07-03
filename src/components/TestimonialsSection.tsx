import { useState } from 'react';
import { Testimonial } from '../types';
import { Star, ShieldCheck, ArrowDownCircle, Sparkles, ThumbsUp, Quote, Instagram, ExternalLink } from 'lucide-react';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: Props) {
  const [filter, setFilter] = useState<'all' | 'skin' | 'hair'>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const instagramReels = [
    {
      id: 'DOSiucPEgHu',
      title: 'PRP Hair Regrowth Review',
      creator: 'Bonitaa Skin & Hair Care',
      handle: '@bonitaaskinandhaircarehosur'
    },
    {
      id: 'DWtd0YFCEL9',
      title: 'Acne Scar Transformation',
      creator: 'Inthumathi Natarajan',
      handle: '@nammaooru_creator'
    },
    {
      id: 'DPCFysvEqMt',
      title: 'Clinical Treatment Session',
      creator: 'Bonitaa Skin & Hair Care',
      handle: '@bonitaaskinandhaircarehosur'
    }
  ];

  // Filter reviews
  const filteredTestimonials = testimonials.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'skin') {
      return t.treatment.toLowerCase().includes('acne') || 
             t.treatment.toLowerCase().includes('pimple') || 
             t.treatment.toLowerCase().includes('pigment') || 
             t.treatment.toLowerCase().includes('skin') || 
             t.treatment.toLowerCase().includes('scar') ||
             t.treatment.toLowerCase().includes('aging');
    }
    if (filter === 'hair') {
      return t.treatment.toLowerCase().includes('hair') || 
             t.treatment.toLowerCase().includes('prp') || 
             t.treatment.toLowerCase().includes('baldness') || 
             t.treatment.toLowerCase().includes('dandruff');
    }
    return true;
  });

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredTestimonials.length));
  };

  return (
    <div className="space-y-12" id="testimonials">
      {/* Google Reviews Aggregated Header */}
      <div className="bg-clinic-card/80 border border-clinic-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-3xl md:text-4xl font-extrabold font-display text-white">4.9</span>
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold" />
              ))}
            </div>
          </div>
          <p className="text-sm font-semibold text-white tracking-wide">
            Excellent Patient Rating on Google
          </p>
          <p className="text-xs text-gray-400">
            Based on 1,500+ verified clinic consult reviews in Hosur, Krishnagiri & surrounding areas.
          </p>
        </div>

        <div className="h-px md:h-12 w-full md:w-px bg-clinic-border"></div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <div className="bg-clinic-dark/80 px-4 py-2.5 rounded-lg border border-clinic-border flex items-center gap-2">
            <ShieldCheck className="w-4.5 h-4.5 text-brand-gold" />
            <span className="text-gray-300 font-medium">100% Genuine Patients</span>
          </div>
          <div className="bg-clinic-dark/80 px-4 py-2.5 rounded-lg border border-clinic-border flex items-center gap-2">
            <ThumbsUp className="w-4.5 h-4.5 text-brand-gold" />
            <span className="text-gray-300 font-medium">Top Rated Skin Clinic</span>
          </div>
        </div>
      </div>

      {/* Patient Video Testimonials (Instagram Reels) */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Real Instagram Reels</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">Patient Video Testimonials</h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-2xl">
              Watch real, unfiltered clinical transformations and direct feedback shared on our official Instagram page.
            </p>
          </div>
          
          <a 
            href="https://www.instagram.com/bonitaaskinandhaircarehosur/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-orange-500/10 hover:from-pink-500/20 hover:to-orange-500/20 text-xs font-semibold text-white border border-pink-500/30 hover:border-pink-500/50 rounded-xl transition-all self-start md:self-auto shadow-md"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>Follow us on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramReels.map((reel) => (
            <div 
              key={reel.id} 
              className="bg-clinic-card/50 border border-clinic-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300 group shadow-lg"
            >
              <div className="p-4 border-b border-clinic-border flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">{reel.title}</h4>
                  <p className="text-[10px] text-brand-gold font-medium">{reel.creator}</p>
                </div>
                <Instagram className="w-4 h-4 text-pink-500 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Instagram Embed Frame */}
              <div className="relative bg-black/40 h-[480px]">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="w-full h-full rounded-b-none border-0"
                  allow="encrypted-media"
                  scrolling="no"
                  frameBorder="0"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="p-3 bg-clinic-dark/80 border-t border-clinic-border flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-mono">{reel.handle}</span>
                <a
                  href={`https://www.instagram.com/reel/${reel.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-gold hover:text-white transition-colors"
                >
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Filter and Written Testimonials */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-clinic-border pb-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display text-white tracking-tight">Written Success Stories</h3>
            <p className="text-xs text-gray-400">Showing {Math.min(visibleCount, filteredTestimonials.length)} of {testiCount(filter)} verified patient reviews</p>
          </div>
          
          <div className="flex gap-1.5 bg-clinic-card p-1 rounded-lg border border-clinic-border">
            {(['all', 'skin', 'hair'] as const).map(type => (
              <button
                key={type}
                onClick={() => {
                  setFilter(type);
                  setVisibleCount(6); // reset on filter change
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  filter === type
                    ? 'bg-clinic-dark border border-clinic-border text-brand-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {type === 'all' ? 'All Reviews' : type === 'skin' ? 'Skin' : 'Hair'}
              </button>
            ))}
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.slice(0, visibleCount).map(t => (
            <div 
              key={t.id}
              className="bg-clinic-card/70 border border-clinic-border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-clinic-border/90 hover:bg-clinic-card shadow-md relative group"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center font-bold text-xs text-brand-gold select-none">
                      {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{t.name}</p>
                      <p className="text-[10px] text-gray-400">{t.city}</p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex text-brand-gold shrink-0">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold" />
                    ))}
                  </div>
                </div>

                {/* Treatment Tag */}
                <div className="inline-block bg-clinic-dark px-2.5 py-1 rounded text-[10px] font-semibold text-brand-gold border border-brand-gold/10">
                  {t.treatment}
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-300 leading-relaxed italic relative">
                  <Quote className="absolute -left-1.5 -top-2 w-7 h-7 text-brand-gold/5 -z-10 group-hover:text-brand-gold/10 transition-colors pointer-events-none" />
                  "{t.review}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-clinic-border/40 flex items-center justify-between text-[10px] text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  Verified Patient Consult
                </span>
                <span className="bg-clinic-dark px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-400 border border-clinic-border/60">
                  G-Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredTestimonials.length && (
          <div className="text-center pt-4">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-clinic-card hover:bg-clinic-card/90 text-xs font-semibold text-gray-300 hover:text-white border border-clinic-border hover:border-brand-gold/30 rounded-lg transition-all shadow-md cursor-pointer"
            >
              <ArrowDownCircle className="w-4 h-4 text-brand-gold" />
              <span>Load More Verified Patient Reviews ({filteredTestimonials.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Helper to count testimonials based on active filters
  function testiCount(filterType: 'all' | 'skin' | 'hair') {
    if (filterType === 'all') return testimonials.length;
    return filteredTestimonials.length;
  }
}
