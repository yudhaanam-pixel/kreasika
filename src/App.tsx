import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Star,
  Zap,
  Camera,
  Video,
  LayoutGrid,
  Wand2,
  Lightbulb,
  Check,
  X,
  FileText,
  Truck,
  Sliders,
  CloudUpload,
  MessageSquare,
  Calendar,
  Eye,
  TrendingUp,
  ShoppingBag,
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'fashion' | 'beauty'>('all');

  const handleWhatsAppClick = (planName?: string) => {
    const text = planName
      ? `Halo KREASIKA! Saya tertarik untuk konsultasi ${planName}. Boleh minta info detail dan jadwal slot produksinya?`
      : 'Halo KREASIKA! Saya ingin konsultasi visual brand untuk UMKM saya.';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  const portfolioItems = [
    {
      id: 'kopi-nusantara',
      category: 'food',
      tagTop: 'Foto Produk & Reels',
      tagBottom: '📈 +185% Konversi Shopee',
      imgSrc: '/assets/porto_kopi.png',
      title: 'Kopi Nusantara Roastery',
      desc: 'Revamp visual 12 SKU kemasan baru dan pembuatan 4 video storytelling rasa untuk peluncuran seasonal blend.',
      location: 'Bandung, Jawa Barat',
    },
    {
      id: 'batik-rina',
      category: 'fashion',
      tagTop: 'Video TikTok Campaign',
      tagBottom: '▶ 1.2M+ Views TikTok',
      imgSrc: '/assets/porto_batik.png',
      title: 'Batik Rina Craft Heritage',
      desc: 'Seri video proses membatik manual yang dikemas modern dan menyentuh sisi emosional generasi muda.',
      location: 'Yogyakarta',
    },
    {
      id: 'alura-botanical',
      category: 'beauty',
      tagTop: 'Brand Identity & Feeds',
      tagBottom: '🛍 Sold Out 2.500 Botol',
      imgSrc: '/assets/porto_alura.png',
      title: 'Alura Botanical Glow',
      desc: 'Paket 30 konten feeds visual aesthetic dan template carousel panduan pemakaian serum natural brightening.',
      location: 'Jakarta Selatan',
    },
  ];

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-purple-600 selection:text-white">
      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>✦ MITRA KREATIF #1 UNTUK UMKM INDONESIA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Kreasikan Konten, <br />
              Kembangkan Bisnis.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              KREASIKA hadir membantu pelaku UMKM dan brand lokal menciptakan konten visual profesional—mulai dari foto katalog estetik, video reels viral, hingga feeds media sosial yang siap tingkatkan omzet penjualan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => handleWhatsAppClick()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all active:scale-95 shadow-xs"
              >
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#layanan"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
              >
                <Compass className="w-4 h-4 text-slate-500" />
                <span>Lihat Layanan</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 sm:gap-10 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-slate-800" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950 leading-none">500+ UMKM</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Telah Berkembang</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950 leading-none">4.9 / 5.0</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Rating Klien UMKM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950 leading-none">3 – 5 Hari</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pengerjaan Kilat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Card matching exact mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img
                src="/assets/hero_photo_full.png"
                alt="Creative Studio Setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SECTION: Layanan Kreatif untuk Kebutuhan Bisnis Anda
         ========================================================================= */}
      <section id="layanan" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
              SOLUSI END-TO-END
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Layanan Kreatif untuk Kebutuhan Bisnis Anda
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Disesuaikan khusus kebutuhan jualan di marketplace, Instagram, Shopee Video, hingga TikTok Shop.
            </p>
          </div>

          <a
            href="#harga"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-purple-600 transition-colors shrink-0"
          >
            <span>Jelajahi Semua Spesifikasi</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 5 Cards Layout (3 Top + 2 Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Foto Produk */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  Paling Diminati
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Foto Produk</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Tampilkan produk secara jernih, bernilai tinggi, dan memikat calon pelanggan sejak impresi pertama.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Katalog Estetik
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Ghost Mannequin
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Flatlay Props
                </span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Layanan Foto Produk')}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-purple-600"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Video Promosi */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Video className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  Viral Ready
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Video Promosi</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Format video pendek dinamis dengan hook tajam 3 detik awal, siap FYP dan memicu aksi beli spontan.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Instagram Reels
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  TikTok FYP Hook
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Shopee Live Format
                </span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Layanan Video Promosi')}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-purple-600"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Desain Konten */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-100">
                  Feed Rapi
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Desain Konten</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Penyelarasan visual toko online agar terpercaya, profesional, serta meningkatkan rate followers to buyers.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Feeds Instagram
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Carousels Edukasi
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Banner Tokopedia/Shopee
                </span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Layanan Desain Konten')}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-purple-600"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 4: Editing Foto & Video */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-1 lg:col-span-1">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Wand2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                  Color Grade
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Editing Foto & Video</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Poles footage mentah Anda menjadi konten premium dengan grading warna tajam dan sentuhan ritme audio memikat.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Retouch Kilat
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Color Grading LUTs
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Audio Sync
                </span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Layanan Editing Foto & Video')}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-purple-600"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 5: Konsultasi Kreatif (Wider Card in Mockup) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between md:col-span-1 lg:col-span-2">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                  Konsultasi 1-on-1
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Konsultasi Kreatif</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Konsultasi visual brand mendalam bersama Creative Director kami untuk menyusun moodboard, arah komunikasi, dan strategi campaign bulanan yang terbukti menggerakkan penjualan.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Moodboard Direction
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Audit Visual Brand 1-on-1
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60">
                  Editorial Content Plan
                </span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-purple-700">
                Free 15-min discovery call untuk klien baru
              </span>
              <button
                onClick={() => handleWhatsAppClick('Konsultasi Kreatif 1-on-1')}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-purple-600"
              >
                <span>Pelajari Layanan</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SECTION: Kenapa KREASIKA?
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
            KEUNGGULAN UTAMA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Kenapa KREASIKA?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Alasan mengapa 500+ UMKM dan brand lokal mempercayakan produksi visual komersial mereka kepada studio kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-purple-700 uppercase tracking-wider block">
              KREATIF
            </span>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              Konsep Visual Segar & Tren Terkini
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Desain dan storyline disesuaikan dengan tren algoritma TikTok & Instagram agar brand Anda selalu relevan dan memikat pembeli.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
              <Camera className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">
              PROFESIONAL
            </span>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              Standar Studio & Tim Berpengalaman
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menggunakan lighting sinematik, kamera kelas industri, dan creative director yang paham daya tarik visual e-commerce.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
              MUDAH
            </span>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              Proses Praktis Tanpa Ribet
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cukup kirim sampel produk ke studio kami. Dari moodboard, shooting, hingga editing, semua kami tangani tuntas.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <Calendar className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-purple-700 uppercase tracking-wider block">
              CEPAT
            </span>
            <h3 className="text-sm font-bold text-slate-900 leading-snug">
              Hasil Siap Tayang dalam 3–5 Hari
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pengerjaan gesit dengan sistem revisi transparan, memastikan agenda campaign dan peluncuran produk Anda tepat waktu.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SECTION: Portofolio & Hasil Kampanye
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
              KARYA NYATA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Portofolio & Hasil Kampanye
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'Semua Kategori' },
              { id: 'food', label: 'Makanan & Minuman' },
              { id: 'fashion', label: 'Fashion & Kriya' },
              { id: 'beauty', label: 'Kecantikan & Skincare' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-slate-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-16/10 bg-slate-900 overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Top Left Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-white">
                    {item.tagTop}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{item.location}</span>
                <button
                  onClick={() => handleWhatsAppClick(`Studi Kasus ${item.title}`)}
                  className="font-bold text-slate-900 hover:text-purple-600"
                >
                  Lihat Studi Kasus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. SECTION: Cerita Sukses Pemilik Usaha
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
            DAMPAK NYATA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Cerita Sukses Pemilik Usaha
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dari usaha rumahan hingga menjadi brand terkemuka dengan ribuan transaksi online.
          </p>
        </div>

        {/* Featured Big Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-square shadow-sm">
                <img
                  src="/assets/testi_rina.png"
                  alt="Rina Saraswati - Batik Rina Craft"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-600 ml-1">5.0 / 5.0 Review</span>
              </div>

              <blockquote className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                “Sejak pakai foto produk dan video reels dari KREASIKA, produk kriya kami kelihatan jauh lebih premium dan langsung dipercaya pembeli luar kota. Omzet jualan kami naik 3x lipat dalam 2 bulan!”
              </blockquote>

              <div>
                <p className="text-sm font-extrabold text-slate-950">Rina Saraswati</p>
                <p className="text-xs text-slate-500">
                  Owner & Artisan, Batik Rina Craft (Sleman, DI Yogyakarta)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-left">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">310%</p>
                  <p className="text-[11px] text-slate-500 font-medium">Kenaikan Omzet</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">4.9/5</p>
                  <p className="text-[11px] text-slate-500 font-medium">Review Pembeli</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-950">3 Hari</p>
                  <p className="text-[11px] text-slate-500 font-medium">Waktu Pengerjaan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Review Cards Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              “Dulu bingung mau jualan sambal kemasan fotonya buram terus. Setelah difoto KREASIKA dengan props daun jeruk dan cabe segar, etalase marketplace langsung menarik banget. Iklan ROAS kami tembus 6.2x.”
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-700">
                DF
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Dedy Firmansyah</p>
                <p className="text-[10px] text-slate-500">Owner Sambal Ciamik, Surabaya</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              “Pelayanan super ramah, revisi cepat dan hasilnya beneran rapi. Paket Starter-nya cocok banget buat yang baru mulai bisnis online seperti hijab kami. Timnya sangat mengerti kebutuhan UMKM.”
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold text-xs text-purple-700">
                MA
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Maya Anggraini</p>
                <p className="text-[10px] text-slate-500">Founder Hijab Kinasih, Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SECTION: Paket & Harga Transparan
         ========================================================================= */}
      <section id="harga" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
            INVESTASI TERJANGKAU
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Paket & Harga Transparan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tanpa biaya tersembunyi. Khusus dirancang sesuai kapasitas anggaran UMKM dan brand lokal pemula.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Plan 1: Starter */}
          <div className="rounded-2xl p-7 bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Pemula / Testing
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Paket Starter UMKM</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Cocok untuk toko baru yang butuh visual katalog marketplace standar.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-900">Rp</span>
                  <span className="text-3xl font-extrabold text-slate-900">99</span>
                  <span className="text-xs font-bold text-slate-900">.000</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">/ paket proyek</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>5 Foto Produk</strong> Hi-Res Katalog</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Background Polos (Putih / Netral)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Color Correction & Basic Retouch</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>1x Revisi Ringan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <X className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span className="line-through">Video Promosi Reels</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Paket Starter UMKM (Rp 99.000)')}
                className="w-full py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
              >
                Pilih Paket Starter
              </button>
            </div>
          </div>

          {/* Plan 2: Naik Kelas (Highlighted) */}
          <div className="relative rounded-2xl p-7 bg-white border-2 border-slate-950 shadow-xl flex flex-col justify-between">
            {/* Top Outer Banner */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap uppercase tracking-wider">
              PALING POPULER • BEST SELLER
            </div>

            <div className="space-y-4 pt-1">
              <span className="inline-block text-[10px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                Rekomendasi Utama
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Paket Naik Kelas</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Paket komplit untuk dorong omzet marketplace dan FYP Instagram/TikTok.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-900">Rp</span>
                  <span className="text-3xl font-extrabold text-slate-950">199</span>
                  <span className="text-xs font-bold text-slate-900">.000</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">/ paket proyek</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>12 Foto Produk</strong> (Katalog + Lifestyle)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>1 Video Reels / TikTok</strong> (30-60 detik)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Penataan Properti Studio & Lighting Pro</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Free Script Hook & Sound Trending</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>2x Revisi Garansi</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Paket Naik Kelas (Rp 199.000)')}
                className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors shadow-xs"
              >
                Pilih Paket Naik Kelas
              </button>
            </div>
          </div>

          {/* Plan 3: Ultimate */}
          <div className="rounded-2xl p-7 bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Skala Brand
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Paket Ultimate Brand</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Solusi penuh untuk rebranding total dan kampanye promosi bulanan.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-900">Rp</span>
                  <span className="text-3xl font-extrabold text-slate-900">349</span>
                  <span className="text-xs font-bold text-slate-900">.000</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">/ paket proyek</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>25 Foto Produk</strong> Hi-Res Multi-Angle</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span><strong>3 Video Promosi</strong> Vertikal & Showcase</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Model Lokal Berpengalaman Termasuk</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>1 Jam Sesi Konsultasi Brand Moodboard</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Prioritas Pengerjaan 3 Hari Kerja</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleWhatsAppClick('Paket Ultimate Brand (Rp 349.000)')}
                className="w-full py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
              >
                Pilih Paket Ultimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. SECTION: 4 Langkah Mudah dari Studio ke Penjualan
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-100">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
            PROSES SIMPEL & AMAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            4 Langkah Mudah dari Studio ke Penjualan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tidak perlu repot sewa studio atau kamera mahal. Kami urus semuanya dari awal sampai tuntas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
              <FileText className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
              LANGKAH 01
            </span>
            <h3 className="text-sm font-bold text-slate-900">Pilih Layanan & Konsultasi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diskusikan kebutuhan brand dan paket via WhatsApp. Tim KREASIKA menyusun moodboard referensi visual.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <Truck className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
              LANGKAH 02
            </span>
            <h3 className="text-sm font-bold text-slate-900">Kirim Produk ke Studio</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Kirimkan sampel produk ke studio Semarang. Produk disimpan aman dan siap dikembalikan setelah sesi.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
              <Sliders className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
              LANGKAH 03
            </span>
            <h3 className="text-sm font-bold text-slate-900">Produksi & Revisi Cepat</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sesi shoot lighting profesional dan editing kilat dalam 3–5 hari. Anda mendapatkan preview review awal.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
              <CloudUpload className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
              LANGKAH 04
            </span>
            <h3 className="text-sm font-bold text-slate-900">Terima Aset Siap Tayang</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              File resolusi penuh dikirim via cloud storage terorganisir, siap langsung diunggah ke TikTok, Shopee, & Instagram.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. SECTION: Bottom Navy Call To Action Card
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#141938] text-white p-8 sm:p-12 lg:p-14 shadow-2xl space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
            <span>🚀 MULAI TRANSFORMASI VISUAL BISNIS ANDA</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight max-w-2xl">
            Siap Tingkatkan Nilai Jual Brand Anda Hari Ini?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
            Konsultasikan kebutuhan visual bisnis Anda secara gratis bersama tim kreatif KREASIKA. Dapatkan moodboard acuan dan rekomendasi paket paling pas untuk akselerasi toko online Anda.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => handleWhatsAppClick()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all active:scale-95 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-slate-950" />
              <span>Mulai Sekarang via WhatsApp</span>
            </button>

            <button
              onClick={() => handleWhatsAppClick('Konsultasi Gratis 15 Menit')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 text-slate-300" />
              <span>Konsultasi Gratis 15 Menit</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
