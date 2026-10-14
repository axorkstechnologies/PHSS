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
    <footer className="bg-[#040915] text-slate-300 border-t border-slate-800/80">
      {/* Upper CTA Banner */}
      <div className="border-b border-slate-800/60 py-12 px-4 sm:px-8 bg-gradient-to-r from-[#081226] via-[#0d1d3d] to-[#081226]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
              <Award className="w-4 h-4" />
              <span>Admissions Open · Academic Session {SCHOOL_INFO.academicSession}</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1">
              Secure Your Child’s Seat at Pearl Hillian School System
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Individualized attention, authentic Montessori foundations, and distinguished FBISE Board performance on Simly Dam Road, Islamabad.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="px-5 py-2.5 text-xs font-semibold text-[#081226] bg-white rounded hover:bg-slate-100 transition-colors shadow-lg"
            >
              Apply for Admission
            </button>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Team, I would like to book a campus tour.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded hover:bg-emerald-500 transition-colors flex items-center gap-2 shadow-lg"
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
            <div className="w-9 h-9 rounded bg-white text-[#081226] flex items-center justify-center font-editorial text-xl font-bold">
              P
            </div>
            <span className="font-editorial text-xl font-bold text-white tracking-wide">
              Pearl Hillian
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-5">
            Eighteen years of uninterrupted educational distinction in Islamabad. Cultivating intellectual rigor, moral integrity, and modern STEM capabilities within an inspiring mountain-side campus.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>FBISE Registered · Certified Montessori Wing</span>
          </div>
        </div>

        {/* Col 2: Academic Divisions */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
            Academic Programs
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors"
              >
                Montessori Early Years (Playgroup – Prep)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors"
              >
                Primary School (Grades 1 to 5)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors"
              >
                Middle School (Grades 6 to 8)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors"
              >
                Secondary School (Matric / SSC Stream)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('academics')}
                className="hover:text-white transition-colors"
              >
                STEM & Robotics Experiential Labs
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Navigation */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
            Institutional
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button
                onClick={() => handleNavigate('about')}
                className="hover:text-white transition-colors"
              >
                18 Years Heritage & Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('admissions')}
                className="hover:text-white transition-colors"
              >
                Admissions Roadmap & Criteria
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('campus-life')}
                className="hover:text-white transition-colors"
              >
                Campus Life & Facility Showcase
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('contact')}
                className="hover:text-white transition-colors"
              >
                Simly Dam Road Location & Map
              </button>
            </li>
            <li>
              <button
                onClick={onOpenApplyModal}
                className="text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1 font-medium"
              >
                <span>Online Admission Portal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Campus Contact Information */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
            Simly Dam Road Campus
          </h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>Simly Dam Road Campus, Islamabad Capital Territory, Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">
                {SCHOOL_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-emerald-400"
              >
                WhatsApp: {SCHOOL_INFO.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
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

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900/80 py-6 px-4 sm:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Pearl Hillian School System. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Islamabad Capital Territory</span>
            <span aria-hidden="true">·</span>
            <span>Simly Dam Road Campus</span>
            <span aria-hidden="true">·</span>
            <span>18 Years of Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
