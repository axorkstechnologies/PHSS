import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem, PageTab } from '../types';
import { X, ZoomIn, Users, Trophy, Sparkles, BookOpen } from 'lucide-react';

interface CampusLifeViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const CampusLifeView: React.FC<CampusLifeViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Campus Views' },
    { id: 'campus', label: 'Campus Grounds' },
    { id: 'montessori', label: 'Montessori Wing' },
    { id: 'stem', label: 'STEM & Labs' },
    { id: 'library', label: 'Heritage Library' },
    { id: 'sports', label: 'Sports & Athletics' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-20 sm:pb-24 w-full overflow-x-hidden">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white py-14 sm:py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20 max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Life at Simly Dam Road Campus · Islamabad</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Vibrant Community, Inspiring Spaces &amp; Enduring Memories
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Step inside our light-filled classrooms, athletic fields, and research sanctuaries designed to foster joy, camaraderie, and boundless intellectual exploration.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#152540] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-[#ebe3d5] hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="bg-white rounded-3xl border border-[#ebe3d5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#152540]/0 group-hover:bg-[#152540]/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-[#152540] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300 shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#152540]/80 backdrop-blur-sm text-xs font-bold text-white uppercase tracking-wider">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 font-normal">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="bg-gradient-to-b from-[#faf8f4] to-[#f6f2eb] border-y border-[#ebe3d5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
              Clubs, Societies &amp; Student Guilds
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Fostering teamwork, civic responsibility, and specialized passions outside the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Robotics &amp; STEM Guild</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                Engineering micro-controllers, drone prototypes, and computational logic tournaments.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1b3773] flex items-center justify-center mb-5 border border-blue-200">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Debating &amp; Model UN</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                Parliamentary elocution, public policy simulations, and national declamation championships.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Hillian Athletic League</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                Inter-house cricket, football leagues, badminton, gymnastics, and annual sports days.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Literary &amp; Eco Guild</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                School magazine editorial board, creative poetry slams, and Margalla tree plantation drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          onClick={() => setActiveLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#152540] text-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden flex items-center justify-center bg-black/50">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] sm:max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 sm:p-8">
              <div className="text-xs uppercase tracking-wider text-[#f2dc9e] font-bold">
                {activeLightboxItem.categoryLabel}
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold mt-1 text-white">
                {activeLightboxItem.title}
              </h3>
              <p className="text-slate-200 text-xs sm:text-base mt-2 leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
