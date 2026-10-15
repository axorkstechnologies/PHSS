import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';

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
      {/* 1. Top Bar: Dark blue shade (#081226), contact info (0325 6127831), 18 in yellow, clean & professional */}
      <div className="bg-[#081226] text-slate-200 border-b border-slate-800 text-xs py-2 px-3 sm:px-8 transition-colors w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            {/* Admissions 2025-2026: Yellow applied to roughly half */}
            <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-semibold border border-white/15 shrink-0">
              <span className="text-[#f59e0b]">Admissions</span>
              <span className="text-white">2025–2026</span>
            </span>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden md:inline font-medium truncate">Simly Dam Road Campus, Islamabad</span>
            <span aria-hidden="true" className="text-slate-600 hidden md:inline">·</span>
            {/* The number 18 in yellow and slightly larger, rest in white */}
            <span className="hidden sm:inline-flex items-center gap-1 shrink-0">
              <span className="text-[#f59e0b] font-bold text-sm">18</span>
              <span className="text-white font-medium">Years of Excellence</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs shrink-0">
            {/* Phone Number: 0325 6127831 prominently shown */}
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold text-slate-100 text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
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

      {/* 2. Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5 sm:py-3'
            : 'bg-white border-b border-slate-100 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-8 flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo Section: Strong highlighted "P" logo + Prominent PEARL HILLIAN + Lighter vibrant blue subtitle */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3.5 text-left focus:outline-none group min-w-0"
          >
            {/* Strongly highlighted "P" emblem */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#081226] text-white flex items-center justify-center font-editorial text-xl sm:text-2xl font-bold tracking-wider shadow-md group-hover:scale-105 transition-all border-2 border-[#0284c7] ring-2 ring-blue-50 shrink-0">
              <span className="text-white drop-shadow-sm">P</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-editorial text-xl sm:text-2xl md:text-[28px] font-bold text-[#081226] tracking-tight leading-none truncate">
                PEARL HILLIAN
              </span>
              <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-wider text-[#0284c7] mt-0.5 sm:mt-1 truncate">
                School System Islamabad
              </span>
            </div>
          </button>

          {/* Navigation Links with Clean Pill Styling */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-50 rounded-full border border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#081226] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#081226] hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button: Yellow "Apply for Admission" */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap items-center gap-1.5"
            >
              <span>Apply for Admission</span>
              <ArrowUpRight className="w-4 h-4 text-[#081226]" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#081226] hover:bg-slate-100 rounded-lg focus:outline-none transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl px-5 py-6 transition-all animate-fadeIn max-h-[calc(100vh-80px)] overflow-y-auto w-full">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm py-2.5 px-4 rounded-xl font-semibold transition-all ${
                    activeTab === link.id
                      ? 'bg-[#081226] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full py-3 text-center text-xs font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#081226]" />
                  <span>Apply for Admission</span>
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
