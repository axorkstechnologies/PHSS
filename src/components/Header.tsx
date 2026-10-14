import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

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
      {/* Top Utility Information Strip */}
      <div className="bg-[#081226] text-slate-300 border-b border-slate-800 text-[11px] py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-200">Islamabad Campus</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Simly Dam Road</span>
            <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
            <span className="text-gold-400 hidden sm:inline font-medium">18 Years of Excellence</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{SCHOOL_INFO.phone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600 hidden md:inline">·</span>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to inquire about admissions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Official</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel bg-white/90 shadow-md backdrop-blur-md border-b border-slate-200/80 py-3'
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
          >
            <div className="w-9 h-9 rounded-md bg-[#081226] text-white flex items-center justify-center font-editorial text-xl font-bold tracking-wider shadow-sm group-hover:bg-[#132752] transition-colors">
              P
            </div>
            <span className="font-editorial text-xl md:text-2xl font-bold text-[#081226] tracking-tight whitespace-nowrap">
              Pearl Hillian
            </span>
          </button>

          {/* Zone 2: 5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#081226] font-semibold'
                      : 'hover:text-[#081226]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#081226] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#081226] rounded-md hover:bg-[#132752] transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Apply Online</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl px-6 py-6 transition-all animate-fadeIn">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm py-2 px-3 rounded-md transition-colors ${
                    activeTab === link.id
                      ? 'bg-slate-100 font-semibold text-[#081226]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold text-white bg-[#081226] rounded-md"
                >
                  Start Admission Application
                </button>
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk...')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-md flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp: {SCHOOL_INFO.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
