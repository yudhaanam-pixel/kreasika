import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/contentData.ts';

interface PricingSectionProps {
  onContactClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onContactClick }) => {
  const [billingType, setBillingType] = useState<'project' | 'monthly'>('project');

  return (
    <section id="harga" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Paket & Biaya Investasi
          </h2>
          <p className="text-sm text-slate-600">
            Pilih paket yang paling cocok untuk fase pertumbuhan brand dan bisnis Anda.
          </p>
        </div>

        {/* Simple Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-full flex items-center border border-slate-200">
            <button
              onClick={() => setBillingType('project')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingType === 'project'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Per Proyek
            </button>
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingType === 'monthly'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bulanan (Hemat 15%)
            </button>
          </div>
        </div>

        {/* 3 Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingType === 'monthly' ? plan.monthlyPrice : plan.projectPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'bg-slate-950 text-white shadow-xl lg:-translate-y-1'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-2xs'
                }`}
              >
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        plan.isPopular ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-3 border-t border-slate-100/10">
                    <span className="text-3xl font-extrabold tracking-tight">{price}</span>
                    <span
                      className={`text-xs ml-1 font-medium ${
                        plan.isPopular ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {billingType === 'monthly' ? '/ bln' : '/ sesi'}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100/10 text-xs">
                    {plan.features.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            plan.isPopular ? 'text-indigo-400' : 'text-slate-900'
                          }`}
                        />
                        <span
                          className={
                            plan.isPopular ? 'text-slate-200' : 'text-slate-700'
                          }
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-100/10">
                  <button
                    onClick={onContactClick}
                    className={`w-full py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      plan.isPopular
                        ? 'bg-white text-slate-950 hover:bg-slate-100'
                        : 'bg-slate-950 text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
