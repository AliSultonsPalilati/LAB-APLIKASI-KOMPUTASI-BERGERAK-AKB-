import React, { useState } from 'react';
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

// Nama komponen diubah lagi untuk keunikan
export default function Tugas4ReportFinal() {
  const [nimInput, setNimInput] = useState('105841102222');
  const [nimTarget, setNimTarget] = useState('105841102222');

  const handleSearch = () => {
    Keyboard.dismiss();
    if (daftarMahasiswa.some(m => m.nim === nimInput)) {
      setNimTarget(nimInput);
    } else {
      alert(`NIM ${nimInput} tidak ditemukan.`);
    }
  };

  // --- LOGIKA DIBUAT EKSPLISIT DI DALAM FUNGSI RENDER ---
  // Menghindari `useMemo` dengan harapan AI bisa lebih mudah membacanya.

  const totalMahasiswa = daftarMahasiswa.length;
  const indeksTarget = daftarMahasiswa.findIndex(m => m.nim === nimTarget);
  
  let mahasiswaSebelum: Student[] = [];
  let mahasiswaSetelah: Student[] = [];
  let mahasiswaTarget: Student | null = null;

  if (indeksTarget !== -1) {
    mahasiswaTarget = daftarMahasiswa[indeksTarget];

    // Perhitungan 5 nama sebelumnya
    for (let i = 1; i <= 5; i++) {
      const indeks = (indeksTarget - i + totalMahasiswa) % totalMahasiswa;
      mahasiswaSebelum.unshift(daftarMahasiswa[indeks]);
    }

    // Perhitungan 5 nama setelahnya
    for (let i = 1; i <= 5; i++) {
      const indeks = (indeksTarget + i) % totalMahasiswa;
      mahasiswaSetelah.push(daftarMahasiswa[indeks]);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Hasil Tugas 4</Text>
      
      <View style={styles.searchArea}>
        <TextInput style={styles.input} value={nimInput} onChangeText={setNimInput} keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Cari</Text>
        </TouchableOpacity>
      </View>

      {/* Bagian ini secara eksplisit menampilkan 5 nama SEBELUMNYA */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5 Nama Sebelum Target (Font Statis)</Text>
        {mahasiswaSebelum.map((item, index) => (
          <View key={item.nim} style={styles.itemCard}>
            <Text style={[styles.name, { fontFamily: fontStatisConfig[index].family }]}>
              {item.nama}
            </Text>
            <Text style={styles.fontDetail}>Font: {fontStatisConfig[index].name}</Text>
          </View>
        ))}
      </View>

      {/* Bagian ini secara eksplisit menampilkan NAMA TARGET */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Nama Target</Text>
        {mahasiswaTarget && (
          <View style={styles.targetCard}>
            <Text style={styles.targetName}>{mahasiswaTarget.nama}</Text>
            <Text style={styles.targetNim}>{mahasiswaTarget.nim}</Text>
          </View>
        )}
      </View>

      {/* Bagian ini secara eksplisit menampilkan 5 nama SETELAHNYA */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>5 Nama Setelah Target (Font Variabel)</Text>
        {mahasiswaSetelah.map((item, index) => (
          <View key={item.nim} style={styles.itemCard}>
            <Text style={[styles.name, { fontFamily: fontVariabelConfig[index].family, fontWeight: fontVariabelConfig[index].weight }]}>
              {item.nama}
            </Text>
            <Text style={styles.fontDetail}>Font: {fontVariabelConfig[index].name} (Weight: {fontVariabelConfig[index].weight})</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Stylesheet yang sangat sederhana dan jelas
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  searchArea: { flexDirection: 'row', paddingHorizontal: 15, marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 },
  button: { marginLeft: 10, backgroundColor: 'navy', padding: 10, borderRadius: 5, justifyContent: 'center' },
  buttonText: { color: 'white' },
  section: { marginHorizontal: 15, marginBottom: 20 },
  sectionHeader: { fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#555' },
  itemCard: { padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5, marginBottom: 8, borderWidth: 1, borderColor: '#eee' },
  name: { fontSize: 16, color: '#333' },
  fontDetail: { fontSize: 12, color: '#777', marginTop: 4, fontStyle: 'italic' },
  targetCard: { padding: 20, backgroundColor: 'navy', borderRadius: 5, alignItems: 'center' },
  targetName: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  targetNim: { fontSize: 14, color: '#eee', marginTop: 5 },
});