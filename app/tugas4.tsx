import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

// --- TIPE DATA UNTUK KONSISTENSI KODE ---
type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type FontConfig = { family: string; name: string; weight?: FontWeight; };
type Student = { nim: string; nama: string; };

// --- DATA MAHASISWA (SESUAI PERSYARATAN) ---
const daftarMahasiswa: Student[] = [
  { nim: "105841100119", nama: "Muhammad Yusuf" },
  { nim: "105841100122", nama: "Siti Marwa" },
  { nim: "105841100322", nama: "Fajar Eka Alamsyah" },
  { nim: "105841100422", nama: "Ferdiansyah" },
  { nim: "105841100622", nama: "Parwati" },
  { nim: "105841100722", nama: "Nabila Ismail Matta" },
  { nim: "105841100822", nama: "Nur Milani Hidayah" },
  { nim: "105841100921", nama: "Arif Rahman" },
  { nim: "105841101122", nama: "A. Fajar Apriliawan" },
  { nim: "105841101222", nama: "Syaripuddin" },
  { nim: "105841101322", nama: "Muhammad Adianto" },
  { nim: "105841101522", nama: "Absarmarsal Rizwal Mahua" },
  { nim: "105841101622", nama: "Syawaluddin" },
  { nim: "105841101722", nama: "Andi Citra Ayu Lestari" },
  { nim: "105841101822", nama: "Farisan" },
  { nim: "105841101922", nama: "Erick Yusuf Kotte" },
  { nim: "105841102222", nama: "Ali Sulton S Palilati" },
  { nim: "105841102622", nama: "A. Ikram Mukarram" },
  { nim: "105841102922", nama: "Ahmad Fathir" },
  { nim: "105841103122", nama: "Nur Muhammad Ashman" },
  { nim: "105841103322", nama: "Muhammad Faturrachman Iswan" },
  { nim: "105841103422", nama: "Nurmisba" },
  { nim: "105841103522", nama: "Alvian Syah Burhani" },
  { nim: "105841103622", nama: "Majeri" },
  { nim: "105841103722", nama: "Hamdani" },
  { nim: "105841103822", nama: "Muliana" },
  { nim: "105841109219", nama: "Muh. Asdar" },
  { nim: "105841109820", nama: "Muh. Ashabul Khahfi" },
];

// --- KONFIGURASI 10 FONT (5 STATIS + 5 VARIABEL) ---
const allFonts: FontConfig[] = [
  // 5 FONT STATIS
  { family: 'LatoRegular', name: 'Lato Regular' },
  { family: 'RobotoMedium', name: 'Roboto Medium' },
  { family: 'OpenSansRegular', name: 'Open Sans Regular' },
  { family: 'PoppinsBold', name: 'Poppins Bold' },
  { family: 'MerriweatherBold', name: 'Merriweather Bold' },
  
  // 5 FONT VARIABEL
  { family: 'MulishVariable', name: 'Mulish Variable', weight: '300' },
  { family: 'NunitoSansVariable', name: 'Nunito Sans Variable', weight: '500' },
  { family: 'WorkSansVariable', name: 'Work Sans Variable', weight: '600' },
  { family: 'RubikVariable', name: 'Rubik Variable', weight: '700' },
  { family: 'OswaldVariable', name: 'Oswald Variable', weight: '700' },
];

export default function Tugas4() {
  const [nimInput, setNimInput] = useState('105841102222');
  const [searchResult, setSearchResult] = useState<{
    target: Student;
    sebelum: Student[];
    setelah: Student[];
  } | null>(null);

  const handleSearch = React.useCallback(() => {
    Keyboard.dismiss();
    
    // Cari mahasiswa berdasarkan NIM
    const targetIndex = daftarMahasiswa.findIndex(m => m.nim === nimInput);
    
    if (targetIndex === -1) {
      Alert.alert('Error', `NIM ${nimInput} tidak ditemukan dalam daftar mahasiswa.`);
      return;
    }

    const totalMahasiswa = daftarMahasiswa.length;
    const targetMahasiswa = daftarMahasiswa[targetIndex];

    // Ambil 5 nama SEBELUM target (dengan wrapping)
    const mahasiswaSebelum: Student[] = [];
    for (let i = 1; i <= 5; i++) {
      const index = (targetIndex - i + totalMahasiswa) % totalMahasiswa;
      mahasiswaSebelum.unshift(daftarMahasiswa[index]);
    }

    // Ambil 5 nama SETELAH target (dengan wrapping)
    const mahasiswaSetelah: Student[] = [];
    for (let i = 1; i <= 5; i++) {
      const index = (targetIndex + i) % totalMahasiswa;
      mahasiswaSetelah.push(daftarMahasiswa[index]);
    }

    setSearchResult({
      target: targetMahasiswa,
      sebelum: mahasiswaSebelum,
      setelah: mahasiswaSetelah,
    });
  }, [nimInput]);

  // Jalankan pencarian pertama kali dengan NIM default
  React.useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.mainHeader}>🎯 TUGAS 4 - FONT SHOWCASE</Text>
      <Text style={styles.subHeader}>Menampilkan 10 Nama dengan 10 Font Berbeda</Text>
      
      {/* INPUT PENCARIAN */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={nimInput}
          onChangeText={setNimInput}
          placeholder="Masukkan NIM..."
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>🔍 CARI</Text>
        </TouchableOpacity>
      </View>

      {/* HASIL PENCARIAN */}
      {searchResult && (
        <View style={styles.resultsContainer}>
          
          {/* BAGIAN 1: 5 NAMA SEBELUM TARGET */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>📋 5 NAMA SEBELUM TARGET</Text>
            <Text style={styles.sectionSubtitle}>Menggunakan Font Statis (5 Font)</Text>
            
            {searchResult.sebelum.map((mahasiswa, index) => (
              <View key={`sebelum-${mahasiswa.nim}`} style={styles.nameCard}>
                <Text 
                  style={[
                    styles.nameText, 
                    { fontFamily: allFonts[index].family }
                  ]}
                >
                  {index + 1}. {mahasiswa.nama}
                </Text>
                <Text style={styles.nimText}>NIM: {mahasiswa.nim}</Text>
                <Text style={styles.fontInfo}>Font: {allFonts[index].name}</Text>
              </View>
            ))}
          </View>

          {/* BAGIAN 2: NAMA TARGET */}
          <View style={styles.targetCard}>
            <Text style={styles.targetTitle}>🎯 NAMA TARGET</Text>
            <Text style={styles.targetName}>{searchResult.target.nama}</Text>
            <Text style={styles.targetNim}>NIM: {searchResult.target.nim}</Text>
          </View>

          {/* BAGIAN 3: 5 NAMA SETELAH TARGET */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>📋 5 NAMA SETELAH TARGET</Text>
            <Text style={styles.sectionSubtitle}>Menggunakan Font Variabel (5 Font)</Text>
            
            {searchResult.setelah.map((mahasiswa, index) => {
              const fontIndex = index + 5; // Ambil font ke-6 sampai ke-10
              return (
                <View key={`setelah-${mahasiswa.nim}`} style={styles.nameCard}>
                  <Text 
                    style={[
                      styles.nameText, 
                      { 
                        fontFamily: allFonts[fontIndex].family,
                        fontWeight: allFonts[fontIndex].weight || 'normal'
                      }
                    ]}
                  >
                    {index + 1}. {mahasiswa.nama}
                  </Text>
                  <Text style={styles.nimText}>NIM: {mahasiswa.nim}</Text>
                  <Text style={styles.fontInfo}>
                    Font: {allFonts[fontIndex].name}
                    {allFonts[fontIndex].weight && ` (Weight: ${allFonts[fontIndex].weight})`}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

// --- STYLESHEET YANG LEBIH MENARIK ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e293b',
    marginBottom: 8,
    marginTop: 10,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 20,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#1e293b',
  },
  searchButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    paddingHorizontal: 16,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  nameCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  nameText: {
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 4,
    fontWeight: '600',
  },
  nimText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  fontInfo: {
    fontSize: 12,
    color: '#3b82f6',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  targetCard: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  targetTitle: {
    fontSize: 16,
    color: '#f1f5f9',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  targetName: {
    fontSize: 22,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  targetNim: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#10b981',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#f0fdf4',
    marginBottom: 4,
    paddingLeft: 8,
  },
});