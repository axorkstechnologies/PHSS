import React from 'react';
import { SCHOOL_INFO, MILESTONES, IMAGES } from '../data/schoolData';
import { PageTab } from '../types';
import { ShieldCheck, HeartHandshake, Compass, Award, CheckCircle2, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Institutional Heritage · Est. 2008</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Eighteen Years of Character, Curiosity &amp; Distinction
          </h1>

          <p className="text-slate-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Founded with an enduring commitment to academic rigor and moral leadership in Islamabad, Pearl Hillian School System nurtures visionary young minds grounded in compassion and intellectual fortitude.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img
                src={IMAGES.hero}
                alt="Simly Dam Road Campus, Islamabad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-white border border-[#ebe3d5] rounded-2xl mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-600 shadow-sm">
              <span className="font-bold text-[#152540]">Simly Dam Road Campus</span>
              <span className="font-medium text-[#bf923a]">Islamabad Capital Territory</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#d9af4c]/30">
              <Heart className="w-3.5 h-3.5 fill-[#bf923a]" />
              <span>The Pearl Hillian Ethos</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540] leading-tight">
              A Quiet Luxury of True Education: Rigor with Compassion.
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              At Pearl Hillian School System, we believe educational excellence is not measured by standardized pressure, but by the depth of a child’s understanding and their capacity to act with integrity and kindness.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Situated in the clean, invigorating air of the Islamabad hills along Simly Dam Road, our campus shields children from urban commotion while keeping them tethered to modern scientific, technological, and linguistic global standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#ebe3d5] shadow-sm">
                <div className="font-editorial text-3xl font-bold text-[#152540] tabular-nums">18 Years</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Uninterrupted educational leadership</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#ebe3d5] shadow-sm">
                <div className="font-editorial text-3xl font-bold text-[#152540] tabular-nums">14:1</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Individual scholar-to-educator ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="bg-gradient-to-b from-[#faf8f4] to-[#f6f2eb] border-y border-[#ebe3d5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
              Our Guiding Pillars
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Four timeless principles that inform every lesson, morning assembly, and laboratory experiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Intellectual Rigor</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Deep conceptual mastery over superficial memorization. Cultivating inquiry, scientific observation, and mathematical precision.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-200">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Moral Integrity</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Uncompromising honesty, civic responsibility, respect for elders, and community empathy rooted in high ethical traditions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1b3773] flex items-center justify-center mb-5 border border-blue-200">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Global Perspective</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Bilingual English elocution, coding, robotics, and Model UN preparing scholars to excel at top universities worldwide.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 border border-rose-200">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#152540]">Pastoral Care</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                Every child is known, protected, and championed by seasoned faculty who nurture both confidence and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
            <span>Eighteen Years of Growth</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
            Chronology of Educational Leadership
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-[#ebe3d5]">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-12">
              <div className="absolute left-3 w-6 h-6 rounded-full bg-[#152540] border-4 border-white shadow-md -translate-x-1/2 mt-1" />
              <div className="bg-white p-7 rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow w-full">
                <div className="font-editorial text-base font-bold text-[#bf923a] uppercase">
                  {m.year}
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#152540] mt-1">
                  {m.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 font-normal">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassuring Pastoral Care & Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#152540] to-[#213c68] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Safety &amp; Well-being First</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white leading-tight">
                Fortified Campus Security &amp; Loving Pastoral Safeguards
              </h2>
              <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                We understand that peace of mind is essential for parents. Simly Dam Road Campus enforces multi-tier security surveillance, dedicated perimeter defense, and rapid medical response protocols.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-3.5 p-4 bg-white/10 rounded-2xl border border-white/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>24/7 high-definition CCTV coverage across all entrance gates, hallways, and grounds</span>
              </div>
              <div className="flex items-center gap-3.5 p-4 bg-white/10 rounded-2xl border border-white/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Controlled visitor clearance &amp; biometric parent pickup authorisations</span>
              </div>
              <div className="flex items-center gap-3.5 p-4 bg-white/10 rounded-2xl border border-white/15">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>On-campus first-aid infirmary with certified nurse &amp; emergency doctor on call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onOpenApplyModal}
          className="px-8 py-4 text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          <span>Book a Personalized Campus Walk-Through</span>
          <ArrowRight className="w-4 h-4 text-[#eacd72]" />
        </button>
      </div>
    </div>
  );
};
