import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert, SafeAreaView } from 'react-native';

type FontWeight = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type FontConfig = { family: string; name: string; weight?: FontWeight };
type Student = { nim: string; nama: string };

const daftarMhs: Student[] = [
  { nim: "105841100119", nama: "Muhammad Yusuf" }, { nim: "105841100122", nama: "Siti Marwa" }, { nim: "105841100322", nama: "Fajar Eka Alamsyah" }, { nim: "105841100422", nama: "Ferdiansyah" }, { nim: "105841100622", nama: "Parwati" },
  { nim: "105841100722", nama: "Nabila Ismail Matta" }, { nim: "105841100822", nama: "Nur Milani Hidayah" }, { nim: "105841100921", nama: "Arif Rahman" }, { nim: "105841101122", nama: "A. Fajar Apriliawan" }, { nim: "105841101222", nama: "Syaripuddin" },
  { nim: "105841101322", nama: "Muhammad Adianto" }, { nim: "105841101522", nama: "Absarmarsal Rizwal Mahua" }, { nim: "105841101622", nama: "Syawaluddin" }, { nim: "105841101722", nama: "Andi Citra Ayu Lestari" }, { nim: "105841101822", nama: "Farisan" },
  { nim: "105841101922", nama: "Erick Yusuf Kotte" }, { nim: "105841102222", nama: "Ali Sulton S Palilati" }, { nim: "105841102622", nama: "A. Ikram Mukarram" }, { nim: "105841102922", nama: "Ahmad Fathir" }, { nim: "105841103122", nama: "Nur Muhammad Ashman" },
  { nim: "105841103322", nama: "Muhammad Faturrachman Iswan" }, { nim: "105841103422", nama: "Nurmisba" }, { nim: "105841103522", nama: "Alvian Syah Burhani" }, { nim: "105841103622", nama: "Majeri" }, { nim: "105841103722", nama: "Hamdani" },
  { nim: "105841103822", nama: "Muliana" }, { nim: "105841109219", nama: "Muh. Asdar" }, { nim: "105841109820", nama: "Muh. Ashabul Khahfi" },
];

const fontList: FontConfig[] = [
  // 5 Font Statis
  { family: 'LatoRegular', name: 'Lato' },
  { family: 'RobotoMedium', name: 'Roboto' },
  { family: 'OpenSansRegular', name: 'Open Sans' },
  { family: 'PoppinsBold', name: 'Poppins' },
  { family: 'MerriweatherBold', name: 'Merriweather' },
  // 5 Font Variabel
  { family: 'MulishVariable', name: 'Mulish', weight: '300' },
  { family: 'NunitoSansVariable', name: 'Nunito Sans', weight: '500' },
  { family: 'WorkSansVariable', name: 'Work Sans', weight: '600' },
  { family: 'RubikVariable', name: 'Rubik', weight: '700' },
  { family: 'OswaldVariable', name: 'Oswald', weight: '700' },
];

export default function App() {
  const [nim, setNim] = useState("105841102222");
  const [hasil, setHasil] = useState<{ sebelum: Student[]; setelah: Student[]; target: Student | null }>({ sebelum: [], setelah: [], target: null });

  const prosesPencarian = (inputNim: string) => {
    Keyboard.dismiss();
    const index = daftarMhs.findIndex(mhs => mhs.nim === inputNim);
    const total = daftarMhs.length;

    if (index === -1) {
      Alert.alert('Tidak Ditemukan', `NIM ${inputNim} tidak ada dalam daftar.`);
      return;
    }

    const sebelum = Array.from({ length: 5 }, (_, i) => daftarMhs[(index - 5 + i + total) % total]);
    const setelah = Array.from({ length: 5 }, (_, i) => daftarMhs[(index + 1 + i) % total]);

    setHasil({ sebelum, setelah, target: daftarMhs[index] });
  };

  useEffect(() => {
    prosesPencarian(nim);
  }, [nim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>📘 Daftar Mahasiswa & Eksperimen Font</Text>

        <View style={styles.inputArea}>
          <TextInput
            placeholder="Masukkan NIM"
            value={nim}
            keyboardType="numeric"
            onChangeText={setNim}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => prosesPencarian(nim)} style={styles.button}>
            <Text style={styles.buttonText}>Cari</Text>
          </TouchableOpacity>
        </View>

        {hasil.target && (
          <>
            <Text style={styles.sectionTitle}>5 Nama Sebelum (Font Statis)</Text>
            {hasil.sebelum.map((mhs, i) => (
              <View key={mhs.nim} style={styles.card}>
                <Text style={[styles.nameText, { fontFamily: fontList[i].family }]}>{mhs.nama}</Text>
                <Text style={styles.fontLabel}>{fontList[i].name}</Text>
              </View>
            ))}

            <View style={styles.targetBox}>
              <Text style={styles.targetText}>{hasil.target.nama}</Text>
              <Text style={styles.targetSub}>{hasil.target.nim}</Text>
            </View>

            <Text style={styles.sectionTitle}>5 Nama Setelah (Font Variable)</Text>
            {hasil.setelah.map((mhs, i) => {
              const font = fontList[i + 5];
              return (
                <View key={mhs.nim} style={styles.card}>
                  <Text style={[styles.nameText, { fontFamily: font.family, fontWeight: font.weight }]}>{mhs.nama}</Text>
                  <Text style={styles.fontLabel}>{font.name} (Weight: {font.weight})</Text>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#eef2f7' },
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#1f2937', marginBottom: 20 },
  inputArea: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#cbd5e0', backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  button: { backgroundColor: '#2563eb', paddingHorizontal: 16, justifyContent: 'center', marginLeft: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#374151', marginVertical: 12 },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 8, elevation: 2, borderColor: '#ddd', borderWidth: 1 },
  nameText: { fontSize: 16, color: '#111827' },
  fontLabel: { fontSize: 12, fontStyle: 'italic', color: '#6b7280', marginTop: 4 },
  targetBox: { backgroundColor: '#1e3a8a', padding: 20, borderRadius: 10, marginVertical: 20, alignItems: 'center' },
  targetText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  targetSub: { color: '#cbd5e1', fontSize: 14 },
});
