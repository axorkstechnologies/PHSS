import React, { useState } from 'react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { PageTab } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Navigation,
  Sparkles
} from 'lucide-react';

interface ContactViewProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenApplyModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*Pearl Hillian Campus Inquiry*\n` +
      `From: ${formData.name || 'Prospective Parent'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Subject: ${formData.subject}\n` +
      `Message: ${formData.message || 'I would like to inquire about admission availability and a campus tour.'}`;
    window.open(`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-20 sm:pb-24 w-full overflow-x-hidden">
      {/* Editorial Header */}
      <section className="bg-gradient-to-br from-[#152540] via-[#1b3054] to-[#213c68] text-white py-14 sm:py-20 lg:py-28 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20 max-w-full">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Direct Admissions &amp; Campus Directorate · Islamabad</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Connect With Simly Dam Road Campus
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            Our admissions counselors and campus administrators are delighted to assist with grade placements, admissions requirements, and private tour reservations.
          </p>
        </div>
      </section>

      {/* Primary Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Official Telephone</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Direct admission desk and reception</p>
              <div className="mt-4 font-bold text-base text-[#152540]">
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-[#bf923a] transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Monday – Saturday 8:00 AM – 3:00 PM
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Admissions WhatsApp</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Instant messaging &amp; prospectus delivery</p>
              <div className="mt-4 font-bold text-base text-emerald-700">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {SCHOOL_INFO.whatsapp}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-emerald-700 font-semibold">
              Verified Official Channel
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1b3773] flex items-center justify-center mb-5 border border-blue-200">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Official Email</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Formal inquiries &amp; admissions</p>
              <div className="mt-4 font-bold text-xs sm:text-sm text-[#152540] break-all">
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-[#bf923a] transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
              24-hour response turnaround
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#ebe3d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#bf923a] flex items-center justify-center mb-5 border border-amber-200">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#152540]">Campus Location</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Simly Dam Road Campus</p>
              <div className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                Islamabad Capital Territory, Pakistan
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
              Accessible from Bhara Kahu &amp; Park View
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Directions Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-12 rounded-2xl sm:rounded-3xl border border-[#ebe3d5] shadow-sm">
            <div className="mb-6 sm:mb-8">
              <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#152540]">
                Send an Admissions Inquiry
              </h2>
              <p className="text-slate-600 text-xs sm:text-base mt-2">
                Fill out the form below or dispatch your inquiry instantly via WhatsApp.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-6 sm:p-8 text-center bg-[#faf8f4] rounded-2xl border border-[#ebe3d5]">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#152540]">Message Received</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto">
                  Thank you for reaching out to Pearl Hillian School System. An admissions officer will contact you shortly.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-6 px-6 py-2.5 text-xs font-bold text-slate-700 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Salman Khan"
                      className="w-full text-sm px-4 py-3 border border-slate-300 rounded-xl focus:border-[#152540] focus:ring-2 focus:ring-[#152540]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full text-sm px-4 py-3 border border-slate-300 rounded-xl focus:border-[#152540] focus:ring-2 focus:ring-[#152540]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="salman@example.com"
                      className="w-full text-sm px-4 py-3 border border-slate-300 rounded-xl focus:border-[#152540] focus:ring-2 focus:ring-[#152540]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Subject of Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-sm px-4 py-3 border border-slate-300 rounded-xl focus:border-[#152540] focus:ring-2 focus:ring-[#152540]/20 outline-none bg-white transition-all"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry (Session 2025–26)</option>
                      <option value="Montessori Placement">Montessori Wing Placement</option>
                      <option value="Campus Tour Booking">Book a Private Campus Tour</option>
                      <option value="Fee Structure & Transport">Fee Structure &amp; Transport Shuttles</option>
                      <option value="Other Inquiries">General School Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Message or Child Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include your child's age, intended grade, and any specific questions you may have..."
                    className="w-full text-sm px-4 py-3 border border-slate-300 rounded-xl focus:border-[#152540] focus:ring-2 focus:ring-[#152540]/20 outline-none resize-none transition-all"
                  />
                </div>

                <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send Message via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#152540] hover:bg-[#213c68] rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-center"
                  >
                    <Send className="w-4 h-4 text-[#eacd72]" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Directions & Campus Access Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#152540] to-[#213c68] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl border border-white/10 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#f2dc9e] text-xs font-bold uppercase tracking-wider border border-white/20">
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigating to Campus</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                Simly Dam Road Campus Location
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Strategically positioned along Simly Dam Road, Islamabad. Our campus offers a pristine natural mountain sanctuary away from congested thoroughfares while remaining easily reachable.
              </p>

              <div className="pt-2 space-y-3 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/15">
                  <strong className="text-white">From Bhara Kahu:</strong> Approximately 8–10 minutes scenic drive along Simly Dam Road.
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/15">
                  <strong className="text-white">From Chak Shahzad / Park View:</strong> Direct connectivity with safe school shuttle vans.
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/15">
                  <strong className="text-white">Admissions Desk Hours:</strong> Mon – Sat: 8:00 AM – 3:00 PM.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-3.5 text-xs sm:text-sm font-bold text-[#152540] bg-white hover:bg-[#faf8f4] rounded-full text-center transition-all shadow-md"
                >
                  Schedule an Accompanied Campus Walk-Through
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Parent FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#bf923a] text-xs font-bold uppercase tracking-wider border border-[#ebe3d5] mb-3">
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#152540]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ebe3d5] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-base text-[#152540]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 transition-transform shrink-0 ${
                      isOpen ? 'transform rotate-180 text-[#bf923a]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
