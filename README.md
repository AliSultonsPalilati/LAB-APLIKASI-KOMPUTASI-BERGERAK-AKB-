📄 Isi Lengkap README.md:
md
Copy
Edit
# 📱 Tugas Lab - Aplikasi Komputasi Bergerak

Selamat datang di repositori ini! 🎉  
Repositori ini berisi **tugas laboratorium** dari mata kuliah **Aplikasi Komputasi Bergerak** yang dikembangkan menggunakan **React Native + Expo**.

---

## 🧪 Deskripsi Proyek

Proyek ini merupakan hasil pengerjaan tugas-tugas lab dengan menggunakan **Expo Router** sebagai sistem navigasi dan React Native sebagai framework utama pengembangan aplikasi mobile.

Tugas terdiri dari:

### ✅ Tugas 1 – Layout Komponen

- Menampilkan tiga elemen dalam layout horizontal (atau vertikal pada layar kecil)
  - 🔺 Segitiga
  - 📛 Nama lengkap dalam kotak persegi panjang
  - 🎓 NIM dalam bentuk kapsul
- Responsif: Layout otomatis menyesuaikan **ukuran layar (HP vs Laptop/Tablet)**

### ✅ Tugas 2 – Gallery Grid Interaktif

- Menampilkan **9 gambar utama** dalam format **grid 3x3**
- Setiap gambar:
  - 🔁 Bisa berubah menjadi gambar **alternatif**
  - 🔍 Membesar hingga maksimal **2x skala** saat diklik
  - ✨ Animasi menggunakan `Animated.spring` dari React Native
- Termasuk tombol **Reset** untuk mengembalikan semua gambar ke kondisi awal
- Dibuat menggunakan logika `useState`, `Animated.Value`, dan perhitungan `Dimensions` agar responsif

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Install dependency

```bash
npm install
2. Jalankan aplikasi
bash
Copy
Edit
npx expo start
Aplikasi bisa dibuka melalui:

📱 Expo Go di Android/iOS

💻 Android emulator atau iOS simulator

🌐 Web browser

📁 Struktur Folder
yaml
Copy
Edit
.
├── app/
│   ├── index.tsx         ← Navigasi utama antar tugas
│   ├── tugas1.tsx        ← Tugas 1: Layout Komponen
│   └── tugas2.tsx        ← Tugas 2: Gallery Grid Interaktif
├── app/_layout.tsx       ← Setup routing Expo Router
├── README.md             ← File ini
├── package.json
└── ...
🛠️ Teknologi yang Digunakan
React Native

Expo

Expo Router

Animated, Dimensions, ScrollView, dan komponen UI RN

🙋‍♂️ Tentang Pengembang
👨‍🎓 Ali Sulton S Palilati
📚 Mahasiswa Teknik Informatika
🏫 Universitas Muhammadiyah Makassar
🆔 NIM: 105841102222

💬 Lisensi
Proyek ini dibuat untuk keperluan akademik dan tidak untuk digunakan secara komersial tanpa izin.

🌟 Terima Kasih!
Silakan gunakan proyek ini sebagai referensi atau latihan dalam mempelajari pengembangan aplikasi mobile dengan React Native.
Jangan lupa ⭐ repo ini jika kamu terbantu!

yaml
Copy
Edit

---

### 💾 Cara Simpan:
1. Buka VS Code atau editor teks.
2. Buat file baru bernama `README.md` (huruf besar kecil sesuai).
3. Paste seluruh isi di atas ke file tersebut.
4. Simpan, dan commit ke repositori GitHub kamu.

Kalau kamu ingin saya kirimkan file ini dalam bentuk `.md` untuk langsung diunduh, tinggal bilang saja
