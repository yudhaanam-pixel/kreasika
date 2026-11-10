import React from 'react';
import { Camera, Award, RefreshCw, DollarSign } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Camera className="w-5 h-5 text-slate-900" />,
      title: 'Peralatan Standar Industri',
      desc: 'Kamera sinema full-frame, lensa prime, dan lighting studio profesional untuk kualitas visual maksimal.',
    },
    {
      icon: <Award className="w-5 h-5 text-slate-900" />,
      title: 'Tim Kreatif Berpengalaman',
      desc: 'Fotografer, videografer, dan art director berdedikasi yang memahami tren visual masa kini.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-slate-900" />,
      title: 'Revisi Fleksibel & Cepat',
      desc: 'Proses review transparan dengan jaminan revisi agar hasil akhir tepat sesuai harapan Anda.',
    },
    {
      icon: <DollarSign className="w-5 h-5 text-slate-900" />,
      title: 'Harga Transparan',
      desc: 'Paket terstruktur tanpa biaya tersembunyi dengan hak cipta komersial penuh untuk bisnis Anda.',
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Mengapa Memilih Kreativa?
          </h2>
          <p className="text-sm text-slate-600">
            Kelebihan kami dalam menciptakan hasil visual berdampak tinggi bagi bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
