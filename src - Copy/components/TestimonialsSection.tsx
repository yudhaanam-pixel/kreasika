import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/contentData.ts';

export const TestimonialsSection: React.FC = () => {
  const featured = TESTIMONIALS_DATA[0];
  const others = TESTIMONIALS_DATA.slice(1, 3);

  return (
    <section id="testimoni" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Cerita Sukses Klien Kami
          </h2>
          <p className="text-sm text-slate-600">
            Dengarkan apa kata para pemilik bisnis yang telah mempercayakan visual brand mereka pada Kreativa.
          </p>
        </div>

        {/* Big Featured Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-square bg-slate-900">
                <img
                  src={featured.avatarUrl}
                  alt={featured.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                "{featured.content}"
              </blockquote>

              <div>
                <p className="text-sm font-extrabold text-slate-950">{featured.name}</p>
                <p className="text-xs text-slate-500">{featured.role}, {featured.company}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-left">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">+280%</p>
                  <p className="text-[11px] text-slate-500">Konversi Penjualan</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">1.5M+</p>
                  <p className="text-[11px] text-slate-500">Impresi Video</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">99%</p>
                  <p className="text-[11px] text-slate-500">Kepuasan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-3"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{item.content}"
              </p>
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900">{item.name}</p>
                <p className="text-[11px] text-slate-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
