import React from 'react';
import { BRAND_PARTNERS } from '../data/contentData.ts';

export const BrandsMarquee: React.FC = () => {
  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Dipercaya oleh 500+ Brand Terkemuka, Retailer, & UMKM Indonesia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {BRAND_PARTNERS.map((brand, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors cursor-default"
            >
              <span className="font-black text-sm sm:text-base tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                {brand.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
