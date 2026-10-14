import React from 'react';
import { SCHOOL_INFO, MILESTONES, IMAGES, STATS } from '../data/schoolData';
import { PageTab } from '../types';
import { ShieldCheck, HeartHandshake, Compass, Award, CheckCircle2, MapPin, Phone } from 'lucide-react';

interface AboutViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#081226] text-white py-16 lg:py-24 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span>Our Institutional Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2008</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Eighteen Years of Character, Curiosity &amp; Distinction
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Founded with an enduring commitment to academic rigor and moral leadership in Islamabad, Pearl Hillian School System prepares visionary leaders grounded in compassion and intellectual fortitude.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <img
                src={IMAGES.hero}
                alt="Simly Dam Road Campus, Islamabad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mt-4 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Simly Dam Road Campus</span>
              <span>Islamabad Capital Territory</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold tracking-widest uppercase text-gold-600">
              The Pearl Hillian Creed
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#081226] leading-tight">
              A Quiet Luxury of True Education: Rigor Without Haste.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At Pearl Hillian School System, we believe educational excellence is not measured by standardized pressure, but by the depth of a child’s understanding and their capacity to act with integrity. 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Situated in the clean, invigorating air of the Islamabad hills along Simly Dam Road, our campus shields children from urban commotion while keeping them tethered to modern scientific, technological, and linguistic global standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-editorial text-2xl font-bold text-[#081226] tabular-nums">18 Years</div>
                <div className="text-xs text-slate-500 mt-0.5">Consecutive leadership in Islamabad</div>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-editorial text-2xl font-bold text-[#081226] tabular-nums">14:1</div>
                <div className="text-xs text-slate-500 mt-0.5">Individual scholar-to-educator ratio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institutional Values */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-editorial text-3xl font-bold text-[#081226]">
              Our Guiding Pillars
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Four timeless principles that inform every lesson, assembly, and laboratory experiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#081226] text-gold-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Intellectual Rigor</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Deep mastery over superficial memorization. Cultivating analytical inquiry, scientific skepticism, and mathematical precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#081226] text-gold-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Moral Architecture</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Uncompromising honesty, civic responsibility, respect for elders, and empathy for community, rooted in high ethical traditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#081226] text-gold-400 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Global Perspective</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Bilingual English elocution, coding, robotics, and Model United Nations preparing scholars to thrive in international universities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#081226] text-gold-400 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Pastoral Care</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-2">
                Every child is known, protected, and championed by seasoned faculty who nurture both confidence and emotional security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">
            Eighteen Years of Growth
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#081226] mt-1">
            Chronology of Educational Leadership
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-12">
              <div className="absolute left-3 w-5 h-5 rounded-full bg-[#081226] border-4 border-white shadow-sm -translate-x-1/2 mt-1" />
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-full">
                <div className="font-mono text-xs font-bold text-gold-600 tabular-nums uppercase">
                  {m.year}
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#081226] mt-0.5">
                  {m.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mt-1.5">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Security & Pastoral Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#081226] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Safety &amp; Well-being First
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold mt-2">
                Fortified Campus Security &amp; Medical Safeguards
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed">
                We understand that peace of mind is essential for parents. Simly Dam Road Campus enforces multi-tier security surveillance, dedicated armed perimeter defense, and rapid medical response protocols.
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 CCTV surveillance covering all entrance gates, hallways, and grounds</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Controlled visitor clearance &amp; biometric parent pickup authorisations</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>On-campus first-aid infirmary with certified nurse &amp; emergency doctor on call</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-8">
        <button
          onClick={onOpenApplyModal}
          className="px-6 py-3 text-xs font-semibold text-white bg-[#081226] hover:bg-[#132752] rounded-md transition-colors shadow-lg"
        >
          Book a Campus Walk-Through with Our Directorate
        </button>
      </div>
    </div>
  );
};
