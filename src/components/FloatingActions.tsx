import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenApplyModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Book Tour Pill */}
      <button
        onClick={onOpenApplyModal}
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0b1329] text-white text-xs font-bold shadow-xl hover:bg-[#1a294d] transition-all hover:-translate-y-0.5 border border-white/20"
      >
        <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
        <span>Book Campus Tour</span>
      </button>

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${SCHOOL_INFO.phone}`}
        className="flex sm:hidden items-center justify-center w-12 h-12 rounded-full bg-[#0b1329] text-white shadow-xl hover:bg-[#1a294d] transition-transform active:scale-95 border border-white/20"
        title="Call Admissions Office"
        aria-label="Call Admissions Office"
      >
        <Phone className="w-5 h-5 text-[#f59e0b]" />
      </a>

      {/* Official WhatsApp Floating Action */}
      <a
        href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk (Simly Dam Road Campus), I am inquiring about admission requirements.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 ring-4 ring-white/70"
        title="Chat with Pearl Hillian Admissions on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">WhatsApp Pearl Hillian</span>
        {/* Tooltip on hover desktop */}
        <span className="hidden md:group-hover:block absolute right-full mr-3 px-3 py-1.5 text-xs font-semibold text-white bg-[#0b1329] rounded-xl whitespace-nowrap shadow-xl border border-white/10">
          Chat with Admissions: {SCHOOL_INFO.whatsapp}
        </span>
      </a>
    </div>
  );
};
