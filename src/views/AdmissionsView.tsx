import React from 'react';
import { ADMISSION_STEPS, SCHOOL_INFO } from '../data/schoolData';
import { PageTab } from '../types';
import {
  FileText,
  Calendar,
  CheckCircle2,
  Calculator,
  MessageCircle,
  Phone,
  Clock,
  ArrowRight
} from 'lucide-react';

interface AdmissionsViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
  onOpenFeeModal: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({
  setActiveTab,
  onOpenApplyModal,
  onOpenFeeModal,
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#081226] text-white py-16 lg:py-24 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span>Admissions Procedure</span>
            <span aria-hidden="true">·</span>
            <span>Academic Session {SCHOOL_INFO.academicSession}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Begin Your Scholar’s Journey at Pearl Hillian
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            We welcome families who value academic excellence, character integrity, and personalized mentorship. Explore our clear four-stage admissions roadmap below.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3 text-xs font-semibold text-[#081226] bg-white hover:bg-slate-100 rounded-md transition-colors shadow-lg"
            >
              Start Online Application
            </button>
            <button
              onClick={onOpenFeeModal}
              className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-gold-400" />
              <span>Calculate Estimated Tuition</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Admissions Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">
            Transparent &amp; Merit-Based
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#081226] mt-1">
            The Four-Stage Admission Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((st) => (
            <div
              key={st.step}
              className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-gold-600 mb-3 tabular-nums">
                  {st.step}
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#081226] mb-2">
                  {st.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Simly Dam Road Campus Admissions Team
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility Age Matrix & Required Documentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Eligibility Matrix */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="font-editorial text-xl font-bold text-[#081226]">
                Age Eligibility Criteria (as of 31st August)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Standard guidelines for placement across Montessori and Primary divisions.
              </p>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="p-4 flex justify-between items-center bg-slate-50/50 font-semibold text-slate-700">
                <span>Grade / Class Level</span>
                <span>Recommended Age</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Montessori Playgroup</span>
                <span className="text-slate-600">2.5 to 3.5 Years</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Montessori Nursery</span>
                <span className="text-slate-600">3.5 to 4.5 Years</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Montessori Prep / Kindergarten</span>
                <span className="text-slate-600">4.5 to 5.5 Years</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Grade 1 (Elementary Foundation)</span>
                <span className="text-slate-600">5.5 to 6.5 Years</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Middle School (Grades 6 to 8)</span>
                <span className="text-slate-600">11 to 13 Years</span>
              </div>
              <div className="p-4 flex justify-between items-center hover:bg-slate-50/50">
                <span className="font-medium text-slate-900">Secondary Matric (SSC 9 &amp; 10)</span>
                <span className="text-slate-600">14+ Years (Subject to diagnostic test)</span>
              </div>
            </div>
          </div>

          {/* Documentation Checklist */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600">
                <FileText className="w-4 h-4" />
                <span>Verification Checklist</span>
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#081226] mt-1">
                Required Enrolment Documents
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Please prepare these documents for the physical verification at our Admissions Office:
              </p>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Original &amp; copy of Nadra Birth Certificate / B-Form</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>4 recent passport-size blue background photographs of the scholar</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Copy of Father &amp; Mother’s CNIC</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>School Leaving Certificate (SLC) &amp; previous report card (for Class 1 and above)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Immunization / vaccination record copy</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#081226] hover:bg-[#132752] rounded transition-colors text-center"
              >
                Apply Online Now
              </button>
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to confirm required documents for my child.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-editorial text-2xl font-bold text-[#081226]">
              Tuition Transparency &amp; Sibling Concessions
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Pearl Hillian provides premium private school facilities with transparent, regulated fee tiers. We offer 15% sibling concessions as well as merit scholarships for top academic achievers.
            </p>
          </div>

          <button
            onClick={onOpenFeeModal}
            className="px-6 py-3 text-xs font-semibold text-white bg-[#081226] hover:bg-[#132752] rounded-md transition-colors shrink-0 flex items-center gap-2 shadow-sm"
          >
            <Calculator className="w-4 h-4 text-gold-400" />
            <span>Launch Fee Estimator Tool</span>
          </button>
        </div>
      </section>
    </div>
  );
};
