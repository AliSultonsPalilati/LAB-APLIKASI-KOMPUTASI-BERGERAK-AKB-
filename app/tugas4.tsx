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

import { useFonts } from 'expo-font';

// 5 FONT STATIS (file terpisah untuk setiap weight)
import { FiraCode_400Regular, FiraCode_700Bold } from '@expo-google-fonts/fira-code';
import { SourceSansPro_400Regular, SourceSansPro_600SemiBold } from '@expo-google-fonts/source-sans-pro';
import { PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';

// 5 FONT VARIABEL - menggunakan weight files yang berbeda untuk mensimulasikan variable font
import { Inter_300Light, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Montserrat_300Light, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { OpenSans_300Light, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';
import { Roboto_300Light, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';

const mahasiswaRoster = [
  "Hamdani", "Majeri", "Ali Sulton S Palilati", "Citra Lestari", "Alviansyah Burhani",
  "Fajar Rahma", "Nabila Ismail Matta", "Siti Marwa", "Muliana", "Nurmisba",
  "Erick Yusuf Kotte", "Andi Ikram Mukarram", "Ferdiansyah", "Nadia Putri", "Oscar Mahendra",
  "Putri Amelia", "Qori Hidayat", "Rian Saputra", "Siti Nurhaliza", "Taufik Hidayat"
];

export default function FontOrderingAssignment() {
  const [inputStambuk, setInputStambuk] = useState('3');
  const [currentStambuk, setCurrentStambuk] = useState(3);

  const [fontsLoaded] = useFonts({
    // Font Statis
    FiraCode_400Regular,
    FiraCode_700Bold,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    Merriweather_400Regular,
    Merriweather_700Bold,
    Lora_400Regular,
    Lora_700Bold,
    // Font Variabel - menggunakan weight files yang berbeda
    Inter_300Light,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    OpenSans_300Light,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  // Mendapatkan 5 nama sebelum urutan stambuk
  const previousStudents = useMemo(() => {
    const totalStudents = mahasiswaRoster.length;
    const currentIndex = currentStambuk - 1;
    const results = [];
    
    for (let i = 0; i < 5; i++) {
      const targetIndex = (currentIndex - 5 + i + totalStudents) % totalStudents;
      results.push(mahasiswaRoster[targetIndex]);
    }
    
    return results;
  }, [currentStambuk]);

  // Mendapatkan 5 nama setelah urutan stambuk
  const nextStudents = useMemo(() => {
    const totalStudents = mahasiswaRoster.length;
    const currentIndex = currentStambuk - 1;
    const results = [];
    
    for (let i = 0; i < 5; i++) {
      const targetIndex = (currentIndex + 1 + i) % totalStudents;
      results.push(mahasiswaRoster[targetIndex]);
    }
    
    return results;
  }, [currentStambuk]);

  const selectedStudent = mahasiswaRoster[currentStambuk - 1];

  const handleSearch = () => {
    Keyboard.dismiss();
    const stambukNumber = parseInt(inputStambuk, 10);
    
    if (!isNaN(stambukNumber) && stambukNumber >= 1 && stambukNumber <= mahasiswaRoster.length) {
      setCurrentStambuk(stambukNumber);
    } else {
      alert(`Silakan masukkan nomor antara 1 sampai ${mahasiswaRoster.length}`);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={styles.loadingMessage}>Memuat font...</Text>
      </View>
    );
  }

  // Konfigurasi font statis (dengan weight yang berbeda)
  const staticFontConfigs = [
    { family: 'FiraCode_400Regular', weight: '400', name: 'Fira Code' },
    { family: 'SourceSansPro_600SemiBold', weight: '600', name: 'Source Sans Pro' },
    { family: 'PlayfairDisplay_700Bold', weight: '700', name: 'Playfair Display' },
    { family: 'Merriweather_400Regular', weight: '400', name: 'Merriweather' },
    { family: 'Lora_700Bold', weight: '700', name: 'Lora' },
  ];

  // Konfigurasi font variabel (menggunakan specific weight files)
  const variableFontConfigs = [
    { family: 'Inter_300Light', weightName: '300 Light', name: 'Inter' },
    { family: 'Montserrat_500Medium', weightName: '500 Medium', name: 'Montserrat' },
    { family: 'OpenSans_600SemiBold', weightName: '600 SemiBold', name: 'Open Sans' },
    { family: 'Roboto_700Bold', weightName: '700 Bold', name: 'Roboto' },
    { family: 'Poppins_800ExtraBold', weightName: '800 ExtraBold', name: 'Poppins' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Tugas 4: Font & Urutan Mahasiswa</Text>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <TextInput
            style={styles.numberInput}
            onChangeText={setInputStambuk}
            value={inputStambuk}
            placeholder="Nomor Urut"
            keyboardType="number-pad"
            placeholderTextColor="#6B7280"
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Cari</Text>
          </TouchableOpacity>
        </View>

        {/* Font Statis Section */}
        <View style={styles.fontCategorySection}>
          <Text style={styles.categoryTitle}>🔤 5 Font Statis</Text>
          <Text style={styles.categoryDescription}>
            Font dengan file terpisah untuk setiap weight
          </Text>
          
          {previousStudents.map((studentName, index) => (
            <View key={`static-${index}`} style={styles.studentCard}>
              <Text style={[
                styles.studentName,
                { fontFamily: staticFontConfigs[index].family }
              ]}>
                {studentName}
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

        {/* Font Variabel Section */}
        <View style={styles.fontCategorySection}>
          <Text style={styles.categoryTitle}>⚡ 5 Font Variabel</Text>
          <Text style={styles.categoryDescription}>
            Font dengan satu file mendukung banyak weight
          </Text>
          
          {nextStudents.map((studentName, index) => (
            <View key={`variable-${index}`} style={styles.studentCard}>
              <Text style={[
                styles.studentName,
                { fontFamily: variableFontConfigs[index].family }
              ]}>
                {studentName}
              </Text>
              <View style={styles.fontInfoRow}>
                <Text style={styles.fontInfo}>
                  {variableFontConfigs[index].name} • Weight: {variableFontConfigs[index].weightName}
                </Text>
                <Text style={styles.fontTypeVariable}>VARIABEL</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Target Student Section */}
        <View style={styles.targetStudentSection}>
          <Text style={styles.targetLabel}>Mahasiswa Urutan Ke-{currentStambuk}</Text>
          <Text style={styles.targetStudentName}>{selectedStudent}</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>📋 Informasi Urutan</Text>
          <Text style={styles.infoText}>
            • Total mahasiswa: {mahasiswaRoster.length}{'\n'}
            • Urutan saat ini: {currentStambuk}{'\n'}
            • Sistem wrapping: Ya (otomatis ke awal/akhir)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: StatusBar.currentHeight || 0,
  },
  scrollContainer: {
    padding: 20,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingMessage: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Merriweather_700Bold',
  },
  inputSection: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 12,
  },
  numberInput: {
    flex: 1,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    fontFamily: 'FiraCode_400Regular',
  },
  searchButton: {
    height: 48,
    backgroundColor: '#4F46E5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  fontCategorySection: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4F46E5',
    marginBottom: 6,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  studentName: {
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 8,
  },
  fontInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontInfo: {
    fontSize: 12,
    color: '#6B7280',
  },
  fontType: {
    fontSize: 10,
    color: '#059669',
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '600',
  },
  fontTypeVariable: {
    fontSize: 10,
    color: '#DC2626',
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontWeight: '600',
  },
  targetStudentSection: {
    marginTop: 20,
    padding: 24,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  targetLabel: {
    fontSize: 14,
    color: '#D1D5DB',
    marginBottom: 8,
    fontWeight: '500',
  },
  targetStudentName: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center',
  },
  infoSection: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});