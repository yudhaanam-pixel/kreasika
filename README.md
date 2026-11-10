# KREASIKA — Website Visual & Multimedia UMKM

Proyek website resmi **KREASIKA** yang dibangun menggunakan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS v4**. Desain dibuat 100% presisi mengikuti mockup Figma.

---

## 🚀 Panduan Menjalankan di Visual Studio Code (VS Code)

### 1. Prasyarat
Pastikan Anda sudah menginstal **Node.js** (versi 18 ke atas disarankan) dan **npm** di komputer Anda.
- Unduh Node.js: [https://nodejs.org](https://nodejs.org)

---

### 2. Buka Folder di VS Code
1. Unduh / Clone repository ini ke komputer Anda.
2. Buka aplikasi **Visual Studio Code**.
3. Klik menu **File** > **Open Folder...** (atau shortcut `Ctrl + K` `Ctrl + O` di Windows / `Cmd + O` di Mac).
4. Pilih folder proyek ini.

---

### 3. Buka Terminal di VS Code
1. Tekan tombol shortcut keyboard:
   - **Windows / Linux**: `Ctrl + ~` (atau `Ctrl + ` ` `)
   - **macOS**: `Cmd + ~`
2. Atau klik menu bar atas: **Terminal** > **New Terminal**.

---

### 4. Instal Dependencies
Jalankan perintah berikut di terminal VS Code:
```bash
npm install
```
*Tunggu hingga proses instalasi paket selesai (membuat folder `node_modules`).*

---

### 5. Jalankan Local Development Server
Setelah instalasi selesai, jalankan perintah:
```bash
npm run dev
```

Terminal akan menampilkan link lokal, contohnya:
```text
  VITE v8.3.0  ready in 250 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Buka browser Anda dan akses:
👉 **[http://localhost:3000](http://localhost:3000)** (atau port yang tertera di terminal).

---

## 🛠️ Perintah Script yang Tersedia

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server lokal pengembangan (live reload). |
| `npm run build` | Melakukan build produksi ke folder `/dist`. |
| `npm run preview` | Meninjau hasil build produksi secara lokal. |
| `npm run lint` | Memeriksa tipe data TypeScript (`tsc --noEmit`). |

---

## 📁 Struktur Direktori Proyek

```text
├── .vscode/               # Pengaturan otomatis VS Code & rekomendasi ekstensi
│   ├── extensions.json
│   └── settings.json
├── public/                # Aset statis gambar yang digunakan di website
│   └── assets/
│       ├── hero_photo_full.png
│       ├── porto_kopi.png
│       ├── porto_batik.png
│       ├── porto_alura.png
│       └── testi_rina.png
├── src/
│   ├── App.tsx            # Komponen utama halaman KREASIKA
│   ├── index.css          # Konfigurasi Tailwind CSS (@import "tailwindcss")
│   └── main.tsx           # Entry point aplikasi React
├── index.html             # Dokumen HTML utama & font Google (Plus Jakarta Sans)
├── package.json           # Dependensi & script perintah
├── tsconfig.json          # Konfigurasi TypeScript
├── vite.config.ts         # Konfigurasi Vite & Tailwind CSS v4
└── README.md              # Dokumentasi ini
```

---

## 🧩 Ekstensi VS Code yang Direkomendasikan
Saat membuka folder ini di VS Code, Anda akan melihat notifikasi untuk menginstal ekstensi berikut:
1. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — Autocomplete class Tailwind.
2. **ESLint** (`dbaeumer.vscode-eslint`) — Deteksi error kode secara real-time.
3. **Prettier** (`esbenp.prettier-vscode`) — Format kode otomatis saat simpan.

---

## 📦 Deployment ke Hosting (Vercel / Netlify / GitHub Pages)
Jika ingin mempublikasikan website secara online:
1. Hubungkan repository ke [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
