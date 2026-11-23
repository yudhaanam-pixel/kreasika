import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/contentData.ts';

interface PortfolioSectionProps {
  onContactClick: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Semua' },
    { id: 'photography', label: 'Fotografi Produk' },
    { id: 'videography', label: 'Video Sinematik' },
    { id: 'design', label: 'Branding & Kemasan' },
  ];

  const filteredProjects = activeTab === 'all'
    ? PORTFOLIO_DATA.slice(0, 3)
    : PORTFOLIO_DATA.filter((p) => p.category === activeTab).slice(0, 3);

  return (
    <section id="portofolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Portofolio & Hasil Karya Kami
          </h2>
          <p className="text-sm text-slate-600">
            Eksplorasi hasil karya fotografi komersial, video kampanye, dan identitas visual brand kami.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-950 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Columns matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="aspect-16/10 bg-slate-900 overflow-hidden">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span>{project.categoryLabel}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {project.impactMetric}
                  </span>
                  <button
                    onClick={onContactClick}
                    className="text-xs font-bold text-slate-900 hover:text-indigo-600"
                  >
                    Detail →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
