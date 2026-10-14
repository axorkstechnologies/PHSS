import React, { useState } from 'react';
import { GALLERY_ITEMS, SCHOOL_INFO } from '../data/schoolData';
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
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#081226] text-white py-16 lg:py-24 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span>Life at Simly Dam Road Campus</span>
            <span aria-hidden="true">·</span>
            <span>Islamabad</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Vibrant Community, Inspiring Spaces &amp; Enduring Memories
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Step inside our light-filled classrooms, athletic fields, and research sanctuaries designed to foster joy, camaraderie, and boundless intellectual exploration.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#081226] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#081226]/0 group-hover:bg-[#081226]/40 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#081226] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300 shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#081226]/80 backdrop-blur-sm text-[10px] font-semibold text-white uppercase tracking-wider">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-editorial text-lg font-bold text-[#081226]">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-editorial text-3xl font-bold text-[#081226]">
              Clubs, Societies &amp; Student Guilds
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Fostering teamwork, civic responsibility, and specialized passions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <Sparkles className="w-6 h-6 text-gold-500 mb-3" />
              <h3 className="font-editorial text-base font-bold text-[#081226]">Robotics &amp; STEM Guild</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Engineering micro-controllers, drone prototypes, and computational logic tournaments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <Users className="w-6 h-6 text-[#081226] mb-3" />
              <h3 className="font-editorial text-base font-bold text-[#081226]">Debating &amp; Model UN</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Parliamentary elocution, public policy simulations, and national declamation championships.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <Trophy className="w-6 h-6 text-gold-500 mb-3" />
              <h3 className="font-editorial text-base font-bold text-[#081226]">Hillian Athletic League</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Inter-house cricket, football leagues, badminton, gymnastics, and annual sports days.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <BookOpen className="w-6 h-6 text-[#081226] mb-3" />
              <h3 className="font-editorial text-base font-bold text-[#081226]">Literary &amp; Eco Guild</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#081226] text-white rounded-xl overflow-hidden shadow-2xl border border-slate-700"
          >
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white bg-black/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <div className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                {activeLightboxItem.categoryLabel}
              </div>
              <h3 className="font-editorial text-2xl font-bold mt-1">
                {activeLightboxItem.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {activeLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
