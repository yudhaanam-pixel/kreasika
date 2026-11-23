import React from 'react';
import { Camera, Film, Sparkles, Share2, Layout, ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData.ts';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Camera':
        return <Camera className="w-5 h-5 text-slate-900" />;
      case 'Film':
        return <Film className="w-5 h-5 text-slate-900" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-900" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-slate-900" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-slate-900" />;
      default:
        return <Camera className="w-5 h-5 text-slate-900" />;
    }
  };

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Layanan Multimedia untuk Bisnis Anda
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Solusi komprehensif dari pra-produksi, produksi hingga pasca-produksi untuk semua kebutuhan visual brand Anda.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-indigo-600 transition-colors shrink-0 group"
          >
            <span>Lihat Semua Layanan</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Cards Grid in exact 3 + 2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx >= 3 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title & Desc */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom link */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">{service.priceStartingFrom}</span>
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
