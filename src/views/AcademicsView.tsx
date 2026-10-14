import React, { useState } from 'react';
import { ACADEMIC_PROGRAMS, SCHOOL_INFO } from '../data/schoolData';
import { PageTab } from '../types';
import { Sparkles, CheckCircle2, Award, Laptop, Palette, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

interface AcademicsViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('montessori');

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Curriculum &amp; Montessori · Session {SCHOOL_INFO.academicSession}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Scholarly Depth from Sensory Early Years to Board Distinctions
          </h1>

          <p className="text-slate-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            A continuous, intentional intellectual journey combining authentic Maria Montessori sensorial methods, British Cambridge foundational benchmarks, and Federal Board (FBISE) examination distinction.
          </p>
        </div>
      </section>

      {/* Division Navigation Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-2 bg-white rounded-full max-w-3xl mx-auto border border-[#ebe3d5] shadow-sm">
          {[
            { id: 'montessori', label: 'Montessori Wing (2.5–5.5y)' },
            { id: 'primary', label: 'Primary School (Grades 1–5)' },
            { id: 'middle', label: 'Middle School (Grades 6–8)' },
            { id: 'secondary', label: 'Matric / SSC Stream (FBISE)' },
          ].map((div) => (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                selectedDivision === div.id
                  ? 'bg-[#152540] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {div.label}
            </button>
          ))}
        </div>
      </section>

      {/* Deep-Dive into the 4 Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {ACADEMIC_PROGRAMS.map((prog, index) => {
          const isSelected = selectedDivision === prog.id;
          const isEven = index % 2 === 0;

          return (
            <div
              key={prog.id}
              id={prog.id}
              className={`rounded-3xl border transition-all p-8 sm:p-12 ${
                isSelected
                  ? 'bg-white border-[#152540]/40 shadow-2xl ring-2 ring-[#152540]/10'
                  : 'bg-white/80 border-[#ebe3d5] shadow-sm hover:shadow-md'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Visual */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg relative border-4 border-white">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#152540]/85 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider">
                      {prog.level}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-amber-200">
                    <span>{prog.ageGroup}</span>
                  </div>

                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#152540]">
                    {prog.title}
                  </h2>

                  <p className="text-[#bf923a] text-sm sm:text-base font-semibold">
                    {prog.subtitle}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#bf923a]" />
                      <span>Core Academic Milestones</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenApplyModal}
                      className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                      Apply for {prog.title.split('(')[0]}
                    </button>
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello, I would like to inquire regarding the curriculum for ${prog.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors flex items-center gap-2 border border-emerald-200"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Holistic Co-Curricular Enrichment */}
      <section className="bg-gradient-to-b from-[#faf8f4] to-[#f6f2eb] border-y border-[#ebe3d5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
              Co-Curricular Enrichment
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Holistic education that engages hands, heart, and imagination far beyond textbook limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1b3773] flex items-center justify-center mb-5 border border-blue-200">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Robotics &amp; Applied Coding</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Scratch visual logic for early learners progressing to Python, microcontroller electronics, and competitive robotics team challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Model UN &amp; Public Oratory</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Structured debate societies, bilingual declamations in Urdu and English, parliamentary procedure, and conflict resolution skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Fine Arts &amp; Calligraphy</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Traditional Islamic calligraphy, watercolor landscapes, ceramic clay work, and annual campus exhibitions celebrating student creativity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
