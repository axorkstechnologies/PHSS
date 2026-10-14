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
      {/* Top Welcome & Utility Strip with Dark Blue Top Bar */}
      <div className="bg-[#0b1329] text-slate-200 border-b border-slate-800 text-xs py-2 px-4 sm:px-8 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-medium border border-white/15">
              <span>Session 2025–26 Enrolling</span>
            </span>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-slate-300 hidden sm:inline font-medium">Simly Dam Road Campus, Islamabad</span>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            {/* 18 Years: "18" in yellow & slightly larger, rest in white */}
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="text-[#f59e0b] font-bold text-sm">18</span>
              <span className="text-white font-medium">Years of Excellence</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-slate-200"
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

      {/* Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          {/* Brand Wordmark: PEARL HILLIAN in current color + School System Islamabad in lighter vibrant blue */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left focus:outline-none group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0b1329] text-white flex items-center justify-center font-editorial text-2xl font-bold tracking-wider shadow-sm group-hover:scale-105 transition-all">
              <span>P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl md:text-[25px] font-bold text-[#0b1329] tracking-tight whitespace-nowrap leading-none">
                PEARL HILLIAN
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7] mt-1">
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
                      ? 'bg-[#0b1329] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0b1329] hover:bg-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button: Yellow "Apply for Admission" */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0b1329] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Apply for Admission</span>
              <ArrowUpRight className="w-4 h-4 text-[#0b1329]" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0b1329] hover:bg-slate-100 rounded-lg focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm py-2.5 px-4 rounded-xl font-semibold transition-all ${
                    activeTab === link.id
                      ? 'bg-[#0b1329] text-white shadow-sm'
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
                  className="w-full py-3 text-center text-xs font-bold text-[#0b1329] bg-[#f59e0b] hover:bg-[#d97706] rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-[#0b1329]" />
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
