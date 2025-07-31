import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Tentang Aplikasi</Text>
          <Text style={styles.headerSubtitle}>
            Dibangun dengan React Native & Expo
          </Text>
        </View>

        <View style={styles.card}>
          <InfoItem
            icon="appstore-o"
            title="Tujuan Aplikasi"
            description="Aplikasi ini dirancang dan dikembangkan sebagai bagian dari pemenuhan tugas mata kuliah Pemrograman Mobile."
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Fungsi Setiap Halaman</Text>
          <InfoItem
            icon="home"
            title="Halaman Utama"
            description="Menampilkan informasi singkat dan menarik mengenai Universitas Muhammadiyah Makassar."
            isListItem
          />
          <InfoItem
            icon="infocirlceo"
            title="Tentang Aplikasi"
            description="Memberikan penjelasan mengenai teknologi yang digunakan dan fungsionalitas setiap halaman."
            isListItem
          />
          <InfoItem
            icon="user"
            title="Profil Pengembang"
            description="Menampilkan data diri pengembang aplikasi, termasuk nama, NIM, dan foto profil."
            isListItem
          />
           <InfoItem
            icon="book"
            title="Halaman Tugas"
            description="Berisi kumpulan semua tugas yang telah dikerjakan selama perkuliahan."
            isListItem
            isLastItem
          />
        </View>
        
        <View style={styles.footer}>
            <Text style={styles.footerText}>Versi 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const InfoItem = ({ icon, title, description, isListItem = false, isLastItem = false }: { icon: any, title: string, description: string, isListItem?: boolean, isLastItem?: boolean }) => (
  <View style={[styles.infoItem, isListItem && styles.listItem, isLastItem && styles.lastListItem]}>
    <AntDesign name={icon} size={24} color="#1d4ed8" style={styles.icon} />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef2ff',
  },
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#312e81',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#4338ca',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#4338ca',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#312e81',
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2ff',
  },
  lastListItem: {
      borderBottomWidth: 0,
  },
  icon: {
    marginRight: 15,
    marginTop: 5,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3730a3',
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
  footer: {
      marginTop: 20,
      alignItems: 'center',
  },
  footerText: {
      fontSize: 14,
      color: '#6b7280',
  }
});
