import { useState } from 'react';
import { Testimonial } from '../types';
import { Star, ShieldCheck, Play, ArrowDownCircle, Sparkles, ThumbsUp, Quote } from 'lucide-react';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: Props) {
  const [filter, setFilter] = useState<'all' | 'skin' | 'hair'>('all');
  const [visibleCount, setVisibleCount] = useState(6);

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

  // Mock Video stories
  const videoStories = [
    {
      id: 'v1',
      patientName: 'Ramesh Krishnan',
      concern: 'Severe Balding',
      recovery: 'Thick Hair Regrowth',
      duration: '2m 14s',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=350&q=80',
      views: '4.2k views'
    },
    {
      id: 'v2',
      patientName: 'Meera Vasudevan',
      concern: 'Pitted Acne Scars',
      recovery: 'Smooth Glass Skin',
      duration: '1m 45s',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=350&q=80',
      views: '3.8k views'
    },
    {
      id: 'v3',
      patientName: 'Sanjay Dutt (Hosur)',
      concern: 'Chronic Dandruff & Fall',
      recovery: 'Clean Healthy Scalp',
      duration: '3m 02s',
      thumbnail: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=350&q=80',
      views: '5.1k views'
    }
  ];

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

      {/* Video Testimonials Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <h3 className="text-lg font-bold font-display text-white tracking-tight">Patient Video Testimonials</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoStories.map(video => (
            <div 
              key={video.id}
              className="group relative bg-clinic-card border border-clinic-border rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-brand-gold/30 hover:shadow-brand-gold/5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.patientName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.75]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-gold text-clinic-dark rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/40 transform transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 fill-clinic-dark ml-0.5" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 rounded text-[10px] text-gray-300 font-mono">
                  {video.duration}
                </div>

                {/* Views Tag */}
                <div className="absolute top-2 left-2 bg-clinic-dark/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-brand-gold font-medium">
                  {video.views}
                </div>
              </div>

              {/* Patient and Recovery text */}
              <div className="p-4 space-y-1 bg-gradient-to-b from-clinic-card to-clinic-dark">
                <p className="text-xs font-bold text-white uppercase tracking-wider">{video.patientName}</p>
                <p className="text-sm font-semibold text-brand-gold">{video.recovery}</p>
                <p className="text-[11px] text-gray-400">Treated for: {video.concern}</p>
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
                    <img 
                      src={t.avatarUrl} 
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-clinic-border"
                      referrerPolicy="no-referrer"
                    />
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
