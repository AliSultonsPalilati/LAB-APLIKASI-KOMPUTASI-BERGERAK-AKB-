import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

// --- DATA DAN KONFIGURASI ---
const daftarMahasiswa = [
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

// PERBAIKAN: Mendefinisikan tipe spesifik untuk fontWeight
type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

// PERBAIKAN: Menggunakan tipe FontWeight untuk properti weight
type FontConfig = {
  family: string;
  name: string;
  weight: FontWeight;
};

const fontStylesBefore: FontConfig[] = [
  { family: 'LatoRegular', name: 'Lato', weight: '400' }, { family: 'RobotoMedium', name: 'Roboto', weight: '500' },
  { family: 'OpenSansRegular', name: 'Open Sans', weight: '400' }, { family: 'PoppinsBold', name: 'Poppins', weight: '700' },
  { family: 'MerriweatherBold', name: 'Merriweather', weight: '700' },
];

const fontStylesAfter: FontConfig[] = [
  { family: 'MulishVariable', name: 'Mulish', weight: '300' }, { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' },
  { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' }, { family: 'RubikVariable', name: 'Rubik', weight: '700' },
  { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

type Student = {
  nim: string;
  nama: string;
};

type NameEntryCardProps = {
  student: Student;
  fontConfig: FontConfig;
  fontType: 'STATIS' | 'VARIABEL';
};

const NameEntryCard = ({ student, fontConfig, fontType }: NameEntryCardProps) => (
  <View style={styles.cardContainer}>
    <Text style={[
      styles.cardName,
      // Kode di bawah ini sekarang valid karena TypeScript tahu `fontConfig.weight` adalah tipe yang benar.
      { fontFamily: fontConfig.family, fontWeight: fontType === 'VARIABEL' ? fontConfig.weight : 'normal' }
    ]}>
      {student.nama}
    </Text>
    <View style={styles.cardFooter}>
      <Text style={styles.cardFontInfo}>
        {fontConfig.name} • Wt: {fontConfig.weight}
      </Text>
      <Text style={fontType === 'STATIS' ? styles.tagStatic : styles.tagVariable}>
        {fontType}
      </Text>
    </View>
  </View>
);

// --- KOMPONEN UTAMA ---
export default function StudentSequenceDisplay() {
  const [nimQuery, setNimQuery] = useState('105841102222');
  const [selectedNim, setSelectedNim] = useState('105841102222');

  const displayData = useMemo(() => {
    const total = daftarMahasiswa.length;
    const currentIndex = daftarMahasiswa.findIndex(m => m.nim === selectedNim);
    if (currentIndex === -1) return { before: [], after: [], current: null };

    const before = [];
    for (let i = 1; i <= 5; i++) {
      const targetIndex = (currentIndex - i + total) % total;
      before.unshift(daftarMahasiswa[targetIndex]);
    }

    const after = [];
    for (let i = 1; i <= 5; i++) {
      const targetIndex = (currentIndex + i) % total;
      after.push(daftarMahasiswa[targetIndex]);
    }
    
    return { before, after, current: daftarMahasiswa[currentIndex] };
  }, [selectedNim]);

  const executeSearch = () => {
    Keyboard.dismiss();
    const isFound = daftarMahasiswa.some(m => m.nim === nimQuery);
    if (isFound) {
      setSelectedNim(nimQuery);
    } else {
      alert(`NIM ${nimQuery} tidak terdaftar.`);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeading}>Urutan Nama Mahasiswa & Font</Text>
      
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.inputField}
          onChangeText={setNimQuery}
          value={nimQuery}
          placeholder="Cari berdasarkan NIM..."
          keyboardType="number-pad"
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity style={styles.actionButton} onPress={executeSearch}>
          <Text style={styles.actionButtonText}>Cari</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionHeading}>↓ 5 Nama Sebelumnya (Font Statis)</Text>
        {displayData.before.map((mhs, i) => (
          <NameEntryCard key={mhs.nim} student={mhs} fontConfig={fontStylesBefore[i]} fontType="STATIS" />
        ))}
      </View>

      <View style={styles.highlightedEntry}>
        <Text style={styles.highlightedLabel}>NIM Aktif: {displayData.current?.nim}</Text>
        <Text style={styles.highlightedName}>{displayData.current?.nama}</Text>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.sectionHeading}>↑ 5 Nama Berikutnya (Font Variabel)</Text>
        {displayData.after.map((mhs, i) => (
          <NameEntryCard key={mhs.nim} student={mhs} fontConfig={fontStylesAfter[i]} fontType="VARIABEL" />
        ))}
      </View>
    </View>
  );
}

// --- STYLESHEET ---
const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  mainHeading: { fontSize: 22, textAlign: 'center', marginBottom: 20, fontFamily: 'PoppinsBold', color: '#111827' },
  searchWrapper: { flexDirection: 'row', gap: 10, marginBottom: 25 },
  inputField: { flex: 1, height: 46, backgroundColor: '#F9FAFB', borderRadius: 8, paddingHorizontal: 15, fontSize: 15, color: '#1F2937', borderWidth: 1, borderColor: '#D1D5DB' },
  actionButton: { height: 46, backgroundColor: '#10B981', borderRadius: 8, justifyContent: 'center', paddingHorizontal: 20 },
  actionButtonText: { color: 'white', fontSize: 15, fontWeight: '600' },
  listSection: { marginBottom: 15 },
  sectionHeading: { fontSize: 18, fontFamily: 'PoppinsBold', color: '#374151', marginBottom: 10 },
  cardContainer: { backgroundColor: 'white', borderRadius: 10, padding: 15, marginBottom: 10, borderWidth: 1, borderColor: '#E5E7EB' },
  cardName: { fontSize: 18, color: '#111827', marginBottom: 10 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardFontInfo: { fontSize: 12, color: '#6B7280', fontFamily: 'LatoRegular' },
  tagShared: { fontSize: 10, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, fontWeight: 'bold', overflow: 'hidden' },
  tagStatic: { backgroundColor: '#DBEAFE', color: '#1E40AF' },
  tagVariable: { backgroundColor: '#FEE2E2', color: '#B91C1C' },
  highlightedEntry: { marginVertical: 15, padding: 20, backgroundColor: '#1F2937', borderRadius: 12, alignItems: 'center', elevation: 4, shadowColor: '#000' },
  highlightedLabel: { fontSize: 13, color: '#9CA3AF', marginBottom: 6 },
  highlightedName: { fontSize: 22, color: 'white', fontFamily: 'MerriweatherBold', textAlign: 'center' },
});