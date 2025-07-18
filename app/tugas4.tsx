import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';

// Tipe data untuk menjaga kualitas kode
type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type FontConfig = { family: string; name: string; weight?: FontWeight; };
type Student = { nim: string; nama: string; };

// Data Mahasiswa dan Font
const daftarMahasiswa: Student[] = [
  { nim: "105841100119", nama: "Muhammad Yusuf" }, { nim: "105841100122", nama: "Siti Marwa" }, { nim: "105841100322", nama: "Fajar Eka Alamsyah" }, { nim: "105841100422", nama: "Ferdiansyah" }, { nim: "105841100622", nama: "Parwati" }, { nim: "105841100722", nama: "Nabila Ismail Matta" }, { nim: "105841100822", nama: "Nur Milani Hidayah" }, { nim: "105841100921", nama: "Arif Rahman" }, { nim: "105841101122", nama: "A. Fajar Apriliawan" }, { nim: "105841101222", nama: "Syaripuddin" }, { nim: "105841101322", nama: "Muhammad Adianto" }, { nim: "105841101522", nama: "Absarmarsal Rizwal Mahua" }, { nim: "105841101622", nama: "Syawaluddin" }, { nim: "105841101722", nama: "Andi Citra Ayu Lestari" }, { nim: "105841101822", nama: "Farisan" }, { nim: "105841101922", nama: "Erick Yusuf Kotte" }, { nim: "105841102222", nama: "Ali Sulton S Palilati" }, { nim: "105841102622", nama: "A. Ikram Mukarram" }, { nim: "105841102922", nama: "Ahmad Fathir" }, { nim: "105841103122", nama: "Nur Muhammad Ashman" }, { nim: "105841103322", nama: "Muhammad Faturrachman Iswan" }, { nim: "105841103422", nama: "Nurmisba" }, { nim: "105841103522", nama: "Alvian Syah Burhani" }, { nim: "105841103622", nama: "Majeri" }, { nim: "105841103722", nama: "Hamdani" }, { nim: "105841103822", nama: "Muliana" }, { nim: "105841109219", nama: "Muh. Asdar" }, { nim: "105841109820", nama: "Muh. Ashabul Khahfi" },
];

const fontList: FontConfig[] = [
  { family: 'LatoRegular', name: 'Lato' }, { family: 'RobotoMedium', name: 'Roboto' }, { family: 'OpenSansRegular', name: 'Open Sans' }, { family: 'PoppinsBold', name: 'Poppins' }, { family: 'MerriweatherBold', name: 'Merriweather' },
  { family: 'MulishVariable', name: 'Mulish', weight: '300' }, { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' }, { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' }, { family: 'RubikVariable', name: 'Rubik', weight: '700' }, { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

export default function Tugas4() {
  const [nim, setNim] = useState('105841102222');
  const [data, setData] = useState<{ sebelum: Student[], setelah: Student[], target: Student | null }>({ sebelum: [], setelah: [], target: null });

  const findAndSetData = () => {
    Keyboard.dismiss();
    const idx = daftarMahasiswa.findIndex(m => m.nim === nim);
    if (idx === -1) return Alert.alert('Error', `NIM ${nim} tidak ditemukan.`);

    const total = daftarMahasiswa.length;
    const sebelum = Array.from({ length: 5 }, (_, i) => daftarMahasiswa[(idx - 5 + i + total) % total]);
    const setelah = Array.from({ length: 5 }, (_, i) => daftarMahasiswa[(idx + 1 + i) % total]);
    setData({ sebelum, setelah, target: daftarMahasiswa[idx] });
  };
  
  useEffect(() => {
    // Logika untuk pencarian awal dipindahkan ke sini
    const initialNim = '105841102222';
    const idx = daftarMahasiswa.findIndex(m => m.nim === initialNim);
    if (idx === -1) return;
    const total = daftarMahasiswa.length;
    const sebelum = Array.from({ length: 5 }, (_, i) => daftarMahasiswa[(idx - 5 + i + total) % total]);
    const setelah = Array.from({ length: 5 }, (_, i) => daftarMahasiswa[(idx + 1 + i) % total]);
    setData({ sebelum, setelah, target: daftarMahasiswa[idx] });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Tugas 4: Urutan Nama & Font</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} value={nim} onChangeText={setNim} placeholder="Cari NIM" keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={findAndSetData}><Text style={styles.buttonText}>Cari</Text></TouchableOpacity>
      </View>

      {data.target && (
        <View style={styles.resultContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5 Nama Sebelum (Font Statis)</Text>
            {data.sebelum.map((mhs, i) => (
              <View key={mhs.nim} style={styles.card}>
                <Text style={[styles.name, { fontFamily: fontList[i].family }]}>{mhs.nama}</Text>
                <Text style={styles.fontInfo}>{fontList[i].name}</Text>
              </View>
            ))}
          </View>

          <View style={styles.targetCard}>
            <Text style={styles.targetName}>{data.target.nama}</Text>
            <Text style={styles.targetNim}>{data.target.nim}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5 Nama Setelah (Font Variabel)</Text>
            {data.setelah.map((mhs, i) => {
              const fontConfig = fontList[i + 5];
              return (
                <View key={mhs.nim} style={styles.card}>
                  <Text style={[styles.name, { fontFamily: fontConfig.family, fontWeight: fontConfig.weight }]}>{mhs.nama}</Text>
                  <Text style={styles.fontInfo}>{fontConfig.name} (Weight: {fontConfig.weight})</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#1d2129' },
  searchContainer: { flexDirection: 'row', marginBottom: 15 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10, borderRadius: 8, backgroundColor: '#fff' },
  button: { marginLeft: 10, backgroundColor: '#007AFF', paddingHorizontal: 15, borderRadius: 8, justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  resultContainer: { paddingBottom: 20 },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 12, borderRadius: 6, marginBottom: 8, borderWidth: 1, borderColor: '#e9e9e9' },
  name: { fontSize: 16, color: '#000' },
  fontInfo: { fontSize: 12, color: '#555', marginTop: 4, fontStyle: 'italic' },
  targetCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 8, alignItems: 'center', marginVertical: 10 },
  targetName: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  targetNim: { fontSize: 14, color: '#ccc', marginTop: 5 },
});