import React, { useState } from 'react';
import { 
  Award, 
  Star, 
  ShieldCheck, 
  Instagram, 
  ExternalLink, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';
import { REVIEWS, INSTAGRAM_REELS } from '../data';
import { Testimonial, InstagramReel } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'skin' | 'hair'>('all');
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);
  const [activeModalReel, setActiveModalReel] = useState<InstagramReel | null>(null);

  const filteredReviews: Testimonial[] = REVIEWS.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section id="patient-reviews" className="py-16 lg:py-24 bg-[#08080a] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CLINICAL SUCCESS STORIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Over 1,500+ Happy Patients Treated in Hosur
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Real patient video transformations and verified reviews from people treated for severe acne, stubborn scars, hair loss, and clinical pigmentation.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="max-w-4xl mx-auto bg-[#121215] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-16">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-black text-white flex items-center gap-1">
              <span>4.9</span>
              <div className="flex text-[#e6b133] ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#e6b133]" />
                ))}
              </div>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-zinc-800 pt-2 sm:pt-0 sm:pl-4">
              <h3 className="text-sm font-bold text-white">
                Google 4.9-Star Verified Rating
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Based on 1,500+ verified clinic consultations in Hosur, Krishnagiri & surrounding areas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine Patients</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <Award className="w-3.5 h-3.5 text-[#e6b133]" />
              <span>Top Rated Skin Clinic</span>
            </span>
          </div>
        </div>

        {/* Real Instagram Reels Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e6b133] mb-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>OFFICIAL INSTAGRAM REELS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Patient Video Transformations
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Watch actual treatment experiences and results from our official clinic channel (<span className="text-zinc-200 font-semibold">@bonitaaskinandhaircarehosur</span>).
              </p>
            </div>

            <a
              href="https://www.instagram.com/bonitaaskinandhaircarehosur/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-amber-600/20 border border-pink-500/30 text-white hover:border-pink-500 text-xs font-bold transition shadow-lg shrink-0"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Visit Instagram Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* 3 Embedded Instagram Reel Video Cards - Clean, Zero Overlap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTAGRAM_REELS.map((reel, idx) => (
              <div
                key={reel.id}
                className="bg-[#121215] border border-zinc-800/90 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-[#e6b133]/40 transition duration-300"
              >
                {/* Header Information Bar */}
                <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-[1.5px] shrink-0">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white truncate">
                          bonitaa_hosur
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                      </div>
                      <span className="text-[10px] text-zinc-400 truncate block">
                        Reel #{idx + 1} • {reel.title}
                      </span>
                    </div>
                  </div>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-[#e6b133] text-zinc-300 hover:text-black text-[10px] font-bold uppercase tracking-wider transition shrink-0 flex items-center gap-1"
                    title="Open on Instagram"
                  >
                    <span>Open</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Embedded Instagram Reel Frame */}
                <div className="w-full bg-black relative flex items-center justify-center min-h-[480px] sm:min-h-[520px]">
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.reelId}/embed`}
                    className="w-full h-[490px] sm:h-[530px] border-0 rounded-b-none"
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={`Instagram Reel - ${reel.title}`}
                  />
                </div>

                {/* Card Footer Bar */}
                <div className="p-3.5 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-300">
                    <Sparkles className="w-3 h-3 text-[#e6b133]" />
                    <span>Verified Patient Video</span>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalReel(reel)}
                      className="text-zinc-400 hover:text-white text-[11px] font-semibold flex items-center gap-1 transition"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Expand</span>
                    </button>
                    <span className="text-zinc-700">|</span>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e6b133] hover:underline font-bold text-[11px] flex items-center gap-1"
                    >
                      <span>Watch on IG</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Scannable Note Below Videos */}
          <div className="mt-4 p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All videos feature real, consenting patients who underwent dermatologist-guided treatments at our Hosur clinic.</span>
            </div>
            <a
              href="https://www.instagram.com/bonitaaskinandhaircarehosur/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e6b133] hover:underline font-bold text-xs shrink-0 flex items-center gap-1"
            >
              <span>View All 50+ Instagram Reels</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Written Success Stories Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Written Patient Testimonials
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Showing {displayedReviews.length} of {filteredReviews.length} verified patient reviews from Hosur & Krishnagiri
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  filterCategory === 'all'
                    ? 'bg-[#e6b133] text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Reviews
              </button>
              <button
                onClick={() => setFilterCategory('skin')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  filterCategory === 'skin'
                    ? 'bg-[#e6b133] text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Skin ({REVIEWS.filter(r => r.category === 'skin').length})
              </button>
              <button
                onClick={() => setFilterCategory('hair')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  filterCategory === 'hair'
                    ? 'bg-[#e6b133] text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Hair ({REVIEWS.filter(r => r.category === 'hair').length})
              </button>
            </div>
          </div>

          {/* Reviews 2x3 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#121215] border border-zinc-800/90 rounded-2xl p-5 flex flex-col justify-between shadow-lg hover:border-zinc-700 transition"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#e6b133]/20 border border-[#e6b133]/40 text-[#e6b133] font-bold text-xs flex items-center justify-center">
                        {rev.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">
                          {rev.name}
                        </h4>
                        <span className="text-[10px] text-zinc-400">
                          {rev.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-[#e6b133]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#e6b133]" />
                      ))}
                    </div>
                  </div>

                  {/* Treatment Tag */}
                  <div className="inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-semibold text-[#e6b133] mb-3">
                    {rev.treatment}
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                {/* Footer Badge */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-800/80 text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Patient Consult</span>
                  </span>
                  <span className="text-zinc-500 font-mono">
                    Google Review
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredReviews.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-200 transition"
              >
                {showAllReviews ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Load More Verified Patient Reviews ({filteredReviews.length - 6} remaining)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Expanded Instagram Reel Lightbox Modal */}
      {activeModalReel && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalReel(null)}
        >
          <div 
            className="bg-[#121215] border border-zinc-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-500" />
                <span className="text-xs font-bold text-white">
                  {activeModalReel.title}
                </span>
              </div>
              <button
                onClick={() => setActiveModalReel(null)}
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Reel Frame */}
            <div className="p-3 bg-black flex items-center justify-center">
              <iframe
                src={`https://www.instagram.com/reel/${activeModalReel.reelId}/embed`}
                className="w-full h-[560px] border-0 rounded-xl"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={activeModalReel.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                {activeModalReel.tagline}
              </span>
              <a
                href={activeModalReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#e6b133] hover:bg-[#d49f25] text-black font-bold text-xs rounded-xl transition flex items-center gap-1.5"
              >
                <span>Open in Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

