import React, { useState } from 'react';
import { ACADEMIC_PROGRAMS, IMAGES, SCHOOL_INFO } from '../data/schoolData';
import { PageTab } from '../types';
import { Sparkles, BookOpen, Compass, GraduationCap, CheckCircle2, Award, Laptop, Palette, Music } from 'lucide-react';

interface AcademicsViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('montessori');

  return (
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#081226] text-white py-16 lg:py-24 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span>Academic Curriculum &amp; Montessori</span>
            <span aria-hidden="true">·</span>
            <span>Session {SCHOOL_INFO.academicSession}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Scholarly Depth from Sensory Early Years to Board Distinctions
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            An intentionally designed intellectual trajectory combining Maria Montessori methodologies, British Cambridge foundational benchmarks, and Federal Board (FBISE) examination excellence.
          </p>
        </div>
      </section>

      {/* Division Navigation Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-3xl mx-auto border border-slate-200">
          {[
            { id: 'montessori', label: 'Montessori Wing (2.5–5.5y)' },
            { id: 'primary', label: 'Primary School (Grades 1–5)' },
            { id: 'middle', label: 'Middle School (Grades 6–8)' },
            { id: 'secondary', label: 'Matric / SSC Stream (FBISE)' },
          ].map((div) => (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedDivision === div.id
                  ? 'bg-[#081226] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
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
              className={`rounded-2xl border transition-all p-6 sm:p-10 ${
                isSelected
                  ? 'bg-white border-[#081226]/40 shadow-xl ring-1 ring-[#081226]/20'
                  : 'bg-white/70 border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-md relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#081226]/80 backdrop-blur-md rounded text-white text-[11px] font-bold uppercase tracking-wider">
                      {prog.level}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    {prog.ageGroup}
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#081226]">
                    {prog.title}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">
                    {prog.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                      Core Academic Milestones
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {prog.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={onOpenApplyModal}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#081226] rounded hover:bg-[#132752] transition-colors"
                    >
                      Apply for {prog.title.split('(')[0]}
                    </button>
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello, I would like to inquire regarding the curriculum for ${prog.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded hover:bg-emerald-100 transition-colors"
                    >
                      Inquire via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Holistic Co-Curricular Enrichment */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-editorial text-3xl font-bold text-[#081226]">
              Co-Curricular Enrichment
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Education that engages hands, heart, and imagination beyond textbook boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Laptop className="w-6 h-6 text-[#081226] mb-3" />
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Robotics &amp; Applied Coding</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Scratch visual logic for juniors progressing to Python, micro-controller circuits, and competitive robotics team challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Award className="w-6 h-6 text-[#081226] mb-3" />
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Model UN &amp; Public Oratory</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Structured debate societies, bilingual declamations in Urdu and English, parliamentary procedure, and conflict resolution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Palette className="w-6 h-6 text-[#081226] mb-3" />
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Fine Arts &amp; Calligraphy</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-1">
                Traditional Islamic calligraphy, watercolor landscapes, ceramic clay work, and annual campus gallery exhibitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
