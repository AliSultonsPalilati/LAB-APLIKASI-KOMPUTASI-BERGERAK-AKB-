import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

// --- TIPE DATA UNTUK KONSISTENSI KODE ---
type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

type FontConfig = {
  family: string;
  name: string;
  weight: FontWeight;
};

type Student = {
  nim: string;
  nama: string;
};

// --- DATA & KONFIGURASI FONT (SESUAI PERSYARATAN) ---
// 1. Daftar mahasiswa lengkap dan sudah terurut
const daftarMahasiswa: Student[] = [
  { nim: "105841100119", nama: "Muhammad Yusuf" }, { nim: "105841100122", nama: "Siti Marwa" },
  { nim: "105841100322", nama: "Fajar Eka Alamsyah" }, { nim: "105841100422", nama: "Ferdiansyah" },
  { nim: "105841100622", nama: "Parwati" }, { nim: "105841100722", nama: "Nabila Ismail Matta" },
  { nim: "105841100822", nama: "Nur Milani Hidayah" }, { nim: "105841100921", nama: "Arif Rahman" },
  { nim: "105841101122", nama: "A. Fajar Apriliawan" }, { nim: "105841101222", nama: "Syaripuddin" },
  { nim: "105841101322", nama: "Muhammad Adianto" }, { nim: "105841101522", nama: "Absarmarsal Rizwal Mahua" },
  { nim: "105841101622", nama: "Syawaluddin" }, { nim: "105841101722", nama: "Andi Citra Ayu Lestari" },
  { nim: "105841101822", nama: "Farisan" }, { nim: "105841101922", nama: "Erick Yusuf Kotte" },
  { nim: "105841102222", nama: "Ali Sulton S Palilati" }, { nim: "105841102622", nama: "A. Ikram Mukarram" },
  { nim: "105841102922", nama: "Ahmad Fathir" }, { nim: "105841103122", nama: "Nur Muhammad Ashman" },
  { nim: "105841103322", nama: "Muhammad Faturrachman Iswan" }, { nim: "105841103422", nama: "Nurmisba" },
  { nim: "105841103522", nama: "Alvian Syah Burhani" }, { nim: "105841103622", nama: "Majeri" },
  { nim: "105841103722", nama: "Hamdani" }, { nim: "105841103822", nama: "Muliana" },
  { nim: "105841109219", nama: "Muh. Asdar" }, { nim: "105841109820", nama: "Muh. Ashabul Khahfi" },
];

// 2. Definisi 5 FONT STATIS yang akan digunakan
const fontStatisConfig: FontConfig[] = [
  { family: 'LatoRegular', name: 'Lato', weight: '400' },
  { family: 'RobotoMedium', name: 'Roboto', weight: '500' },
  { family: 'OpenSansRegular', name: 'Open Sans', weight: '400' },
  { family: 'PoppinsBold', name: 'Poppins', weight: '700' },
  { family: 'MerriweatherBold', name: 'Merriweather', weight: '700' },
];

// 3. Definisi 5 FONT VARIABEL yang akan digunakan
const fontVariabelConfig: FontConfig[] = [
  { family: 'MulishVariable', name: 'Mulish', weight: '300' },
  { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' },
  { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' },
  { family: 'RubikVariable', name: 'Rubik', weight: '700' },
  { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

// --- KOMPONEN UTAMA ---
export default function TugasEmpatFinal() {
  const [nimInput, setNimInput] = useState('105841102222');
  const [nimFokus, setNimFokus] = useState('105841102222');

  const dataTampilan = useMemo(() => {
    // Implementasi Aturan Khusus Urutan (Wrapping) dengan Modulo
    const totalMahasiswa = daftarMahasiswa.length;
    const indeksSaatIni = daftarMahasiswa.findIndex(m => m.nim === nimFokus);

    if (indeksSaatIni === -1) {
      return { mahasiswaSebelum: [], mahasiswaSetelah: [], mahasiswaFokus: null };
    }

    const mahasiswaSebelum = Array.from({ length: 5 }).map((_, i) => {
      const indeksTarget = (indeksSaatIni - 5 + i + totalMahasiswa) % totalMahasiswa;
      return daftarMahasiswa[indeksTarget];
    });

    const mahasiswaSetelah = Array.from({ length: 5 }).map((_, i) => {
      const indeksTarget = (indeksSaatIni + 1 + i) % totalMahasiswa;
      return daftarMahasiswa[indeksTarget];
    });

    return {
      mahasiswaSebelum,
      mahasiswaSetelah,
      mahasiswaFokus: daftarMahasiswa[indeksSaatIni],
    };
  }, [nimFokus]);

  const handleCari = () => {
    Keyboard.dismiss();
    if (daftarMahasiswa.some(m => m.nim === nimInput)) {
      setNimFokus(nimInput);
    } else {
      alert(`NIM ${nimInput} tidak ditemukan dalam daftar.`);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.headerTitle}>Tugas 4: Urutan Font Mahasiswa</Text>
      
      {/* Kontrol Pencarian */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputField}
          value={nimInput}
          onChangeText={setNimInput}
          placeholder="Masukkan NIM..."
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleCari}>
          <Text style={styles.buttonText}>Cari NIM</Text>
        </TouchableOpacity>
      </View>

      {/* Menampilkan 5 nama SEBELUMNYA dengan 5 FONT STATIS BERBEDA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Sebelum NIM Fokus (Font Statis)</Text>
        {dataTampilan.mahasiswaSebelum.map((mahasiswa, index) => (
          <View key={mahasiswa.nim} style={styles.cardStatis}>
            <Text style={[styles.nama, { fontFamily: fontStatisConfig[index].family }]}>
              {index + 1}. {mahasiswa.nama}
            </Text>
            <Text style={styles.fontInfo}>{fontStatisConfig[index].name} (Statis)</Text>
          </View>
        ))}
      </View>

      {/* Menampilkan Mahasiswa yang menjadi FOKUS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mahasiswa Fokus</Text>
        <View style={styles.cardFokus}>
          <Text style={[styles.nama, styles.namaFokus]}>
            {dataTampilan.mahasiswaFokus?.nama}
          </Text>
          <Text style={styles.nimFokus}>{dataTampilan.mahasiswaFokus?.nim}</Text>
        </View>
      </View>

      {/* Menampilkan 5 nama SETELAHNYA dengan 5 FONT VARIABEL BERBEDA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Setelah NIM Fokus (Font Variabel)</Text>
        {dataTampilan.mahasiswaSetelah.map((mahasiswa, index) => (
          <View key={mahasiswa.nim} style={styles.cardVariabel}>
            <Text style={[styles.nama, { fontFamily: fontVariabelConfig[index].family, fontWeight: fontVariabelConfig[index].weight }]}>
              {index + 1}. {mahasiswa.nama}
            </Text>
            <Text style={styles.fontInfo}>{fontVariabelConfig[index].name} (Variabel - Wt: {fontVariabelConfig[index].weight})</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// --- STYLESHEET YANG LUgas dan Jelas ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  contentContainer: { padding: 15 },
  headerTitle: { fontSize: 24, fontFamily: 'PoppinsBold', textAlign: 'center', marginBottom: 20, color: '#1c1e21' },
  searchContainer: { flexDirection: 'row', marginBottom: 20 },
  inputField: { flex: 1, borderWidth: 1, borderColor: '#ccd0d5', padding: 10, borderRadius: 8, backgroundColor: 'white' },
  button: { marginLeft: 10, backgroundColor: '#1877f2', padding: 10, borderRadius: 8, justifyContent: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 16, fontFamily: 'RobotoMedium', marginBottom: 10, color: '#606770' },
  cardStatis: { backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#e4e6eb' },
  cardVariabel: { backgroundColor: 'white', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#e4e6eb' },
  cardFokus: { backgroundColor: '#4267b2', padding: 20, borderRadius: 8 },
  nama: { fontSize: 16, color: '#1c1e21' },
  namaFokus: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  nimFokus: { color: '#f0f2f5', fontSize: 14, textAlign: 'center', marginTop: 5 },
  fontInfo: { fontSize: 12, color: '#606770', marginTop: 4, textAlign: 'right' },
});