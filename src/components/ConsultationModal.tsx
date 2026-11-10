import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    const message = `Halo Kreativa Studio!%0A%0ASaya ingin konsultasi:%0A• Nama: ${encodeURIComponent(name || '-')}%0A• No WhatsApp: ${encodeURIComponent(whatsapp || '-')}%0A• Catatan: ${encodeURIComponent(notes || '-')}`;

    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-slate-950 text-white flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold">Hubungi Kreativa Studio</h3>
            <p className="text-xs text-slate-400">Konsultasikan kebutuhan visual brand Anda.</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSent ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Pesan Terkirim</h4>
            <p className="text-xs text-slate-600">WhatsApp terbuka untuk melanjutkan chat dengan tim kami.</p>
            <button
              onClick={() => {
                setIsSent(false);
                onClose();
              }}
              className="mt-3 px-5 py-2 rounded-full text-xs font-bold bg-slate-950 text-white hover:bg-slate-800"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Nama Lengkap</label>
              <input
                type="text"
                required
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Nomor WhatsApp</label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-slate-900 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Kebutuhan Proyek</label>
              <textarea
                rows={3}
                placeholder="Ceritakan singkat produk atau jenis layanan yang diinginkan..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-1 focus:ring-slate-900 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
