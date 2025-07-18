import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

// --- DATA DAN KONFIGURASI (Logika tidak diubah) ---
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

type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

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


// --- KOMPONEN UTAMA DENGAN STYLE BARU ---
export default function CreativeFontDisplay() {
  const [nimQuery, setNimQuery] = useState('105841102222');
  const [selectedNim, setSelectedNim] = useState('105841102222');

  const displayData = useMemo(() => {
    const total = daftarMahasiswa.length;
    const currentIndex = daftarMahasiswa.findIndex(m => m.nim === selectedNim);
    if (currentIndex === -1) return { before: [], after: [], current: null };

    const before = Array.from({ length: 5 }, (_, i) => {
      const targetIndex = (currentIndex - (5 - i) + total) % total;
      return daftarMahasiswa[targetIndex];
    });

    const after = Array.from({ length: 5 }, (_, i) => {
      const targetIndex = (currentIndex + i + 1) % total;
      return daftarMahasiswa[targetIndex];
    });
    
    return { before, after, current: daftarMahasiswa[currentIndex] };
  }, [selectedNim]);

  const executeSearch = () => {
    Keyboard.dismiss();
    if (daftarMahasiswa.some(m => m.nim === nimQuery)) {
      setSelectedNim(nimQuery);
    } else {
      alert(`NIM ${nimQuery} tidak ditemukan.`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Bagian Kiri: 5 Nama Sebelumnya (Font Statis) */}
      <View style={styles.sideColumn}>
        <Text style={styles.columnTitle}>Sebelumnya</Text>
        {displayData.before.map((mhs, i) => (
          <View key={mhs.nim} style={styles.staticCard}>
            <Text style={[styles.nameText, { fontFamily: fontStylesBefore[i].family }]}>
              {mhs.nama}
            </Text>
            <Text style={styles.fontInfoText}>{fontStylesBefore[i].name}</Text>
          </View>
        ))}
      </View>

      {/* Bagian Tengah: Mahasiswa Terpilih dan Kontrol */}
      <View style={styles.centerColumn}>
        <View style={styles.mainDisplayCircle}>
          <Text style={styles.mainName} numberOfLines={2}>
            {displayData.current?.nama}
          </Text>
          <Text style={styles.mainNim}>{displayData.current?.nim}</Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.inputField}
            onChangeText={setNimQuery}
            value={nimQuery}
            placeholder="Masukkan NIM"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.searchButton} onPress={executeSearch}>
            <Text style={styles.searchButtonText}>Cari</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bagian Kanan: 5 Nama Setelahnya (Font Variabel) */}
      <View style={styles.sideColumn}>
        <Text style={styles.columnTitle}>Berikutnya</Text>
        {displayData.after.map((mhs, i) => (
          <View key={mhs.nim} style={styles.variableCard}>
            <Text style={[styles.nameText, { fontFamily: fontStylesAfter[i].family, fontWeight: fontStylesAfter[i].weight }]}>
              {mhs.nama}
            </Text>
            <Text style={styles.fontInfoText}>{fontStylesAfter[i].name} (Wt: {fontStylesAfter[i].weight})</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// --- STYLESHEET BARU YANG KREATIF ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#111827', // Latar belakang gelap
    padding: 10,
  },
  sideColumn: {
    flex: 3,
    justifyContent: 'space-around',
    paddingHorizontal: 5,
  },
  centerColumn: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  columnTitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 10,
    fontFamily: 'PoppinsBold',
  },
  staticCard: {
    backgroundColor: '#374151',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6', // Biru
  },
  variableCard: {
    backgroundColor: '#374151',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981', // Hijau
  },
  nameText: {
    color: '#F9FAFB',
    fontSize: 13,
  },
  fontInfoText: {
    color: '#9CA3AF',
    fontSize: 10,
    marginTop: 4,
  },
  mainDisplayCircle: {
    width: 200,
    height: 200,
    borderRadius: 100, // Lingkaran sempurna
    backgroundColor: '#4F46E5', // Ungu
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  mainName: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'MerriweatherBold',
    textAlign: 'center',
  },
  mainNim: {
    color: '#D1D5DB',
    fontSize: 12,
    marginTop: 8,
    fontFamily: 'LatoRegular',
  },
  searchBox: {
    marginTop: 25,
    width: '100%',
  },
  inputField: {
    backgroundColor: '#1F2937',
    color: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  searchButton: {
    backgroundColor: '#F59E0B', // Oranye
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#1F2937',
    fontWeight: 'bold',
    fontSize: 16,
  },
});