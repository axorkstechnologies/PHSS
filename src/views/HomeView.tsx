import React, { useState } from 'react';
import { SCHOOL_INFO, ACADEMIC_PROGRAMS, IMAGES } from '../data/schoolData';
import { PageTab } from '../types';
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Heart,
  BookOpen,
  Award,
  Sparkles,
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
    <div className="space-y-16 sm:space-y-20 md:space-y-28 pb-20 sm:pb-24 bg-white w-full overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Natural School Campus with Clean Left Layout
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[72vh] sm:min-h-[78vh] lg:min-h-[84vh] flex items-center overflow-hidden bg-slate-100 w-full">
        {/* Background: Original school building, crisp and visible with clear blue sky */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.schoolBuilding}
            alt="Pearl Hillian School System Campus Building"
            className="w-full h-full object-cover object-[center_right] sm:object-right"
          />
          {/* Subtle directional gradient on left for text readability, keeping the building and sky on right clear and visible */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] lg:w-[52%] bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-white/40 sm:hidden pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content — Clean left-side arrangement */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-24 w-full">
          <div className="max-w-xl lg:max-w-2xl text-left">

            {/* "18" badge: yellow number, rest clean dark blue */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-xs sm:text-sm mb-4 sm:mb-6 shadow-xs max-w-full">
              <span className="text-[#f59e0b] font-bold text-sm sm:text-base shrink-0">18</span>
              <span className="text-[#0f2b5c] font-medium truncate">Years of Excellence · Simly Dam Road, Islamabad</span>
            </div>

            {/* Main Headline — Dark Blue */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-[#0f2b5c] tracking-tight leading-[1.12] sm:leading-[1.08] text-balance mb-4 sm:mb-5">
              Where Minds Blossom with Purpose
            </h1>

            {/* Exact client paragraph */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl mb-6 sm:mb-8">
              <span className="text-[#f59e0b] font-bold text-base sm:text-lg">18</span> years of nurturing bright children along Simly Dam Road. Where FBISE board unites with certified academic, social and moral growth of students.
            </p>

            {/* Only TWO buttons — full width on mobile, auto on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Explore Admissions → Yellow */}
              <button
                onClick={() => setActiveTab('admissions')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#0f2b5c] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Admissions</span>
                <ArrowRight className="w-4 h-4 text-[#0f2b5c]" />
              </button>

              {/* Discover Our School → White / Light */}
              <button
                onClick={() => setActiveTab('about')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#0f2b5c] bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Discover Our School</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          STATS STRIP — Key Pillars (18 in yellow)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-10 relative z-20 w-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {/* Stat 1: 18 in yellow & larger */}
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight">
                <span className="text-[#f59e0b] text-4xl sm:text-6xl">18</span>
                <span className="text-[#0f2b5c]">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] mt-1.5 uppercase tracking-wider">
                Years of Excellence
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                Since 2008
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-5xl font-bold text-[#0f2b5c] tracking-tight">
                100%
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] mt-1.5 uppercase tracking-wider">
                Board Pass Rate
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                A+ in SSC FBISE
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-5xl font-bold text-[#0f2b5c] tracking-tight">
                14:1
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] mt-1.5 uppercase tracking-wider">
                Student-Teacher Ratio
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                Personalized attention
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="font-editorial text-3xl sm:text-5xl font-bold text-[#0f2b5c] tracking-tight">
                2,500+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f2b5c] mt-1.5 uppercase tracking-wider">
                Happy Alumni
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                Thriving in top universities
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE PEARL HILLIAN — Short, clear points
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b5c]">
            Why Choose Pearl Hillian?
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3">
            What makes us different from every other school in Islamabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {/* Point 1 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-2">
              Qualified &amp; Caring Faculty
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Experienced, certified educators who treat every child with individual care and attention.
            </p>
          </div>

          {/* Point 2 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-2">
              Modern Facilities
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Smart classrooms, science labs, computer labs, and a green campus along Simly Dam Road.
            </p>
          </div>

          {/* Point 3 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-2">
              Safe &amp; Supportive Environment
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              24/7 CCTV, secure campus with trained staff, and a nurturing atmosphere for students.
            </p>
          </div>

          {/* Point 4 */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284c7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f2b5c] mb-2">
              Holistic Development
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Academics, sports, moral values, and character building — developing well-rounded students.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          ACADEMIC LEVELS — Four boxes, yellow → grey in accent
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b5c]">
                Academic Levels
              </h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">
                Structured pathways from early years to board examinations.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('academics')}
              className="text-xs sm:text-sm font-bold text-[#0f2b5c] hover:text-[#0284c7] inline-flex items-center gap-2 transition-colors shrink-0 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-xs"
            >
              <span>View Full Curriculum</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* 4 Level selector tabs — yellow replaced with grey */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {ACADEMIC_PROGRAMS.map((prog, idx) => (
              <button
                key={prog.id}
                onClick={() => setActiveProgramIndex(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all border ${
                  activeProgramIndex === idx
                    ? 'bg-[#0f2b5c] text-white border-[#0f2b5c] shadow-lg'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {/* Grey accent instead of yellow */}
                <div className={`text-[10px] sm:text-[11px] uppercase font-bold tracking-wider ${activeProgramIndex === idx ? 'text-slate-300' : 'text-slate-400'}`}>
                  {prog.level}
                </div>
                <div className="font-editorial text-lg sm:text-xl font-bold mt-1 leading-tight">
                  {prog.title.split('(')[0]}
                </div>
                <div className={`text-[10px] sm:text-xs mt-1 font-medium ${activeProgramIndex === idx ? 'text-slate-400' : 'text-slate-500'}`}>
                  {prog.ageGroup}
                </div>
              </button>
            ))}
          </div>

          {/* Active program detail card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0f2b5c] text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-slate-200 mb-3">
                  <span>{currentProgram.level}</span>
                  <span>·</span>
                  <span>{currentProgram.ageGroup}</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2b5c] mb-3">
                  {currentProgram.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  {currentProgram.description}
                </p>

                <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0f2b5c] mb-3 sm:mb-4 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Key Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
                  {currentProgram.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#0f2b5c] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg text-center"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => setActiveTab('academics')}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0f2b5c] transition-colors text-center"
                >
                  Read Full Curriculum →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
              <img
                src={currentProgram.image}
                alt={currentProgram.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          FACILITIES — Lab & Sports images from client
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2b5c]">
            Our Campus &amp; Facilities
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-3">
            Purpose-built spaces that inspire learning, creativity, and physical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Montessori */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.montessori}
                alt="Montessori Early Childhood Wing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-[#0f2b5c]">
                Ages 2.5 – 5.5
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                Montessori Wing
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2">
                Certified sensorial learning with bilingual fluency in a child-friendly environment.
              </p>
            </div>
          </div>

          {/* Lab — Client's lab image (students in lab coats) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.labStudents}
                alt="Students in lab coats doing experiments"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-[#0f2b5c]">
                Science &amp; STEM
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                Science Laboratories
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2">
                Modern physics, chemistry, and biology labs for hands-on experimentation.
              </p>
            </div>
          </div>

          {/* Sports — Client's ground image (children running on track) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={IMAGES.sportsTrack}
                alt="Children running on track with green grass"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold text-[#0f2b5c]">
                Sports &amp; Athletics
              </div>
            </div>
            <div className="p-5 sm:p-7">
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0f2b5c]">
                Sports Grounds
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-2">
                Lush green fields, running tracks, and active sports programs for every student.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            onClick={() => setActiveTab('campus-life')}
            className="px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-[#0f2b5c] bg-slate-100 hover:bg-slate-200 rounded-full transition-all inline-flex items-center gap-2"
          >
            <span>View Campus Life Gallery</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          LEADERSHIP QUOTE — Clean dark section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0f2b5c] text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden rounded-2xl sm:rounded-3xl max-w-7xl mx-auto shadow-xl border border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-slate-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Message from the Leadership</span>
          </div>

          <blockquote className="font-editorial text-xl sm:text-3xl lg:text-4xl italic font-normal text-slate-100 leading-relaxed text-balance px-2">
            "True education does not merely train the mind to recall information; it inspires the soul to seek truth, build compassion, and stand with unwavering moral courage."
          </blockquote>

          <div className="pt-2 text-xs sm:text-sm text-slate-400">
            <span className="font-bold text-white tracking-wider uppercase">Executive Principal &amp; Academic Board</span>
            <span aria-hidden="true" className="mx-2 text-white/30">·</span>
            <span>Pearl Hillian School System, Islamabad</span>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER — Apply for Admission (yellow), campus visit
      ═══════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-[#0f2b5c] text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-blue-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>
                  <span className="text-[#f59e0b]">Admissions</span> <span className="text-white">2025–2026 Open</span>
                </span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Visit Our Campus &amp; See the Difference
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Schedule a campus tour along Simly Dam Road. See our classrooms, labs, and sports facilities firsthand.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm text-slate-300">
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

            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Apply for Admission → Yellow */}
              <button
                onClick={onOpenApplyModal}
                className="w-full py-3.5 sm:py-4 px-6 text-sm font-bold text-[#0f2b5c] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-lg hover:shadow-xl text-center"
              >
                Apply for Admission
              </button>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Pearl Hillian, I would like to book a campus tour.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 px-6 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Tour via WhatsApp</span>
              </a>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-3 px-6 text-xs font-semibold text-slate-300 hover:text-white rounded-full border border-white/20 text-center transition-colors"
              >
                Call: {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
