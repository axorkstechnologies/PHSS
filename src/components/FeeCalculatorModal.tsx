import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { X, Calculator, ShieldCheck } from 'lucide-react';

interface FeeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApplyModal: () => void;
}

export const FeeCalculatorModal: React.FC<FeeCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenApplyModal,
}) => {
  const [gradeTier, setGradeTier] = useState<'montessori' | 'primary' | 'middle' | 'secondary'>('montessori');
  const [includeTransport, setIncludeTransport] = useState<boolean>(true);
  const [numberOfSiblings, setNumberOfSiblings] = useState<number>(0);
  const [hasAdmissionFee, setHasAdmissionFee] = useState<boolean>(true);

  if (!isOpen) return null;

  // Monthly Tuition by Tier
  const baseTuition = {
    montessori: 9500,
    primary: 11000,
    middle: 13500,
    secondary: 16500,
  }[gradeTier];

  // Transport fee estimate for Islamabad Simly Dam route
  const transportCost = includeTransport ? 4500 : 0;

  // Lab and resources fee
  const labResourceFee = gradeTier === 'secondary' ? 2000 : gradeTier === 'middle' ? 1200 : 800;

  // Sibling concession (15% per additional sibling)
  const siblingDiscount = numberOfSiblings > 0 ? Math.round(baseTuition * 0.15) : 0;

  const monthlyNet = baseTuition + transportCost + labResourceFee - siblingDiscount;
  const oneTimeAdmissionRegistration = hasAdmissionFee ? 18000 : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b1329]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0b1329] text-white px-8 py-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#f59e0b] border border-white/10">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-bold">Tuition &amp; Fee Estimator</h3>
              <p className="text-xs text-slate-300">Session 2025–2026 · Simly Dam Road Campus</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Tier Selection */}
          <div>
            <label className="block font-bold text-slate-800 mb-2.5">Select Academic Grade Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'montessori', label: 'Montessori', detail: 'Ages 2.5–5' },
                { id: 'primary', label: 'Primary', detail: 'Grades 1–5' },
                { id: 'middle', label: 'Middle', detail: 'Grades 6–8' },
                { id: 'secondary', label: 'Matric SSC', detail: 'Grades 9–10' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setGradeTier(tier.id as any)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    gradeTier === tier.id
                      ? 'border-[#0b1329] bg-[#0b1329] text-white shadow-md'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">{tier.label}</div>
                  <div className={`text-[11px] mt-0.5 ${gradeTier === tier.id ? 'text-[#f59e0b]' : 'text-slate-500'}`}>
                    {tier.detail}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-bold text-slate-800 text-sm">Campus Transport Service</div>
                <div className="text-xs text-slate-500 mt-0.5">Dedicated van shuttles (Simly Dam Rd, Bhara Kahu, Park View)</div>
              </div>
              <input
                type="checkbox"
                checked={includeTransport}
                onChange={(e) => setIncludeTransport(e.target.checked)}
                className="w-5 h-5 text-[#0b1329] rounded border-slate-300 focus:ring-[#0b1329]"
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-bold text-slate-800 text-sm">Sibling Concession (15%)</div>
                <div className="text-xs text-slate-500 mt-0.5">Concession applied on tuition for enrolled brother/sister</div>
              </div>
              <select
                value={numberOfSiblings}
                onChange={(e) => setNumberOfSiblings(Number(e.target.value))}
                className="px-3 py-1.5 border border-slate-300 rounded-xl text-xs sm:text-sm bg-white"
              >
                <option value={0}>0 Siblings</option>
                <option value={1}>1 Sibling (15% Off)</option>
                <option value={2}>2+ Siblings</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-bold text-slate-800 text-sm">Include One-Time Registration Fee</div>
                <div className="text-xs text-slate-500 mt-0.5">Security deposit, admission kit &amp; initial file processing</div>
              </div>
              <input
                type="checkbox"
                checked={hasAdmissionFee}
                onChange={(e) => setHasAdmissionFee(e.target.checked)}
                className="w-5 h-5 text-[#0b1329] rounded border-slate-300 focus:ring-[#0b1329]"
              />
            </div>
          </div>

          {/* Breakdown summary */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
            <div className="flex justify-between text-slate-600 text-sm">
              <span>Base Monthly Tuition:</span>
              <span className="font-semibold font-mono tabular-nums">PKR {baseTuition.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 text-sm">
              <span>STEM Lab &amp; Learning Materials:</span>
              <span className="font-semibold font-mono tabular-nums">PKR {labResourceFee.toLocaleString()}</span>
            </div>
            {includeTransport && (
              <div className="flex justify-between text-slate-600 text-sm">
                <span>Safe Transport Van Service:</span>
                <span className="font-semibold font-mono tabular-nums">PKR {transportCost.toLocaleString()}</span>
              </div>
            )}
            {siblingDiscount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold text-sm">
                <span>Sibling Discount (15%):</span>
                <span className="font-mono tabular-nums">- PKR {siblingDiscount.toLocaleString()}</span>
              </div>
            )}
            <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
              <span className="font-bold text-slate-900 text-base">Estimated Monthly Payable:</span>
              <span className="font-editorial text-3xl font-bold text-[#0b1329] font-mono tabular-nums">
                PKR {monthlyNet.toLocaleString()}
              </span>
            </div>
            {hasAdmissionFee && (
              <div className="text-xs text-slate-500 pt-1 flex justify-between">
                <span>One-Time Admission &amp; Registration:</span>
                <span className="font-mono tabular-nums">PKR {oneTimeAdmissionRegistration.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" />
            <span>Merit-based scholarships available for outstanding academic &amp; sports performers.</span>
          </div>

          {/* Action: Yellow button */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApplyModal();
              }}
              className="px-6 py-2.5 text-xs sm:text-sm font-bold text-[#0b1329] bg-[#f59e0b] hover:bg-[#d97706] rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Apply With This Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
