import React, { useState } from 'react';
import { SCHOOL_INFO, STATS, ACADEMIC_PROGRAMS, TESTIMONIALS, IMAGES } from '../data/schoolData';
import { PageTab } from '../types';
import {
  ArrowRight,
  Sparkles,
  Award,
  BookOpen,
  Compass,
  GraduationCap,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  Calculator
} from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
  onOpenFeeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  onOpenApplyModal,
  onOpenFeeModal,
}) => {
  const [activeProgramIndex, setActiveProgramIndex] = useState(0);

  const currentProgram = ACADEMIC_PROGRAMS[activeProgramIndex];

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#040915] text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Pearl Hillian School System Simly Dam Road Campus Islamabad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle liquid depth overlay & gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040915]/95 via-[#081226]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040915] via-transparent to-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Unboxed Metadata Trust Marker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 mb-6">
              <span className="text-gold-400 font-semibold tracking-wider uppercase">
                {SCHOOL_INFO.tagline}
              </span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Simly Dam Road Campus</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400">Islamabad</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] text-balance mb-6">
              Cultivating Intellectual Rigor, Moral Integrity &amp; Leadership.
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light max-w-2xl mb-9">
              Eighteen years of uninterrupted academic distinction in the capital. Where authentic Montessori discovery, modern STEM laboratories, and top-tier FBISE Board results converge in a tranquil mountain-side sanctuary.
            </p>

            {/* Interactive CTA Hub */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenApplyModal}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#081226] bg-white hover:bg-slate-100 rounded-md transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                <span>Apply for Admissions</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </button>

              <button
                onClick={() => setActiveTab('academics')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-md transition-all flex items-center gap-2"
              >
                <span>Explore Academics</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenFeeModal}
                className="px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Calculator className="w-4 h-4 text-gold-400" />
                <span>Estimate Fees</span>
              </button>
            </div>

            {/* Direct Parent Hotline Ribbon */}
            <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Admissions Office Open for Session 2025–26</span>
              </div>
              <span aria-hidden="true" className="text-white/20 hidden sm:inline">|</span>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Admissions: {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Rigor Proof Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081226] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Philosophy & 18-Year Legacy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              <span>Our Heritage &amp; Ethos</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#081226]">Simly Dam Road Campus</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081226] leading-tight text-balance">
              Eighteen Years of Nurturing Inquiring Minds, Resilient Character &amp; Global Ambition.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 2008, Pearl Hillian School System was established with a clear mandate: to provide Islamabad families with an institution that honors traditional moral values while equipping scholars with cutting-edge academic excellence and technological fluency.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our campus on Simly Dam Road offers a serene learning environment sheltered from urban pollution, surrounded by fresh air and the tranquil Margalla ridgeline. Here, children do not merely memorize curricula; they conduct laboratory investigations, express themselves through classical arts, master athletic discipline, and build friendships that endure for life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Award className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">Proven FBISE Distinction</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Consecutive 100% board examination clearances with top pre-medical &amp; engineering placements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs text-slate-900">Montessori Certified Wing</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Authentic early-years sensory apparatus and bilingual English language immersion.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="text-xs font-semibold text-[#081226] hover:text-[#1b3773] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Read our full institutional history &amp; faculty profiles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5]">
              <img
                src={IMAGES.library}
                alt="Pearl Hillian Central Library and Study Hall"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] tracking-wider uppercase text-gold-300 font-semibold">Scholarship Sanctum</span>
                <h4 className="font-editorial text-xl font-bold mt-1">The Central Heritage Library</h4>
                <p className="text-xs text-slate-300 mt-1">Over 8,000 curated titles inspiring deep thought and contemplative inquiry.</p>
              </div>
            </div>

            {/* Floating Glass Pill Trust Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 rounded-xl glass-panel shadow-xl border border-white/80 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#081226] text-white flex items-center justify-center font-bold text-sm">
                  18y
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Uncompromised Standard</div>
                  <div className="text-[11px] text-slate-500">Established 2008 in Islamabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Disciplines & Montessori Interactive Showcase */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                <span>Curriculum &amp; Progression</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#081226]">All Divisions</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#081226] mt-2">
                Structured Pathways from Toddlerhood to Board Distinction
              </h2>
            </div>

            <button
              onClick={() => setActiveTab('academics')}
              className="text-xs font-semibold text-[#081226] hover:text-[#1b3773] inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>View detailed syllabus overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Academic Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {ACADEMIC_PROGRAMS.map((prog, idx) => (
              <button
                key={prog.id}
                onClick={() => setActiveProgramIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeProgramIndex === idx
                    ? 'bg-[#081226] text-white border-[#081226] shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-[11px] uppercase font-bold tracking-wider opacity-75">
                  {prog.level}
                </div>
                <div className="font-editorial text-lg font-bold mt-1">
                  {prog.title.split('(')[0]}
                </div>
                <div className={`text-xs mt-1 ${activeProgramIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                  {prog.ageGroup}
                </div>
              </button>
            ))}
          </div>

          {/* Featured Active Program Detail Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
                  {currentProgram.level} · {currentProgram.ageGroup}
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#081226] mb-3">
                  {currentProgram.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {currentProgram.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Key Curricular Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentProgram.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <button
                  onClick={onOpenApplyModal}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#081226] rounded hover:bg-[#132752] transition-colors"
                >
                  Enroll in this Division
                </button>
                <button
                  onClick={() => setActiveTab('academics')}
                  className="px-4 py-2.5 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Read Complete Curriculum →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={currentProgram.image}
                alt={currentProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Experiential Learning Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
            <span>Simly Dam Road Campus</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#081226]">Facilities &amp; Infrastructure</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#081226] mt-2">
            Environments Engineered for Wonder, Discovery and Growth
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Every square foot of our Simly Dam Road campus is intentionally curated to stimulate intellectual discovery, physical vitality, and emotional well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.montessori}
                alt="Montessori Early Childhood Wing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">Ages 2.5 – 5.5</div>
              <h3 className="font-editorial text-xl font-bold text-[#081226] mt-1">
                Authentic Montessori Wing
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Sun-filled classrooms equipped with sensory materials where certified educators foster early phonemic fluency and mathematical reasoning.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.science}
                alt="Modern Science and STEM Labs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">Secondary &amp; Matric</div>
              <h3 className="font-editorial text-xl font-bold text-[#081226] mt-1">
                Advanced STEM Laboratories
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                High-precision physics, chemistry, biology and robotics testing workstations preparing scholars for top FBISE board results.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.sports}
                alt="Outdoor Sports Turf and Pavilion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">Athletics &amp; Conditioning</div>
              <h3 className="font-editorial text-xl font-bold text-[#081226] mt-1">
                Outdoor Sports Grounds
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Lush green mountain-view athletic tracks and pitches hosting cricket tournaments, football leagues, and physical wellness training.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setActiveTab('campus-life')}
            className="px-6 py-2.5 text-xs font-semibold text-[#081226] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors inline-flex items-center gap-1.5"
          >
            <span>View Full Campus Life &amp; Photography Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Leadership & Curatorial Editorial Quote */}
      <section className="bg-[#081226] text-white py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Institutional Leadership · Message from the Directorate
          </div>

          <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl italic font-normal text-slate-100 leading-relaxed text-balance">
            “True education does not merely train the mind to recall information; it inspires the soul to seek truth, build compassion, and stand with unwavering moral courage in an evolving world.”
          </blockquote>

          <div className="pt-2 text-xs text-slate-300">
            <span className="font-bold text-white tracking-wider uppercase">Executive Principal &amp; Academic Board</span>
            <span aria-hidden="true" className="mx-2 text-slate-600">·</span>
            <span>Pearl Hillian School System, Islamabad</span>
          </div>
        </div>
      </section>

      {/* Testimonials from Islamabad Parents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              <span>Parent Testimonials</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#081226]">Community Voice</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#081226] mt-2">
              Trusted by Discerning Islamabad Families
            </h2>
          </div>
          <div className="text-xs text-slate-500">
            18 Years of unbroken institutional trust and academic distinction
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-6">
                “{t.quote}”
              </p>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-xs text-[#081226]">{t.author}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{t.role}</div>
                <div className="text-[10px] text-gold-600 font-medium mt-1 uppercase tracking-wide">
                  {t.studentGrade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner: Campus Visit & Admissions Desk */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#081226] to-[#0d1d3d] text-white p-8 sm:p-14 shadow-2xl border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Now Enrolling: Session {SCHOOL_INFO.academicSession}</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
                Experience the Pearl Hillian Standard in Person
              </h2>

              <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                Schedule a personalized campus walk-through along Simly Dam Road. Tour our Montessori suites, inspect our science laboratories, and converse with our academic leadership.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Simly Dam Road, Islamabad</span>
                </div>
                <span aria-hidden="true" className="text-white/20">|</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>{SCHOOL_INFO.officeTimings}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3.5 px-6 text-xs font-bold text-[#081226] bg-white hover:bg-slate-100 rounded transition-colors shadow-lg text-center"
              >
                Apply Online Now
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to reserve a personalized campus tour for my child.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Tour via WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-2.5 px-6 text-xs font-semibold text-slate-300 hover:text-white rounded border border-white/20 text-center transition-colors"
              >
                Call Hotline: {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
