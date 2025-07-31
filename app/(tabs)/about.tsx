import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tentang Aplikasi Ini</Text>
        <Text style={styles.description}>
          Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah Pemrograman Mobile. Aplikasi ini dibangun menggunakan React Native dengan Expo Router untuk manajemen navigasi.
        </Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fungsi Halaman:</Text>
          <Text style={styles.point}>
            <Text style={styles.pageName}>1. Home:</Text> Menampilkan informasi singkat mengenai Universitas Muhammadiyah Makassar.
          </Text>
          <Text style={styles.point}>
            <Text style={styles.pageName}>2. About:</Text> Berisi penjelasan mengenai aplikasi ini dan fungsionalitas setiap halamannya.
          </Text>
          <Text style={styles.point}>
            <Text style={styles.pageName}>3. Profil:</Text> Menampilkan data diri pengembang aplikasi, termasuk nama, NIM, dan foto profil.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  point: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: '#555',
  },
  pageName: {
    fontWeight: 'bold',
    color: '#005A9C',
  },
});
