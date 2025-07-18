import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TugasAkhir() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.headerTitle, { fontFamily: 'PoppinsBold' }]}>
          Final Project Showcase
        </Text>
        <Text style={styles.headerSubtitle}>
          Referensi NIM: 105841102222 (Ali Sulton S Palilati)
        </Text>

        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>--- 5 Nama Sebelum (Font Statis) ---</Text>
        
        {/* 5 NAMA SEBELUM DENGAN 5 FONT STATIS BERBEDA */}
        <Text style={[styles.nameCard, { fontFamily: 'LatoRegular' }]}>
          Absarmarsal Rizwal Mahua{'\n'}(105841101522)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'RobotoMedium' }]}>
          Syawaluddin{'\n'}(105841101622)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'OpenSansRegular' }]}>
          Andi Citra Ayu Lestari{'\n'}(105841101722)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'MerriweatherBold' }]}>
          Farisan{'\n'}(105841101822)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'PoppinsBold' }]}>
          Erick Yusuf Kotte{'\n'}(105841101922)
        </Text>

        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>--- 5 Nama Setelah (Font Variabel) ---</Text>

        {/* 5 NAMA SETELAH DENGAN 5 FONT VARIABEL BERBEDA */}
        <Text style={[styles.nameCard, { fontFamily: 'MulishVariable', fontWeight: '300' }]}>
          A. Ikram Mukarram{'\n'}(105841102622)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'NunitoSansVariable', fontWeight: '400' }]}>
          Ahmad Fathir{'\n'}(105841102922)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'WorkSansVariable', fontWeight: '500' }]}>
          Nur Muhammad Ashman{'\n'}(105841103122)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'RubikVariable', fontWeight: '700' }]}>
          Muhammad Faturrachman Iswan{'\n'}(105841103322)
        </Text>
        <Text style={[styles.nameCard, { fontFamily: 'OswaldVariable', fontWeight: '900' }]}>
          Nurmisba{'\n'}(105841103422)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F3F4F6',
  },
  container: { 
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  headerTitle: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: { 
    fontSize: 14, 
    color: '#6B7280',
    textAlign: 'center', 
  },
  nameCard: {
    fontSize: 20,
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    lineHeight: 30,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#D1D5DB',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B5563',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 20,
  }
});