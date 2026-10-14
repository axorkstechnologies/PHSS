import React, { useState } from 'react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { PageTab } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  ChevronDown,
  Navigation
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
    <div className="space-y-20 pb-20">
      {/* Editorial Header */}
      <section className="bg-[#081226] text-white py-16 lg:py-24 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase">
            <span>Direct Admissions &amp; Campus Directorate</span>
            <span aria-hidden="true">·</span>
            <span>Islamabad</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Connect With Simly Dam Road Campus
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Our admissions counselors and campus administrators are delighted to assist with grade placements, admissions requirements, and private tour reservations.
          </p>
        </div>
      </section>

      {/* Primary Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081226] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Official Telephone</h3>
              <p className="text-slate-500 text-xs mt-1">Direct admission desk and reception</p>
              <div className="mt-3 font-semibold text-sm text-slate-900">
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-gold-600 transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Monday – Saturday 8:00 AM – 3:00 PM
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Admissions WhatsApp</h3>
              <p className="text-slate-500 text-xs mt-1">Instant messaging &amp; prospectus delivery</p>
              <div className="mt-3 font-semibold text-sm text-emerald-700">
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
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-medium">
              Verified Official Channel
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081226] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Official Email</h3>
              <p className="text-slate-500 text-xs mt-1">Formal inquiries &amp; administrative communication</p>
              <div className="mt-3 font-semibold text-xs text-slate-900 break-all">
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-gold-600 transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              24-hour response turnaround
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#081226] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-gold-600" />
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#081226]">Campus Location</h3>
              <p className="text-slate-500 text-xs mt-1">Simly Dam Road Campus</p>
              <div className="mt-3 text-xs text-slate-700 leading-relaxed font-medium">
                Islamabad Capital Territory, Pakistan
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              Easily accessible from Bhara Kahu &amp; Park View
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Directions Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#081226]">
                Send an Admissions Inquiry
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill out the form below or dispatch your inquiry instantly via WhatsApp.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#081226]">Message Received</h3>
                <p className="text-slate-600 text-xs mt-1 max-w-sm mx-auto">
                  Thank you for reaching out to Pearl Hillian School System. An admissions officer will contact you shortly.
                </p>
                <button
                  onClick={() => setInquirySent(false)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-200 hover:bg-slate-300 rounded"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Salman Khan"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:border-[#081226] focus:ring-1 focus:ring-[#081226] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 1234567"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:border-[#081226] focus:ring-1 focus:ring-[#081226] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="salman@example.com"
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:border-[#081226] focus:ring-1 focus:ring-[#081226] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Subject of Inquiry</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:border-[#081226] focus:ring-1 focus:ring-[#081226] outline-none bg-white"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Message or Child Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include your child's age, intended grade, and any specific questions you may have..."
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:border-[#081226] focus:ring-1 focus:ring-[#081226] outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send Message via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-[#081226] hover:bg-[#132752] rounded transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Directions & Campus Access Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#081226] text-white p-8 rounded-2xl shadow-xl border border-slate-700 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
                <Navigation className="w-4 h-4" />
                <span>Navigating to Campus</span>
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white">
                Simly Dam Road Campus Location
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Strategically positioned along Simly Dam Road, Islamabad. Our campus offers a pristine natural mountain sanctuary away from congested thoroughfares while remaining easily reachable.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-300">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-white">From Bhara Kahu:</span> Approximately 8–10 minutes drive along Simly Dam Road.
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-white">From Chak Shahzad / Park View:</span> Direct connectivity with school shuttle transport options.
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-bold text-white">Admissions Desk Hours:</span> Mon – Sat: 8:00 AM – 3:00 PM.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-2.5 text-xs font-semibold text-[#081226] bg-white hover:bg-slate-100 rounded text-center transition-colors"
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
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-slate-500">
            Common Inquiries
          </div>
          <h2 className="font-editorial text-3xl font-bold text-[#081226] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-semibold text-xs sm:text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
