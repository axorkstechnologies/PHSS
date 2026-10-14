import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdmissionFormState } from '../types';
import { X, CheckCircle2, MessageCircle, GraduationCap, Building2 } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [formData, setFormData] = useState<AdmissionFormState>({
    studentName: '',
    dateOfBirth: '',
    gender: 'Male',
    gradeApplyingFor: 'Montessori (Ages 2.5 - 5)',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    residentialArea: '',
    previousSchool: '',
    notes: '',
    preferredCampusVisitDate: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateApplicationCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `PHSS-${new Date().getFullYear()}-${randomNum}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = generateApplicationCode();
    setSubmittedCode(code);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*Pearl Hillian Admission Application*\n` +
      `Campus: Simly Dam Road Campus, Islamabad\n` +
      `Student: ${formData.studentName || 'Not specified'}\n` +
      `Grade Applying: ${formData.gradeApplyingFor}\n` +
      `DOB: ${formData.dateOfBirth || 'N/A'}\n` +
      `Parent: ${formData.parentName}\n` +
      `Phone: ${formData.parentPhone}\n` +
      `Email: ${formData.parentEmail}\n` +
      `Area: ${formData.residentialArea}\n` +
      `Preferred Visit: ${formData.preferredCampusVisitDate || 'Flexible'}\n` +
      `Notes: ${formData.notes || 'None'}`;

    window.open(`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmittedCode(generateApplicationCode());
  };

  const resetForm = () => {
    setSubmittedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b1329]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header: Deep Blackish Navy */}
        <div className="bg-[#0b1329] text-white px-8 py-6 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#f59e0b] uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Simly Dam Road Campus · Admissions 2025–26</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold mt-1">
              Online Admission Application
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-8 overflow-y-auto">
          {submittedCode ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-editorial text-3xl font-bold text-[#0b1329]">
                Application Successfully Registered
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto leading-relaxed">
                Thank you for applying to Pearl Hillian School System. Our Admissions Directorate will review your application and contact you within 24 hours to schedule your diagnostic assessment and campus walk-through.
              </p>

              <div className="my-6 p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto text-center">
                <div className="text-xs uppercase tracking-widest text-[#0b1329] font-bold">Application Reference Code</div>
                <div className="font-editorial text-2xl font-bold text-[#0b1329] mt-1 tabular-nums">
                  {submittedCode}
                </div>
                <div className="text-xs text-slate-500 mt-1">Please quote this number during campus visits</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Admissions Desk, I submitted online application with Reference: ${submittedCode} for student: ${formData.studentName}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Verify via Admissions WhatsApp</span>
                </a>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#0b1329] shrink-0" />
                <span>
                  Applications are currently active for Session 2025–2026 across Montessori, Primary, Middle, and Matriculation streams.
                </span>
              </div>

              {/* Scholar Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1329] border-b border-slate-100 pb-2">
                  1. Scholar Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="e.g. Ibrahim Khan"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Grade Applying For *
                    </label>
                    <select
                      name="gradeApplyingFor"
                      value={formData.gradeApplyingFor}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none bg-white transition-all"
                    >
                      <option value="Montessori Playgroup (Age 2.5 - 3.5)">Montessori Playgroup (Age 2.5 - 3.5)</option>
                      <option value="Montessori Nursery (Age 3.5 - 4.5)">Montessori Nursery (Age 3.5 - 4.5)</option>
                      <option value="Montessori Prep (Age 4.5 - 5.5)">Montessori Prep (Age 4.5 - 5.5)</option>
                      <option value="Grade 1 (Elementary)">Grade 1 (Elementary)</option>
                      <option value="Grade 2 - 3 (Primary)">Grade 2 - 3 (Primary)</option>
                      <option value="Grade 4 - 5 (Primary)">Grade 4 - 5 (Primary)</option>
                      <option value="Grade 6 - 8 (Middle School)">Grade 6 - 8 (Middle School)</option>
                      <option value="Grade 9 - 10 (SSC FBISE Matric Stream)">Grade 9 - 10 (SSC FBISE Matric Stream)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none bg-white transition-all"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1329] border-b border-slate-100 pb-2">
                  2. Parent / Guardian Contact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. A. Qureshi"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number (Active Mobile) *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      required
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="e.g. 0300 1234567"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Residential Area / Islamabad Sector
                    </label>
                    <input
                      type="text"
                      name="residentialArea"
                      value={formData.residentialArea}
                      onChange={handleChange}
                      placeholder="e.g. Simly Dam Road / Bhara Kahu / Park View"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Campus Tour Preference */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0b1329] border-b border-slate-100 pb-2">
                  3. Campus Visit &amp; Observations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred Date for Campus Tour
                    </label>
                    <input
                      type="date"
                      name="preferredCampusVisitDate"
                      value={formData.preferredCampusVisitDate}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Previous School Attended (If any)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="Previous institution name"
                      className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Special Notes or Inquiries
                  </label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific academic questions, transport route requirements, or sibling information..."
                    className="w-full text-sm px-4 py-2.5 border border-slate-300 rounded-xl focus:border-[#0b1329] focus:ring-2 focus:ring-[#0b1329]/20 outline-none resize-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Actions */}
              <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Direct Hotline: <strong className="text-[#0b1329]">{SCHOOL_INFO.phone}</strong>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 text-xs sm:text-sm font-bold text-[#0b1329] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
