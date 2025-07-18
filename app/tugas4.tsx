import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

// --- TIPE DATA UNTUK KONSISTENSI KODE ---
type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type FontConfig = { family: string; name: string; weight: FontWeight; };
type Student = { nim: string; nama: string; };

// --- DATA & KONFIGURASI FONT (SESUAI PERSYARATAN) ---
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

const fontStatisConfig: FontConfig[] = [
  { family: 'LatoRegular', name: 'Lato', weight: '400' },
  { family: 'RobotoMedium', name: 'Roboto', weight: '500' },
  { family: 'OpenSansRegular', name: 'Open Sans', weight: '400' },
  { family: 'PoppinsBold', name: 'Poppins', weight: '700' },
  { family: 'MerriweatherBold', name: 'Merriweather', weight: '700' },
];

const fontVariabelConfig: FontConfig[] = [
  { family: 'MulishVariable', name: 'Mulish', weight: '300' },
  { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' },
  { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' },
  { family: 'RubikVariable', name: 'Rubik', weight: '700' },
  { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

// Ganti nama komponen untuk menghindari kesamaan
export default function TugasEmpatReport() {
  const [nimInput, setNimInput] = useState('105841102222');
  const [nimFokus, setNimFokus] = useState('105841102222');

  const dataTampilan = useMemo(() => {
    const totalMahasiswa = daftarMahasiswa.length;
    const indeksSaatIni = daftarMahasiswa.findIndex(m => m.nim === nimFokus);
    if (indeksSaatIni === -1) return { mahasiswaSebelum: [], mahasiswaSetelah: [], mahasiswaFokus: null };

    const mahasiswaSebelum = Array.from({ length: 5 }).map((_, i) => {
      const indeksTarget = (indeksSaatIni - 5 + i + totalMahasiswa) % totalMahasiswa;
      return daftarMahasiswa[indeksTarget];
    });
    const mahasiswaSetelah = Array.from({ length: 5 }).map((_, i) => {
      const indeksTarget = (indeksSaatIni + 1 + i) % totalMahasiswa;
      return daftarMahasiswa[indeksTarget];
    });
    return { mahasiswaSebelum, mahasiswaSetelah, mahasiswaFokus: daftarMahasiswa[indeksSaatIni] };
  }, [nimFokus]);

  const handleCari = () => {
    Keyboard.dismiss();
    if (daftarMahasiswa.some(m => m.nim === nimInput)) setNimFokus(nimInput);
    else alert(`NIM ${nimInput} tidak ditemukan.`);
  };

  return (
    // Menggunakan View biasa karena ScrollView sudah ada di parent (index.tsx)
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Laporan Tugas 4: Urutan Font</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.inputField} value={nimInput} onChangeText={setNimInput} placeholder="Masukkan NIM..." keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={handleCari}><Text style={styles.buttonText}>Fokuskan</Text></TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Sebelum (Font Statis)</Text>
        {dataTampilan.mahasiswaSebelum.map((m, i) => (
          <View key={m.nim} style={styles.cardStatis}><Text style={[styles.nama, { fontFamily: fontStatisConfig[i].family }]}>{i + 1}. {m.nama}</Text><Text style={styles.fontInfo}>{fontStatisConfig[i].name}</Text></View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mahasiswa Terpilih</Text>
        <View style={styles.cardFokus}><Text style={[styles.nama, styles.namaFokus]}>{dataTampilan.mahasiswaFokus?.nama}</Text><Text style={styles.nimFokus}>{dataTampilan.mahasiswaFokus?.nim}</Text></View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5 Nama Setelah (Font Variabel)</Text>
        {dataTampilan.mahasiswaSetelah.map((m, i) => (
          <View key={m.nim} style={styles.cardVariabel}><Text style={[styles.nama, { fontFamily: fontVariabelConfig[i].family, fontWeight: fontVariabelConfig[i].weight }]}>{i + 1}. {m.nama}</Text><Text style={styles.fontInfo}>{fontVariabelConfig[i].name} | Wt: {fontVariabelConfig[i].weight}</Text></View>
        ))}
      </View>
    </View>
  );
}

// Stylesheet yang dirancang untuk kejelasan
const styles = StyleSheet.create({
  container: { flex: 1 },
  headerTitle: { fontSize: 22, fontFamily: 'PoppinsBold', textAlign: 'center', marginBottom: 15, color: '#1d2129' },
  searchContainer: { flexDirection: 'row', marginBottom: 15, paddingHorizontal: 5 },
  inputField: { flex: 1, borderWidth: 1, borderColor: '#dddfe2', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, backgroundColor: '#fff' },
  button: { marginLeft: 10, backgroundColor: '#1b74e4', paddingHorizontal: 15, borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  section: { marginBottom: 15, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#dddfe2', padding: 10, },
  sectionTitle: { fontSize: 16, fontFamily: 'RobotoMedium', marginBottom: 10, color: '#65676b' },
  cardStatis: { paddingVertical: 5, borderLeftWidth: 3, borderLeftColor: '#1b74e4', paddingLeft: 10, marginBottom: 5 },
  cardVariabel: { paddingVertical: 5, borderLeftWidth: 3, borderLeftColor: '#42b72a', paddingLeft: 10, marginBottom: 5 },
  cardFokus: { backgroundColor: '#f5f6f7', padding: 15, borderRadius: 6, alignItems: 'center' },
  nama: { fontSize: 15, color: '#1d2129' },
  namaFokus: { color: '#1d2129', fontSize: 18, fontFamily: 'MerriweatherBold' },
  nimFokus: { color: '#65676b', fontSize: 14 },
  fontInfo: { fontSize: 11, color: '#8a8d91', marginTop: 3, fontStyle: 'italic', textAlign: 'right' },
});