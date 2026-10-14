import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenApplyModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Book Tour Pill */}
      <button
        onClick={onOpenApplyModal}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#081226] text-white text-xs font-semibold shadow-xl hover:bg-[#132752] transition-transform hover:-translate-y-0.5 border border-slate-700/50"
      >
        <Calendar className="w-3.5 h-3.5 text-gold-400" />
        <span>Book Campus Tour</span>
      </button>

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${SCHOOL_INFO.phone}`}
        className="flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-[#081226] text-white shadow-xl hover:bg-[#132752] transition-transform active:scale-95 border border-slate-700/60"
        title="Call Admissions Office"
        aria-label="Call Admissions Office"
      >
        <Phone className="w-5 h-5 text-gold-400" />
      </a>

      {/* Official WhatsApp Floating Action with Liquid Glass Rim */}
      <a
        href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk (Simly Dam Road Campus), I am inquiring about admission requirements.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95"
        title="Chat with Pearl Hillian Admissions on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">WhatsApp Pearl Hillian</span>
        {/* Subtle tooltip on hover desktop */}
        <span className="hidden md:group-hover:block absolute right-full mr-3 px-3 py-1.5 text-[11px] font-medium text-white bg-[#081226] rounded-md whitespace-nowrap shadow-lg border border-slate-700">
          WhatsApp Admissions: {SCHOOL_INFO.whatsapp}
        </span>
      </a>
    </div>
  );
};
