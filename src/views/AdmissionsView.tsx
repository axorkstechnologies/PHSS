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
  Sparkles,
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
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-20 sm:pb-24 w-full overflow-x-hidden">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white py-14 sm:py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20 max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Admissions Procedure · Academic Session {SCHOOL_INFO.academicSession}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Begin Your Scholar’s Journey at Pearl Hillian
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            We welcome families who value academic excellence, character integrity, and personal mentorship. Explore our clear four-stage admissions roadmap below.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none mx-auto">
            <button
              onClick={onOpenApplyModal}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#152540] bg-white hover:bg-[#faf8f4] rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 text-center"
            >
              Start Online Application
            </button>
            <button
              onClick={onOpenFeeModal}
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 text-center"
            >
              <Calculator className="w-4 h-4 text-[#eacd72]" />
              <span>Calculate Estimated Tuition</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4-Step Admissions Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
            <span>Transparent &amp; Merit-Based</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
            The Four-Stage Admission Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADMISSION_STEPS.map((st) => (
            <div
              key={st.step}
              className="bg-white p-8 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="font-editorial text-4xl font-bold text-[#bf923a] mb-4 tabular-nums">
                  {st.step}
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#152540] mb-2.5">
                  {st.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {st.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
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
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#ebe3d5] overflow-hidden shadow-sm">
            <div className="p-8 bg-[#faf8f4] border-b border-[#ebe3d5]">
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                Age Eligibility Criteria (as of 31st August)
              </h3>
              <p className="text-sm text-slate-500 mt-1.5 font-normal">
                Standard placement guidelines across Montessori and Primary divisions.
              </p>
            </div>

            <div className="divide-y divide-slate-100 text-sm">
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 bg-[#faf8f4]/60 font-bold text-[#152540]">
                <span>Grade / Class Level</span>
                <span>Recommended Age</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Montessori Playgroup</span>
                <span className="text-slate-600 font-medium">2.5 to 3.5 Years</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Montessori Nursery</span>
                <span className="text-slate-600 font-medium">3.5 to 4.5 Years</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Montessori Prep / Kindergarten</span>
                <span className="text-slate-600 font-medium">4.5 to 5.5 Years</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Grade 1 (Elementary Foundation)</span>
                <span className="text-slate-600 font-medium">5.5 to 6.5 Years</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Middle School (Grades 6 to 8)</span>
                <span className="text-slate-600 font-medium">11 to 13 Years</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 hover:bg-slate-50 transition-colors">
                <span className="font-semibold text-slate-800">Secondary Matric (SSC 9 &amp; 10)</span>
                <span className="text-slate-600 font-medium">14+ Years (Subject to diagnostic assessment)</span>
              </div>
            </div>
          </div>

          {/* Documentation Checklist */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl border border-[#ebe3d5] p-6 sm:p-10 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-amber-200 mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>Verification Checklist</span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                Required Enrolment Documents
              </h3>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                Please prepare these documents for verification at our Admissions Office:
              </p>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Original &amp; copy of Nadra Birth Certificate / B-Form</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>4 recent passport-size blue background photographs of the scholar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Copy of Father &amp; Mother’s CNIC</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>School Leaving Certificate (SLC) &amp; report card (Class 1 and above)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Immunization / vaccination record copy</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3.5 text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all text-center shadow-md hover:shadow-lg"
              >
                Apply Online Now
              </button>
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to confirm required documents for my child.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors text-center flex items-center justify-center gap-2 border border-emerald-200"
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
        <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#faf8f4] to-amber-500/10 border border-[#ebe3d5] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#152540]">
              Tuition Transparency &amp; Sibling Concessions
            </h3>
            <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-xl leading-relaxed">
              Pearl Hillian provides premium private school facilities with transparent, regulated fee tiers. We offer 15% sibling concessions as well as merit scholarships for top academic achievers.
            </p>
          </div>

          <button
            onClick={onOpenFeeModal}
            className="w-full md:w-auto px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-center"
          >
            <Calculator className="w-4 h-4 text-[#eacd72]" />
            <span>Launch Fee Estimator Tool</span>
          </button>
        </div>
      </section>
    </div>
  );
};
