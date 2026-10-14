import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenApplyModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics & Montessori' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Welcome & Utility Strip with Warm School Feeling */}
      <div className="bg-[#152540] text-slate-200 border-b border-[#213c68]/50 text-xs py-2 px-4 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/15 text-[#eacd72] text-[11px] font-semibold border border-[#d9af4c]/30">
              <Sparkles className="w-3 h-3 text-[#eacd72]" />
              <span>Session 2025–26 Enrolling</span>
            </span>
            <span aria-hidden="true" className="text-slate-500 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden sm:inline font-medium">Simly Dam Road Campus, Islamabad</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#eacd72]" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600 hidden md:inline">·</span>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to inquire about admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf8f4]/95 backdrop-blur-md shadow-md border-b border-[#ebe3d5] py-3'
            : 'bg-[#faf8f4] border-b border-[#ebe3d5]/70 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark & Crest with Warm School Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left focus:outline-none group shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#152540] to-[#213c68] text-white flex items-center justify-center font-editorial text-2xl font-bold tracking-wider shadow-md group-hover:scale-105 transition-all border border-[#d9af4c]/40 ring-2 ring-white">
              <span className="text-white drop-shadow-sm">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl md:text-[26px] font-bold text-[#152540] tracking-tight whitespace-nowrap leading-none group-hover:text-[#213c68] transition-colors">
                Pearl Hillian
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#bf923a] mt-1">
                School System · Islamabad
              </span>
            </div>
          </button>

          {/* Navigation Links with Warm Rounded Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-white/70 rounded-full border border-[#ebe3d5] shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#152540] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#152540] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#152540] to-[#213c68] hover:from-[#1b3054] hover:to-[#294d82] rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex items-center gap-2 border border-[#d9af4c]/30"
            >
              <span>Apply for Admission</span>
              <ArrowUpRight className="w-4 h-4 text-[#eacd72]" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#152540] hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#faf8f4] border-b border-[#ebe3d5] shadow-2xl px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm py-2.5 px-4 rounded-xl font-semibold transition-all ${
                    activeTab === link.id
                      ? 'bg-[#152540] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-[#ebe3d5] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full py-3 text-center text-xs font-bold text-white bg-[#152540] rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#eacd72]" />
                  <span>Start Admission Application</span>
                </button>
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to inquire about admissions.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp ({SCHOOL_INFO.phone})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
