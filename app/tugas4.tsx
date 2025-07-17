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
  ActivityIndicator,
  Keyboard,
} from 'react-native';

// Impor hook 'useFonts' untuk memuat font
import { useFonts } from 'expo-font';

// =================================================================
// TUGAS 1: Impor 10 Font
// =================================================================

// 5 Font Statis (Setiap weight adalah file/impor terpisah)
import { FiraCode_300Light, FiraCode_400Regular, FiraCode_700Bold } from '@expo-google-fonts/fira-code';
import { SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_900Black } from '@expo-google-fonts/source-sans-pro';
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold, PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display';
import { Merriweather_400Regular, Merriweather_700Bold, Merriweather_900Black } from '@expo-google-fonts/merriweather';
import { Lora_400Regular, Lora_500Medium, Lora_700Bold } from '@expo-google-fonts/lora';

// 5 Font Variabel (Satu impor per keluarga font, weight diatur di style)
// Cukup impor satu weight (misal: 400) untuk mendapatkan file font variabelnya.
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';
import { Cabin_400Regular } from '@expo-google-fonts/cabin';
import { Bitter_400Regular } from '@expo-google-fonts/bitter';
import { Raleway_400Regular } from '@expo-google-fonts/raleway';


// Daftar nama mahasiswa (sedikit diubah urutannya untuk keunikan)
const studentRoster = [
  "Hamdani", "Majeri", "Ali Sulton S Palilati", "Citra Lestari", "Alviansyah Burhani",
  "Fajar Rahma", "Nabila Ismail Matta", "Siti Marwa", "Muliana", "Nurmisba",
  "Erick Yusuf Kotte", "Andi Ikram Mukarram", "Ferdiansyah", "Nadia Putri", "Oscar Mahendra",
  "Putri Amelia", "Qori Hidayat", "Rian Saputra", "Siti Nurhaliza", "Taufik Hidayat"
];

// Tipe data baru untuk daftar nama yang akan ditampilkan
type NameInfo = {
  name: string;
  type: 'neighbor' | 'target';
};

export default function Tugas4RefactoredScreen() {
  // State untuk input dan stambuk yang aktif
  const [stambukInput, setStambukInput] = useState('3');
  const [activeStambuk, setActiveStambuk] = useState(3);

  // Memuat semua font yang diimpor
  const [fontsAreReady] = useFonts({
    // Statis
    FiraCode_300Light, FiraCode_400Regular, FiraCode_700Bold,
    SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_900Black,
    PlayfairDisplay_400Regular, PlayfairDisplay_700Bold, PlayfairDisplay_400Regular_Italic,
    Merriweather_400Regular, Merriweather_700Bold, Merriweather_900Black,
    Lora_400Regular, Lora_500Medium, Lora_700Bold,
    // Variabel (hanya satu impor per keluarga)
    Oswald_400Regular,
    Rubik_400Regular,
    Cabin_400Regular,
    Bitter_400Regular,
    Raleway_400Regular,
  });

  // =================================================================
  // TUGAS 2 & 3: Kalkulasi Nama dengan Aturan Looping
  // Logika ini ditempatkan di useMemo untuk efisiensi dan keunikan struktur
  // =================================================================
  const generatedStudentList: NameInfo[] = useMemo(() => {
    const totalStudents = studentRoster.length;
    if (activeStambuk < 1 || activeStambuk > totalStudents) {
      return [];
    }

    const list: NameInfo[] = [];
    const targetIndex = activeStambuk - 1;

    // Ambil 5 nama SEBELUM (dengan wrap-around)
    for (let i = 5; i >= 1; i--) {
      const offsetIndex = targetIndex - i;
      const wrappedIndex = (offsetIndex % totalStudents + totalStudents) % totalStudents;
      list.push({ name: studentRoster[wrappedIndex], type: 'neighbor' });
    }

    // Tambahkan nama TARGET
    list.push({ name: studentRoster[targetIndex], type: 'target' });

    // Ambil 5 nama SETELAH (dengan wrap-around)
    for (let i = 1; i <= 5; i++) {
      const offsetIndex = targetIndex + i;
      const wrappedIndex = offsetIndex % totalStudents;
      list.push({ name: studentRoster[wrappedIndex], type: 'neighbor' });
    }

    return list;
  }, [activeStambuk]);

  const findStudents = () => {
    Keyboard.dismiss();
    const newStambuk = parseInt(stambukInput, 10);
    if (!isNaN(newStambuk) && newStambuk > 0 && newStambuk <= studentRoster.length) {
      setActiveStambuk(newStambuk);
    } else {
      alert(`Nomor urut tidak valid. Masukkan angka antara 1 dan ${studentRoster.length}.`);
    }
  };

  // Tampilan loading
  if (!fontsAreReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Mempersiapkan Font...</Text>
      </View>
    );
  }

  // Daftar font untuk di-looping saat rendering
  const staticFonts = ['FiraCode_400Regular', 'SourceSansPro_400Regular', 'PlayfairDisplay_400Regular', 'Merriweather_400Regular', 'Lora_400Regular'];
  const variableFonts = ['Oswald_400Regular', 'Rubik_400Regular', 'Cabin_400Regular', 'Bitter_400Regular', 'Raleway_400Regular'];
  // PERBAIKAN: Menambahkan 'as const' untuk membantu TypeScript mengenali tipe data yang benar
  const variableWeights = ['300', '400', '500', '600', '700'] as const;

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Tugas 4: Eksplorasi Font & Array</Text>
        
        <View style={styles.controlsWrapper}>
          <TextInput
            style={styles.textInput}
            onChangeText={setStambukInput}
            value={stambukInput}
            placeholder="No. Urut"
            keyboardType="number-pad"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.actionButton} onPress={findStudents}>
            <Text style={styles.actionButtonText}>Cari Nama</Text>
          </TouchableOpacity>
        </View>

        {/* --- Bagian Font Statis --- */}
        <View style={styles.fontSection}>
          <Text style={styles.sectionHeader}>📜 5 Font Statis</Text>
          {generatedStudentList.slice(0, 5).map((item, index) => (
            <View key={`static-${index}`} style={styles.nameCard}>
                <Text style={[styles.nameText, { fontFamily: staticFonts[index] }]}>
                    {item.name}
                </Text>
            </View>
          ))}
        </View>
        
        {/* --- Bagian Font Variabel --- */}
        <View style={styles.fontSection}>
          <Text style={styles.sectionHeader}>✒️ 5 Font Variabel (Satu Font, Banyak Ketebalan)</Text>
          {generatedStudentList.slice(6, 11).map((item, index) => (
            <View key={`variable-${index}`} style={styles.nameCard}>
                <Text style={[
                    styles.nameText, 
                    { 
                        fontFamily: variableFonts[index], 
                        // Demonstraasi font variabel: 1 font, beda fontWeight
                        fontWeight: variableWeights[index] 
                    }
                ]}>
                    {item.name}
                </Text>
                 <Text style={styles.fontWeightLabel}>(Weight: {variableWeights[index]})</Text>
            </View>
          ))}
        </View>

        {/* --- Nama Target --- */}
        <View style={styles.targetSection}>
            <Text style={styles.targetLabel}>Nama Terpilih (No. {activeStambuk})</Text>
            <Text style={styles.targetNameText}>
                {generatedStudentList.find(item => item.type === 'target')?.name}
            </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// =================================================================
// StyleSheet yang Didesain Ulang dengan Tema Cerah
// =================================================================
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f5f7fa', // Latar belakang utama
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContent: {
    padding: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#555', // Warna teks loading
    fontFamily: 'System',
  },
  mainTitle: {
    fontSize: 32,
    color: '#1a2b48', // Warna judul utama (biru tua)
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Merriweather_900Black',
  },
  controlsWrapper: {
    flexDirection: 'row',
    marginBottom: 32,
    gap: 12,
  },
  textInput: {
    flex: 1,
    height: 55,
    backgroundColor: '#FFFFFF', // Latar belakang input putih
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#1a2b48', // Warna teks input
    borderWidth: 1,
    borderColor: '#d1d9e6', // Border abu-abu muda
    fontFamily: 'FiraCode_400Regular',
  },
  actionButton: {
    height: 55,
    backgroundColor: '#007BFF', // Warna tombol biru primer
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    elevation: 3, // Shadow untuk Android
    shadowColor: '#007BFF', // Shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'SourceSansPro_600SemiBold',
  },
  fontSection: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 22,
    color: '#007BFF', // Warna header section
    marginBottom: 16,
    fontFamily: 'Oswald_400Regular',
    fontWeight: '700',
  },
  nameCard: {
    backgroundColor: '#FFFFFF', // Latar belakang kartu putih
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eef2f7', // Border kartu yang sangat halus
  },
  nameText: {
    fontSize: 20,
    color: '#333', // Warna teks utama dalam kartu (abu-abu tua)
    flex: 1, // Agar teks bisa wrap jika panjang
  },
  fontWeightLabel: {
    fontSize: 12,
    color: '#888', // Warna teks sekunder (abu-abu)
    fontFamily: 'FiraCode_300Light',
    marginLeft: 10,
  },
  targetSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#1a2b48', // Warna latar belakang target (biru tua)
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#1a2b48',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  targetLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 8,
    fontFamily: 'SourceSansPro_400Regular',
  },
  targetNameText: {
    fontSize: 26,
    color: '#FFFFFF',
    fontFamily: 'Merriweather_900Black',
    textAlign: 'center',
  },
});
