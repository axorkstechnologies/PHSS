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
  Calculator,
  Heart,
  Star,
  Users,
  Sun
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
    <div className="space-y-28 md:space-y-36 pb-24">
      {/* 1. Cinematic & Warm Hero Section */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center bg-[#152540] text-white overflow-hidden">
        {/* Background Image with Warm Soft Navy Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Pearl Hillian School System Simly Dam Road Campus Islamabad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-85 scale-100 transition-transform duration-1000 ease-out"
          />
          {/* Soft multi-layer warm gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#152540]/95 via-[#1b3054]/85 to-[#152540]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152540] via-transparent to-black/20" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Friendly Warm Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#eacd72] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sun className="w-4 h-4 text-[#eacd72]" />
              <span className="tracking-wide">Welcome to Pearl Hillian School System</span>
              <span className="text-white/40">·</span>
              <span className="text-white font-medium">Islamabad</span>
            </div>

            {/* Dominant & Attention-Grabbing Heading */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white tracking-tight leading-[1.06] text-balance mb-6 drop-shadow-sm">
              Where Young Minds Blossom with <span className="text-[#f2dc9e] italic font-normal">Wonder &amp; Purpose.</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-slate-100 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl mb-10 drop-shadow-xs">
              Eighteen years of nurturing bright, confident children along Simly Dam Road. Where certified Montessori play, modern STEM exploration, and FBISE Board distinctions unite in a serene mountain sanctuary.
            </p>

            {/* High-Visibility Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenApplyModal}
                className="px-7 py-4 text-sm sm:text-base font-bold text-[#152540] bg-white hover:bg-[#faf8f4] rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2.5 border-2 border-[#eacd72]"
              >
                <span>Enroll Your Child Today</span>
                <ArrowRight className="w-4 h-4 text-[#bf923a]" />
              </button>

              <button
                onClick={() => setActiveTab('academics')}
                className="px-6 py-4 text-sm sm:text-base font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 rounded-full transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Explore Academic Programs</span>
                <ChevronRight className="w-4 h-4 text-[#f2dc9e]" />
              </button>

              <button
                onClick={onOpenFeeModal}
                className="px-5 py-4 text-sm font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 rounded-full hover:bg-white/10"
              >
                <Calculator className="w-4 h-4 text-[#eacd72]" />
                <span>Estimate Fees</span>
              </button>
            </div>

            {/* Direct Parent Hotline Ribbon */}
            <div className="mt-12 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="font-semibold text-white">Admissions Open for Session 2025–2026</span>
              </div>
              <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="hover:text-white transition-colors flex items-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4 text-[#eacd72]" />
                <span>Admissions Desk: <strong className="text-white">{SCHOOL_INFO.phone}</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars & Proof Strip (Soft & Welcoming Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ebe3d5] shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''} text-center lg:text-left`}>
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#152540] tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#bf923a] mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Welcome Message & The Pearl Hillian Difference (Warm School Heart) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#d9af4c]/30">
              <Heart className="w-3.5 h-3.5 fill-[#bf923a]" />
              <span>A Caring Learning Community</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-5xl font-bold text-[#152540] leading-tight text-balance">
              Eighteen Years of Cherishing Every Child’s Unique Potential.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Founded in 2008, Pearl Hillian School System was built on a simple yet profound premise: that children learn best when they are truly seen, valued, and encouraged to ask big questions.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Nestled along peaceful Simly Dam Road away from urban rush and noise, our sunlit campus gives children fresh mountain air to play, experiment, and grow. From hands-on Montessori sensory learning to advanced STEM laboratories and 100% board examination distinctions, we prepare well-rounded leaders who carry both strong minds and gentle hearts.
            </p>

            {/* 2 Warm Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#faf8f4] border border-[#ebe3d5]">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#bf923a] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#152540]">Top FBISE Board Standings</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Consistent 100% pass records with pre-medical, engineering, and computer science distinctions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#faf8f4] border border-[#ebe3d5]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#152540]">Certified Montessori Wing</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Authentic sensory exploration, phonics fluency, and bilingual speech in a loving environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveTab('about')}
                className="text-sm font-bold text-[#152540] hover:text-[#213c68] inline-flex items-center gap-2 transition-all group"
              >
                <span>Discover our full history, leadership and campus values</span>
                <ArrowRight className="w-4 h-4 text-[#bf923a] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
              <img
                src={IMAGES.library}
                alt="Pearl Hillian Central Heritage Library and Study Hall"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152540]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs tracking-wider uppercase text-[#f2dc9e] font-bold">Inspiring Environment</span>
                <h4 className="font-editorial text-2xl font-bold mt-1">The Central Heritage Library</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                  Over 8,000 curated books nurturing a lifelong love for reading and independent discovery.
                </p>
              </div>
            </div>

            {/* Floating Warm Pill Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block p-5 rounded-2xl bg-white shadow-xl border border-[#ebe3d5] max-w-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#152540] to-[#213c68] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  18y
                </div>
                <div>
                  <div className="text-sm font-bold text-[#152540]">Trusted in Islamabad</div>
                  <div className="text-xs text-slate-500 font-medium">Over 2,500 successful alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Academic Progression & Montessori Interactive Showcase */}
      <section className="bg-gradient-to-b from-[#faf8f4] to-[#f6f2eb] border-y border-[#ebe3d5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Nurturing Curriculum</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
                A Thoughtfully Designed Learning Journey
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Guiding your child from playful early wonder to board examination excellence and university readiness.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('academics')}
              className="text-xs sm:text-sm font-bold text-[#152540] hover:text-[#213c68] inline-flex items-center gap-2 transition-colors shrink-0 px-4 py-2 bg-white rounded-full border border-[#ebe3d5] shadow-xs"
            >
              <span>Explore all syllabi &amp; grades</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#bf923a]" />
            </button>
          </div>

          {/* Interactive Program Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {ACADEMIC_PROGRAMS.map((prog, idx) => (
              <button
                key={prog.id}
                onClick={() => setActiveProgramIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all border ${
                  activeProgramIndex === idx
                    ? 'bg-[#152540] text-white border-[#152540] shadow-lg scale-102'
                    : 'bg-white text-slate-800 border-[#ebe3d5] hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`text-[11px] uppercase font-bold tracking-wider ${activeProgramIndex === idx ? 'text-[#f2dc9e]' : 'text-[#bf923a]'}`}>
                  {prog.level}
                </div>
                <div className="font-editorial text-xl font-bold mt-1">
                  {prog.title.split('(')[0]}
                </div>
                <div className={`text-xs mt-1 font-medium ${activeProgramIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                  {prog.ageGroup}
                </div>
              </button>
            ))}
          </div>

          {/* Featured Active Program Detail Card */}
          <div className="bg-white rounded-3xl border border-[#ebe3d5] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-amber-200 mb-3">
                  <span>{currentProgram.level}</span>
                  <span>·</span>
                  <span>{currentProgram.ageGroup}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#152540] mb-3">
                  {currentProgram.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {currentProgram.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#bf923a]" />
                  <span>Key Curricular Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {currentProgram.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Enroll in this Division
                </button>
                <button
                  onClick={() => setActiveTab('academics')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  View Detailed Syllabus →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
              <img
                src={currentProgram.image}
                alt={currentProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Facilities & Enriching Environments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Simly Dam Road Campus</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
            Environments Designed for Joy &amp; Discovery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every classroom, laboratory, and play ground is thoughtfully arranged to stimulate curiosity, physical vitality, and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-[#ebe3d5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.montessori}
                alt="Montessori Early Childhood Wing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#152540]">
                Ages 2.5 – 5.5
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                Authentic Montessori Wing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Sun-filled classrooms equipped with sensorial apparatus where certified educators foster early reading, numeracy, and self-directed confidence.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-[#ebe3d5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.science}
                alt="Modern Science and STEM Labs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#152540]">
                Secondary &amp; Matric
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                Modern STEM Laboratories
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Fully equipped physics, chemistry, biology, and computer science workstations that turn theoretical textbooks into real experiments.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-[#ebe3d5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.sports}
                alt="Outdoor Sports Turf and Pavilion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#152540]">
                Athletics &amp; Wellness
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">
                Lush Green Sports Grounds
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Surrounded by Margalla mountain views, our athletic fields host cricket matches, football tournaments, gymnastics, and energetic sports galas.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setActiveTab('campus-life')}
            className="px-8 py-3.5 text-sm font-bold text-[#152540] bg-white hover:bg-slate-100 rounded-full transition-all inline-flex items-center gap-2 border border-[#ebe3d5] shadow-sm hover:shadow-md"
          >
            <span>View Full Campus Life &amp; Photo Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#bf923a]" />
          </button>
        </div>
      </section>

      {/* 6. Heartfelt Educational Philosophy Quote */}
      <section className="bg-gradient-to-br from-[#152540] to-[#213c68] text-white py-24 px-4 sm:px-8 relative overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-2xl border border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Message from the Academic Directorate</span>
          </div>

          <blockquote className="font-editorial text-2xl sm:text-4xl lg:text-5xl italic font-normal text-slate-100 leading-relaxed text-balance">
            “True education does not merely train the mind to recall facts; it inspires the soul to seek truth, cultivate kindness, and stand with unwavering moral courage in an ever-changing world.”
          </blockquote>

          <div className="pt-2 text-sm text-slate-300">
            <span className="font-bold text-white tracking-wider uppercase">Executive Principal &amp; Academic Council</span>
            <span aria-hidden="true" className="mx-2 text-white/40">·</span>
            <span>Pearl Hillian School System, Islamabad</span>
          </div>
        </div>
      </section>

      {/* 7. Parent Testimonials with Warm Trust */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#bf923a]" />
              <span>Parent Experiences</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
              Loved &amp; Trusted by Islamabad Families
            </h2>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            18 Years of continuous community trust and student success
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#d9af4c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d9af4c]" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100">
                <div className="font-bold text-base text-[#152540]">{t.author}</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">{t.role}</div>
                <div className="text-xs text-[#bf923a] font-bold mt-1 uppercase tracking-wide">
                  {t.studentGrade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Welcoming Campus Visit & Admissions Desk Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold border border-white/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>Now Enrolling: Academic Session {SCHOOL_INFO.academicSession}</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white leading-tight">
                Experience the Pearl Hillian Family in Person
              </h2>

              <p className="text-slate-200 text-base sm:text-lg max-w-xl leading-relaxed">
                We warmly welcome you and your child to tour our Montessori wing, inspect our STEM laboratories, and meet our passionate educators along Simly Dam Road.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#eacd72]" />
                  <span>Simly Dam Road, Islamabad</span>
                </div>
                <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#eacd72]" />
                  <span>{SCHOOL_INFO.officeTimings}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <button
                onClick={onOpenApplyModal}
                className="w-full py-4 px-6 text-sm font-bold text-[#152540] bg-white hover:bg-[#faf8f4] rounded-full transition-all shadow-lg hover:shadow-xl text-center hover:scale-102"
              >
                Apply Online for Admission
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to reserve a personalized campus tour for my child.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve a Campus Tour on WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-3 px-6 text-xs font-semibold text-slate-200 hover:text-white rounded-full border border-white/20 text-center transition-colors"
              >
                Direct Call: {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
