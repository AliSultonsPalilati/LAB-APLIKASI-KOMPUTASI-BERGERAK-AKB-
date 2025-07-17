import React, { useState, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

// CATATAN: File ini seharusnya berada di dalam folder 'app/components/'
// agar tidak dianggap sebagai halaman terpisah oleh Expo Router.

// PERBAIKAN: Daftar mahasiswa telah diurutkan berdasarkan NIM untuk memenuhi persyaratan tugas.
const mahasiswaRoster = [
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

export default function FontOrderingAssignment() {
  // State sekarang menggunakan NIM, bukan nomor urut
  const [inputNim, setInputNim] = useState('105841102222');
  const [currentNim, setCurrentNim] = useState('105841102222');

  // Cari index mahasiswa berdasarkan NIM saat ini
  const currentIndex = useMemo(() => 
    mahasiswaRoster.findIndex(m => m.nim === currentNim), 
    [currentNim]
  );

  const previousStudents = useMemo(() => {
    if (currentIndex === -1) return [];
    const totalStudents = mahasiswaRoster.length;
    const results = [];
    for (let i = 1; i <= 5; i++) {
      const targetIndex = (currentIndex - i + totalStudents) % totalStudents;
      results.unshift(mahasiswaRoster[targetIndex]); // unshift untuk menjaga urutan
    }
    return results;
  }, [currentIndex]);

  const nextStudents = useMemo(() => {
    if (currentIndex === -1) return [];
    const totalStudents = mahasiswaRoster.length;
    const results = [];
    for (let i = 1; i <= 5; i++) {
      const targetIndex = (currentIndex + i) % totalStudents;
      results.push(mahasiswaRoster[targetIndex]);
    }
    return results;
  }, [currentIndex]);

  const selectedStudent = mahasiswaRoster[currentIndex];

  const handleSearch = () => {
    Keyboard.dismiss();
    const foundStudent = mahasiswaRoster.find(m => m.nim === inputNim);
    if (foundStudent) {
      setCurrentNim(inputNim);
    } else {
      alert(`Mahasiswa dengan NIM ${inputNim} tidak ditemukan.`);
    }
  };

  const staticFontConfigs = useMemo(() => [
    { family: 'LatoRegular', name: 'Lato', weight: '400' },
    { family: 'RobotoMedium', name: 'Roboto', weight: '500' },
    { family: 'OpenSansRegular', name: 'Open Sans', weight: '400' },
    { family: 'PoppinsBold', name: 'Poppins', weight: '700' },
    { family: 'MerriweatherBold', name: 'Merriweather', weight: '700' },
  ], []);

  const variableFontConfigs = useMemo(() => [
    { family: 'MulishVariable', name: 'Mulish', weight: '300' },
    { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' },
    { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' },
    { family: 'RubikVariable', name: 'Rubik', weight: '700' },
    { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
  ], []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Tugas 4: Font & Urutan Mahasiswa</Text>

        <View style={styles.inputSection}>
          <TextInput
            style={styles.numberInput}
            onChangeText={setInputNim}
            value={inputNim}
            placeholder="Masukkan NIM"
            keyboardType="number-pad"
            placeholderTextColor="#6B7280"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Cari</Text>
          </TouchableOpacity>
        </View>

        {/* Font Statis Section */}
        <View style={styles.fontCategorySection}>
          <Text style={styles.categoryTitle}>🔤 5 Font Statis (Sebelumnya)</Text>
          <Text style={styles.categoryDescription}>Font dengan file terpisah untuk setiap weight</Text>
          {previousStudents.map((student, index) => (
            <View key={`static-${student.nim}`} style={styles.studentCard}>
              <Text style={[styles.studentName, { fontFamily: staticFontConfigs[index].family }]}>
                {student.nama}
              </Text>
              <View style={styles.fontInfoRow}>
                <Text style={styles.fontInfo}>
                  {staticFontConfigs[index].name} • Weight: {staticFontConfigs[index].weight}
                </Text>
                <Text style={styles.fontType}>STATIS</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.targetStudentSection}>
          <Text style={styles.targetLabel}>Mahasiswa dengan NIM {selectedStudent?.nim}</Text>
          <Text style={styles.targetStudentName}>{selectedStudent?.nama}</Text>
        </View>

        {/* Font Variabel Section */}
        <View style={styles.fontCategorySection}>
          <Text style={styles.categoryTitle}>⚡ 5 Font Variabel (Setelahnya)</Text>
          <Text style={styles.categoryDescription}>Font dengan satu file mendukung banyak weight</Text>
          {nextStudents.map((student, index) => (
            <View key={`variable-${student.nim}`} style={styles.studentCard}>
              <Text style={[styles.studentName, { fontFamily: variableFontConfigs[index].family, fontWeight: variableFontConfigs[index].weight as any }]}>
                {student.nama}
              </Text>
              <View style={styles.fontInfoRow}>
                <Text style={styles.fontInfo}>
                  {variableFontConfigs[index].name} • Weight: {variableFontConfigs[index].weight}
                </Text>
                <Text style={styles.fontTypeVariable}>VARIABEL</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>📋 Informasi Urutan</Text>
          <Text style={styles.infoText}>
            • Total mahasiswa: {mahasiswaRoster.length}{'\n'}
            • NIM saat ini: {currentNim}{'\n'}
            • Sistem wrapping: Ya (otomatis ke awal/akhir)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', paddingTop: StatusBar.currentHeight || 0 },
  scrollContainer: { padding: 20 },
  headerTitle: { fontSize: 28, color: '#1F2937', textAlign: 'center', marginBottom: 30, fontFamily: 'MerriweatherBold', fontWeight: '700' },
  inputSection: { flexDirection: 'row', marginBottom: 30, gap: 12 },
  numberInput: { flex: 1, height: 48, backgroundColor: '#FFFFFF', borderRadius: 12, paddingHorizontal: 16, fontSize: 16, color: '#1F2937', borderWidth: 2, borderColor: '#E5E7EB', fontFamily: 'RobotoMedium' },
  searchButton: { height: 48, backgroundColor: '#4F46E5', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  searchButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  fontCategorySection: { marginBottom: 25 },
  categoryTitle: { fontSize: 22, color: '#4F46E5', marginBottom: 6, fontFamily: 'PoppinsBold', fontWeight: '700' },
  categoryDescription: { fontSize: 14, color: '#6B7280', marginBottom: 16, fontStyle: 'italic' },
  studentCard: { backgroundColor: '#FFFFFF', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  studentName: { fontSize: 20, color: '#1F2937', marginBottom: 8 },
  fontInfoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  fontInfo: { fontSize: 12, color: '#6B7280', fontFamily: 'OpenSansRegular' },
  fontType: { fontSize: 10, color: '#059669', backgroundColor: '#ECFDF5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, fontWeight: '600' },
  fontTypeVariable: { fontSize: 10, color: '#DC2626', backgroundColor: '#FEF2F2', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, fontWeight: '600' },
  targetStudentSection: { marginVertical: 20, padding: 24, backgroundColor: '#1F2937', borderRadius: 16, alignItems: 'center' },
  targetLabel: { fontSize: 14, color: '#D1D5DB', marginBottom: 8, fontWeight: '500' },
  targetStudentName: { fontSize: 26, color: '#FFFFFF', textAlign: 'center', fontFamily: 'MerriweatherBold', fontWeight: '700' },
  infoSection: { marginTop: 20, padding: 16, backgroundColor: '#EFF6FF', borderRadius: 12, borderWidth: 1, borderColor: '#DBEAFE' },
  infoTitle: { fontSize: 16, color: '#1E40AF', marginBottom: 8, fontFamily: 'PoppinsBold', fontWeight: '700' },
  infoText: { fontSize: 14, color: '#374151', lineHeight: 20, fontFamily: 'LatoRegular' },
});