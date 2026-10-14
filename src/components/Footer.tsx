import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PageTab } from '../types';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800">
      {/* Upper CTA Banner with Dark Blue & Yellow Action */}
      <div className="border-b border-slate-800 py-14 px-4 sm:px-8 bg-gradient-to-r from-[#0b1329] via-[#101b38] to-[#0b1329]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f59e0b] uppercase mb-2">
              <Award className="w-4 h-4 text-[#f59e0b]" />
              <span>Admissions Open · Academic Session {SCHOOL_INFO.academicSession}</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-4xl font-bold text-white leading-tight">
              Secure Your Child’s Seat at Pearl Hillian School System
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Personalized mentorship, authentic Montessori foundations, and distinguished FBISE Board performance on Simly Dam Road, Islamabad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            {/* Button in exact client-requested yellow */}
            <button
              onClick={onOpenApplyModal}
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-[#0b1329] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Apply for Admission
            </button>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Team, I would like to book a campus tour.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: Identity */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-editorial text-2xl font-bold border border-white/15 shadow-sm">
              P
            </div>
            <div>
              <span className="font-editorial text-2xl font-bold text-white tracking-wide block leading-none">
                PEARL HILLIAN
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7]">
                School System Islamabad
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
            Eighteen years of uninterrupted educational distinction in Islamabad. Cultivating intellectual rigor, moral integrity, and modern STEM capabilities within an inspiring mountain sanctuary.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
            <span>FBISE Registered · Certified Montessori Wing</span>
          </div>
        </div>

        {/* Col 2: Academic Divisions */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Academic Programs
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors text-left"
              >
                Montessori Early Years (Playgroup – Prep)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors text-left"
              >
                Primary School (Grades 1 to 5)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors text-left"
              >
                Middle School (Grades 6 to 8)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors text-left"
              >
                Secondary School (Matric / SSC Stream)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors text-left"
              >
                STEM &amp; Robotics Experiential Labs
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Institutional
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li>
              <button
                onClick={() => handleNavigate('about')}
                className="hover:text-white transition-colors text-left"
              >
                Heritage &amp; Institutional Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('admissions')}
                className="hover:text-white transition-colors text-left"
              >
                Admissions Roadmap &amp; Criteria
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('campus-life')}
                className="hover:text-white transition-colors text-left"
              >
                Campus Life &amp; Facility Showcase
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('contact')}
                className="hover:text-white transition-colors text-left"
              >
                Simly Dam Road Location &amp; Map
              </button>
            </li>
            <li>
              <button
                onClick={onOpenApplyModal}
                className="text-[#f59e0b] hover:text-white transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>Online Admission Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Campus Contact Information */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
            Simly Dam Road Campus
          </h4>
          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
              <span>Simly Dam Road Campus, Islamabad Capital Territory, Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors font-medium">
                {SCHOOL_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-emerald-400 font-medium"
              >
                WhatsApp: {SCHOOL_INFO.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="hover:text-white transition-colors truncate"
              >
                {SCHOOL_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal Bar: 18 in yellow & larger, rest in white */}
      <div className="border-t border-slate-800 py-6 px-4 sm:px-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Pearl Hillian School System. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Islamabad Capital Territory</span>
            <span aria-hidden="true">·</span>
            <span>Simly Dam Road Campus</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-[#f59e0b] font-bold text-sm">18</span>
              <span className="text-white font-medium">Years of Excellence</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
