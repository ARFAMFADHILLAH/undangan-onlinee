# Aiden & Clara Wedding Invitation

Undangan pernikahan digital modern dan elegan yang dibangun dengan **Next.js (App Router)** dan **Tailwind CSS**.

## ✨ Fitur Utama
- **Cover & Splash Overlay**: Pembuka undangan interaktif dengan tombol buka dan musik latar.
- **Background Music**: Pemutaran otomatis lagu *"Beautiful In White (Saxophone Cover)"* dengan tombol kontrol mengambang.
- **Countdown Timer**: Hitung mundur interaktif menuju hari pernikahan.
- **Profil Mempelai**: Perkenalan kedua mempelai dengan foto berkualitas tinggi.
- **Rangkaian Acara**: Jadwal lengkap Akad Nikah dan Resepsi.
- **Kisah Kami (Love Story)**: Linimasa perjalanan cinta dari awal pertemuan hingga hari bahagia.
- **Galeri Foto**: Tampilan foto-foto prewedding dengan transisi modern.
- **RSVP & Buku Tamu**: Formulir konfirmasi kehadiran beserta daftar ucapan dan doa dari tamu.
- **Kado Pernikahan**: Informasi amplop digital / nomor rekening bank.

## 📂 Struktur Folder Proyek
```text
undangan-onlinee/
├── app/                  # Next.js App Router (Halaman & Layout)
│   ├── globals.css       # Pengaturan Styling & Tailwind
│   ├── layout.tsx        # Root Layout Aplikasi
│   └── page.tsx          # Halaman Utama Undangan
├── public/               # Aset Statis
│   ├── audio/            # File Musik Latar (.mp3)
│   └── img/              # Aset Gambar Pendukung
├── .gitignore            # File yang diabaikan Git
├── next.config.ts        # Konfigurasi Next.js
├── package.json          # Daftar Dependensi & Skrip NPM
├── README.md             # Dokumentasi Proyek
└── tsconfig.json         # Konfigurasi TypeScript
```

## 🚀 Memulai (Development)

1. Clone repositori ini:
   ```bash
   git clone <url-repo>
   cd undangan-onlinee
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server lokal:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📦 Build untuk Produksi
```bash
npm run build
npm start
```

## 📄 Hak Cipta (Copyright)
© 2026 Aiden & Clara Wedding Invitation. Hak Cipta Dilindungi Undang-Undang. 
Dibuat dengan penuh cinta untuk perayaan hari istimewa. Dilarang memperbanyak atau mendistribusikan ulang kode sumber tanpa izin tertulis.
