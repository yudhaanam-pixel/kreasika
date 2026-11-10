import React from 'react';
import { Camera, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Col 1 */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                Kreativa<span className="text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Partner visual dan multimedia strategis untuk pertumbuhan brand masa kini. Menghasilkan fotografi produk berkelas, video sinematik, dan strategi konten berkonversi tinggi.
            </p>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-bold uppercase tracking-wider text-white">Layanan</p>
            <ul className="space-y-1.5">
              <li><a href="#layanan" className="hover:text-white">Fotografi Produk</a></li>
              <li><a href="#layanan" className="hover:text-white">Video Sinematik</a></li>
              <li><a href="#layanan" className="hover:text-white">Identitas Brand</a></li>
              <li><a href="#layanan" className="hover:text-white">Media Sosial</a></li>
              <li><a href="#layanan" className="hover:text-white">Web Landing Page</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-2 space-y-2.5">
            <p className="font-bold uppercase tracking-wider text-white">Perusahaan</p>
            <ul className="space-y-1.5">
              <li><a href="#beranda" className="hover:text-white">Beranda</a></li>
              <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
              <li><a href="#keunggulan" className="hover:text-white">Keunggulan</a></li>
              <li><a href="#portofolio" className="hover:text-white">Portofolio</a></li>
              <li><a href="#harga" className="hover:text-white">Paket Harga</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="lg:col-span-3 space-y-2.5">
            <p className="font-bold uppercase tracking-wider text-white">Kontak Studio</p>
            <div className="space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Jl. Senopati No. 45, Jakarta Selatan</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+62 812-3456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>halo@kreativastudio.id</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Kreativa Studio. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-4">
            <a href="#faq" className="hover:text-slate-400">Syarat & Ketentuan</a>
            <a href="#faq" className="hover:text-slate-400">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
