import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navy Container matching Figma */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-14 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Siap Tingkatkan Nilai Jual Brand Anda Hari Ini?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Konsultasikan kebutuhan visual dan strategi kreatif brand Anda bersama tim spesialis kami tanpa biaya komitmen awal.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all active:scale-95 shadow-md"
            >
              <span>Hubungi Kami Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
