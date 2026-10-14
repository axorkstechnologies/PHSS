import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { X, Calculator, ShieldCheck, Check } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040915]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#081226] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-gold-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-editorial text-xl font-bold">Tuition & Fee Estimator</h3>
              <p className="text-[11px] text-slate-300">Session 2025–2026 · Simly Dam Road Campus</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700">
          {/* Tier Selection */}
          <div>
            <label className="block font-semibold text-slate-800 mb-2">Select Academic Grade Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    gradeTier === tier.id
                      ? 'border-[#081226] bg-[#081226] text-white shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-bold">{tier.label}</div>
                  <div className={`text-[10px] ${gradeTier === tier.id ? 'text-slate-300' : 'text-slate-400'}`}>
                    {tier.detail}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <div className="font-semibold text-slate-800">Campus Transport Service</div>
                <div className="text-[11px] text-slate-500">Dedicated van shuttles (Simly Dam Rd, Bhara Kahu, Park View)</div>
              </div>
              <input
                type="checkbox"
                checked={includeTransport}
                onChange={(e) => setIncludeTransport(e.target.checked)}
                className="w-4 h-4 text-[#081226] rounded border-slate-300"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <div className="font-semibold text-slate-800">Sibling Concession (15%)</div>
                <div className="text-[11px] text-slate-500">Concession applied on tuition for enrolled brother/sister</div>
              </div>
              <select
                value={numberOfSiblings}
                onChange={(e) => setNumberOfSiblings(Number(e.target.value))}
                className="px-2 py-1 border border-slate-300 rounded text-xs bg-white"
              >
                <option value={0}>0 Siblings</option>
                <option value={1}>1 Sibling (15% Off)</option>
                <option value={2}>2+ Siblings</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <div className="font-semibold text-slate-800">Include One-Time Registration Fee</div>
                <div className="text-[11px] text-slate-500">Security deposit, admission kit & initial file processing</div>
              </div>
              <input
                type="checkbox"
                checked={hasAdmissionFee}
                onChange={(e) => setHasAdmissionFee(e.target.checked)}
                className="w-4 h-4 text-[#081226] rounded border-slate-300"
              />
            </div>
          </div>

          {/* Breakdown summary */}
          <div className="p-4 bg-slate-100/80 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-slate-600">
              <span>Base Monthly Tuition:</span>
              <span className="font-medium font-mono tabular-nums">PKR {baseTuition.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>STEM Lab & Learning Materials:</span>
              <span className="font-medium font-mono tabular-nums">PKR {labResourceFee.toLocaleString()}</span>
            </div>
            {includeTransport && (
              <div className="flex justify-between text-slate-600">
                <span>Safe Transport Van Service:</span>
                <span className="font-medium font-mono tabular-nums">PKR {transportCost.toLocaleString()}</span>
              </div>
            )}
            {siblingDiscount > 0 && (
              <div className="flex justify-between text-emerald-700 font-medium">
                <span>Sibling Discount (15%):</span>
                <span className="font-mono tabular-nums">- PKR {siblingDiscount.toLocaleString()}</span>
              </div>
            )}
            <div className="pt-2 border-t border-slate-300 flex justify-between items-baseline">
              <span className="font-bold text-slate-900 text-sm">Estimated Monthly Payable:</span>
              <span className="font-editorial text-2xl font-bold text-[#081226] font-mono tabular-nums">
                PKR {monthlyNet.toLocaleString()}
              </span>
            </div>
            {hasAdmissionFee && (
              <div className="text-[11px] text-slate-500 pt-1 flex justify-between">
                <span>One-Time Admission & Registration:</span>
                <span className="font-mono tabular-nums">PKR {oneTimeAdmissionRegistration.toLocaleString()}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Merit-based scholarships available for outstanding academic & sports performers.</span>
          </div>

          {/* Action */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApplyModal();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#081226] rounded hover:bg-[#132752] transition-colors"
            >
              Apply With This Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
