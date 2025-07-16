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
  Keyboard
} from 'react-native';

// 1. Impor Font dari Google Fonts
// Impor hook 'useFonts' untuk memuat font ke dalam aplikasi
import { useFonts } from 'expo-font';

// Impor 5 Font Statis (dengan weight spesifik)
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from '@expo-google-fonts/lato';
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_400Regular_Italic,
} from '@expo-google-fonts/open-sans';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

// Impor 5 Font Variabel
import { Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';
import { Manrope_400Regular, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { WorkSans_400Regular, WorkSans_900Black } from '@expo-google-fonts/work-sans';
import { Syne_400Regular, Syne_800ExtraBold } from '@expo-google-fonts/syne';

// Daftar nama mahasiswa untuk demonstrasi
const studentNames = [
  "Hamdani", "Majeri ", "Citra Lestari", "ALviansyah Burhani", "Fajar Rahma",
  "Nabila Ismail Matta", "Siti Marwa", "Muliana", "Nurmisba", "Erick Yusuf Kotte",
  "Andi Ikram Mukarram", "Ferdiansyah", "Ali Sulton S Palilati", "Nadia Putri", "Oscar Mahendra",
  "Putri Amelia", "Qori Hidayat", "Rian Saputra", "Siti Nurhaliza", "Taufik Hidayat"
];

// Tipe untuk hasil kalkulasi nama
type DisplayNames = {
  before: string[];
  target: string | null;
  after: string[];
};

// Fungsi untuk mendapatkan nama sebelum dan sesudah berdasarkan urutan
const getSurroundingNames = (stambuk: number): DisplayNames => {
  const totalNames = studentNames.length;
  // Pastikan stambuk berada dalam rentang yang valid
  if (stambuk < 1 || stambuk > totalNames) {
    return { before: [], target: null, after: [] };
  }

  const targetIndex = stambuk - 1;
  const targetName = studentNames[targetIndex];
  const beforeNames: string[] = [];
  const afterNames: string[] = [];

  // Ambil 5 nama SEBELUM stambuk (dengan aturan khusus)
  for (let i = 1; i <= 5; i++) {
    const currentIndex = targetIndex - i;
    // Logika 'wrap-around' untuk indeks negatif
    const wrappedIndex = (currentIndex % totalNames + totalNames) % totalNames;
    beforeNames.unshift(studentNames[wrappedIndex]); // unshift agar urutan benar
  }

  // Ambil 5 nama SETELAH stambuk
  for (let i = 1; i <= 5; i++) {
    const currentIndex = targetIndex + i;
    // Logika 'wrap-around' untuk indeks yang melebihi panjang array
    const wrappedIndex = currentIndex % totalNames;
    afterNames.push(studentNames[wrappedIndex]);
  }

  return { before: beforeNames, target: targetName, after: afterNames };
};


export default function Tugas4Screen() {
  // State untuk menyimpan nomor urut stambuk
  const [stambukNumber, setStambukNumber] = useState(3);
  const [inputValue, setInputValue] = useState('3');

  // Memuat semua font yang diimpor
  const [fontsLoaded] = useFonts({
    // Statis
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
    Lato_300Light, Lato_400Regular, Lato_700Bold,
    Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_900Black,
    OpenSans_400Regular, OpenSans_700Bold, OpenSans_400Regular_Italic,
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold,
    // Variabel
    Inter_400Regular, Inter_900Black,
    Manrope_400Regular, Manrope_800ExtraBold,
    NunitoSans_400Regular, NunitoSans_700Bold,
    WorkSans_400Regular, WorkSans_900Black,
    Syne_400Regular, Syne_800ExtraBold,
  });

  // Kalkulasi nama hanya dijalankan kembali jika stambukNumber berubah
  const displayedNames = useMemo(() => getSurroundingNames(stambukNumber), [stambukNumber]);

  const handleUpdateStambuk = () => {
    Keyboard.dismiss();
    const newStambuk = parseInt(inputValue, 10);
    if (!isNaN(newStambuk) && newStambuk > 0 && newStambuk <= studentNames.length) {
      setStambukNumber(newStambuk);
    } else {
      alert(`Masukkan nomor urut antara 1 dan ${studentNames.length}`);
    }
  };

  // Tampilkan loading indicator sampai semua font berhasil dimuat
  if (!fontsLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Memuat Font...</Text>
      </View>
    );
  }

  // Gabungkan semua nama untuk ditampilkan dalam satu list

  // Map nama ke font yang sesuai
  const staticFontFamilies = [
    'Poppins_400Regular', 'OpenSans_400Regular', 'Lato_400Regular', 'Montserrat_400Regular', 'Roboto_400Regular'
  ];
  const variableFontFamilies = [
    'Syne_400Regular', 'WorkSans_400Regular', 'NunitoSans_400Regular', 'Manrope_400Regular', 'Inter_400Regular'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerTitle}>Tugas 4: Font & Looping Nama</Text>
        <Text style={styles.headerSubtitle}>Daftar Nama Berdasarkan Stambuk</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setInputValue}
            value={inputValue}
            placeholder="Masukkan No. Urut Stambuk"
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateStambuk}>
            <Text style={styles.buttonText}>Tampilkan</Text>
          </TouchableOpacity>
        </View>

        {/* --- Bagian Font Statis --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎨 5 Font Statis</Text>
          {displayedNames.before.map((name, index) => (
            <Text key={`static-before-${index}`} style={[styles.nameText, { fontFamily: staticFontFamilies[index] }]}>
              {name}
            </Text>
          ))}
          {displayedNames.target && (
            <Text style={[styles.nameText, styles.targetName, { fontFamily: 'Roboto_700Bold' }]}>
              ➔ {displayedNames.target} (No. {stambukNumber})
            </Text>
          )}
          {displayedNames.after.map((name, index) => (
            <Text key={`static-after-${index}`} style={[styles.nameText, { fontFamily: staticFontFamilies[index] }]}>
              {name}
            </Text>
          ))}
        </View>

        {/* --- Bagian Font Variabel --- */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>✒️ 5 Font Variabel</Text>
          {displayedNames.before.map((name, index) => (
            <Text key={`var-before-${index}`} style={[styles.nameText, { fontFamily: variableFontFamilies[index] }]}>
              {name}
            </Text>
          ))}
          {displayedNames.target && (
            <Text style={[styles.nameText, styles.targetName, { fontFamily: 'Inter_900Black' }]}>
              ➔ {displayedNames.target} (No. {stambukNumber})
            </Text>
          )}
          {displayedNames.after.map((name, index) => (
            <Text key={`var-after-${index}`} style={[styles.nameText, { fontFamily: variableFontFamilies[index] }]}>
              {name}
            </Text>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// StyleSheet untuk semua styling komponen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat_900Black',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    fontFamily: 'Inter_400Regular',
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
    paddingBottom: 8,
  },
  nameText: {
    fontSize: 18,
    color: '#444',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  targetName: {
    fontSize: 20,
    color: '#FFFFFF',
    backgroundColor: '#007AFF',
    fontWeight: 'bold', // fontWeight akan berfungsi baik pada font variabel
  },
});