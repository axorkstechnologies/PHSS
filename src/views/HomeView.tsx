import React, { useState } from 'react';
import { SCHOOL_INFO, STATS, ACADEMIC_PROGRAMS, IMAGES } from '../data/schoolData';
import { PageTab } from '../types';
import {
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  Heart
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
    <div className="space-y-24 md:space-y-32 pb-24 bg-white">
      {/* 3. Background Image & Overlay: Real school building photo, clear light blue sky visible, natural & slightly faded, no heavy dark navy wash */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#081226] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Pearl Hillian School System Simly Dam Road Campus Islamabad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top opacity-90 brightness-100"
          />
          {/* Subtle natural scrim only on the left text area: clear light blue sky and building remain visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081226]/85 via-[#081226]/40 to-transparent sm:max-w-2xl lg:max-w-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/60 via-transparent to-transparent sm:hidden" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* 5. "18 Years": number 18 in yellow & slightly larger, rest of text in white */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081226]/85 backdrop-blur-md border border-white/20 text-xs sm:text-sm mb-6 shadow-sm">
              <span className="text-[#f59e0b] font-bold text-base">18</span>
              <span className="text-white font-medium">Years of Excellence · Simly Dam Road Campus, Islamabad</span>
            </div>

            {/* 4. Main Headline: Emotional, intriguing, and attention-grabbing */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-bold text-white tracking-tight leading-[1.06] text-balance mb-6 drop-shadow-md">
              Every Morning, You Hand Us Your World. <span className="text-[#f59e0b] italic font-normal block sm:inline">We Make Sure Theirs Is Boundless.</span>
            </h1>

            {/* Clean subtext without doodles or clutter */}
            <p className="text-slate-100 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl mb-10 drop-shadow-sm">
              For 18 years along Simly Dam Road, Pearl Hillian has nurtured confident, inquisitive scholars. Where certified Montessori wonder, modern STEM laboratories, and 100% FBISE board distinctions flourish in a peaceful mountain sanctuary.
            </p>

            {/* 6 & 7. Buttons strictly adhering to Yellow Accent Rules */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* "Enroll Your Child Today" → Yellow background */}
              <button
                onClick={onOpenApplyModal}
                className="px-8 py-4 text-sm sm:text-base font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2.5"
              >
                <span>Enroll Your Child Today</span>
                <ArrowRight className="w-4 h-4 text-[#081226]" />
              </button>

              {/* "Explore Admissions" → Yellow background */}
              <button
                onClick={() => setActiveTab('admissions')}
                className="px-7 py-4 text-sm sm:text-base font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Explore Admissions</span>
                <ChevronRight className="w-4 h-4 text-[#081226]" />
              </button>

              {/* "Explore Academic Programs" / "Discover School" → White background */}
              <button
                onClick={() => setActiveTab('academics')}
                className="px-7 py-4 text-sm sm:text-base font-bold text-[#081226] bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Explore Academic Programs</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Direct Parent Ribbon: "Admissions 2025–2026" with yellow applied to roughly half */}
            <div className="mt-12 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="font-semibold">
                  <span className="text-[#f59e0b]">Admissions</span> <span className="text-white">2025–2026 Open</span>
                </span>
              </div>
              <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="hover:text-white transition-colors flex items-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span>Admissions Desk: <strong className="text-white">{SCHOOL_INFO.phone}</strong></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Pillars & Proof Strip (18 in Yellow & Larger) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-14 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Stat 1: 18 in yellow & larger */}
            <div className="text-center lg:text-left">
              <div className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight tabular-nums">
                <span className="text-[#f59e0b] text-5xl sm:text-6xl">18</span>
                <span className="text-[#081226]">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#081226] mt-1.5 uppercase tracking-wider">
                Years of Excellence
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Cultivating leadership since 2008
              </div>
            </div>

            {/* Stat 2 */}
            <div className="pt-6 lg:pt-0 lg:pl-8 text-center lg:text-left">
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#081226] tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#081226] mt-1.5 uppercase tracking-wider">
                Board Examination Pass
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                A+ distinctions in SSC FBISE
              </div>
            </div>

            {/* Stat 3 */}
            <div className="pt-6 lg:pt-0 lg:pl-8 text-center lg:text-left">
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#081226] tracking-tight tabular-nums">
                14:1
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#081226] mt-1.5 uppercase tracking-wider">
                Student-Teacher Ratio
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Personalized intellectual mentorship
              </div>
            </div>

            {/* Stat 4 */}
            <div className="pt-6 lg:pt-0 lg:pl-8 text-center lg:text-left">
              <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#081226] tracking-tight tabular-nums">
                2,500+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#081226] mt-1.5 uppercase tracking-wider">
                Distinguished Alumni
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Thriving in top universities &amp; careers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Institutional Philosophy: Replaced unrealistic library image with realistic STEM laboratory image + Clean layout without floating bugs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-[#081226] text-xs font-bold uppercase tracking-wider border border-slate-200">
              <Heart className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
              <span>A Nurturing Learning Community</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#081226] leading-tight text-balance">
              Where Intellectual Rigor Meets Compassionate Mentorship.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Founded in 2008, Pearl Hillian School System was established with a singular focus: to provide Islamabad families with an institution that honors traditional moral values while equipping scholars with cutting-edge academic excellence and technological fluency.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Nestled along Simly Dam Road in clean, unpolluted mountain air, our campus provides children with peaceful space to explore, experiment, and excel. Here, students do not merely memorize curricula; they conduct laboratory investigations, express themselves through classical arts, master athletic discipline, and build friendships that endure for life.
            </p>

            {/* 2 Clean Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d97706] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#081226]">Proven FBISE Distinction</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Consecutive 100% board clearance records with pre-medical, engineering, and computer science honors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#081226]">Montessori Certified Wing</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Authentic early-years sensory apparatus, self-guided exploration, and bilingual English immersion.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => setActiveTab('about')}
                className="text-sm font-bold text-[#081226] hover:text-[#0284c7] inline-flex items-center gap-2 transition-all group"
              >
                <span>Discover our full institutional history, leadership &amp; faculty</span>
                <ArrowRight className="w-4 h-4 text-[#f59e0b] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Visual Composition: Proper school-appropriate STEM lab image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[4/5] bg-slate-100">
              <img
                src={IMAGES.science}
                alt="Modern STEM & Science Laboratories at Pearl Hillian School System"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs tracking-wider uppercase text-[#f59e0b] font-bold">Experiential Learning</span>
                <h4 className="font-editorial text-2xl font-bold mt-1">Advanced STEM &amp; Innovation Wing</h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                  High-precision workstations in physics, chemistry, biology, and robotics turning textbook theory into real discovery.
                </p>
              </div>
            </div>

            {/* Clean, Non-Glitchy Integrated Trust Marker Below Image */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#f59e0b] font-bold text-base">18</span>
                <span className="font-bold text-[#081226]">Years of Trusted Leadership</span>
              </div>
              <span className="text-slate-500 font-medium">Over 2,500 Alumni</span>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Progression */}
      <section className="bg-slate-50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#081226] text-xs font-bold uppercase tracking-wider border border-slate-200 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Curriculum &amp; Progression</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#081226]">
                Structured Pathways from Early Wonder to Board Honors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Thoughtfully crafted stages providing individual attention, academic mastery, and character formation.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('academics')}
              className="text-xs sm:text-sm font-bold text-[#081226] hover:text-[#0284c7] inline-flex items-center gap-2 transition-colors shrink-0 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-xs"
            >
              <span>View detailed syllabus overview</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f59e0b]" />
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
                    ? 'bg-[#081226] text-white border-[#081226] shadow-lg scale-102'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`text-[11px] uppercase font-bold tracking-wider ${activeProgramIndex === idx ? 'text-[#f59e0b]' : 'text-[#0284c7]'}`}>
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
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#081226] text-xs font-bold uppercase tracking-wider border border-slate-200 mb-3">
                  <span>{currentProgram.level}</span>
                  <span>·</span>
                  <span>{currentProgram.ageGroup}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#081226] mb-3">
                  {currentProgram.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {currentProgram.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
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
                {/* Yellow button for enrolment */}
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3 text-xs sm:text-sm font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  Enroll in this Division
                </button>
                <button
                  onClick={() => setActiveTab('academics')}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Read Complete Curriculum →
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

      {/* Facilities & Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-[#081226] text-xs font-bold uppercase tracking-wider border border-slate-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Simly Dam Road Campus</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#081226]">
            Environments Engineered for Wonder, Discovery &amp; Growth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every square foot of our Simly Dam Road campus is intentionally curated to stimulate intellectual discovery, physical vitality, and emotional well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.montessori}
                alt="Montessori Early Childhood Wing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#081226]">
                Ages 2.5 – 5.5
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#081226]">
                Authentic Montessori Wing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Sun-filled classrooms equipped with sensorial apparatus where certified educators foster early phonemic fluency and mathematical reasoning.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.science}
                alt="Modern Science and STEM Labs"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#081226]">
                Secondary &amp; Matric
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#081226]">
                Advanced STEM Laboratories
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                High-precision physics, chemistry, biology, and computer science workstations preparing scholars for top FBISE board results.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.sports}
                alt="Outdoor Sports Turf and Pavilion"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#081226]">
                Athletics &amp; Conditioning
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-editorial text-2xl font-bold text-[#081226]">
                Outdoor Sports Grounds
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Lush green mountain-view athletic tracks and pitches hosting cricket tournaments, football leagues, and physical wellness training.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setActiveTab('campus-life')}
            className="px-8 py-3.5 text-sm font-bold text-[#081226] bg-slate-100 hover:bg-slate-200 rounded-full transition-all inline-flex items-center gap-2"
          >
            <span>View Full Campus Life &amp; Photography Gallery</span>
            <ArrowRight className="w-4 h-4 text-[#f59e0b]" />
          </button>
        </div>
      </section>

      {/* Leadership & Editorial Quote */}
      <section className="bg-[#081226] text-white py-24 px-4 sm:px-8 relative overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-2xl border border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#f59e0b] text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institutional Leadership · Message from the Directorate</span>
          </div>

          <blockquote className="font-editorial text-2xl sm:text-4xl lg:text-5xl italic font-normal text-slate-100 leading-relaxed text-balance">
            “True education does not merely train the mind to recall information; it inspires the soul to seek truth, build compassion, and stand with unwavering moral courage in an evolving world.”
          </blockquote>

          <div className="pt-2 text-sm text-slate-300">
            <span className="font-bold text-white tracking-wider uppercase">Executive Principal &amp; Academic Board</span>
            <span aria-hidden="true" className="mx-2 text-white/40">·</span>
            <span>Pearl Hillian School System, Islamabad</span>
          </div>
        </div>
      </section>

      {/* 8. NOTE: Reviews / Testimonials section is completely removed */}

      {/* 6. Welcoming Campus Visit Banner: Yellow "Apply for Admission" button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-[#081226] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
                {/* Yellow applied to roughly half */}
                <span>
                  <span className="text-[#f59e0b]">Admissions</span> <span className="text-white">2025–2026 Open</span>
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white leading-tight">
                Experience the Pearl Hillian Standard in Person
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Schedule a personalized campus walk-through along Simly Dam Road. Tour our Montessori suites, inspect our science laboratories, and converse with our academic leadership.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f59e0b]" />
                  <span>Simly Dam Road, Islamabad</span>
                </div>
                <span aria-hidden="true" className="text-white/30 hidden sm:inline">|</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f59e0b]" />
                  <span>{SCHOOL_INFO.officeTimings}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {/* "Apply for Admission" → Yellow */}
              <button
                onClick={onOpenApplyModal}
                className="w-full py-4 px-6 text-sm font-bold text-[#081226] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-lg hover:shadow-xl text-center hover:scale-102"
              >
                Apply for Admission
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian Admissions Desk, I would like to reserve a personalized campus tour for my child.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reserve Tour via WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-3 px-6 text-xs font-semibold text-slate-300 hover:text-white rounded-full border border-white/20 text-center transition-colors"
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
