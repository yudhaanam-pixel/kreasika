import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  return (
    <section id="beranda" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Solusi Kreatif & Multimedia Terpadu</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Kreasikan Konten, <br />
              Kembangkan Bisnis.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tingkatkan daya tarik visual brand Anda dengan fotografi produk komersial, video reels sinematik, desain identitas brand, dan pengelolaan media sosial profesional untuk mendorong konversi penjualan.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all active:scale-95 shadow-xs"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#layanan"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stats Under Headline */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-8 sm:gap-12 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">500+</p>
                <p className="text-xs text-slate-500 font-medium">Klien Puas</p>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">1.2k+</p>
                <p className="text-xs text-slate-500 font-medium">Proyek Selesai</p>
              </div>
              <div className="w-px h-8 bg-slate-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-950">4.9 / 5</p>
                <p className="text-xs text-slate-500 font-medium">Rating Kualitas</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mockup Image with 2 clean floating badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-5/4 shadow-xl border border-slate-200/80 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80"
                  alt="Studio photography setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-3 bg-white rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">★ 4.9 (1.2k+ Ulasan)</p>
                  <p className="text-[10px] text-slate-500">Kualitas Terjamin</p>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-white rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Bergaransi</p>
                  <p className="text-[10px] text-slate-500">Sesuai Brief & Moodboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
